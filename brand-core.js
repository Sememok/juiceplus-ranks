<!doctype html>
<html lang="he" dir="rtl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>ראשי - מפת הדרגות</title>
  <link rel="stylesheet" href="style.css?v=FINAL_PRINT" />
  <style>
    .dashboard-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 20px; padding: 30px 0; padding-bottom: 80px; }
    .rank-card-link { background: white; border-radius: 12px; padding: 25px; text-decoration: none; color: inherit; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border-top: 5px solid #16a34a; transition: transform 0.2s, box-shadow 0.2s; display: flex; flex-direction: column; align-items: center; text-align: center; position: relative; overflow: hidden; }
    .rank-card-link:hover { transform: translateY(-5px); box-shadow: 0 8px 15px rgba(0,0,0,0.1); }
    .rank-card-link::before { content: ''; position: absolute; top: -20px; right: -20px; width: 80px; height: 80px; background: rgba(22, 163, 74, 0.05); border-radius: 50%; }
    .rank-code { font-size: 2.5rem; font-weight: 800; color: #166534; margin-bottom: 10px; line-height: 1; }
    .rank-name { font-size: 1.1rem; font-weight: 500; color: #333; }
    .click-hint { margin-top: 15px; font-size: 0.85rem; color: #666; background: #f0fdf4; padding: 4px 12px; border-radius: 15px; }
    .fab-products { position: fixed; bottom: 30px; left: 30px; background-color: #ff6b00; color: white; text-decoration: none; padding: 15px 25px; border-radius: 50px; box-shadow: 0 4px 20px rgba(255, 107, 0, 0.4); font-weight: bold; font-size: 1.2rem; z-index: 1000; display: flex; align-items: center; gap: 10px; transition: transform 0.2s; }
    .fab-products:hover { transform: scale(1.05); background-color: #e65100; }
    .fab-icon { font-size: 1.5rem; }
    @media (max-width: 600px) { .fab-products { bottom: 20px; left: 20px; padding: 12px 20px; font-size: 1rem; } }
  </style>
</head>
<body>
  <header class="topbar">
    <div class="topbar-inner">
      <div class="brand-left">
         <div class="brand-logo">
            <img data-brand="logo" alt="לוגו" style="display:none">
            <span class="fallback" data-brand="logoFallback">LOGO</span>
         </div>
      </div>
      <div class="brand-center">
        <div class="brand-title" data-brand="title">המסע המשותף שלנו</div>
        <div class="brand-sub">בחר דרגה כדי להתחיל</div>
      </div>
    </div>
  </header>
  <main class="container"><div class="dashboard-grid" id="dashboardGrid"></div></main>
  <a href="products.html" class="fab-products"><span class="fab-icon">🍎</span><span>קטלוג מוצרים</span></a>
  
  <script src="brand-core.js"></script>
  <script src="data.js?v=FINAL_DATA"></script>
  <script>
    document.addEventListener("DOMContentLoaded", () => {
      const grid = document.getElementById("dashboardGrid");
      if(!window.RANKS) { grid.innerHTML = "<p style='text-align:center;'>טוען נתונים...</p>"; return; }
      window.RANKS.forEach(rank => {
        const card = document.createElement("a");
        card.className = "rank-card-link";
        card.href = `rank.html?id=${rank.id}`; 
        card.innerHTML = `<div class="rank-code">${rank.nodeCode || rank.title}</div><div class="rank-name">${rank.title}</div><div class="click-hint">לחץ לפרטים וסימולציה</div>`;
        grid.appendChild(card);
      });
    });
  </script>
</body>
</html>
