/* rank-tree.js - RECTANGLES */
document.addEventListener("DOMContentLoaded", () => {
    const mount = document.getElementById("rankTreeMount");
    if (!mount) return;
    const rankId = new URLSearchParams(window.location.search).get("id");
    if (!rankId || !window.RANK_TREES || !window.RANK_TREES[rankId]) {
        mount.innerHTML = "<p style='text-align:center;color:#666'>אין נתוני עץ</p>";
        return;
    }
    drawTree(window.RANK_TREES[rankId], mount);
});

function drawTree(data, container) {
    container.innerHTML = "";
    const width = 1000;
    const height = 500;
    
    const svg = d3.select(container).append("svg")
        .attr("width", "100%")
        .attr("height", height)
        .attr("viewBox", `0 0 ${width} ${height}`)
        .style("background", "#ffffff")
        .style("border-radius", "8px")
        .style("box-shadow", "0 2px 10px rgba(0,0,0,0.05)");

    const xScale = d3.scaleLinear().domain([0, 6]).range([70, width - 70]);
    const yScale = d3.scaleLinear().domain([0, 3]).range([60, height - 100]);

    if (data.edges) {
        svg.selectAll("line").data(data.edges).enter().append("line")
            .attr("x1", d => getNodeX(d.from, data.nodes, xScale))
            .attr("y1", d => getNodeY(d.from, data.nodes, yScale) + 25)
            .attr("x2", d => getNodeX(d.to, data.nodes, xScale))
            .attr("y2", d => getNodeY(d.to, data.nodes, yScale) - 25)
            .attr("stroke", "#94a3b8")
            .attr("stroke-width", 2);
    }

    const nodes = svg.selectAll("g").data(data.nodes).enter().append("g")
        .attr("transform", d => `translate(${xScale(d.column)},${yScale(d.generation)})`);

    const cardW = 110;
    const cardH = 55;

    nodes.append("rect")
        .attr("x", -cardW/2).attr("y", -cardH/2)
        .attr("width", cardW).attr("height", cardH)
        .attr("rx", 6)
        .attr("fill", d => d.id === (data.highlightId || "you") ? "#dcfce7" : "#fff")
        .attr("stroke", d => d.id === (data.highlightId || "you") ? "#16a34a" : "#64748b")
        .attr("stroke-width", 2);

    nodes.append("text").text(d => d.code)
        .attr("dy", -5).attr("text-anchor", "middle")
        .style("font-size", "14px").style("font-weight", "800").style("fill", "#1e293b");

    nodes.append("text").text(d => d.pv ? `PV ${d.pv.toLocaleString()}` : "")
        .attr("dy", 15).attr("text-anchor", "middle")
        .style("font-size", "11px").style("font-weight", "600").style("fill", "#0f766e");
}

function getNodeX(id, nodes, scale) { const n = nodes.find(x => x.id === id); return n ? scale(n.column) : 0; }
function getNodeY(id, nodes, scale) { const n = nodes.find(x => x.id === id); return n ? scale(n.generation) : 0; }
