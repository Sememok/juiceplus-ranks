/* rank-tree.js */
document.addEventListener("DOMContentLoaded", () => {
    const mount = document.getElementById("rankTreeMount");
    if (!mount) return;
    const rankId = new URLSearchParams(window.location.search).get("id");
    if (!rankId || !window.RANK_TREES || !window.RANK_TREES[rankId]) {
        mount.innerHTML = "<p>אין נתוני עץ לדרגה זו.</p>";
        return;
    }
    drawTree(window.RANK_TREES[rankId], mount);
});

function drawTree(data, container) {
    container.innerHTML = "";
    const width = container.offsetWidth || 800;
    const height = 500;
    
    const svg = d3.select(container).append("svg")
        .attr("width", "100%")
        .attr("height", height)
        .attr("viewBox", `0 0 ${width} ${height}`)
        .style("background", "#fff")
        .style("border-radius", "12px");

    // קנה מידה
    const xScale = d3.scaleLinear().domain([0, 6]).range([50, width - 50]); 
    const yScale = d3.scaleLinear().domain([0, 3]).range([50, height - 80]);

    // קווים
    if (data.edges) {
        svg.selectAll("line").data(data.edges).enter().append("line")
            .attr("x1", d => getNodeX(d.from, data.nodes, xScale))
            .attr("y1", d => getNodeY(d.from, data.nodes, yScale))
            .attr("x2", d => getNodeX(d.to, data.nodes, xScale))
            .attr("y2", d => getNodeY(d.to, data.nodes, yScale))
            .attr("stroke", "#94a3b8").attr("stroke-width", 2);
    }

    // צמתים - מלבנים במקום עיגולים!
    const nodes = svg.selectAll("g").data(data.nodes).enter().append("g")
        .attr("transform", d => `translate(${xScale(d.column)},${yScale(d.generation)})`);

    // מלבן (Card)
    nodes.append("rect")
        .attr("x", -40).attr("y", -25)
        .attr("width", 80).attr("height", 50)
        .attr("rx", 6)
        .attr("fill", "#fff")
        .attr("stroke", d => d.id === (data.highlightId || "you") ? "#16a34a" : "#64748b")
        .attr("stroke-width", 2);

    // שם הדרגה/תפקיד
    nodes.append("text").text(d => d.code)
        .attr("dy", -5).attr("text-anchor", "middle")
        .style("font-size", "12px").style("font-weight", "bold").style("fill", "#1e293b");

    // ניקוד PV
    nodes.append("text").text(d => d.pv ? d.pv.toLocaleString() : "")
        .attr("dy", 15).attr("text-anchor", "middle")
        .style("font-size", "11px").style("fill", "#64748b");
}

function getNodeX(id, nodes, scale) { const n = nodes.find(x => x.id === id); return n ? scale(n.column) : 0; }
function getNodeY(id, nodes, scale) { const n = nodes.find(x => x.id === id); return n ? scale(n.generation) : 0; }
