/* rank-tree.js
   Renders a fixed, print-friendly "Generations Tree" per rank.
   Depends on: window.RANK_TREES (from data.js)
*/

(function () {
  function el(tag, className, html) {
    const e = document.createElement(tag);
    if (className) e.className = className;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  function normalizeRankClass(code) {
    // For CSS class usage
    return String(code).replace("+", "plus").toLowerCase();
  }

  function renderRankTree(rankName, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const tree = (window.RANK_TREES || {})[rankName];
    if (!tree) {
      container.innerHTML = `<div class="tree-missing">אין תרשים מוגדר לדרגה: <b>${rankName}</b></div>`;
      return;
    }

    container.innerHTML = "";

    // Header
    const header = el("div", "tree-header");
    header.appendChild(el("div", "tree-title", "עץ דורות ונקודות לדרגה"));
    if (tree.subtitle) header.appendChild(el("div", "tree-subtitle", tree.subtitle));
    container.appendChild(header);

    // Grid
    const grid = el("div", "tree-grid");

    tree.generations.forEach((genRow, idx) => {
      const row = el("div", "tree-row");
      const label = el("div", "tree-row-label", `דור ${idx + 1}`);
      row.appendChild(label);

      const nodes = el("div", "tree-nodes");

      genRow.forEach((node) => {
        const code = node.rank || "";
        const nodeWrap = el("div", "tree-node-wrap");

        const nodeEl = el("div", `tree-node rank-${normalizeRankClass(code)}`, code);
        nodeWrap.appendChild(nodeEl);

        if (node.points !== undefined && node.points !== null && String(node.points).length) {
          nodeWrap.appendChild(el("div", "tree-points", `${node.points}`));
        }

        if (node.note) {
          nodeWrap.appendChild(el("div", "tree-note", node.note));
        }

        nodes.appendChild(nodeWrap);
      });

      row.appendChild(nodes);
      grid.appendChild(row);
    });

    container.appendChild(grid);

    // Footer info (requirements / payline / PB / POB / BIB)
    const info = el("div", "tree-info");
    const items = [];

    if (tree.requirement) items.push(`<div class="tree-pill"><b>דרישה:</b> ${tree.requirement}</div>`);
    if (tree.payline) items.push(`<div class="tree-pill"><b>Payline:</b> ${tree.payline}</div>`);
    if (tree.pb) items.push(`<div class="tree-pill"><b>PB:</b> ${tree.pb}</div>`);
    if (tree.pob) items.push(`<div class="tree-pill"><b>POB:</b> ${tree.pob}</div>`);
    if (tree.bib) items.push(`<div class="tree-pill"><b>BIB:</b> ${tree.bib}</div>`);

    if (items.length) {
      info.innerHTML = items.join("");
      container.appendChild(info);
    }

    if (tree.disclaimer) {
      container.appendChild(el("div", "tree-disclaimer", tree.disclaimer));
    }
  }

  // Expose globally
  window.renderRankTree = renderRankTree;
})();

