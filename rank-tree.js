/* rank-tree.js - עם תצוגת בונוסים ויזואלית */
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
        mount.innerHTML = "<p style='text-align:center; color:#94a3b8; padding:20px 0;'>מבנה העץ יבוא בקרוב</p>";
        return;
    }

    drawTree(treeData, mount, rankId);

    // Draw notes below the tree
    if (treeData.notes && treeData.notes.length > 0) {
        const notesDiv = document.createElement("div");
        notesDiv.style.cssText = "margin-top:16px; padding:14px 18px; background:#f0fdf4; border:1px solid #bbf7d0; border-radius:10px;";
        notesDiv.innerHTML = treeData.notes.map(n => `<div style="color:#166534; font-size:0.9rem; margin-bottom:4px;">📝 ${n}</div>`).join("");
        mount.appendChild(notesDiv);
    }
    
    // Draw earnings calculator
    if (window.calculateTreeBonuses) {
        drawEarningsCalculator(treeData, rankId, mount);
    }
});

function drawTree(data, container, rankId) {
    // Calculate total PV from all nodes
    const totalPV = data.nodes.reduce((sum, node) => sum + (node.pv || 0), 0);
    
    // Add total PV display above tree
    const totalDiv = document.createElement("div");
    totalDiv.style.cssText = "text-align:center; margin-bottom:16px; padding:12px; background:#faf5ff; border:2px solid #c084fc; border-radius:10px;";
    totalDiv.innerHTML = `
      <div style="font-size:0.9rem; color:#64748b; margin-bottom:4px;">סה"כ נקודות בעץ</div>
      <div style="font-size:2rem; font-weight:900; color:#9333ea;">${totalPV.toLocaleString()} PV</div>
    `;
    container.appendChild(totalDiv);
    
    // Add bonus legend
    const legendDiv = document.createElement("div");
    legendDiv.style.cssText = "display:flex; flex-wrap:wrap; gap:12px; justify-content:center; margin-bottom:16px; padding:10px; background:#f8fafc; border-radius:8px;";
    legendDiv.innerHTML = `
      <div style="display:flex; align-items:center; gap:4px; font-size:0.8rem;">
        <span style="width:12px; height:12px; background:#3b82f6; border-radius:50%;"></span>
        <span>עמלת מכירה 10%</span>
      </div>
      <div style="display:flex; align-items:center; gap:4px; font-size:0.8rem;">
        <span style="width:12px; height:12px; background:#22c55e; border-radius:50%;"></span>
        <span>עמלת צוות 4-5%</span>
      </div>
      <div style="display:flex; align-items:center; gap:4px; font-size:0.8rem;">
        <span style="width:12px; height:12px; background:#a855f7; border-radius:50%;"></span>
        <span>בונוס PB 3-4%</span>
      </div>
      <div style="display:flex; align-items:center; gap:4px; font-size:0.8rem;">
        <span style="width:12px; height:12px; background:#f97316; border-radius:50%;"></span>
        <span>בונוס POB 3%</span>
      </div>
    `;
    container.appendChild(legendDiv);

    // Dynamically calculate dimensions based on data
    const maxCol = Math.max(...data.nodes.map(n => n.column));
    const maxGen = Math.max(...data.nodes.map(n => n.generation));

    const colCount = maxCol + 1;
    const genCount = maxGen + 1;

    // Scale width based on number of columns (min 600, max 1200)
    const width = Math.min(1200, Math.max(600, colCount * 140));
    const height = Math.min(550, Math.max(250, genCount * 150 + 100));

    const svg = d3.select(container).append("svg")
        .attr("width", "100%")
        .attr("height", height)
        .attr("viewBox", `0 0 ${width} ${height}`)
        .style("background", "#ffffff")
        .style("border-radius", "8px")
        .style("border", "1px solid #f1f5f9");

    // Dynamic scales based on actual data range
    const xScale = d3.scaleLinear().domain([0, maxCol || 1]).range([80, width - 80]);
    const yScale = d3.scaleLinear().domain([0, maxGen || 1]).range([60, height - 70]);

    // Draw edges (lines)
    if (data.edges && data.edges.length > 0) {
        svg.selectAll("line").data(data.edges).enter().append("line")
            .attr("x1", d => getNodeX(d.from, data.nodes, xScale))
            .attr("y1", d => getNodeY(d.from, data.nodes, yScale) + 35)
            .attr("x2", d => getNodeX(d.to, data.nodes, xScale))
            .attr("y2", d => getNodeY(d.to, data.nodes, yScale) - 35)
            .attr("stroke", "#cbd5e1")
            .attr("stroke-width", 2);
    }

    // Draw nodes
    const nodes = svg.selectAll("g.node").data(data.nodes).enter().append("g")
        .attr("class", "node")
        .attr("transform", d => `translate(${xScale(d.column)},${yScale(d.generation)})`);

    const cardW = 115;
    const cardH = 68;
    const isHighlight = d => d.id === (data.highlightId || "you");

    // Card background
    nodes.append("rect")
        .attr("x", -cardW / 2)
        .attr("y", -cardH / 2)
        .attr("width", cardW)
        .attr("height", cardH)
        .attr("rx", 10)
        .attr("fill", d => isHighlight(d) ? "#dcfce7" : "#fff")
        .attr("stroke", d => isHighlight(d) ? "#16a34a" : "#cbd5e1")
        .attr("stroke-width", d => isHighlight(d) ? 2.5 : 1.5)
        .style("filter", "drop-shadow(0 2px 4px rgba(0,0,0,0.08))");

    // Code label (top)
    nodes.append("text")
        .text(d => d.code || "")
        .attr("dy", -12)
        .attr("text-anchor", "middle")
        .style("font-size", "14px")
        .style("font-weight", "800")
        .style("fill", d => isHighlight(d) ? "#166534" : "#1e293b");

    // PV label (middle)
    nodes.append("text")
        .text(d => d.pv ? `PV ${d.pv.toLocaleString()}` : "")
        .attr("dy", 6)
        .attr("text-anchor", "middle")
        .style("font-size", "11px")
        .style("font-weight", "600")
        .style("fill", "#0f766e");

    // Bonus indicators (bottom) - colored dots
    nodes.each(function(d) {
        if (d.id === "you") return; // לא מציגים בונוסים על "אתה"
        
        const bonusColors = window.getNodeBonusColors ? window.getNodeBonusColors(d, rankId) : [];
        if (bonusColors.length === 0) return;
        
        const g = d3.select(this);
        const dotSize = 8;
        const startX = -((bonusColors.length - 1) * (dotSize + 4)) / 2;
        
        bonusColors.forEach((bonus, i) => {
            g.append("circle")
                .attr("cx", startX + i * (dotSize + 4))
                .attr("cy", 24)
                .attr("r", dotSize / 2)
                .attr("fill", bonus.color)
                .style("filter", "drop-shadow(0 1px 2px rgba(0,0,0,0.2))")
                .append("title")
                .text(bonus.label);
        });
    });
}

function drawEarningsCalculator(treeData, rankId, container) {
    const earnings = window.calculateTreeBonuses(treeData, rankId);
    
    if (earnings.total === 0) return;
    
    const calcDiv = document.createElement("div");
    calcDiv.style.cssText = "margin-top:20px; padding:20px; background:linear-gradient(135deg, #fef3c7 0%, #fde68a 100%); border:2px solid #f59e0b; border-radius:14px;";
    
    let detailsHTML = earnings.details.map(d => `
        <div style="display:flex; justify-content:space-between; align-items:center; padding:8px 12px; background:white; border-radius:8px; margin-bottom:8px; border-right:4px solid ${d.color};">
            <div>
                <span style="font-weight:600; color:#1e293b;">${d.label}</span>
                ${d.pv ? `<span style="color:#64748b; font-size:0.85rem; margin-right:8px;">(${d.pv.toLocaleString()} נק')</span>` : ''}
            </div>
            <span style="font-weight:700; color:#166534; font-size:1.1rem;">${d.amount.toLocaleString('he-IL', {maximumFractionDigits: 0})} ₪</span>
        </div>
    `).join('');
    
    calcDiv.innerHTML = `
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:16px;">
            <span style="font-size:1.5rem;">💰</span>
            <h3 style="margin:0; color:#92400e; font-size:1.2rem;">מחשבון רווחים משוער</h3>
        </div>
        <div style="margin-bottom:16px;">
            ${detailsHTML}
        </div>
        <div style="background:#166534; color:white; padding:16px; border-radius:10px; text-align:center;">
            <div style="font-size:0.9rem; opacity:0.9; margin-bottom:4px;">סה"כ הכנסה משוערת</div>
            <div style="font-size:2.2rem; font-weight:900;">${earnings.total.toLocaleString('he-IL', {maximumFractionDigits: 0})} ₪</div>
            <div style="font-size:0.8rem; opacity:0.8; margin-top:4px;">* הערכה בלבד, תלוי בתנאים ובהסמכות</div>
        </div>
    `;
    
    container.appendChild(calcDiv);
}

function getNodeX(id, nodes, scale) {
    const n = nodes.find(x => x.id === id);
    return n ? scale(n.column) : 0;
}

function getNodeY(id, nodes, scale) {
    const n = nodes.find(x => x.id === id);
    return n ? scale(n.generation) : 0;
}
