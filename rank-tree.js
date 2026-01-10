/* rank-tree.js
   Renders a clean SVG org-tree per rank.
   Requirements:
   - data.js defines window.RANK_TREES = { [rankId]: { nodes, edges, highlightId, title } }
   - rank.html contains <div id="rankTree" class="rank-tree"></div>
*/

(function () {
  function el(tag, attrs = {}, children = []) {
    const n = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => {
      if (k === "class") n.className = v;
      else if (k === "html") n.innerHTML = v;
      else n.setAttribute(k, v);
    });
    children.forEach((c) => n.appendChild(c));
    return n;
  }

  function svgEl(tag, attrs = {}, children = []) {
    const n = document.createElementNS("http://www.w3.org/2000/svg", tag);
    Object.entries(attrs).forEach(([k, v]) => n.setAttribute(k, v));
    children.forEach((c) => n.appendChild(c));
    return n;
  }

  function roundedPath(x, y, w, h, r) {
    // Simple rounded-rect path
    return `
      M ${x + r} ${y}
      H ${x + w - r}
      Q ${x + w} ${y} ${x + w} ${y + r}
      V ${y + h - r}
      Q ${x + w} ${y + h} ${x + w - r} ${y + h}
      H ${x + r}
      Q ${x} ${y + h} ${x} ${y + h - r}
      V ${y + r}
      Q ${x} ${y} ${x + r} ${y}
      Z
    `;
  }

  function renderTree(container, tree) {
    container.innerHTML = "";

    if (!tree || !tree.nodes || !tree.nodes.length) {
      container.appendChild(
        el("div", { class: "tree-empty", html: "טרם הוגדר עץ לדרגה זו." })
      );
      return;
    }

    // Layout
    // We expect nodes have: id, depth (0..), col (0..), title, subtitle, pointsLabel, pointsValue
    const nodes = tree.nodes.slice();
    const edges = (tree.edges || []).slice();
    const highlightId = tree.highlightId;

    // A4-friendly width: 860px max, scale down on screen via CSS
    const W = 860;
    const paddingX = 50;
    const paddingY = 35;

    const cardW = 220;
    const cardH = 110;
    const gapX = 60;
    const gapY = 70;

    const maxDepth = Math.max(...nodes.map((n) => n.depth));
    const levels = Array.from({ length: maxDepth + 1 }, (_, d) =>
      nodes.filter((n) => n.depth === d)
    );

    // Compute X positions by centering each level
    levels.forEach((lvl) => {
      lvl.sort((a, b) => (a.col ?? 0) - (b.col ?? 0));
      const count = lvl.length;
      const totalW = count * cardW + (count - 1) * gapX;
      const startX = (W - totalW) / 2;
      lvl.forEach((n, i) => {
        n._x = startX + i * (cardW + gapX);
      });
    });

    // Y positions by depth
    nodes.forEach((n) => {
      n._y = paddingY + n.depth * (cardH + gapY);
    });

    const H = paddingY + (maxDepth + 1) * cardH + maxDepth * gapY + paddingY;

    const svg = svgEl("svg", {
      viewBox: `0 0 ${W} ${H}`,
      width: "100%",
      height: "auto",
      role: "img",
      "aria-label": tree.title || "עץ התקדמות לדרגה",
    });

    // Background subtle grid (print-safe)
    svg.appendChild(
      svgEl("defs", {}, [
        svgEl("pattern", { id: "grid", width: "24", height: "24", patternUnits: "userSpaceOnUse" }, [
          svgEl("path", { d: "M 24 0 L 0 0 0 24", fill: "none", stroke: "rgba(0,0,0,0.05)", "stroke-width": "1" })
        ]),
        svgEl("filter", { id: "shadow", x: "-20%", y: "-20%", width: "140%", height: "140%" }, [
          svgEl("feDropShadow", { dx: "0", dy: "6", stdDeviation: "8", "flood-color": "rgba(0,0,0,0.18)" })
        ])
      ])
    );

    svg.appendChild(
      svgEl("rect", {
        x: "0",
        y: "0",
        width: String(W),
        height: String(H),
        fill: "url(#grid)",
      })
    );

    // Title
    if (tree.title) {
      svg.appendChild(
        svgEl("text", {
          x: String(W / 2),
          y: "28",
          "text-anchor": "middle",
          "font-size": "18",
          "font-weight": "700",
          fill: "#1f2a37",
        }, [document.createTextNode(tree.title)])
      );
    }

    // Edges (connectors) – draw behind cards
    const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));
    edges.forEach((e) => {
      const a = byId[e.from];
      const b = byId[e.to];
      if (!a || !b) return;

      const ax = a._x + cardW / 2;
      const ay = a._y + cardH;
      const bx = b._x + cardW / 2;
      const by = b._y;

      const midY = (ay + by) / 2;
      const d = `M ${ax} ${ay}
                 C ${ax} ${midY}, ${bx} ${midY}, ${bx} ${by}`;

      svg.appendChild(
        svgEl("path", {
          d,
          fill: "none",
          stroke: "#0b5bd3",
          "stroke-width": "3",
          "stroke-linecap": "round",
          "stroke-dasharray": e.dashed ? "7 7" : "0",
          opacity: "0.75",
        })
      );

      // Small connector dot near child
      svg.appendChild(
        svgEl("circle", {
          cx: String(bx),
          cy: String(by),
          r: "5",
          fill: "#0b5bd3",
          opacity: "0.85",
        })
      );
    });

    // Cards
    nodes.forEach((n) => {
      const isHighlight = n.id === highlightId;

      const group = svgEl("g", {});

      // Card base
      group.appendChild(
        svgEl("path", {
          d: roundedPath(n._x, n._y, cardW, cardH, 16),
          fill: isHighlight ? "#0b5bd3" : "#ffffff",
          filter: "url(#shadow)",
          stroke: isHighlight ? "#0b5bd3" : "rgba(0,0,0,0.08)",
          "stroke-width": isHighlight ? "2" : "1",
        })
      );

      // Icon circle
      group.appendChild(
        svgEl("circle", {
          cx: String(n._x + 34),
          cy: String(n._y + 36),
          r: "18",
          fill: isHighlight ? "rgba(255,255,255,0.22)" : "rgba(11,91,211,0.12)",
          stroke: isHighlight ? "rgba(255,255,255,0.35)" : "rgba(11,91,211,0.25)",
          "stroke-width": "2",
        })
      );
      group.appendChild(
        svgEl("path", {
          d: `M ${n._x + 34} ${n._y + 30}
              a 6 6 0 1 0 0.01 0
              M ${n._x + 22} ${n._y + 50}
              c 6 -10 18 -10 24 0`,
          fill: "none",
          stroke: isHighlight ? "#fff" : "#0b5bd3",
          "stroke-width": "2.2",
          "stroke-linecap": "round",
        })
      );

      // Title
      group.appendChild(
        svgEl("text", {
          x: String(n._x + 64),
          y: String(n._y + 32),
          "font-size": "15",
          "font-weight": "800",
          fill: isHighlight ? "#ffffff" : "#111827",
        }, [document.createTextNode(n.title || "")])
      );

      // Subtitle (rank/role)
      group.appendChild(
        svgEl("text", {
          x: String(n._x + 64),
          y: String(n._y + 52),
          "font-size": "12",
          "font-weight": "600",
          fill: isHighlight ? "rgba(255,255,255,0.85)" : "#374151",
        }, [document.createTextNode(n.subtitle || "")])
      );

      // Points line
      const pointsText = `${n.pointsLabel || "נקודות"}: ${n.pointsValue ?? ""}`;
      group.appendChild(
        svgEl("text", {
          x: String(n._x + 64),
          y: String(n._y + 78),
          "font-size": "12",
          "font-weight": "700",
          fill: isHighlight ? "#ffffff" : "#0b5bd3",
        }, [document.createTextNode(pointsText)])
      );

      // Highlight badge: "אתה כאן"
      if (isHighlight) {
        group.appendChild(
          svgEl("path", {
            d: roundedPath(n._x + cardW - 96, n._y + 10, 86, 26, 13),
            fill: "#ffffff",
            opacity: "0.95",
          })
        );
        group.appendChild(
          svgEl("text", {
            x: String(n._x + cardW - 53),
            y: String(n._y + 28),
            "text-anchor": "middle",
            "font-size": "12",
            "font-weight": "900",
            fill: "#0b5bd3",
          }, [document.createTextNode("אתה כאן")])
        );
      }

      svg.appendChild(group);
    });

    container.appendChild(svg);

    // Print hint (optional small caption)
    const caption = el("div", { class: "tree-caption" });
    caption.innerHTML = tree.caption || "";
    if (caption.innerHTML.trim()) container.appendChild(caption);
  }

  // Public API
  window.renderRankTree = function renderRankTree(rankId) {
    const container = document.getElementById("rankTree");
    if (!container) return;

    const trees = window.RANK_TREES || {};
    const tree = trees[rankId];

    renderTree(container, tree);
  };
})();
