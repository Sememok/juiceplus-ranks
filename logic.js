/* logic.js
   NEW FILE NAME TO FORCE UPDATE
   - Contains EXACT user points (380, 765, 1145...)
   - Links to images: cap_berry.jpg, etc.
*/

// --- חלק 1: דרגות ---
window.RANKS = [
  {
    id: "partner_plus",
    title: "Partner Plus",
    targetPoints: 4000,
    intro: "התקדמות ראשונה.",
    videoUrl: "https://youtu.be/M293NdN7Sok?si=da8BUiVp5Qy-Z_5y",
    bullets: ["יעד: 4,000 נקודות.", "עמלה: 14%.", "בונוס: 400 ₪."],
    nodeCode: "P+",
    qrFile: "Partner Plus.png"
  },
  {
    id: "senior_partner",
    title: "Senior Partner",
    targetPoints: 12000,
    intro: "בניית יציבות.",
    videoUrl: "https://youtu.be/fnG6Eld0SPk?si=7ZozniTLZHIG5qR8",
    bullets: ["יעד: 12,000 נקודות.", "עמלה: 19%.", "בונוס: 1,200 ₪."],
    nodeCode: "SP",
    qrFile: "Senior Partner.png"
  },
  {
    id: "sales_coordinator",
    title: "Sales Coordinator",
    targetPoints: 28000,
    intro: "דרגת מנהיגות.",
    videoUrl: "https://youtu.be/cyJb_ecWjyA?si=JjClNcImW1bs86Ig",
    bullets: ["יעד: 28,000 נקודות.", "עמלה: 22%.", "בונוס: 3,600 ₪."],
    nodeCode: "SC",
    qrFile: "Sales Coordinator.png"
  },
  {
    id: "qssc",
    title: "QSSC",
    targetPoints: 56000,
    intro: "בדרך לטופ.",
    videoUrl: "https://youtu.be/ru06kEc9kqE",
    bullets: ["יעד: 56,000 נקודות.", "בונוס: 4,800 ₪."],
    nodeCode: "QSSC",
    qrFile: "QSSC.png"
  },
  {
    id: "ssc",
    title: "Senior Sales Coordinator",
    targetPoints: 111000,
    intro: "ניהול בכיר.",
    videoUrl: "https://youtu.be/xPwmFecZ8Ms",
    bullets: ["יעד: 111,000 נקודות.", "בונוס: 10,000 ₪."],
    nodeCode: "SSC",
    qrFile: "SSC.png"
  },
  {
    id: "qnmd",
    title: "QNMD",
    targetPoints: 222000,
    intro: "לפני פסגה.",
    videoUrl: "https://youtu.be/W8Wm_c4kMUo",
    bullets: ["יעד: 222,000 נקודות.", "בונוס: 19,000 ₪."],
    nodeCode: "QNMD",
    qrFile: "QNMD.png"
  },
  {
    id: "nmd",
    title: "NMD",
    targetPoints: 222000,
    intro: "הדרגה הלאומית.",
    videoUrl: "https://youtu.be/muieHSXIocI",
    bullets: ["יעד: 222,000 נקודות.", "בונוס: 39,000 ₪."],
    nodeCode: "NMD",
    qrFile: "NMD.png"
  },
  {
    id: "imd",
    title: "IMD",
    targetPoints: 444000,
    intro: "בינלאומי.",
    videoUrl: "https://youtu.be/WeEZlCjHAtU",
    bullets: ["יעד: 444,000 נקודות.", "בונוס: 77,000 ₪."],
    nodeCode: "IMD",
    qrFile: "IMD.png"
  },
  {
    id: "emd",
    title: "EMD",
    targetPoints: 666000,
    intro: "אקזקיוטיב.",
    videoUrl: "https://youtu.be/KpKDNIc8R7k",
    bullets: ["יעד: 666,000 נקודות.", "בונוס: 115,000 ₪."],
    nodeCode: "EMD",
    qrFile: "EMD.png"
  },
  {
    id: "pmd",
    title: "PMD",
    targetPoints: 888000,
    intro: "פסגת המנהיגות.",
    videoUrl: "https://youtu.be/2i3sVTpFxts",
    bullets: ["יעד: 888,000 נקודות.", "בונוס: 153,000 ₪."],
    nodeCode: "PMD",
    qrFile: "PMD.png"
  },
  {
    id: "pmd_plus",
    title: "PMD+",
    targetPoints: 1600000,
    intro: "הדרגה הגבוהה ביותר.",
    videoUrl: "https://youtu.be/MVxQ4LPsj6w",
    bullets: ["יעד: 1,600,000 נקודות.", "בונוס: 200,000 ₪."],
    nodeCode: "PMD+",
    qrFile: "PMD+.png"
  }
];

// --- חלק 2: מוצרים (עם השמות החדשים שלך) ---
// * חשוב: הקוד מוסיף .jpg אוטומטית. ודא שהתמונות במחשב הן JPG.
window.PRODUCTS = [
  {
    id: "berry",
    title: "קפסולות פירות יער",
    subTitle: "Berry Blend",
    intro: "380 נקודות",
    image: "cap_berry.jpg", 
    benefits: ["אוכמניות, פטל, ענבים, רימון.", "בריאות הלב.", "זרימת דם."],
    usage: "2 ביום."
  },
  {
    id: "omega",
    title: "קפסולות אומגה בלנד",
    subTitle: "Omega Blend",
    intro: "486 נקודות",
    image: "cap_omega.jpg",
    benefits: ["אומגה 3, 5, 6, 7, 9.", "ללא דגים.", "כבישה קרה."],
    usage: "2 ביום."
  },
  {
    id: "fruit",
    title: "קפסולות פירות",
    subTitle: "Fruit Blend",
    intro: "חלק ממארז",
    image: "cap_fruit.jpg",
    benefits: ["תפוח, תפוז, אננס.", "ויטמינים טבעיים.", "ללא גלוטן."],
    usage: "2 ביום."
  },
  {
    id: "veg",
    title: "קפסולות ירקות",
    subTitle: "Vegetable Blend",
    intro: "חלק ממארז",
    image: "cap_veg.jpg",
    benefits: ["ברוקולי, גזר, פטרוזיליה.", "ניקוי רעלים.", "חומצה פולית."],
    usage: "2 ביום."
  },
  {
    id: "vanilla",
    title: "שייק קומפליט וניל",
    subTitle: "Complete Vanilla",
    intro: "830 נקודות (מארז)",
    image: "shake_vanilla.jpg",
    benefits: ["חלבון צמחי.", "סיבים תזונתיים.", "טעים במיוחד."],
    usage: "כף מדידה עם נוזל."
  },
  {
    id: "choco",
    title: "שייק קומפליט שוקו",
    subTitle: "Complete Chocolate",
    intro: "830 נקודות (מארז)",
    image: "shake_choco.jpg",
    benefits: ["חלבון צמחי.", "לפני/אחרי אימון.", "ללא גלוטן."],
    usage: "כף מדידה עם נוזל."
  }
];

// --- חלק 3: מחשבון אסטרטגיה (הרשימה המדויקת שנתת) ---
window.STRATEGIES = [
  { name: "קפסולות פירות יער (380 נק')", points: 380 },
  { name: "מארז דואו - פירות וירקות (765 נק')", points: 765 },
  { name: "שלישייה - פירות, ירקות, יער (1145 נק')", points: 1145 },
  { name: "רביעייה - שלישייה + אומגה (1631 נק')", points: 1631 },
  { name: "שייק קומפליט (830 נק')", points: 830 },
  { name: "קומפליט קומבי - 2 הטעמים (930 נק')", points: 930 },
  { name: "קפסולות אומגה בלנד (486 נק')", points: 486 },
  { name: "אומגה בלנד + פירות יער (866 נק')", points: 866 },
  { name: "ערכה מלאה + קומפליט רגיל (2461 נק')", points: 2461 },
  { name: "ערכה מלאה + קומפליט קומבי (2561 נק')", points: 2561 }
];

// --- חלק 4: עצים ---
window.RANK_TREES = {
  partner_plus: { title: "עץ P+", description: "יעד 4,000", nodes: [{id:"you", label:"אתה", code:"P+", pv:4000}], edges: [], notes: ["הושג יעד 4,000 נקודות."] },
  senior_partner: { title: "עץ SP", description: "יעד 12,000", nodes: [{id:"you", label:"אתה", code:"SP", pv:12000}], edges: [], notes: ["הושג יעד 12,000 נקודות."] },
  sales_coordinator: { title: "עץ SC", description: "יעד 28,000", nodes: [{id:"you", label:"אתה", code:"SC", pv:28000}], edges: [], notes: ["הושג יעד 28,000 נקודות."] },
  qssc: { title: "עץ QSSC", description: "יעד 56,000", nodes: [{id:"you", label:"אתה", code:"QSSC"}], edges:[], notes:[] },
  ssc: { title: "עץ SSC", description: "יעד 111,000", nodes: [{id:"you", label:"אתה", code:"SSC"}], edges:[], notes:[] },
  qnmd: { title: "עץ QNMD", description: "יעד 222,000", nodes: [{id:"you", label:"אתה", code:"QNMD"}], edges:[], notes:[] },
  nmd: { title: "עץ NMD", description: "יעד 222,000", nodes: [{id:"you", label:"אתה", code:"NMD"}], edges:[], notes:[] },
  imd: { title: "עץ IMD", description: "יעד 444,000", nodes: [{id:"you", label:"אתה", code:"IMD"}], edges:[], notes:[] },
  emd: { title: "עץ EMD", description: "יעד 666,000", nodes: [{id:"you", label:"אתה", code:"EMD"}], edges:[], notes:[] },
  pmd: { title: "עץ PMD", description: "יעד 888,000", nodes: [{id:"you", label:"אתה", code:"PMD"}], edges:[], notes:[] },
  pmd_plus: { title: "עץ PMD+", description: "יעד 1.6M", nodes: [{id:"you", label:"אתה", code:"PMD+"}], edges:[], notes:[] }
};
