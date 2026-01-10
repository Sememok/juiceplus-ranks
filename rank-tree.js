/* =========================
   rank-tree.js – FIXED & ROBUST
   Supports HTML in notes + Error Reporting
   ========================= */

(function () {
  // Helper to create elements. 
  // Added 'isHtml' flag to support colored notes.
  function el(tag, cls, content, isHtml = false) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (content !== undefined && content !== null) {
      if (isHtml) e.innerHTML = content;
      else e.textContent = content;
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
    mount.innerHTML = ""; // Clear previous

    try {
      const wrap = el("div", "treeWrap");
      const header = el("div", "treeHeader");

      header.appendChild(el("div", "treeTitle", tree.title || "עץ התקדמות"));
      if (tree.description) header.appendChild(el("div", "treeDesc", tree.description));
      wrap.appendChild(header);

      const canvas = el("div", "treeCanvas");
      // Calculate grid size
      const cols = getMaxCols(tree.nodes);
      const rows = getMaxRows(tree.nodes);
      
      canvas.style.setProperty("--cols", String(cols));
      canvas.style.setProperty("--rows", String(rows));
      wrap.appendChild(canvas);

      // nodes layer
      const nodesLayer = el("div", "treeNodesLayer");
      canvas.appendChild(nodesLayer);

      // edges layer (SVG)
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("class", "treeEdges");
      canvas.appendChild(svg);

      // create node elements
      const nodeEls = new Map();
      tree.nodes.forEach(n => {
        const node = el("div", "treeNode");
        node.dataset.nodeId = n.id;

        if (tree.highlightId && n.id === tree.highlightId) node.classList.add("isHere");

        // grid positioning (1-based)
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
          const pv = el("div", "treePV", "", true); // HTML allowed for PV formatting
          // Format number with commas
          const val = String(n.pv).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          pv.innerHTML = `<span class="k">PV</span> <span class="v">${val}</span>`;
          meta.appendChild(pv);
        }
        node.appendChild(meta);

        if (tree.highlightId && n.id === tree.highlightId) {
          const here = el("div", "treeHere", "אתה כאן");
          node.appendChild(here);
        }

        nodesLayer.appendChild(node);
        nodeEls.set(n.id, node);
      });

      // Draw edges after layout
      requestAnimationFrame(() => {
        try {
          drawEdges(tree, svg, canvas, nodeEls);
        } catch (err) {
          console.error("Error drawing edges:", err);
        }
      });

      // Notes Section (Supported HTML for colors)
      if (Array.isArray(tree.notes) && tree.notes.length) {
        const notes = el("div", "treeNotes");
        const ttl = el("div", "treeNotesTitle", "הערות / ניתוח מצב");
        notes.appendChild(ttl);
        const ul = el("ul", "treeNotesList");
        tree.notes.forEach(t => {
          // Pass true to enable innerHTML
          ul.appendChild(el("li", "", t, true));
        });
        notes.appendChild(ul);
        wrap.appendChild(notes);
      }

      mount.appendChild(wrap);

    } catch (e) {
      console.error(e);
      mount.innerHTML = `<div class="treeError">שגיאה בבניית העץ: ${e.message}</div>`;
    }
  }

  function getMaxCols(nodes) {
    let m = 1;
    if(!nodes) return 1;
    nodes.forEach(n => {
      const c = (n.column ?? 0) + 1;
      if (c > m) m = c;
    });
    return Math.max(m, 1);
  }

  function getMaxRows(nodes) {
    let m = 1;
    if(!nodes) return 1;
    nodes.forEach(n => {
      const r = (n.generation ?? 0) + 1;
      if (r > m) m = r;
    });
    return Math.max(m, 1);
  }

  function drawEdges(tree, svg, canvas, nodeEls) {
    // Clear previous
    while (svg.firstChild) svg.removeChild(svg.firstChild);
    if (!tree.edges) return;

    const cRect = canvas.getBoundingClientRect();

    function centerOf(nodeEl) {
      const r = nodeEl.getBoundingClientRect();
      // Calculate relative to canvas
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

      // Bezier curve for smooth connector
      const midY = (a.y + b.y) / 2;
      const d = `M ${a.x} ${a.y} C ${a.x} ${midY}, ${b.x} ${midY}, ${b.x} ${b.y}`;
      path.setAttribute("d", d);

      svg.appendChild(path);
    });

    // Update SVG size
    svg.setAttribute("viewBox", `0 0 ${cRect.width} ${cRect.height}`);
    svg.setAttribute("preserveAspectRatio", "none");
  }

  function init() {
    const mount = document.getElementById("rankTreeMount");
    if (!mount) return; // Not on rank page

    const rankId = getRankIdFromUrl();
    if (!rankId) {
      // Don't show error if just no ID (e.g. index page)
      return;
    }

    // Safety checks
    if (typeof window.RANKS === 'undefined' || typeof window.RANK_TREES === 'undefined') {
      mount.innerHTML = `<div class="treeError">שגיאה: הקובץ data.js לא נטען כראוי.</div>`;
      return;
    }

    const rank = getRankById(rankId);
    if (!rank) {
      mount.innerHTML = `<div class="treeError">שגיאה: דרגה לא נמצאה במערכת (id=${rankId}).</div>`;
      return;
    }

    const tree = window.RANK_TREES[rankId];
    if (!tree) {
      mount.innerHTML = `<div class="treeError">טרם הוגדר עץ לדרגה זו (${rank.title}).</div>`;
      return;
    }

    renderTree(tree, mount);
  }

  // Expose for booklet print usage
  window.renderRankTree = function(opts) {
    if(!opts || !opts.containerId) return;
    const mount = document.getElementById(opts.containerId);
    if(!mount) return;
    
    // Find tree by title or code if passed
    // Here we assume booklet passes the correct data structure logic
    // But simplified: booklet logic in HTML usually calls this. 
    // We will just let the booklet script handle itself or use this if needed.
  };

  document.addEventListener("DOMContentLoaded", init);
})();
