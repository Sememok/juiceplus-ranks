/* data-fixed.js
   FINAL CLEAN LAYOUT
   - Organized strictly by vertical columns to prevent messy diagonal lines.
   - Root is centered (Column 4).
   - Legs spread out symmetrically.
   - Includes correct PV (28,100).
*/

window.RANKS = [
  {
    id: "partner_plus",
    title: "Partner Plus",
    intro: "התקדמות ראשונה: בניית בסיס לקוחות ראשוני.",
    videoUrl: "https://youtu.be/M293NdN7Sok?si=da8BUiVp5Qy-Z_5y",
    bullets: [
      "יעד: 4,000 נקודות פרומו (חודש 1 להסמכה).",
      "מינימום אישי: 4,000 נקודות (אפשר הכל אישי או עם לקוחות).",
      "בונוס דרגה: 400 ₪.",
      "תשלום הבונוס: תשלום אחד."
    ],
    nodeCode: "P+",
    qrFile: "Partner Plus.png"
  },
  {
    id: "senior_partner",
    title: "Senior Partner",
    intro: "בניית יציבות ולקוחות חוזרים.",
    videoUrl: "https://youtu.be/fnG6Eld0SPk?si=7ZozniTLZHIG5qR8",
    bullets: [
      "יעד: 12,000 נקודות פרומו (בתוך חלון של 2 חודשים).",
      "חוק 50%: מקסימום 6,000 נקודות מרגל אחת.",
      "מינימום אישי: 4,000 נקודות.",
      "בונוס דרגה כולל: 1,200 ₪.",
      "חלוקת הבונוס: 400 ₪ בחודש הראשון + 800 ₪ בחודש השני (מותנה באישור מחדש)."
    ],
    nodeCode: "SP",
    qrFile: "Senior Partner.png"
  },
  {
    id: "sales_coordinator",
    title: "Sales Coordinator",
    intro: "הדרגה הניהולית הראשונה: בניית צוות ומבנה רוחב.",
    videoUrl: "https://youtu.be/cyJb_ecWjyA?si=JjClNcImW1bs86Ig",
    bullets: [
      "מבנה נדרש: זכיין אחד בדרגת Partner Plus (מבנה 1 רגל PB).",
      "יעד: 28,000 נקודות פרומו (בחלון של 2 חודשים).",
      "חוק 50%: מקסימום 14,000 נקודות מרגל אחת.",
      "מינימום אישי: 4,000 נקודות.",
      "בונוס דרגה כולל: 3,600 ₪.",
      "חלוקת הבונוס: 1,200 ₪ בחודש הראשון + 2,400 ₪ בחודש השני."
    ],
    nodeCode: "SC",
    qrFile: "Sales Coordinator.png"
  },
  {
    id: "qssc",
    title: "Qualifying Senior Sales Coordinator",
    intro: "שלב ביניים בדרך לניהול בכיר.",
    videoUrl: "https://youtu.be/ru06kEc9kqE?si=9yvL3LZ5Qm80YEak",
    bullets: [
      "מבנה נדרש: 2 רגלי PB (זכיינים בדרגת P+ ומעלה).",
      "יעד: 56,000 נקודות (בחלון של 3 חודשים).",
      "חוק 50%: מקסימום 28,000 נקודות מרגל אחת.",
      "בונוס דרגה כולל: 4,800 ₪.",
      "חלוקת הבונוס: 1,400 ₪ + 1,400 ₪ + 2,000 ₪ (לאורך 3 חודשים)."
    ],
    nodeCode: "QSSC",
    qrFile: "Qualifying Senior Sales Coordinator.png"
  },
  {
    id: "ssc",
    title: "Senior Sales Coordinator",
    intro: "ניהול צוות מתקדם ויציב.",
    videoUrl: "https://youtu.be/xPwmFecZ8Ms?si=rqjGaml0ySJoif0x",
    bullets: [
      "מבנה נדרש: 3 רגלי PB (שלושה קווים פעילים).",
      "יעד: 111,000 נקודות (בחלון של 3 חודשים).",
      "חוק 50%: מקסימום 55,500 נקודות מרגל אחת.",
      "בונוס דרגה כולל: 10,000 ₪.",
      "חלוקת הבונוס: 2,500 ₪ + 2,500 ₪ + 5,000 ₪ (לאורך 3 חודשים)."
    ],
    nodeCode: "SSC",
    qrFile: "Senior Sales Coordinator.png"
  },
  {
    id: "qnmd",
    title: "Qualifying National Marketing Director",
    intro: "הכנה לדרגה הבכירה ביותר.",
    videoUrl: "https://youtu.be/W8Wm_c4kMUo?si=sRYcBXB5K67s3CgE",
    bullets: [
      "מבנה נדרש: 3 רגלי PB (מתוכן התחזקות קווים).",
      "יעד: 222,000 נקודות (בחלון של 3 חודשים).",
      "חוק 50%: מקסימום 111,000 נקודות מרגל אחת.",
      "בונוס דרגה כולל: 19,000 ₪.",
      "חלוקת הבונוס: 4,500 ₪ + 4,500 ₪ + 10,000 ₪ (לאורך 3 חודשים)."
    ],
    nodeCode: "QNMD",
    qrFile: "Qualifying National Marketing Director.png"
  },
  {
    id: "nmd",
    title: "National Marketing Director",
    intro: "הדרגה הלאומית הבכירה - NMD.",
    videoUrl: "https://youtu.be/muieHSXIocI?si=mgdWJi4OJRh0YzLE",
    bullets: [
      "מבנה נדרש: 5 רגלי PB + מתוכן 2 רגלי POB.",
      "יעד: 222,000 נקודות (בחלון של 3 חודשים).",
      "חוק 50%: מקסימום 111,000 נקודות מרגל אחת.",
      "בונוס דרגה כולל: 39,000 ₪.",
      "חלוקת הבונוס: 9,500 ₪ + 9,500 ₪ + 20,000 ₪ (לאורך 3 חודשים)."
    ],
    nodeCode: "NMD",
    qrFile: "National Marketing Director.png"
  },
  {
    id: "imd",
    title: "International Marketing Director",
    intro: "דרגה בינלאומית יוקרתית.",
    videoUrl: "https://youtu.be/WeEZlCjHAtU?si=O0jNx22vXu_D9QZC",
    bullets: [
      "מבנה נדרש: 5 רגלי PB + מתוכן 3 רגלי POB.",
      "יעד: 444,000 נקודות (4 מתוך 5 חודשים).",
      "בונוס דרגה כולל: 77,000 ₪.",
      "תנאי: עמידה ביעדים במשך 4 מתוך 5 חודשים."
    ],
    nodeCode: "IMD",
    qrFile: "International Marketing Director.png"
  },
  {
    id: "emd",
    title: "Executive Marketing Director",
    intro: "ניהול ארגון ענק ורב-דורי.",
    videoUrl: "https://youtu.be/KpKDNIc8R7k?si=SrOdHEqDI50v0lGi",
    bullets: [
      "מבנה נדרש: 5 רגלי PB + מתוכן 4 רגלי POB.",
      "יעד: 666,000 נקודות (4 מתוך 5 חודשים).",
      "בונוס דרגה כולל: 115,000 ₪.",
      "תנאי: עמידה ביעדים במשך 4 מתוך 5 חודשים."
    ],
    nodeCode: "EMD",
    qrFile: "Executive Marketing Director.png"
  },
  {
    id: "pmd",
    title: "Presidential Marketing Director",
    intro: "פסגת המנהיגות.",
    videoUrl: "https://youtu.be/2i3sVTpFxts?si=qD2kCXt6GRrnapvF",
    bullets: [
      "מבנה נדרש: 5 רגלי PB + מתוכן 5 רגלי POB.",
      "יעד: 888,000 נקודות (4 מתוך 5 חודשים).",
      "בונוס דרגה כולל: 153,000 ₪.",
      "תנאי: עמידה ביעדים במשך 4 מתוך 5 חודשים."
    ],
    nodeCode: "PMD",
    qrFile: "Presidential Marketing Director.png"
  },
  {
    id: "pmd_plus",
    title: "Presidential Marketing Director Plus",
    intro: "הדרגה הגבוהה ביותר בתוכנית.",
    videoUrl: "https://youtu.be/MVxQ4LPsj6w?si=KS57tgB9Lhyk_00X",
    bullets: [
      "מבנה נדרש: 8 רגלי PB + מתוכן 6 רגלי POB.",
      "יעד: 1,600,000 נקודות (4 מתוך 6 חודשים).",
      "בונוס דרגה כולל: 200,000 ₪.",
      "תנאי: עמידה ביעדים במשך 4 מתוך 6 חודשים."
    ],
    nodeCode: "PMD+",
    qrFile: "Presidential Marketing Director Plus.png"
  }
];

window.RANK_TREES = {
  partner_plus: {
    title: "עץ התקדמות – Partner Plus (P+)",
    description: "תרשים הממחיש הגעה ליעד של 4,000 נקודות.",
    highlightId: "you",
    nodes: [
      { id: "you",   label: "אתה",     code: "P+", pv: 866, totalVal: "סה״כ: 4,576", generation: 0, column: 1 },
      { id: "left",  label: "קו שמאל", code: "P",  pv: 283,  generation: 1, column: 0 },
      { id: "mid",   label: "קו אמצע", code: "P",  pv: 2561, generation: 1, column: 1 },
      { id: "right", label: "קו ימין", code: "P",  pv: 866,  generation: 1, column: 2 }
    ],
    edges: [
      { from: "you", to: "left" },
      { from: "you", to: "mid" },
      { from: "you", to: "right" }
    ],
    notes: [
      "<b>סה\"כ נקודות:</b> 4,576 (היעד: 4,000).",
      "<b>ניקוד אישי:</b> 866 נקודות.",
      "<b>סטטוס:</b> הושג היעד."
    ]
  },

  senior_partner: {
    title: "עץ התקדמות – Senior Partner (SP)",
    description: "תרשים מלא (כולל דור 2).",
    highlightId: "you",
    nodes: [
      { id: "you", label: "אתה (SP) - חודשיים", code: "P+", pv: 2561, totalVal: "סה״כ: 12,090", generation: 0, column: 2 },
      { id: "left_top", label: "זכיין P", code: "P", pv: 4192, generation: 1, column: 0 },
      { id: "mid_top", label: "לקוח אישי", code: "Client", pv: 2561, generation: 1, column: 2 },
      { id: "right_top", label: "זכיין P", code: "P", pv: 2776, generation: 1, column: 4 },
      { id: "left_bot", label: "לקוח/הזמנה", code: "Order", pv: 1631, generation: 2, column: 0 },
      { id: "right_bot", label: "לקוח/הזמנה", code: "Order", pv: 1145, generation: 2, column: 4 }
    ],
    edges: [
      { from: "you", to: "left_top" },
      { from: "you", to: "mid_top" },
      { from: "you", to: "right_top" },
      { from: "left_top", to: "left_bot" },
      { from: "right_top", to: "right_bot" }
    ],
    notes: [
      "<b>סה\"כ נקודות:</b> 12,090 (היעד: 12,000).",
      "<b>בונוס צפוי:</b> 1,200 ₪."
    ]
  },

  // === SC TREE - REDESIGNED & ALIGNED ===
  sales_coordinator: {
    title: "עץ התקדמות – Sales Coordinator (SC)",
    description: "תרשים מאורגן עם עמודות ישרות וברורות.",
    highlightId: "you",
    nodes: [
      // ROOT: Centered at Column 4
      { id: "you", label: "אתה (SC)", code: "SC", pv: 1245, totalVal: "סה״כ: 28,100", generation: 0, column: 4 },

      // COL 0: Clients (Stacked Vertically)
      { id: "leg1_client", label: "לקוח ישיר", code: "Client", pv: 2561, generation: 1, column: 0 },
      { id: "leg_new_client", label: "לקוח נוסף", code: "Client", pv: 1631, generation: 2, column: 0 },

      // COL 1: Leg 2 (Straight Down)
      { id: "leg2_top", label: "זכיין", code: "P", pv: 1631, generation: 1, column: 1 },
      { id: "leg2_bot", label: "זכיין", code: "P", pv: 2561, generation: 2, column: 1 },

      // COL 2: Leg 3 (Straight Down)
      { id: "leg3_top", label: "זכיין", code: "P", pv: 1631, generation: 1, column: 2 },
      { id: "leg3_bot", label: "זכיין", code: "P", pv: 2561, generation: 2, column: 2 },

      // COL 3: Leg 4 (Single)
      { id: "leg4_top", label: "זכיין", code: "P", pv: 930, generation: 1, column: 3 },

      // COL 5: Leg 5 (Strong P+) - Parent
      { id: "leg5_top", label: "זכיין (P+)", code: "P+", pv: 4300, generation: 1, column: 5 },
      
      // COL 5 & 6: Children of Leg 5
      // Client under P+ (shifted slightly right to Col 6)
      { id: "leg5_mid_client", label: "לקוח", code: "Client", pv: 436, generation: 2, column: 6 },
      // Partner under P+ (Straight down in Col 5)
      { id: "leg5_mid_p", label: "זכיין", code: "P", pv: 2561, generation: 2, column: 5 },
      // Grandchild (Straight down in Col 5)
      { id: "leg5_bot_p", label: "זכיין", code: "P", pv: 2561, generation: 3, column: 5 },

      // COL 7: Leg 6 (Far Right)
      { id: "leg6_top", label: "זכיין", code: "P", pv: 2561, generation: 1, column: 7 }
    ],
    edges: [
      // Root to Top Nodes
      { from: "you", to: "leg1_client" },
      { from: "you", to: "leg2_top" },
      { from: "you", to: "leg3_top" },
      { from: "you", to: "leg4_top" },
      { from: "you", to: "leg5_top" },
      { from: "you", to: "leg6_top" },

      // Vertical Connections (Same Column)
      { from: "leg1_client", to: "leg_new_client" }, // Client stack
      { from: "leg2_top", to: "leg2_bot" },
      { from: "leg3_top", to: "leg3_bot" },
      
      // Strong Leg Connections
      { from: "leg5_top", to: "leg5_mid_p" },
      { from: "leg5_top", to: "leg5_mid_client" },
      { from: "leg5_mid_p", to: "leg5_bot_p" }
    ],
    notes: [
      "<span style='color:#dc2626; font-weight:bold; font-size:1.1em;'>דרישת סף: שמירה על הדרגה למשך 2 חודשים רצופים.</span>",
      "<b>סה\"כ נקודות מעודכן:</b> <span style='color:#16a34a; font-weight:bold;'>28,100</span> (הושג היעד של 28,000!).",
      "<b>בונוס דרגה כולל:</b> 3,600 ₪.",
      "<b>חלוקת תשלום:</b> 1,200 ₪ בחודש הראשון + 2,400 ₪ בחודש השני."
    ]
  },

  qssc: { title: "עץ התקדמות – QSSC", description: "טרם הוגדר", highlightId: "you", nodes: [{id:"you", label:"אתה", code:"QSSC"}], edges:[], notes:["תבנית זמנית."] },
  ssc: { title: "עץ התקדמות – SSC", description: "טרם הוגדר", highlightId: "you", nodes: [{id:"you", label:"אתה", code:"SSC"}], edges:[], notes:["תבנית זמנית."] },
  qnmd: { title: "עץ התקדמות – QNMD", description: "טרם הוגדר", highlightId: "you", nodes: [{id:"you", label:"אתה", code:"QNMD"}], edges:[], notes:["תבנית זמנית."] },
  nmd: { title: "עץ התקדמות – NMD", description: "טרם הוגדר", highlightId: "you", nodes: [{id:"you", label:"אתה", code:"NMD"}], edges:[], notes:["תבנית זמנית."] },
  imd: { title: "עץ התקדמות – IMD", description: "טרם הוגדר", highlightId: "you", nodes: [{id:"you", label:"אתה", code:"IMD"}], edges:[], notes:["תבנית זמנית."] },
  emd: { title: "עץ התקדמות – EMD", description: "טרם הוגדר", highlightId: "you", nodes: [{id:"you", label:"אתה", code:"EMD"}], edges:[], notes:["תבנית זמנית."] },
  pmd: { title: "עץ התקדמות – PMD", description: "טרם הוגדר", highlightId: "you", nodes: [{id:"you", label:"אתה", code:"PMD"}], edges:[], notes:["תבנית זמנית."] },
  pmd_plus: { title: "עץ התקדמות – PMD+", description: "טרם הוגדר", highlightId: "you", nodes: [{id:"you", label:"אתה", code:"PMD+"}], edges:[], notes:["תבנית זמנית."] }
};
