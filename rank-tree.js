// rank-tree.js - NEW D3.js Version for Perfect Layouts

document.addEventListener("DOMContentLoaded", () => {
  const rankId = new URLSearchParams(location.search).get("id");
  if (!rankId || !window.RANK_TREES || !window.RANK_TREES[rankId]) {
    document.getElementById("rankTreeMount").innerHTML = "<p>לא נמצא נתוני עץ לדרגה זו.</p>";
    return;
  }

  const treeDataRaw = window.RANK_TREES[rankId];
  renderD3Tree(treeDataRaw, "#rankTreeMount");
});

function renderD3Tree(treeData, containerId) {
  const container = d3.select(containerId);
  container.html(""); // ניקוי

  // 1. המרת מבנה הנתונים השטוח למבנה היררכי (עץ)
  // זה קריטי כדי ש-D3 יבין מי אבא של מי
  const dataMap = {};
  treeData.nodes.forEach(node => { dataMap[node.id] = { ...node, children: [] }; });

  let rootNode = null;
  treeData.nodes.forEach(node => {
    if (node.generation === 0) {
      rootNode = dataMap[node.id];
    } else {
      // מציאת ההורה לפי הקשרים
      const edgeToParent = treeData.edges.find(e => e.to === node.id);
      if (edgeToParent && dataMap[edgeToParent.from]) {
        dataMap[edgeToParent.from].children.push(dataMap[node.id]);
      }
    }
  });

  if (!rootNode) {
    container.html("<p>שגיאה במבנה העץ (לא נמצא שורש).</p>");
    return;
  }

  // 2. הגדרות גודל ופריסה
  const nodeWidth = 110;
  const nodeHeight = 80;
  const horizontalGap = 30;
  const verticalGap = 80;

  // יצירת היררכיה של D3
  const root = d3.hierarchy(rootNode);

  // הגדרת פריסת העץ (Tree Layout)
  const treeLayout = d3.tree()
    .nodeSize([nodeWidth + horizontalGap, nodeHeight + verticalGap])
    .separation((a, b) => (a.parent == b.parent ? 1 : 1.1)); // רווח קטן בין אחים, גדול יותר בין בני דודים

  treeLayout(root);

  // חישוב גבולות הציור (כדי למרכז)
  let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
  root.each(d => {
    if (d.x < x0) x0 = d.x;
    if (d.x > x1) x1 = d.x;
    if (d.y < y0) y0 = d.y;
    if (d.y > y1) y1 = d.y;
  });

  const svgWidth = x1 - x0 + nodeWidth * 2;
  const svgHeight = y1 - y0 + nodeHeight * 2;
  
  // 3. יצירת ה-SVG
  const svg = container.append("svg")
    .attr("width", "100%")
    .attr("height", svgHeight + 50) // תוספת גובה להערות
    // viewBox הופך את ה-SVG לרספונסיבי (מתאים את עצמו לגודל המסך/הדפסה)
    .attr("viewBox", `${x0 - nodeWidth/2} ${y0 - nodeHeight/2 - 30} ${svgWidth} ${svgHeight + 50}`)
    .attr("preserveAspectRatio", "xMidYMid meet")
    .classed("tree-svg-content", true);

  const g = svg.append("g");

  // 4. ציור הקווים (Links) - בצורת "מרפק" ישר
  g.selectAll(".link")
    .data(root.links())
    .enter().append("path")
    .attr("class", "link")
    // פונקציה שמציירת קו למטה, ואז הצידה, ואז למטה
    .attr("d", d => {
      const start = { x: d.source.x, y: d.source.y + nodeHeight / 2 };
      const end = { x: d.target.x, y: d.target.y - nodeHeight / 2 };
      const midY = (start.y + end.y) / 2;
      return `M${start.x},${start.y} V${midY} H${end.x} V${end.y}`;
    });

  // 5. ציור הבועות (Nodes)
  const node = g.selectAll(".node")
    .data(root.descendants())
    .enter().append("g")
    .attr("class", "node-group")
    .attr("transform", d => `translate(${d.x},${d.y})`);

  // מלבן הרקע של הבועה
  node.append("rect")
    .attr("class", d => `node-rect ${d.data.id === treeData.highlightId ? "is-here" : ""}`)
    .attr("width", nodeWidth)
    .attr("height", nodeHeight)
    .attr("x", -nodeWidth / 2)
    .attr("y", -nodeHeight / 2);

  // תווית "אתה כאן"
  const hereNodes = node.filter(d => d.data.id === treeData.highlightId);
  hereNodes.append("rect")
    .attr("class", "here-label-rect")
    .attr("width", 60)
    .attr("height", 20)
    .attr("x", -30)
    .attr("y", -nodeHeight / 2 - 20);
  
  hereNodes.append("text")
    .attr("class", "here-label-text")
    .attr("x", 0)
    .attr("y", -nodeHeight / 2 - 10)
    .text("אתה כאן");

  // טקסטים בתוך הבועה
  node.append("text")
    .attr("class", "node-code-badge")
    .attr("x", -nodeWidth / 2 + 8)
    .attr("y", -nodeHeight / 2 + 18)
    .text(d => d.data.code || "");

  node.append("text")
    .attr("class", "node-label")
    .attr("x", 0)
    .attr("y", 0)
    .attr("text-anchor", "middle")
    .text(d => d.data.label);

  node.append("text")
    .attr("class", "node-pv")
    .attr("x", 0)
    .attr("y", 20)
    .attr("text-anchor", "middle")
    .html(d => d.data.pv ? `PV: <tspan class="node-pv-val">${d.data.pv.toLocaleString()}</tspan>` : "");

  node.filter(d => d.data.totalVal).append("text")
    .attr("class", "node-pv")
    .attr("x", 0)
    .attr("y", 35)
    .attr("text-anchor", "middle")
    .style("font-weight", "bold")
    .text(d => d.data.totalVal);

  // 6. הוספת הערות בתחתית
  if (treeData.notes && treeData.notes.length > 0) {
    container.append("div")
      .attr("class", "tree-notes-box no-print") // לא להדפיס את המסגרת, רק את הטקסט
      .html("<strong>הערות:</strong><br>" + treeData.notes.join("<br>"));
  }
}
