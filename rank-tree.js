/* =========================
   rank-tree.js – LEFT BADGE FIX
   ========================= */

(function () {
  function el(tag, cls, text, isHtml = false) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined && text !== null) {
      if (isHtml) e.innerHTML = text;
      else e.textContent = text;
    }
    return e;
  }

  function getRankIdFromUrl() {
    const params = new URLSearchParams(location.search);
    return params.get("id");
  }

  function getRankById(id) {
    if (!window.RANKS) return null;
    return window.RANKS.find(r => r.id === id) || null;
  }

  function renderTree(tree, mount) {
    mount.innerHTML = "";

    const wrap = el("div", "treeWrap");
    const header = el("div", "treeHeader");

    header.appendChild(el("div", "treeTitle", tree.title || "עץ התקדמות"));
    if (tree.description) header.appendChild(el("div", "treeDesc", tree.description));
    wrap.appendChild(header);

    const canvas = el("div", "treeCanvas");
    canvas.style.setProperty("--cols", String(getMaxCols(tree.nodes)));
    canvas.style.setProperty("--rows", String(getMaxRows(tree.nodes)));
    wrap.appendChild(canvas);

    const nodesLayer = el("div", "treeNodesLayer");
    canvas.appendChild(nodesLayer);

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "treeEdges");
    canvas.appendChild(svg);

    const nodeEls = new Map();
    tree.nodes.forEach(n => {
      const node = el("div", "treeNode");
      node.dataset.nodeId = n.id;

      if (tree.highlightId && n.id === tree.highlightId) node.classList.add("isHere");

      node.style.gridRow = String((n.generation ?? 0) + 1);
      node.style.gridColumn = String((n.column ?? 0) + 1);

      const top = el("div", "treeNodeTop");
      const badge = el("div", "treeBadge", n.code || "");
      const label = el("div", "treeLabel", n.label || "");
      top.appendChild(badge);
      top.appendChild(label);

      node.appendChild(top);

      const meta = el("div", "treeMeta");
      if (n.pv !== undefined && n.pv !== null) {
        const pv = el("div", "treePV", "", true);
        const val = String(n.pv).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        pv.innerHTML = `<span class="k">PV</span> <span class="v">${val}</span>`;
        meta.appendChild(pv);
      }
      node.appendChild(meta);

      // === NEW FIX: LEFT SIDE BADGE ===
      if (n.totalVal) {
        // שימוש במחלקה החדשה treeTotalLeft
        const totalBadge = el("div", "treeTotalLeft", n.totalVal);
        
        // אבטחה נוספת עם Inline Styles כדי לוודא שזה עובד
        totalBadge.style.cssText = `
          position: absolute;
          top: -15px !important;
          right: 50% !important;
          margin-right: 45px !important; /* דוחף שמאלה מהאמצע */
          left: auto !important;
          background: #2563eb;
          color: #fff;
          font-size: 0.7rem;
          font-weight: 800;
          padding: 3px 8px;
          border-radius: 20px;
          box-shadow: 0 2px 4px rgba(37,99,235,0.3);
          z-index: 20;
          white-space: nowrap;
        `;
        node.appendChild(totalBadge);
      }

      if (tree.highlightId && n.id === tree.highlightId) {
        const here = el("div", "treeHere", "אתה כאן");
        node.appendChild(here);
      }

      nodesLayer.appendChild(node);
      nodeEls.set(n.id, node);
    });

    requestAnimationFrame(() => {
      drawEdges(tree, svg, canvas, nodeEls);
    });

    if (Array.isArray(tree.notes) && tree.notes.length) {
      const notes = el("div", "treeNotes");
      const ttl = el("div", "treeNotesTitle", "הערות / ניתוח מצב");
      notes.appendChild(ttl);
      const ul = el("ul", "treeNotesList");
      tree.notes.forEach(t => ul.appendChild(el("li", "", t, true)));
      notes.appendChild(ul);
      wrap.appendChild(notes);
    }

    mount.appendChild(wrap);
  }

  function getMaxCols(nodes) {
    let m = 1;
    nodes.forEach(n => {
      const c = (n.column ?? 0) + 1;
      if (c > m) m = c;
    });
    return Math.max(m, 1);
  }

  function getMaxRows(nodes) {
    let m = 1;
    nodes.forEach(n => {
      const r = (n.generation ?? 0) + 1;
      if (r > m) m = r;
    });
    return Math.max(m, 1);
  }

  function drawEdges(tree, svg, canvas, nodeEls) {
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    const cRect = canvas.getBoundingClientRect();

    function centerOf(nodeEl) {
      const r = nodeEl.getBoundingClientRect();
      const x = (r.left + r.right) / 2 - cRect.left;
      const y = (r.top + r.bottom) / 2 - cRect.top;
      return { x, y };
    }

    tree.edges.forEach(e => {
      const fromEl = nodeEls.get(e.from);
      const toEl = nodeEls.get(e.to);
      if (!fromEl || !toEl) return;

      const a = centerOf(fromEl);
      const b = centerOf(toEl);

      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("class", "treeEdgePath");
      const midY = (a.y + b.y) / 2;
      const d = `M ${a.x} ${a.y} C ${a.x} ${midY}, ${b.x} ${midY}, ${b.x} ${b.y}`;
      path.setAttribute("d", d);
      svg.appendChild(path);
    });

    svg.setAttribute("viewBox", `0 0 ${cRect.width} ${cRect.height}`);
    svg.setAttribute("preserveAspectRatio", "none");
  }

  function init() {
    const mount = document.getElementById("rankTreeMount");
    if (!mount) return;
    const rankId = getRankIdFromUrl();
    if (!rankId) return;
    const rank = getRankById(rankId);
    if (!rank) {
      mount.innerHTML = `<div class="treeError">שגיאה: דרגה לא נמצאה (id=${rankId}).</div>`;
      return;
    }
    const tree = window.RANK_TREES ? window.RANK_TREES[rankId] : null;
    if (!tree) {
      mount.innerHTML = `<div class="treeError">טרם הוגדר עץ לדרגה זו.</div>`;
      return;
    }
    renderTree(tree, mount);
  }

  document.addEventListener("DOMContentLoaded", init);
})();
