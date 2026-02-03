/* rank-tree.js - עם תצוגת בונוסים ויזואלית משופרת */
document.addEventListener("DOMContentLoaded", () => {
    const mount = document.getElementById("rankTreeMount");
    if (!mount) return;

    const rankId = new URLSearchParams(window.location.search).get("id");
    if (!rankId || !window.RANK_TREES || !window.RANK_TREES[rankId]) {
        mount.innerHTML = "<p style='text-align:center; color:#94a3b8; padding:20px 0;'>אין נתוני עץ לדרגה זו עדיין</p>";
        return;
    }

    const treeData = window.RANK_TREES[rankId];
    const rankData = window.RANKS ? window.RANKS.find(r => r.id === rankId) : null;

    // If tree only has the "you" node and no edges, show a placeholder
    if (treeData.nodes.length <= 1 && treeData.edges.length === 0) {
        mount.innerHTML = "<p style='text-align:center; color:#94a3b8; padding:20px 0;'>מבנה העץ יבוא בקרוב</p>";
        return;
    }

    // Draw rank requirements summary first
    if (rankData) {
        drawRankSummary(rankData, mount);
    }

    drawTree(treeData, mount, rankId, rankData);

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

function drawRankSummary(rankData, container) {
    const summaryDiv = document.createElement("div");
    summaryDiv.style.cssText = "margin-bottom:20px; padding:16px; background:linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border:2px solid #0ea5e9; border-radius:12px;";
    
    let requirementsHTML = '';
    
    // Target points
    const targetType = rankData.targetType === 'payline' ? 'פייליין' : 'פרומו';
    requirementsHTML += `<div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid #bae6fd;">
        <span style="color:#0369a1; font-weight:600;">יעד נקודות:</span>
        <span style="color:#0c4a6e; font-weight:700;">${rankData.targetPoints.toLocaleString()} ${targetType}</span>
    </div>`;
    
    // 50% rule
    if (rankData.targetPoints >= 12000) {
        const maxFromLeg = Math.floor(rankData.targetPoints / 2);
        requirementsHTML += `<div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid #bae6fd;">
            <span style="color:#0369a1; font-weight:600;">חוק 50%:</span>
            <span style="color:#0c4a6e;">מקסימום ${maxFromLeg.toLocaleString()} מרגל אחת</span>
        </div>`;
    }
    
    // PB Legs
    if (rankData.pbLegs) {
        requirementsHTML += `<div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid #bae6fd;">
            <span style="color:#a855f7; font-weight:600;">🟣 רגלי PB:</span>
            <span style="color:#7c3aed; font-weight:700;">${rankData.pbLegs} רגליים מוסמכות</span>
        </div>`;
    }
    
    // POB Legs
    if (rankData.pobLegs) {
        requirementsHTML += `<div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid #bae6fd;">
            <span style="color:#f97316; font-weight:600;">🟠 רגלי POB:</span>
            <span style="color:#ea580c; font-weight:700;">${rankData.pobLegs} רגליים מוסמכות</span>
        </div>`;
    }
    
    // Certification months
    if (rankData.certificationMonths) {
        const certText = rankData.certificationRequired 
            ? `${rankData.certificationRequired} מתוך ${rankData.certificationMonths} חודשים`
            : `${rankData.certificationMonths} חודשים רצופים`;
        requirementsHTML += `<div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid #bae6fd;">
            <span style="color:#0369a1; font-weight:600;">חודשי הסמכה:</span>
            <span style="color:#0c4a6e;">${certText}</span>
        </div>`;
    }
    
    // Total bonus
    if (rankData.totalBonus) {
        requirementsHTML += `<div style="display:flex; justify-content:space-between; padding:8px 0;">
            <span style="color:#eab308; font-weight:600;">💰 בונוס מעבר דרגה:</span>
            <span style="color:#ca8a04; font-weight:700;">${rankData.totalBonus.toLocaleString()} ₪</span>
        </div>`;
    }
    
    summaryDiv.innerHTML = `
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:12px;">
            <span style="font-size:1.3rem;">📊</span>
            <h3 style="margin:0; color:#0369a1; font-size:1.1rem;">דרישות הדרגה</h3>
        </div>
        ${requirementsHTML}
    `;
    
    container.appendChild(summaryDiv);
}

function drawTree(data, container, rankId, rankData) {
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
        <span>רגל PB מוסמכת</span>
      </div>
      <div style="display:flex; align-items:center; gap:4px; font-size:0.8rem;">
        <span style="width:12px; height:12px; background:#f97316; border-radius:50%;"></span>
        <span>רגל POB מוסמכת</span>
      </div>
    `;
    container.appendChild(legendDiv);

    // Dynamically calculate dimensions based on data
    const maxCol = Math.max(...data.nodes.map(n => n.column));
    const maxGen = Math.max(...data.nodes.map(n => n.generation));

    const colCount = maxCol + 1;
    const genCount = maxGen + 1;

    // Scale width based on number of columns (min 700, max 1400)
    const width = Math.min(1400, Math.max(700, colCount * 120));
    const height = Math.min(600, Math.max(280, genCount * 160 + 100));

    const svg = d3.select(container).append("svg")
        .attr("width", "100%")
        .attr("height", height)
        .attr("viewBox", `0 0 ${width} ${height}`)
        .style("background", "#ffffff")
        .style("border-radius", "8px")
        .style("border", "1px solid #f1f5f9");

    // Dynamic scales based on actual data range
    const xScale = d3.scaleLinear().domain([0, maxCol || 1]).range([70, width - 70]);
    const yScale = d3.scaleLinear().domain([0, maxGen || 1]).range([55, height - 65]);

    // Draw edges (lines)
    if (data.edges && data.edges.length > 0) {
        svg.selectAll("line").data(data.edges).enter().append("line")
            .attr("x1", d => getNodeX(d.from, data.nodes, xScale))
            .attr("y1", d => getNodeY(d.from, data.nodes, yScale) + 32)
            .attr("x2", d => getNodeX(d.to, data.nodes, xScale))
            .attr("y2", d => getNodeY(d.to, data.nodes, yScale) - 32)
            .attr("stroke", "#cbd5e1")
            .attr("stroke-width", 2);
    }

    // Draw nodes
    const nodes = svg.selectAll("g.node").data(data.nodes).enter().append("g")
        .attr("class", "node")
        .attr("transform", d => `translate(${xScale(d.column)},${yScale(d.generation)})`);

    const cardW = 100;
    const cardH = 62;
    const isHighlight = d => d.id === (data.highlightId || "you");
    const isPBLeg = d => d.isPBLeg || d.pbQualified;
    const isPOBLeg = d => d.isPOBLeg;

    // Card background with special colors for PB/POB legs
    nodes.append("rect")
        .attr("x", -cardW / 2)
        .attr("y", -cardH / 2)
        .attr("width", cardW)
        .attr("height", cardH)
        .attr("rx", 10)
        .attr("fill", d => {
            if (isHighlight(d)) return "#dcfce7";
            if (isPOBLeg(d) && isPBLeg(d)) return "#fef3c7"; // Both PB and POB - gold
            if (isPOBLeg(d)) return "#ffedd5"; // POB - orange tint
            if (isPBLeg(d)) return "#f3e8ff"; // PB - purple tint
            return "#fff";
        })
        .attr("stroke", d => {
            if (isHighlight(d)) return "#16a34a";
            if (isPOBLeg(d) && isPBLeg(d)) return "#f59e0b"; // Both - gold border
            if (isPOBLeg(d)) return "#f97316"; // POB - orange border
            if (isPBLeg(d)) return "#a855f7"; // PB - purple border
            return "#cbd5e1";
        })
        .attr("stroke-width", d => (isHighlight(d) || isPBLeg(d) || isPOBLeg(d)) ? 2.5 : 1.5)
        .style("filter", "drop-shadow(0 2px 4px rgba(0,0,0,0.08))");

    // PB/POB indicator badges
    nodes.each(function(d) {
        if (d.id === "you") return;
        const g = d3.select(this);
        
        if (isPBLeg(d) && isPOBLeg(d)) {
            // Both PB and POB
            g.append("circle")
                .attr("cx", -cardW/2 + 10)
                .attr("cy", -cardH/2 + 10)
                .attr("r", 8)
                .attr("fill", "#a855f7");
            g.append("text")
                .attr("x", -cardW/2 + 10)
                .attr("y", -cardH/2 + 13)
                .attr("text-anchor", "middle")
                .style("font-size", "8px")
                .style("fill", "white")
                .style("font-weight", "bold")
                .text("PB");
                
            g.append("circle")
                .attr("cx", cardW/2 - 10)
                .attr("cy", -cardH/2 + 10)
                .attr("r", 8)
                .attr("fill", "#f97316");
            g.append("text")
                .attr("x", cardW/2 - 10)
                .attr("y", -cardH/2 + 13)
                .attr("text-anchor", "middle")
                .style("font-size", "7px")
                .style("fill", "white")
                .style("font-weight", "bold")
                .text("POB");
        } else if (isPBLeg(d)) {
            // Only PB
            g.append("circle")
                .attr("cx", -cardW/2 + 10)
                .attr("cy", -cardH/2 + 10)
                .attr("r", 8)
                .attr("fill", "#a855f7");
            g.append("text")
                .attr("x", -cardW/2 + 10)
                .attr("y", -cardH/2 + 13)
                .attr("text-anchor", "middle")
                .style("font-size", "8px")
                .style("fill", "white")
                .style("font-weight", "bold")
                .text("PB");
        } else if (isPOBLeg(d)) {
            // Only POB
            g.append("circle")
                .attr("cx", cardW/2 - 10)
                .attr("cy", -cardH/2 + 10)
                .attr("r", 8)
                .attr("fill", "#f97316");
            g.append("text")
                .attr("x", cardW/2 - 10)
                .attr("y", -cardH/2 + 13)
                .attr("text-anchor", "middle")
                .style("font-size", "7px")
                .style("fill", "white")
                .style("font-weight", "bold")
                .text("POB");
        }
    });

    // Code label (top)
    nodes.append("text")
        .text(d => d.code || "")
        .attr("dy", -10)
        .attr("text-anchor", "middle")
        .style("font-size", "13px")
        .style("font-weight", "800")
        .style("fill", d => {
            if (isHighlight(d)) return "#166534";
            if (isPOBLeg(d) && isPBLeg(d)) return "#b45309";
            if (isPOBLeg(d)) return "#c2410c";
            if (isPBLeg(d)) return "#7c3aed";
            return "#1e293b";
        });

    // PV label (middle)
    nodes.append("text")
        .text(d => d.pv ? `PV ${d.pv.toLocaleString()}` : "")
        .attr("dy", 8)
        .attr("text-anchor", "middle")
        .style("font-size", "10px")
        .style("font-weight", "600")
        .style("fill", "#0f766e");

    // Bonus indicators (bottom) - colored dots
    nodes.each(function(d) {
        if (d.id === "you") return;
        
        const bonusColors = window.getNodeBonusColors ? window.getNodeBonusColors(d, rankId) : [];
        if (bonusColors.length === 0) return;
        
        const g = d3.select(this);
        const dotSize = 7;
        const startX = -((bonusColors.length - 1) * (dotSize + 3)) / 2;
        
        bonusColors.forEach((bonus, i) => {
            g.append("circle")
                .attr("cx", startX + i * (dotSize + 3))
                .attr("cy", 22)
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
