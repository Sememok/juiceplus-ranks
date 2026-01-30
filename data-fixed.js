/* data-fixed.js
   ISRAEL 2025 - WITH STRATEGIC CALCULATOR DATA
   - Added 'targetPoints' to each rank for calculation.
   - Added 'STRATEGIES' with product points (PV).
*/

window.RANKS = [
  {
    id: "partner_plus",
    title: "Partner Plus",
    intro: "התקדמות ראשונה: בניית בסיס לקוחות ראשוני.",
    videoUrl: "https://youtu.be/M293NdN7Sok?si=da8BUiVp5Qy-Z_5y",
    targetPoints: 4000, // יעד מספרי למחשבון
    bullets: [
      "יעד: 4,000 נקודות פרומו (חודש 1 להסמכה).",
      "מינימום אישי: 4,000 נקודות (אפשר הכל אישי או עם לקוחות).",
      "עמלה כוללת: 14% (10% בסיס + 4% תוספת).",
      "בונוס דרגה: 400 ₪ (תשלום אחד)."
    ],
    nodeCode: "P+",
    qrFile: "Partner Plus.png"
  },
  {
    id: "senior_partner",
    title: "Senior Partner",
    intro: "בניית יציבות ולקוחות חוזרים.",
    videoUrl: "https://youtu.be/fnG6Eld0SPk?si=7ZozniTLZHIG5qR8",
    targetPoints: 12000,
    bullets: [
      "יעד: 12,000 נקודות פרומו (בתוך חלון של 2 חודשים).",
      "חוק 50%: מקסימום 6,000 נקודות מרגל אחת.",
      "עמלה כוללת: 19% (14% + 5% בונוס PB).",
      "בונוס דרגה כולל: 1,200 ₪ (400 בחודש א' + 800 בחודש ב')."
    ],
    nodeCode: "SP",
    qrFile: "Senior Partner.png"
  },
  {
    id: "sales_coordinator",
    title: "Sales Coordinator",
    intro: "הדרגה הניהולית הראשונה: בניית צוות ומבנה רוחב.",
    videoUrl: "https://youtu.be/cyJb_ecWjyA?si=JjClNcImW1bs86Ig",
    targetPoints: 28000,
    bullets: [
      "מבנה נדרש: זכיין אחד בדרגת Partner Plus (מבנה 1 רגל PB).",
      "יעד: 28,000 נקודות פרומו (בחלון של 2 חודשים).",
      "עמלה כוללת: 22% (19% + 3% בונוס POB).",
      "בונוס דרגה כולל: 3,600 ₪ (1,200 בחודש א' + 2,400 בחודש ב')."
    ],
    nodeCode: "SC",
    qrFile: "Sales Coordinator.png"
  },
  {
    id: "qssc",
    title: "Qualifying Senior Sales Coordinator",
    intro: "שלב ביניים בדרך לניהול בכיר.",
    videoUrl: "https://youtu.be/ru06kEc9kqE?si=9yvL3LZ5Qm80YEak",
    targetPoints: 56000,
    bullets: [
      "מבנה נדרש: 2 רגלי PB (זכיינים בדרגת P+ ומעלה).",
      "יעד: 56,000 נקודות (בחלון של 3 חודשים).",
      "חוק 50%: מקסימום 28,000 נקודות מרגל אחת.",
      "בונוס דרגה כולל: 4,800 ₪ (1,400 + 1,400 + 2,000)."
    ],
    nodeCode: "QSSC",
    qrFile: "Qualifying Senior Sales Coordinator.png"
  },
  {
    id: "ssc",
    title: "Senior Sales Coordinator",
    intro: "ניהול צוות מתקדם ויציב.",
    videoUrl: "https://youtu.be/xPwmFecZ8Ms?si=rqjGaml0ySJoif0x",
    targetPoints: 111000,
    bullets: [
      "מבנה נדרש: 3 רגלי PB (שלושה קווים פעילים).",
      "יעד: 111,000 נקודות (בחלון של 3 חודשים).",
      "חוק 50%: מקסימום 55,500 נקודות מרגל אחת.",
      "בונוס דרגה כולל: 10,000 ₪ (2,500 + 2,500 + 5,000)."
    ],
    nodeCode: "SSC",
    qrFile: "Senior Sales Coordinator.png"
  },
  {
    id: "qnmd",
    title: "Qualifying National Marketing Director",
    intro: "הכנה לדרגה הבכירה ביותר.",
    videoUrl: "https://youtu.be/W8Wm_c4kMUo?si=sRYcBXB5K67s3CgE",
    targetPoints: 222000,
    bullets: [
      "מבנה נדרש: 3 רגלי PB (מתוכן התחזקות קווים).",
      "יעד: 222,000 נקודות (בחלון של 3 חודשים).",
      "חוק 50%: מקסימום 111,000 נקודות מרגל אחת.",
      "בונוס דרגה כולל: 19,000 ₪ (4,500 + 4,500 + 10,000)."
    ],
    nodeCode: "QNMD",
    qrFile: "Qualifying National Marketing Director.png"
  },
  {
    id: "nmd",
    title: "National Marketing Director",
    intro: "הדרגה הלאומית הבכירה - NMD.",
    videoUrl: "https://youtu.be/muieHSXIocI?si=mgdWJi4OJRh0YzLE",
    targetPoints: 222000,
    bullets: [
      "מבנה נדרש: 5 רגלי PB + מתוכן 2 רגלי POB.",
      "יעד: 222,000 נקודות (בחלון של 3 חודשים).",
      "חוק 50%: מקסימום 111,000 נקודות מרגל אחת.",
      "בונוס דרגה כולל: 39,000 ₪ (9,500 + 9,500 + 20,000)."
    ],
    nodeCode: "NMD",
    qrFile: "National Marketing Director.png"
  },
  {
    id: "imd",
    title: "International Marketing Director",
    intro: "דרגה בינלאומית יוקרתית.",
    videoUrl: "https://youtu.be/WeEZlCjHAtU?si=O0jNx22vXu_D9QZC",
    targetPoints: 444000,
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
    targetPoints: 666000,
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
    targetPoints: 888000,
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
    targetPoints: 1600000,
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

// --- אסטרטגיות למחשבון (חבילות ומוצרים) ---
window.STRATEGIES = [
  { name: "טריו (פירות, ירקות, פירות יער)", points: 216 },
  { name: "דואו (פירות וירקות)", points: 144 },
  { name: "שייק קומפליט (משלוח של 4 שקיות)", points: 104 }, // יש לוודא ניקוד מדויק
  { name: "חבילת המראה (טריו + שייק)", points: 320 },
  { name: "אומגה בלנד", points: 72 }
];

// --- נתוני עצים (ללא שינוי) ---
window.RANK_TREES = {
  partner_plus: {
    title: "עץ התקדמות – Partner Plus (P+)",
    description: "תרשים הממחיש הגעה ליעד של 4,000 נקודות.",
    highlightId: "you",
    nodes: [
      { id: "you",   label: "אתה",   code: "P+", pv: 866, totalVal: "סה״כ: 4,576", generation: 0, column: 1 },
      { id: "left",  label: "קו שמאל", code: "P",  pv: 283,  generation: 1, column: 0 },
      { id: "mid",   label: "קו אמצע", code: "P",  pv: 2561, generation: 1, column: 1 },
      { id: "right", label: "קו ימין", code: "P",  pv: 866,  generation: 1, column: 2 }
    ],
    edges: [ { from: "you", to: "left" }, { from: "you", to: "mid" }, { from: "you", to: "right" } ],
    notes: ["הושג היעד לדרגת Partner Plus!", "סה\"כ: 4,576 נקודות."]
  },
  senior_partner: {
    title: "עץ התקדמות – Senior Partner (SP)",
    description: "תרשים מלא (כולל דור 2).",
    highlightId: "you",
    nodes: [
      { id: "you", label: "אתה (SP)", code: "P+", pv: 2561, totalVal: "סה״כ: 12,090", generation: 0, column: 2 },
      { id: "left_top", label: "זכיין P", code: "P", pv: 4192, generation: 1, column: 0 },
      { id: "mid_top", label: "לקוח אישי", code: "Client", pv: 2561, generation: 1, column: 2 },
      { id: "right_top", label: "זכיין P", code: "P", pv: 2776, generation: 1, column: 4 },
      { id: "left_bot", label: "לקוח/הזמנה", code: "Order", pv: 1631, generation: 2, column: 0 },
      { id: "right_bot", label: "לקוח/הזמנה", code: "Order", pv: 1145, generation: 2, column: 4 }
    ],
    edges: [ { from: "you", to: "left_top" }, { from: "you", to: "mid_top" }, { from: "you", to: "right_top" }, { from: "left_top", to: "left_bot" }, { from: "right_top", to: "right_bot" } ],
    notes: ["סה\"כ נקודות: 12,090", "עמדה ביעדי חודשיים רצופים."]
  },
  sales_coordinator: {
    title: "עץ התקדמות – Sales Coordinator (SC)",
    description: "סימולציה מותאמת.",
    highlightId: "you",
    nodes: [{ id: "you", label: "אתה (SC)", code: "SC", pv: 1245, totalVal: "סה״כ: 27,170", generation: 0, column: 3 }],
    edges: [],
    notes: ["סה\"כ נקודות: 27,170", "קרוב ליעד של 28,000."]
  },
  // שאר הדרגות כתבנית
  qssc: { title: "עץ התקדמות – QSSC", description: "טרם הוגדר", highlightId: "you", nodes: [{id:"you", label:"אתה", code:"QSSC"}], edges:[], notes:[] },
  ssc: { title: "עץ התקדמות – SSC", description: "טרם הוגדר", highlightId: "you", nodes: [{id:"you", label:"אתה", code:"SSC"}], edges:[], notes:[] },
  qnmd: { title: "עץ התקדמות – QNMD", description: "טרם הוגדר", highlightId: "you", nodes: [{id:"you", label:"אתה", code:"QNMD"}], edges:[], notes:[] },
  nmd: { title: "עץ התקדמות – NMD", description: "טרם הוגדר", highlightId: "you", nodes: [{id:"you", label:"אתה", code:"NMD"}], edges:[], notes:[] },
  imd: { title: "עץ התקדמות – IMD", description: "טרם הוגדר", highlightId: "you", nodes: [{id:"you", label:"אתה", code:"IMD"}], edges:[], notes:[] },
  emd: { title: "עץ התקדמות – EMD", description: "טרם הוגדר", highlightId: "you", nodes: [{id:"you", label:"אתה", code:"EMD"}], edges:[], notes:[] },
  pmd: { title: "עץ התקדמות – PMD", description: "טרם הוגדר", highlightId: "you", nodes: [{id:"you", label:"אתה", code:"PMD"}], edges:[], notes:[] },
  pmd_plus: { title: "עץ התקדמות – PMD+", description: "טרם הוגדר", highlightId: "you", nodes: [{id:"you", label:"אתה", code:"PMD+"}], edges:[], notes:[] }
};
