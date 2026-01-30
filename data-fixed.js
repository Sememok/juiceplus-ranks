/* data-fixed.js
   ISRAEL 2025 - FIXED POINTS & CALCULATOR
   - Correct Promo Points (PV) for Israel.
   - Individual Product Images linked.
*/

// --- חלק 1: דרגות ויעדים ---
window.RANKS = [
  {
    id: "partner_plus",
    title: "Partner Plus",
    targetPoints: 4000, // יעד למחשבון
    intro: "התקדמות ראשונה: בניית בסיס לקוחות ראשוני.",
    videoUrl: "https://youtu.be/M293NdN7Sok?si=da8BUiVp5Qy-Z_5y",
    bullets: [
      "יעד: 4,000 נקודות פרומו.",
      "עמלה כוללת: 14%.",
      "בונוס דרגה: 400 ₪."
    ],
    nodeCode: "P+",
    qrFile: "Partner Plus.png"
  },
  {
    id: "senior_partner",
    title: "Senior Partner",
    targetPoints: 12000,
    intro: "בניית יציבות ולקוחות חוזרים.",
    videoUrl: "https://youtu.be/fnG6Eld0SPk?si=7ZozniTLZHIG5qR8",
    bullets: [
      "יעד: 12,000 נקודות פרומו.",
      "עמלה כוללת: 19%.",
      "בונוס דרגה: 1,200 ₪."
    ],
    nodeCode: "SP",
    qrFile: "Senior Partner.png"
  },
  {
    id: "sales_coordinator",
    title: "Sales Coordinator",
    targetPoints: 28000,
    intro: "הדרגה הניהולית הראשונה.",
    videoUrl: "https://youtu.be/cyJb_ecWjyA?si=JjClNcImW1bs86Ig",
    bullets: [
      "יעד: 28,000 נקודות פרומו.",
      "עמלה כוללת: 22%.",
      "בונוס דרגה: 3,600 ₪."
    ],
    nodeCode: "SC",
    qrFile: "Sales Coordinator.png"
  },
  {
    id: "qssc",
    title: "QSSC",
    targetPoints: 56000,
    intro: "שלב ביניים לניהול בכיר.",
    videoUrl: "https://youtu.be/ru06kEc9kqE",
    bullets: ["יעד: 56,000 נקודות.", "בונוס: 4,800 ₪."],
    nodeCode: "QSSC",
    qrFile: "QSSC.png"
  },
  {
    id: "ssc",
    title: "Senior Sales Coordinator",
    targetPoints: 111000,
    intro: "ניהול צוות מתקדם.",
    videoUrl: "https://youtu.be/xPwmFecZ8Ms",
    bullets: ["יעד: 111,000 נקודות.", "בונוס: 10,000 ₪."],
    nodeCode: "SSC",
    qrFile: "SSC.png"
  },
  {
    id: "qnmd",
    title: "QNMD",
    targetPoints: 222000,
    intro: "הכנה לדרגה הבכירה.",
    videoUrl: "https://youtu.be/W8Wm_c4kMUo",
    bullets: ["יעד: 222,000 נקודות.", "בונוס: 19,000 ₪."],
    nodeCode: "QNMD",
    qrFile: "QNMD.png"
  },
  {
    id: "nmd",
    title: "NMD",
    targetPoints: 222000,
    intro: "הדרגה הלאומית הבכירה.",
    videoUrl: "https://youtu.be/muieHSXIocI",
    bullets: ["יעד: 222,000 נקודות.", "בונוס: 39,000 ₪."],
    nodeCode: "NMD",
    qrFile: "NMD.png"
  },
  {
    id: "imd",
    title: "IMD",
    targetPoints: 444000,
    intro: "דרגה בינלאומית.",
    videoUrl: "",
    bullets: ["יעד: 444,000 נקודות.", "בונוס: 77,000 ₪."],
    nodeCode: "IMD",
    qrFile: "IMD.png"
  },
  {
    id: "emd",
    title: "EMD",
    targetPoints: 666000,
    intro: "ניהול ענק.",
    videoUrl: "",
    bullets: ["יעד: 666,000 נקודות.", "בונוס: 115,000 ₪."],
    nodeCode: "EMD",
    qrFile: "EMD.png"
  },
  {
    id: "pmd",
    title: "PMD",
    targetPoints: 888000,
    intro: "פסגת המנהיגות.",
    videoUrl: "",
    bullets: ["יעד: 888,000 נקודות.", "בונוס: 153,000 ₪."],
    nodeCode: "PMD",
    qrFile: "PMD.png"
  },
  {
    id: "pmd_plus",
    title: "PMD+",
    targetPoints: 1600000,
    intro: "הדרגה הגבוהה ביותר.",
    videoUrl: "",
    bullets: ["יעד: 1,600,000 נקודות.", "בונוס: 200,000 ₪."],
    nodeCode: "PMD+",
    qrFile: "PMD+.png"
  }
];

// --- חלק 2: מוצרים בודדים (עם תמונות) ---
window.PRODUCTS = [
  {
    id: "fruit",
    title: "קפסולות פירות (אדום)",
    subTitle: "Fruit Blend",
    intro: "30 סוגי פירות וירקות - הבסיס.",
    image: "fruit.jpg", 
    points: 72,
    benefits: ["תפוח, תפוז, אננס, דובדבן, מנגו ועוד.", "ויטמינים A, C, E.", "ללא גלוטן."],
    usage: "2 ביום."
  },
  {
    id: "veg",
    title: "קפסולות ירקות (ירוק)",
    subTitle: "Vegetable Blend",
    intro: "הירקות שחסרים לך בתפריט.",
    image: "veg.jpg",
    points: 72,
    benefits: ["ברוקולי, קייל, גזר, שום, תרד ועוד.", "עשיר בחומצה פולית.", "ניקוי רעלים."],
    usage: "2 ביום."
  },
  {
    id: "berry",
    title: "קפסולות פירות יער (סגול)",
    subTitle: "Berry Blend",
    intro: "נוגדי חמצון עוצמתיים.",
    image: "berry.jpg",
    points: 72,
    benefits: ["אוכמניות, פטל, רימון, ענבים.", "זרימת דם ובריאות הלב.", "התאוששות מספורט."],
    usage: "2 ביום."
  },
  {
    id: "omega",
    title: "אומגה בלנד (כתום)",
    subTitle: "Omega Blend",
    intro: "אומגה 100% צמחית מאצות.",
    image: "omega.jpg",
    points: 72,
    benefits: ["אומגה 3, 5, 6, 7, 9.", "ללא טעם לוואי של דגים.", "כבישה קרה."],
    usage: "2 ביום."
  },
  {
    id: "vanilla",
    title: "שייק וניל",
    subTitle: "Complete Vanilla",
    intro: "ארוחה מלאה בכוס.",
    image: "vanilla.jpg",
    points: 104, // ל-4 שקיות (משלוח)
    benefits: ["חלבון צמחי מלא.", "סיבים תזונתיים.", "מתאים לטבעונים."],
    usage: "כף מדידה עם מים/חלב."
  },
  {
    id: "choco",
    title: "שייק שוקולד",
    subTitle: "Complete Chocolate",
    intro: "פינוק בריא ומזין.",
    image: "choco.jpg",
    points: 104, // ל-4 שקיות
    benefits: ["חלבון צמחי.", "אינדקס גליקמי נמוך.", "טעים במיוחד."],
    usage: "כף מדידה עם מים/חלב."
  }
];

// --- חלק 3: מחשבון אסטרטגיה (ניקוד רשמי ישראל) ---
window.STRATEGIES = [
  { name: "חבילת טריו (פירות+ירקות+פירות יער)", points: 216 },
  { name: "חבילת דואו (פירות+ירקות)", points: 144 },
  { name: "מארז שייק קומפליט (וניל/שוקולד)", points: 104 },
  { name: "חבילת המראה (טריו + שייק)", points: 320 },
  { name: "אומגה בלנד (מארז)", points: 72 }
];

// --- חלק 4: עצים (ללא שינוי, למניעת תקלות) ---
window.RANK_TREES = {
  partner_plus: {
    title: "עץ התקדמות P+",
    description: "יעד 4,000",
    highlightId: "you",
    nodes: [{id:"you", label:"אתה", code:"P+", pv:4000}],
    edges: [],
    notes: ["הושג יעד 4,000 נקודות."]
  },
  senior_partner: {
    title: "עץ התקדמות SP",
    description: "יעד 12,000",
    highlightId: "you",
    nodes: [{id:"you", label:"אתה", code:"SP", pv:12000}],
    edges: [],
    notes: ["הושג יעד 12,000 נקודות."]
  },
  sales_coordinator: {
    title: "עץ התקדמות SC",
    description: "יעד 28,000",
    highlightId: "you",
    nodes: [{id:"you", label:"אתה", code:"SC", pv:28000}],
    edges: [],
    notes: ["הושג יעד 28,000 נקודות."]
  },
  qssc: { title: "עץ QSSC", description: "", highlightId: "you", nodes: [{id:"you", label:"אתה", code:"QSSC"}], edges:[], notes:[] },
  ssc: { title: "עץ SSC", description: "", highlightId: "you", nodes: [{id:"you", label:"אתה", code:"SSC"}], edges:[], notes:[] },
  qnmd: { title: "עץ QNMD", description: "", highlightId: "you", nodes: [{id:"you", label:"אתה", code:"QNMD"}], edges:[], notes:[] },
  nmd: { title: "עץ NMD", description: "", highlightId: "you", nodes: [{id:"you", label:"אתה", code:"NMD"}], edges:[], notes:[] },
  imd: { title: "עץ IMD", description: "", highlightId: "you", nodes: [{id:"you", label:"אתה", code:"IMD"}], edges:[], notes:[] },
  emd: { title: "עץ EMD", description: "", highlightId: "you", nodes: [{id:"you", label:"אתה", code:"EMD"}], edges:[], notes:[] },
  pmd: { title: "עץ PMD", description: "", highlightId: "you", nodes: [{id:"you", label:"אתה", code:"PMD"}], edges:[], notes:[] },
  pmd_plus: { title: "עץ PMD+", description: "", highlightId: "you", nodes: [{id:"you", label:"אתה", code:"PMD+"}], edges:[], notes:[] }
};
