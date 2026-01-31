/* rank-tree.js - D3 Visualization */
document.addEventListener("DOMContentLoaded", () => {
    const mount = document.getElementById("rankTreeMount");
    if (!mount) return;

    const rankId = new URLSearchParams(window.location.search).get("id");
    if (!rankId || !window.RANK_TREES || !window.RANK_TREES[rankId]) {
        mount.innerHTML = "<p>אין נתוני עץ לדרגה זו.</p>";
        return;
    }

    const treeData = window.RANK_TREES[rankId];
    drawTree(treeData, mount);
});

function drawTree(data, container) {
    container.innerHTML = ""; // ניקוי
    
    // הגדרות קנבס
    const width = container.offsetWidth || 600;
    const height = 400;
    const nodeRadius = 30;
    
    const svg = d3.select(container).append("svg")
        .attr("width", "100%")
        .attr("height", height)
        .attr("viewBox", `0 0 ${width} ${height}`)
        .style("background", "#fff")
        .style("border-radius", "12px");

    // חישוב מיקומים (X לפי עמודה, Y לפי דור)
    const xScale = d3.scaleLinear().domain([0, 4]).range([50, width - 50]);
    const yScale = d3.scaleLinear().domain([0, 3]).range([50, height - 50]);

    // ציור קווים (Edges)
    if (data.edges) {
        svg.selectAll("line")
            .data(data.edges)
            .enter().append("line")
            .attr("x1", d => { const n = data.nodes.find(x => x.id === d.from); return n ? xScale(n.column) : 0; })
            .attr("y1", d => { const n = data.nodes.find(x => x.id === d.from); return n ? yScale(n.generation) : 0; })
            .attr("x2", d => { const n = data.nodes.find(x => x.id === d.to); return n ? xScale(n.column) : 0; })
            .attr("y2", d => { const n = data.nodes.find(x => x.id === d.to); return n ? yScale(n.generation) : 0; })
            .attr("stroke", "#ccc")
            .attr("stroke-width", 2);
    }

    // ציור צמתים (Nodes)
    const nodes = svg.selectAll("g")
        .data(data.nodes)
        .enter().append("g")
        .attr("transform", d => `translate(${xScale(d.column)},${yScale(d.generation)})`);

    // עיגול
    nodes.append("circle")
        .attr("r", nodeRadius)
        .attr("fill", d => d.id === (data.highlightId || "you") ? "#16a34a" : "#fff")
        .attr("stroke", "#16a34a")
        .attr("stroke-width", 3);

    // טקסט קוד (P+, SP)
    nodes.append("text")
        .text(d => d.code)
        .attr("dy", 5)
        .attr("text-anchor", "middle")
        .attr("fill", d => d.id === (data.highlightId || "you") ? "#fff" : "#166534")
        .style("font-weight", "bold")
        .style("font-size", "14px");

    // תווית מתחת לעיגול (שם)
    nodes.append("text")
        .text(d => d.label)
        .attr("dy", nodeRadius + 20)
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .style("fill", "#333");

    // תווית ניקוד (PV)
    nodes.append("text")
        .text(d => d.pv ? `${d.pv.toLocaleString()} PV` : "")
        .attr("dy", nodeRadius + 35)
        .attr("text-anchor", "middle")
        .style("font-size", "11px")
        .style("fill", "#666");
}
