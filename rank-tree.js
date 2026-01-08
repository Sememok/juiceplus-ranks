/* rank-tree.js
   Draws a simple generation tree with connectors + "אתה כאן" highlight.
*/

function getParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

function safeText(s) {
  return (s ?? "").toString();
}

function renderRankTree(options) {
  const {
    rankKey,
    containerId,
    currentNodeCode = null,
    title = "עץ התקדמות לדרגה",
  } = options || {};

  const container = document.getElementById(containerId);
  if (!container) return;

  // Clear
  container.innerHTML = "";

  // Validate data
  if (typeof window.RANK_TREES === "undefined") {
    container.innerHTML =
      `<div class="tree-error">שגיאה: RANK_TREES לא נטען (בדוק data.js)</div>`;
    return;
  }

  const tree = window.RANK_TREES[rankKey];
  if (!tree) {
    container.innerHTML =
      `<div class="tree-error">שגיאה: לא נמצא עץ לדרגה: <b>${safeText(rankKey)}</b></div>`;
    return;
  }

  // Header
  const h = document.createElement("div");
  h.className = "tree-header";
  h.innerHTML = `<h3>${safeText(title)}</h3>`;
  container.appendChild(h);

  // Build grid
  const grid = document.createElement("div");
  grid.className = "tree-grid";
  container.appendChild(grid);

  // Create generation rows
  const rows = [];
  tree.generations.forEach((gen, gi) => {
    const row = document.createElement("div");
    row.className = "tree-row";
    row.dataset.gen = String(gi);

    gen.forEach((node) => {
      const code = safeText(node);

      const n = document.createElement("div");
      n.className = `tree-node rank-${cssEscapeRank(code)}`;
      n.dataset.code = code;

      // highlight
      if (currentNodeCode && code === currentNodeCode) {
        n.classList.add("is-current");
        n.title = "אתה כאן";
      }

      n.innerHTML = `<span class="node-label">${code}</span>`;
      row.appendChild(n);
    });

    rows.push(row);
    grid.appendChild(row);
  });

  // Info line
  if (tree.info) {
    const info = document.createElement("div");
    info.className = "tree-info";
    info.textContent = safeText(tree.info);
    container.appendChild(info);
  }

  // Draw connector lines (simple: connect each row to next row, centered)
  // We do this with an SVG overlay sized to the grid.
  drawConnectors(grid, tree, currentNodeCode);
}

function cssEscapeRank(code) {
  // for CSS class usage: P+ -> Pplus, etc
  return code.replace(/\+/g, "plus").replace(/\s+/g, "-");
}

function drawConnectors(gridEl, tree, currentNodeCode) {
  // Remove old svg if exists
  const old = gridEl.querySelector("svg.tree-lines");
  if (old) old.remove();

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add("tree-lines");
  svg.setAttribute("aria-hidden", "true");
  gridEl.prepend(svg);

  // Wait for layout
  requestAnimationFrame(() => {
    const rect = gridEl.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    svg.setAttribute("width", width);
    svg.setAttribute("height", height);
    svg.setAttribute("viewBox", `0 0 ${width} ${height}`);

    const rows = Array.from(gridEl.querySelectorAll(".tree-row"));

    // For each pair of adjacent rows, connect every node in upper row
    // to the nearest node in the lower row (simple/clean for printed booklet).
    for (let i = 0; i < rows.length - 1; i++) {
      const upper = Array.from(rows[i].querySelectorAll(".tree-node"));
      const lower = Array.from(rows[i + 1].querySelectorAll(".tree-node"));

      if (!upper.length || !lower.length) continue;

      upper.forEach((u) => {
        const uRect = u.getBoundingClientRect();
        const ux = (uRect.left + uRect.right) / 2 - rect.left;
        const uy = (uRect.bottom) - rect.top;

        // find nearest lower node by x
        let best = lower[0];
        let bestDx = Infinity;
        lower.forEach((l) => {
          const lRect = l.getBoundingClientRect();
          const lx = (lRect.left + lRect.right) / 2 - rect.left;
          const dx = Math.abs(lx - ux);
          if (dx < bestDx) {
            bestDx = dx;
            best = l;
          }
        });

        const bRect = best.getBoundingClientRect();
        const bx = (bRect.left + bRect.right) / 2 - rect.left;
        const by = (bRect.top) - rect.top;

        // curve
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        const midY = (uy + by) / 2;
        const d = `M ${ux} ${uy} C ${ux} ${midY}, ${bx} ${midY}, ${bx} ${by}`;
        path.setAttribute("d", d);
        path.setAttribute("class", "tree-line");

        // highlight if connects from current node
        if (u.classList.contains("is-current") || best.classList.contains("is-current")) {
          path.classList.add("is-current-line");
        }

        svg.appendChild(path);
      });
    }
  });
}
