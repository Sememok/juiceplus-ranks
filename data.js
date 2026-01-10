/* =========================
   DATA.JS – FULL REPLACEMENT
   ========================= */

/* =========================
   RANKS – תוכן דרגות
   ========================= */

window.RANKS = [
  {
    id: "partner_plus",
    title: "Partner Plus",
    intro: "התקדמות ראשונה שמבוססת על פעילות עקבית והגדלת נפח אישי/קבוצתי.",
    videoUrl: "https://youtu.be/M293NdN7Sok?si=da8BUiVp5Qy-Z_5y",
    bullets: [
      "מיקוד: הזמנה אישית + סגירות פשוטות.",
      "יעד: יצירת 2–3 לקוחות חוזרים יציבים.",
      "בניית הרגל עבודה עקבי."
    ],
    nodeCode: "P+"
  },
  {
    id: "senior_partner",
    title: "Senior Partner",
    intro: "עבודה מודעת על פייליין: שילוב אישי + לקוחות.",
    videoUrl: "https://youtu.be/fnG6Eld0SPk",
    bullets: [
      "הרחבת בסיס לקוחות.",
      "שני מסלולים פעילים.",
      "שגרה שבועית."
    ],
    nodeCode: "SP"
  }
];

/* =========================
   RANK TREES – עצים ארגוניים
   ========================= */

window.RANK_TREES = {

  /* =========================
     PARTNER PLUS (P+)
     ========================= */

  partner_plus: {
    title: "עץ ארגוני – Partner Plus (P+)",
    description: "מבנה לדוגמה לפי השרטוט הידני שלך + חישובי נקודות (PV).",
    pageSize: "A4",
    highlightId: "you",

    nodes: [
      {
        id: "you",
        label: "אתה",
        code: "P+",
        pv: 866,
        generation: 0,
        column: 1
      },

      {
        id: "left",
        label: "קו שמאל",
        code: "P",
        pv: 283,
        generation: 1,
        column: 0
      },
      {
        id: "center",
        label: "קו אמצע",
        code: "P",
        pv: 2561,
        generation: 1,
        column: 1
      },
      {
        id: "right",
        label: "קו ימין",
        code: "P",
        pv: 866,
        generation: 1,
        column: 2
      }
    ],

    edges: [
      { from: "you", to: "left" },
      { from: "you", to: "center" },
      { from: "you", to: "right" }
    ],

    notes: [
      "הנקודות המסומנות בעיגול אדום בשרטוט – מופיעות כאן כ-PV.",
      "הדוגמה ממחישה פיזור נפח בין קווים.",
      "ניתן להוסיף דורות נוספים בהמשך."
    ]
  }

};
