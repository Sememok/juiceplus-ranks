function renderRankTree(rankKey, containerId) {
  if (typeof RANK_TREES === "undefined") {
    console.error("RANK_TREES לא קיים");
    return;
  }

  const tree = RANK_TREES[rankKey];
  if (!tree) {
    console.warn("לא נמצא עץ לדרגה:", rankKey);
    return;
  }

  const container = document.getElementById(containerId);
  if (!container) {
    console.warn("לא נמצא container לעץ");
    return;
  }

  container.innerHTML = "";

  tree.generations.forEach((generation, genIndex) => {
    const row = document.createElement("div");
    row.className = "tree-row";

    generation.forEach(node => {
      const n = document.createElement("div");
      n.className = `tree-node rank-${node}`;
      n.innerText = node;
      row.appendChild(n);
    });

    container.appendChild(row);
  });

  if (tree.info) {
    const info = document.createElement("div");
    info.className = "tree-info";
    info.innerText = tree.info;
    container.appendChild(info);
  }
}
