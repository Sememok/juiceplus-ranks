/* rank-tree.js - עם תמיכה בעצים גדולים, גלילה אופקית ו-Popup מסך מלא */

// Global variables for popup
let currentTreeData = null;
let currentRankId = null;
let currentRankData = null;

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
    
    // Store for popup use
    currentTreeData = treeData;
    currentRankId = rankId;
    currentRankData = rankData;

    // If tree only has the "you" node and no edges, show a placeholder
    if (treeData.nodes.length <= 1 && treeData.edges.length === 0) {
        mount.innerHTML = "<p style='text-align:center; color:#94a3b8; padding:20px 0;'>מבנה העץ יבוא בקרוב</p>";
        return;
    }

    // Draw rank requirements summary first
    if (rankData) {
        drawRankSummary(rankData, mount);
    }

    drawTree(treeData, mount, rankId, rankData, false);

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
    
    // Create popup container (hidden by default)
    createPopupContainer();
});

function createPopupContainer() {
    // Check if popup already exists
    if (document.getElementById('treePopupOverlay')) return;
    
    const overlay = document.createElement('div');
    overlay.id = 'treePopupOverlay';
    overlay.style.cssText = `
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,0.85);
        z-index: 9999;
        overflow: auto;
    `;
    
    overlay.innerHTML = `
        <div id="treePopupContent" style="
            position: relative;
            min-height: 100vh;
            padding: 20px;
            box-sizing: border-box;
        ">
            <button id="closePopupBtn" style="
                position: fixed;
                top: 20px;
                left: 20px;
                background: #ef4444;
                color: white;
                border: none;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                font-size: 24px;
                cursor: pointer;
                z-index: 10001;
                box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                display: flex;
                align-items: center;
                justify-content: center;
            ">✕</button>
            
            <div id="popupHeader" style="
                background: linear-gradient(135deg, #166534 0%, #15803d 100%);
                color: white;
                padding: 20px;
                border-radius: 16px;
                margin-bottom: 20px;
                text-align: center;
            ">
                <h2 id="popupTitle" style="margin:0 0 10px 0; font-size:1.8rem;"></h2>
                <div id="popupSubtitle" style="opacity:0.9;"></div>
            </div>
            
            <div id="popupLegend" style="
                display: flex;
                flex-wrap: wrap;
                gap: 16px;
                justify-content: center;
                margin-bottom: 20px;
                padding: 16px;
                background: white;
                border-radius: 12px;
            "></div>
            
            <div id="popupTreeContainer" style="
                background: white;
                border-radius: 16px;
                padding: 20px;
                overflow: auto;
                margin-bottom: 20px;
            "></div>
            
            <div id="popupInfo" style="
                background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
                border-radius: 16px;
                padding: 20px;
                margin-bottom: 20px;
            "></div>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    // Close button event
    document.getElementById('closePopupBtn').addEventListener('click', closeTreePopup);
    
    // Close on overlay click (but not on content click)
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeTreePopup();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeTreePopup();
        }
    });
}

function openTreePopup() {
    const overlay = document.getElementById('treePopupOverlay');
    if (!overlay || !currentTreeData) return;
    
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scroll
    
    // Set title
    const title = document.getElementById('popupTitle');
    const subtitle = document.getElementById('popupSubtitle');
    if (currentRankData) {
        title.textContent = `🌳 מבנה העץ - ${currentRankData.title}`;
        subtitle.textContent = `סה"כ ${currentTreeData.nodes.reduce((sum, n) => sum + (n.pv || 0), 0).toLocaleString()} נקודות PV`;
    }
    
    // Set legend
    const legendDiv = document.getElementById('popupLegend');
    legendDiv.innerHTML = `
        <div style="display:flex; align-items:center; gap:8px; padding:8px 16px; background:#f8fafc; border-radius:8px;">
            <span style="width:16px; height:16px; background:#dcfce7; border:2px solid #16a34a; border-radius:4px;"></span>
            <span style="font-weight:600;">אתה (הדרגה הנוכחית)</span>
        </div>
        <div style="display:flex; align-items:center; gap:8px; padding:8px 16px; background:#f8fafc; border-radius:8px;">
            <span style="width:16px; height:16px; background:#f3e8ff; border:2px solid #a855f7; border-radius:4px;"></span>
            <span style="font-weight:600;">🟣 רגל PB מוסמכת</span>
        </div>
        <div style="display:flex; align-items:center; gap:8px; padding:8px 16px; background:#f8fafc; border-radius:8px;">
            <span style="width:16px; height:16px; background:#ffedd5; border:2px solid #f97316; border-radius:4px;"></span>
            <span style="font-weight:600;">🟠 רגל POB מוסמכת</span>
        </div>
        <div style="display:flex; align-items:center; gap:8px; padding:8px 16px; background:#f8fafc; border-radius:8px;">
            <span style="width:16px; height:16px; background:#fef3c7; border:2px solid #f59e0b; border-radius:4px;"></span>
            <span style="font-weight:600;">🟡 רגל PB + POB</span>
        </div>
        <div style="display:flex; align-items:center; gap:8px; padding:8px 16px; background:#f8fafc; border-radius:8px;">
            <span style="width:16px; height:16px; background:#3b82f6; border-radius:50%;"></span>
            <span>עמלת מכירה 10%</span>
        </div>
        <div style="display:flex; align-items:center; gap:8px; padding:8px 16px; background:#f8fafc; border-radius:8px;">
            <span style="width:16px; height:16px; background:#22c55e; border-radius:50%;"></span>
            <span>עמלת צוות 4-5%</span>
        </div>
    `;
    
    // Draw tree in popup (larger)
    const treeContainer = document.getElementById('popupTreeContainer');
    treeContainer.innerHTML = '';
    drawTree(currentTreeData, treeContainer, currentRankId, currentRankData, true);
    
    // Set info section
    const infoDiv = document.getElementById('popupInfo');
    let infoHTML = '<h3 style="margin:0 0 16px 0; color:#0369a1;">📋 פירוט הדרישות והבונוסים</h3>';
    
    if (currentRankData) {
        infoHTML += '<div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:16px;">';
        
        // Requirements card
        infoHTML += `
            <div style="background:white; padding:16px; border-radius:12px; border-right:4px solid #0ea5e9;">
                <h4 style="margin:0 0 12px 0; color:#0369a1;">📊 דרישות הדרגה</h4>
                <div style="color:#475569; line-height:1.8;">
                    <div>• יעד נקודות: <b>${currentRankData.targetPoints?.toLocaleString() || 'N/A'}</b></div>
                    ${currentRankData.pbLegs ? `<div>• רגלי PB: <b style="color:#a855f7;">${currentRankData.pbLegs} רגליים</b></div>` : ''}
                    ${currentRankData.pobLegs ? `<div>• רגלי POB: <b style="color:#f97316;">${currentRankData.pobLegs} רגליים</b></div>` : ''}
                    ${currentRankData.certificationMonths ? `<div>• הסמכה: <b>${currentRankData.certificationRequired || currentRankData.certificationMonths} מתוך ${currentRankData.certificationMonths} חודשים</b></div>` : ''}
                </div>
            </div>
        `;
        
        // Bonuses card
        infoHTML += `
            <div style="background:white; padding:16px; border-radius:12px; border-right:4px solid #f59e0b;">
                <h4 style="margin:0 0 12px 0; color:#92400e;">💰 בונוסים</h4>
                <div style="color:#475569; line-height:1.8;">
                    ${currentRankData.totalBonus ? `<div>• בונוס מעבר דרגה: <b style="color:#166534;">${currentRankData.totalBonus.toLocaleString()} ₪</b></div>` : ''}
                    <div>• עמלת מכירה: <b>10%</b> על לקוחות</div>
                    <div>• עמלת צוות: <b>4-5%</b> על זכיינים</div>
                    ${currentRankData.pbLegs ? `<div>• בונוס PB: <b style="color:#a855f7;">3-4%</b> על דורות 1-5</div>` : ''}
                    ${currentRankData.pobLegs ? `<div>• בונוס POB: <b style="color:#f97316;">3%</b> על SC ומעלה</div>` : ''}
                </div>
            </div>
        `;
        
        infoHTML += '</div>';
    }
    
    // Notes
    if (currentTreeData.notes && currentTreeData.notes.length > 0) {
        infoHTML += `
            <div style="margin-top:16px; padding:16px; background:#f0fdf4; border-radius:12px; border-right:4px solid #22c55e;">
                <h4 style="margin:0 0 12px 0; color:#166534;">📝 הערות חשובות</h4>
                <div style="color:#166534; line-height:1.8;">
                    ${currentTreeData.notes.map(n => `<div>• ${n}</div>`).join('')}
                </div>
            </div>
        `;
    }
    
    infoDiv.innerHTML = infoHTML;
}

function closeTreePopup() {
    const overlay = document.getElementById('treePopupOverlay');
    if (overlay) {
        overlay.style.display = 'none';
        document.body.style.overflow = ''; // Restore scroll
    }
}

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

function drawTree(data, container, rankId, rankData, isPopup = false) {
    // Calculate total PV from all nodes
    const totalPV = data.nodes.reduce((sum, node) => sum + (node.pv || 0), 0);
    
    // Add total PV display above tree (only in regular view, not popup)
    if (!isPopup) {
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
    }

    // Dynamically calculate dimensions based on data
    const maxCol = Math.max(...data.nodes.map(n => n.column));
    const maxGen = Math.max(...data.nodes.map(n => n.generation));

    const colCount = maxCol + 1;
    const genCount = maxGen + 1;

    // Card sizes - larger for popup
    const cardW = isPopup ? 110 : 90;
    const cardH = isPopup ? 70 : 58;
    
    // Spacing - more generous for popup
    const minSpacingX = isPopup ? (cardW + 50) : (cardW + 30);
    const minSpacingY = isPopup ? (cardH + 100) : (cardH + 80);
    
    const nodeSpacingX = minSpacingX;
    const nodeSpacingY = minSpacingY;
    
    // Calculate actual dimensions
    const actualWidth = Math.max(800, colCount * nodeSpacingX + 200);
    const height = Math.max(400, genCount * nodeSpacingY + 150);

    // Create scrollable container
    const scrollContainer = document.createElement("div");
    scrollContainer.style.cssText = `
        overflow-x: auto;
        overflow-y: auto;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        background: #ffffff;
        padding: 10px;
        margin-bottom: 10px;
        ${isPopup ? 'max-height: 60vh;' : ''}
        cursor: ${isPopup ? 'default' : 'pointer'};
    `;
    
    // Add click to open popup (only in regular view)
    if (!isPopup) {
        // Add hint to click for fullscreen
        const clickHint = document.createElement("div");
        clickHint.style.cssText = "text-align:center; color:#0369a1; font-size:0.9rem; margin-bottom:8px; padding:10px; background:linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%); border-radius:8px; cursor:pointer; transition: all 0.2s;";
        clickHint.innerHTML = "🔍 <b>לחץ כאן לצפייה במסך מלא</b> - עם הסברים מפורטים";
        clickHint.onmouseover = () => { clickHint.style.background = 'linear-gradient(135deg, #bfdbfe 0%, #93c5fd 100%)'; };
        clickHint.onmouseout = () => { clickHint.style.background = 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)'; };
        clickHint.onclick = openTreePopup;
        container.appendChild(clickHint);
        
        // Also make the tree clickable
        scrollContainer.onclick = openTreePopup;
        scrollContainer.onmouseover = () => { scrollContainer.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.3)'; };
        scrollContainer.onmouseout = () => { scrollContainer.style.boxShadow = 'none'; };
    }
    
    // Add scroll hint for large trees
    if (actualWidth > 900 && !isPopup) {
        const scrollHint = document.createElement("div");
        scrollHint.style.cssText = "text-align:center; color:#64748b; font-size:0.85rem; margin-bottom:8px; padding:6px; background:#f1f5f9; border-radius:6px;";
        scrollHint.innerHTML = "👈 גלול ימינה ושמאלה לצפייה בעץ המלא 👉";
        container.appendChild(scrollHint);
    }
    
    container.appendChild(scrollContainer);

    const svg = d3.select(scrollContainer).append("svg")
        .attr("width", actualWidth)
        .attr("height", height)
        .style("background", "#ffffff")
        .style("display", "block")
        .style("min-width", actualWidth + "px");

    // Dynamic scales
    const xScale = d3.scaleLinear().domain([0, maxCol || 1]).range([100, actualWidth - 100]);
    const yScale = d3.scaleLinear().domain([0, maxGen || 1]).range([80, height - 80]);

    // Draw edges (lines)
    if (data.edges && data.edges.length > 0) {
        svg.selectAll("line").data(data.edges).enter().append("line")
            .attr("x1", d => getNodeX(d.from, data.nodes, xScale))
            .attr("y1", d => getNodeY(d.from, data.nodes, yScale) + cardH/2 + 5)
            .attr("x2", d => getNodeX(d.to, data.nodes, xScale))
            .attr("y2", d => getNodeY(d.to, data.nodes, yScale) - cardH/2 - 5)
            .attr("stroke", "#cbd5e1")
            .attr("stroke-width", 2);
    }

    // Draw nodes
    const nodes = svg.selectAll("g.node").data(data.nodes).enter().append("g")
        .attr("class", "node")
        .attr("transform", d => `translate(${xScale(d.column)},${yScale(d.generation)})`);

    const isHighlight = d => d.id === (data.highlightId || "you");
    const isPBLeg = d => d.isPBLeg || d.pbQualified;
    const isPOBLeg = d => d.isPOBLeg;

    // Card background
    nodes.append("rect")
        .attr("x", -cardW / 2)
        .attr("y", -cardH / 2)
        .attr("width", cardW)
        .attr("height", cardH)
        .attr("rx", 8)
        .attr("fill", d => {
            if (isHighlight(d)) return "#dcfce7";
            if (isPOBLeg(d) && isPBLeg(d)) return "#fef3c7";
            if (isPOBLeg(d)) return "#ffedd5";
            if (isPBLeg(d)) return "#f3e8ff";
            return "#fff";
        })
        .attr("stroke", d => {
            if (isHighlight(d)) return "#16a34a";
            if (isPOBLeg(d) && isPBLeg(d)) return "#f59e0b";
            if (isPOBLeg(d)) return "#f97316";
            if (isPBLeg(d)) return "#a855f7";
            return "#cbd5e1";
        })
        .attr("stroke-width", d => (isHighlight(d) || isPBLeg(d) || isPOBLeg(d)) ? 2.5 : 1.5)
        .style("filter", "drop-shadow(0 2px 4px rgba(0,0,0,0.08))");

    // PB/POB indicator badges
    nodes.each(function(d) {
        if (d.id === "you") return;
        const g = d3.select(this);
        const badgeSize = isPopup ? 10 : 8;
        const fontSize = isPopup ? '9px' : '8px';
        
        if (isPBLeg(d) && isPOBLeg(d)) {
            g.append("circle")
                .attr("cx", -cardW/2 + 12)
                .attr("cy", -cardH/2 + 12)
                .attr("r", badgeSize)
                .attr("fill", "#a855f7");
            g.append("text")
                .attr("x", -cardW/2 + 12)
                .attr("y", -cardH/2 + 15)
                .attr("text-anchor", "middle")
                .style("font-size", fontSize)
                .style("fill", "white")
                .style("font-weight", "bold")
                .text("PB");
                
            g.append("circle")
                .attr("cx", cardW/2 - 12)
                .attr("cy", -cardH/2 + 12)
                .attr("r", badgeSize)
                .attr("fill", "#f97316");
            g.append("text")
                .attr("x", cardW/2 - 12)
                .attr("y", -cardH/2 + 15)
                .attr("text-anchor", "middle")
                .style("font-size", fontSize)
                .style("fill", "white")
                .style("font-weight", "bold")
                .text("POB");
        } else if (isPBLeg(d)) {
            g.append("circle")
                .attr("cx", -cardW/2 + 12)
                .attr("cy", -cardH/2 + 12)
                .attr("r", badgeSize)
                .attr("fill", "#a855f7");
            g.append("text")
                .attr("x", -cardW/2 + 12)
                .attr("y", -cardH/2 + 15)
                .attr("text-anchor", "middle")
                .style("font-size", fontSize)
                .style("fill", "white")
                .style("font-weight", "bold")
                .text("PB");
        } else if (isPOBLeg(d)) {
            g.append("circle")
                .attr("cx", cardW/2 - 12)
                .attr("cy", -cardH/2 + 12)
                .attr("r", badgeSize)
                .attr("fill", "#f97316");
            g.append("text")
                .attr("x", cardW/2 - 12)
                .attr("y", -cardH/2 + 15)
                .attr("text-anchor", "middle")
                .style("font-size", fontSize)
                .style("fill", "white")
                .style("font-weight", "bold")
                .text("POB");
        }
    });

    // Code label (top)
    const codeFontSize = isPopup ? '15px' : '13px';
    nodes.append("text")
        .text(d => d.code || "")
        .attr("dy", isPopup ? -10 : -8)
        .attr("text-anchor", "middle")
        .style("font-size", codeFontSize)
        .style("font-weight", "800")
        .style("fill", d => {
            if (isHighlight(d)) return "#166534";
            if (isPOBLeg(d) && isPBLeg(d)) return "#b45309";
            if (isPOBLeg(d)) return "#c2410c";
            if (isPBLeg(d)) return "#7c3aed";
            return "#1e293b";
        });

    // PV label (middle)
    const pvFontSize = isPopup ? '12px' : '10px';
    nodes.append("text")
        .text(d => d.pv ? `PV ${d.pv.toLocaleString()}` : "")
        .attr("dy", isPopup ? 12 : 10)
        .attr("text-anchor", "middle")
        .style("font-size", pvFontSize)
        .style("font-weight", "600")
        .style("fill", "#0f766e");

    // Bonus indicators (bottom) - colored dots
    nodes.each(function(d) {
        if (d.id === "you") return;
        
        const bonusColors = window.getNodeBonusColors ? window.getNodeBonusColors(d, rankId) : [];
        if (bonusColors.length === 0) return;
        
        const g = d3.select(this);
        const dotSize = isPopup ? 9 : 7;
        const startX = -((bonusColors.length - 1) * (dotSize + 3)) / 2;
        
        bonusColors.forEach((bonus, i) => {
            g.append("circle")
                .attr("cx", startX + i * (dotSize + 3))
                .attr("cy", cardH/2 - 10)
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
