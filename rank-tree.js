/* rank-tree.js - CARDS VISUALIZATION */
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
    // רוחב גדול יותר כדי להכיל 7 רגליים
    const width = 1000; 
    const height = 500;
    
    const svg = d3.select(container).append("svg")
        .attr("width", "100%")
        .attr("height", height)
        .attr("viewBox", `0 0 ${width} ${height}`)
        .style("background", "#ffffff")
        .style("border-radius", "8px")
        .style("box-shadow", "0 2px 5px rgba(0,0,0,0.05)");

    // התאמת ה-X כדי לפרוס 7 עמודות (0-6)
    const xScale = d3.scaleLinear().domain([0, 6]).range([80, width - 80]);
    const yScale = d3.scaleLinear().domain([0, 3]).range([60, height - 60]);

    // קווים
    if (data.edges) {
        svg.selectAll("line").data(data.edges).enter().append("line")
            .attr("x1", d => getNodeX(d.from, data.nodes, xScale))
            .attr("y1", d => getNodeY(d.from, data.nodes, yScale) + 20) // יציאה מתחת לכרטיס
            .attr("x2", d => getNodeX(d.to, data.nodes, xScale))
            .attr("y2", d => getNodeY(d.to, data.nodes, yScale) - 20) // כניסה מעל לכרטיס
            .attr("stroke", "#94a3b8")
            .attr("stroke-width", 2);
    }

    // קבוצת צמתים
    const nodes = svg.selectAll("g").data(data.nodes).enter().append("g")
        .attr("transform", d => `translate(${xScale(d.column)},${yScale(d.generation)})`);

    // --- ציור הכרטיס (מלבן) ---
    const cardWidth = 100;
    const cardHeight = 55;

    // צללית
    nodes.append("rect")
        .attr("x", -cardWidth/2 + 3).attr("y", -cardHeight/2 + 3)
        .attr("width", cardWidth).attr("height", cardHeight)
        .attr("rx", 6)
        .attr("fill", "#f1f5f9");

    // רקע הכרטיס
    nodes.append("rect")
        .attr("x", -cardWidth/2).attr("y", -cardHeight/2)
        .attr("width", cardWidth).attr("height", cardHeight)
        .attr("rx", 6)
        .attr("fill", "#ffffff")
        .attr("stroke", d => d.id === (data.highlightId || "you") ? "#16a34a" : "#64748b")
        .attr("stroke-width", d => d.id === (data.highlightId || "you") ? 3 : 1.5);

    // כותרת עליונה (שם/קוד)
    nodes.append("text").text(d => d.code)
        .attr("dy", -5)
        .attr("text-anchor", "middle")
        .style("font-size", "14px")
        .style("font-weight", "800")
        .style("fill", "#1e293b");

    // כותרת תחתונה (נקודות PV)
    nodes.append("text").text(d => d.pv ? `PV ${d.pv.toLocaleString()}` : "")
        .attr("dy", 15)
        .attr("text-anchor", "middle")
        .style("font-size", "12px")
        .style("font-weight", "bold")
        .style("fill", "#0f766e");
        
    // תווית תפקיד מעל הכרטיס
    nodes.append("text").text(d => d.label)
        .attr("dy", -cardHeight/2 - 8)
        .attr("text-anchor", "middle")
        .style("font-size", "11px")
        .style("fill", "#64748b");
}

function getNodeX(id, nodes, scale) { const n = nodes.find(x => x.id === id); return n ? scale(n.column) : 0; }
function getNodeY(id, nodes, scale) { const n = nodes.find(x => x.id === id); return n ? scale(n.generation) : 0; }
