/* rank-tree.js */
document.addEventListener("DOMContentLoaded", () => {
    const mount = document.getElementById("rankTreeMount");
    if (!mount) return;

    const rankId = new URLSearchParams(window.location.search).get("id");
    if (!rankId || !window.RANK_TREES || !window.RANK_TREES[rankId]) {
        mount.innerHTML = "<p style='text-align:center; color:#94a3b8; padding:20px 0;'>אין נתוני עץ לדרגה זו עדיין</p>";
        return;
    }

    const treeData = window.RANK_TREES[rankId];

    // If tree only has the "you" node and no edges, show a placeholder
    if (treeData.nodes.length <= 1 && treeData.edges.length === 0) {
        mount.innerHTML = "<p style='text-align:center; color:#94a3b8; padding:20px 0;'>מבנה העץ יוא בקרוב</p>";
        return;
    }

    drawTree(treeData, mount);

    // Draw notes below the tree
    if (treeData.notes && treeData.notes.length > 0) {
        const notesDiv = document.createElement("div");
        notesDiv.style.cssText = "margin-top:16px; padding:14px 18px; background:#f0fdf4; border:1px solid #bbf7d0; border-radius:10px;";
        notesDiv.innerHTML = treeData.notes.map(n => `<div style="color:#166534; font-size:0.9rem; margin-bottom:4px;">📝 ${n}</div>`).join("");
        mount.appendChild(notesDiv);
    }
});

function drawTree(data, container) {
    // Dynamically calculate dimensions based on data
    const maxCol = Math.max(...data.nodes.map(n => n.column));
    const maxGen = Math.max(...data.nodes.map(n => n.generation));

    const colCount = maxCol + 1;
    const genCount = maxGen + 1;

    // Scale width based on number of columns (min 600, max 1000)
    const width = Math.min(1000, Math.max(600, colCount * 140));
    const height = Math.min(500, Math.max(200, genCount * 140 + 80));

    const svg = d3.select(container).append("svg")
        .attr("width", "100%")
        .attr("height", height)
        .attr("viewBox", `0 0 ${width} ${height}`)
        .style("background", "#ffffff")
        .style("border-radius", "8px")
        .style("border", "1px solid #f1f5f9");

    // Dynamic scales based on actual data range
    const xScale = d3.scaleLinear().domain([0, maxCol || 1]).range([70, width - 70]);
    const yScale = d3.scaleLinear().domain([0, maxGen || 1]).range([50, height - 60]);

    // Draw edges (lines)
    if (data.edges && data.edges.length > 0) {
        svg.selectAll("line").data(data.edges).enter().append("line")
            .attr("x1", d => getNodeX(d.from, data.nodes, xScale))
            .attr("y1", d => getNodeY(d.from, data.nodes, yScale) + 28)
            .attr("x2", d => getNodeX(d.to, data.nodes, xScale))
            .attr("y2", d => getNodeY(d.to, data.nodes, yScale) - 28)
            .attr("stroke", "#cbd5e1")
            .attr("stroke-width", 2);
    }

    // Draw nodes
    const nodes = svg.selectAll("g").data(data.nodes).enter().append("g")
        .attr("transform", d => `translate(${xScale(d.column)},${yScale(d.generation)})`);

    const cardW = 108;
    const cardH = 54;
    const isHighlight = d => d.id === (data.highlightId || "you");

    // Card background
    nodes.append("rect")
        .attr("x", -cardW / 2)
        .attr("y", -cardH / 2)
        .attr("width", cardW)
        .attr("height", cardH)
        .attr("rx", 8)
        .attr("fill", d => isHighlight(d) ? "#dcfce7" : "#fff")
        .attr("stroke", d => isHighlight(d) ? "#16a34a" : "#cbd5e1")
        .attr("stroke-width", d => isHighlight(d) ? 2.5 : 1.5)
        .style("filter", "drop-shadow(0 2px 4px rgba(0,0,0,0.06))");

    // Code label (top)
    nodes.append("text")
        .text(d => d.code || "")
        .attr("dy", -4)
        .attr("text-anchor", "middle")
        .style("font-size", "13px")
        .style("font-weight", "800")
        .style("fill", d => isHighlight(d) ? "#166534" : "#1e293b");

    // PV label (bottom)
    nodes.append("text")
        .text(d => d.pv ? `PV ${d.pv.toLocaleString()}` : "")
        .attr("dy", 16)
        .attr("text-anchor", "middle")
        .style("font-size", "11px")
        .style("font-weight", "600")
        .style("fill", "#0f766e");
}

function getNodeX(id, nodes, scale) {
    const n = nodes.find(x => x.id === id);
    return n ? scale(n.column) : 0;
}

function getNodeY(id, nodes, scale) {
    const n = nodes.find(x => x.id === id);
    return n ? scale(n.generation) : 0;
}
