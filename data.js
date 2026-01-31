/* data.js
   FINAL CORRECTED VERSION - FORCE UPDATE
   1. TREES: Exact structure from your screenshot (SC = 28,100 total).
   2. PRODUCTS: Exact ingredients from uploaded PDFs.
   3. IMAGES: "assets/" folder.
*/

// --- 1. רשימת הדרגות ---
window.RANKS = [
  { 
    id: "partner_plus", 
    title: "Partner Plus", 
    targetPoints: 4000, 
    intro: "התקדמות ראשונה: בניית בסיס.", 
    videoUrl: "https://youtu.be/M293NdN7Sok", 
    bullets: ["יעד: 4,000 נקודות.", "עמלה: 14%.", "בונוס: 400 ₪."], 
    nodeCode: "P+" 
  },
  { 
    id: "senior_partner", 
    title: "Senior Partner", 
    targetPoints: 12000, 
    intro: "בניית יציבות.", 
    videoUrl: "https://youtu.be/fnG6Eld0SPk", 
    bullets: ["יעד: 12,000 נקודות.", "עמלה: 19%.", "בונוס: 1,200 ₪."], 
    nodeCode: "SP" 
  },
  { 
    id: "sales_coordinator", 
    title: "Sales Coordinator", 
    targetPoints: 28000, 
    intro: "דרגת מנהיגות.", 
    videoUrl: "https://youtu.be/cyJb_ecWjyA", 
    bullets: ["יעד: 28,000 נקודות.", "עמלה: 22%.", "בונוס: 3,600 ₪ (1,200 + 2,400)."], 
    nodeCode: "SC" 
  },
  { id: "qssc", title: "QSSC", targetPoints: 56000, intro: "בדרך לטופ.", videoUrl: "https://youtu.be/ru06kEc9kqE", bullets: ["יעד: 56,000 נקודות.", "בונוס: 4,800 ₪."], nodeCode: "QSSC" },
  { id: "ssc", title: "Senior Sales Coordinator", targetPoints: 111000, intro: "ניהול בכיר.", videoUrl: "https://youtu.be/xPwmFecZ8Ms", bullets: ["יעד: 111,000 נקודות.", "בונוס: 10,000 ₪."], nodeCode: "SSC" },
  { id: "qnmd", title: "QNMD", targetPoints: 222000, intro: "לפני פסגה.", videoUrl: "https://youtu.be/W8Wm_c4kMUo", bullets: ["יעד: 222,000 נקודות.", "בונוס: 19,000 ₪."], nodeCode: "QNMD" },
  { id: "nmd", title: "NMD", targetPoints: 222000, intro: "הדרגה הלאומית.", videoUrl: "https://youtu.be/muieHSXIocI", bullets: ["יעד: 222,000 נקודות.", "בונוס: 39,000 ₪."], nodeCode: "NMD" },
  { id: "imd", title: "IMD", targetPoints: 444000, intro: "בינלאומי.", videoUrl: "https://youtu.be/WeEZlCjHAtU", bullets: ["יעד: 444,000 נקודות.", "בונוס: 77,000 ₪."], nodeCode: "IMD" },
  { id: "emd", title: "EMD", targetPoints: 666000, intro: "אקזקיוטיב.", videoUrl: "https://youtu.be/KpKDNIc8R7k", bullets: ["יעד: 666,000 נקודות.", "בונוס: 115,000 ₪."], nodeCode: "EMD" },
  { id: "pmd", title: "PMD", targetPoints: 888000, intro: "פסגת המנהיגות.", videoUrl: "https://youtu.be/2i3sVTpFxts", bullets: ["יעד: 888,000 נקודות.", "בונוס: 153,000 ₪."], nodeCode: "PMD" },
  { id: "pmd_plus", title: "PMD+", targetPoints: 1600000, intro: "הטופ.", videoUrl: "https://youtu.be/MVxQ4LPsj6w", bullets: ["יעד: 1,600,000 נקודות.", "בונוס: 200,000 ₪."], nodeCode: "PMD+" }
];

// --- 2. מוצרים (נתונים מתוך ה-PDF) ---
window.PRODUCTS = [
  {
    id: "fruit",
    title: "תערובת פירות (אדום)",
    subTitle: "Fruit Blend",
    intro: "המיטב של המטע.",
    image: "assets/cap_fruit.jpg",
    [cite_start]ingredients: "תפוחים, חמוציות, תפוזים, אננס, דובדבני אסרולה, אפרסקים, מנגו, תמרים, שזיפים וסלק סוכר[cite: 67].",
    [cite_start]vitamins: "ויטמין A, ויטמין C, ויטמין E וחומצה פולית[cite: 68].",
    [cite_start]benefits: ["מגשר על הפער התזונתי.", "ויטמין A לבריאות העור [cite: 77][cite_start].", "ויטמין C לייצור קולגן[cite: 78]."],
    usage: "2 קפסולות ביום."
  },
  {
    id: "veg",
    title: "תערובת ירקות (ירוק)",
    subTitle: "Vegetable Blend",
    intro: "השלמה תזונתית של ירקות.",
    image: "assets/cap_veg.jpg",
    [cite_start]ingredients: "גזר, פטרוזיליה, ברוקולי, קייל, כרוב לבן, עגבניות, תרד, שום וסלק[cite: 70].",
    [cite_start]vitamins: "ויטמין A, ויטמין C, ויטמין E וחומצה פולית[cite: 71].",
    benefits: ["תמיכה במערכת החיסון.", "ניקוי רעלים טבעי."],
    usage: "2 קפסולות ביום."
  },
  {
    id: "berry",
    title: "תערובת פירות יער (סגול)",
    subTitle: "Berry Blend",
    intro: "נוגדי חמצון עוצמתיים.",
    image: "assets/cap_berry.jpg",
    [cite_start]ingredients: "ענבים, אוכמניות כחולות, חמוציות, אוכמניות שחורות, בלאק קורנט, בילברי, פטל, רימון, סמבוק, קקאו וארטישוק[cite: 73].",
    [cite_start]vitamins: "מכיל ויטמין C וויטמין E[cite: 74].",
    benefits: ["נוגדי חמצון חזקים.", "בריאות הלב.", "שיפור זרימת דם."],
    usage: "2 קפסולות ביום."
  },
  {
    id: "omega",
    title: "תערובת אומגה (Omega)",
    subTitle: "100% Plant Based",
    intro: "אומגה צמחית לחלוטין.",
    image: "assets/cap_omega.jpg",
    [cite_start]ingredients: "שמן אצות, שמן זרעי רימונים, שמן אוכמניות שחורות, שמן זרעי אשחר ים (אובליפיחה), ושמן חריע[cite: 19].",
    [cite_start]vitamins: "אומגה 3, 5, 6, 7 ו-9[cite: 16].",
    [cite_start]benefits: ["מופק בכבישה קרה [cite: 17][cite_start].", "תמיכה במוח ובלב[cite: 30, 32]."],
    usage: "2 קפסולות ביום."
  },
  {
    id: "vanilla",
    title: "שייק וניל",
    subTitle: "Complete Vanilla",
    intro: "ארוחה מלאה ומאוזנת.",
    image: "assets/shake_vanilla.jpg",
    [cite_start]ingredients: "חלבון סויה, חלבון אפונה, חלבון אורז, אבקת חומוס[cite: 109].",
    vitamins: "ויטמינים ומינרלים מלאים.",
    [cite_start]benefits: ["אינדקס גליקמי נמוך [cite: 110][cite_start].", "עשיר בסיבים (7 גרם) [cite: 106][cite_start].", "ללא גלוטן[cite: 103]."],
    usage: "כף מדידה עם 250 מ״ל נוזל."
  },
  {
    id: "choco",
    title: "שייק שוקולד",
    subTitle: "Complete Chocolate",
    intro: "פינוק בריא ומזין.",
    image: "assets/shake_choco.jpg",
    [cite_start]ingredients: "חלבון סויה, אפונה, אורז, חומוס וקקאו[cite: 109].",
    vitamins: "ויטמינים ומינרלים מלאים.",
    benefits: ["טעם עשיר.", "תומך בבניית שריר.", "פתרון מהיר לארוחה."],
    usage: "כף מדידה עם 250 מ״ל נוזל."
  }
];

// --- 3. אסטרטגיות למחשבון ---
window.STRATEGIES = [
  { name: "קפסולות פירות יער (380 נק')", points: 380 },
  { name: "מארז דואו - פירות וירקות (765 נק')", points: 765 },
  { name: "שלישייה - פירות, ירקות, יער (1145 נק')", points: 1145 },
  { name: "רביעייה - שלישייה + אומגה (1631 נק')", points: 1631 },
  { name: "שייק קומפליט (830 נק')", points: 830 },
  { name: "קומפליט קומבי (930 נק')", points: 930 },
  { name: "קפסולות אומגה (486 נק')", points: 486 },
  { name: "אומגה + יער (866 נק')", points: 866 },
  { name: "ערכה מלאה + רגיל (2461 נק')", points: 2461 },
  { name: "ערכה מלאה + קומבי (2561 נק')", points: 2561 }
];

// --- 4. עצי דרגות (שחזור מדויק לפי התמונה!) ---
window.RANK_TREES = {
  partner_plus: {
    title: "מבנה Partner Plus",
    description: "יעד: 4,000 נקודות",
    highlightId: "you",
    nodes: [
      { id: "you", label: "אתה (P+)", code: "P+", pv: 866, totalVal: "4,576", generation: 0, column: 2 },
      { id: "l1", label: "לקוח", code: "P", pv: 283, generation: 1, column: 1 },
      { id: "l2", label: "שותף", code: "P", pv: 2561, generation: 1, column: 2 },
      { id: "l3", label: "הזמנה", code: "P", pv: 866, generation: 1, column: 3 }
    ],
    edges: [{from:"you",to:"l1"}, {from:"you",to:"l2"}, {from:"you",to:"l3"}],
    notes: ["הושג היעד: 4,576 נקודות."]
  },

  senior_partner: {
    title: "מבנה Senior Partner",
    description: "יעד: 12,000 נקודות",
    highlightId: "you",
    nodes: [
      { id: "you", label: "אתה (SP)", code: "SP", pv: 2561, totalVal: "12,090", generation: 0, column: 2 },
      { id: "l1", label: "זכיין", code: "P", pv: 4192, generation: 1, column: 0 },
      { id: "l2", label: "לקוח", code: "Client", pv: 2561, generation: 1, column: 2 },
      { id: "l3", label: "זכיין", code: "P", pv: 2776, generation: 1, column: 4 },
      { id: "l1_c", label: "הזמנה", code: "Order", pv: 1631, generation: 2, column: 0 },
      { id: "l3_c", label: "הזמנה", code: "Order", pv: 1145, generation: 2, column: 4 }
    ],
    edges: [{from:"you",to:"l1"}, {from:"you",to:"l2"}, {from:"you",to:"l3"}, {from:"l1",to:"l1_c"}, {from:"l3",to:"l3_c"}],
    notes: ["סה\"כ: 12,090 נקודות."]
  },

  sales_coordinator: {
    title: "עץ התקדמות לדרגה (SC)",
    description: "סימולציה מותאמת (לפי התמונה שלך).",
    highlightId: "you",
    nodes: [
      // אתה בראש (1,245)
      { id: "you", label: "אתה (SC)", code: "SC", pv: 1245, totalVal: "28,100", generation: 0, column: 3 },
      
      // שורה 1: 7 רגליים (משמאל לימין)
      { id: "leg1", label: "זכיין", code: "P", pv: 2561, generation: 1, column: 0 },
      { id: "leg2", label: "זכיין (P+)", code: "P+", pv: 4300, generation: 1, column: 1 },
      { id: "leg3", label: "זכיין", code: "P", pv: 930, generation: 1, column: 2 },
      { id: "leg4", label: "זכיין", code: "P", pv: 2561, generation: 1, column: 3 },
      { id: "leg5", label: "זכיין", code: "P", pv: 2561, generation: 1, column: 4 },
      { id: "leg6", label: "לקוח נוסף", code: "Client", pv: 1631, generation: 1, column: 5 },
      { id: "leg7", label: "לקוח ישיר", code: "Client", pv: 2561, generation: 1, column: 6 },

      // שורה 2: ילדים של רגל 4, 5, 7
      { id: "leg4_child", label: "זכיין", code: "P", pv: 2561, generation: 2, column: 3 },
      { id: "leg5_child", label: "זכיין", code: "P", pv: 2561, generation: 2, column: 4 },
      { id: "leg7_child", label: "לקוח", code: "Client", pv: 436, generation: 2, column: 6 },

      // שורה 3: נכד של רגל 7
      { id: "leg7_grand", label: "זכיין", code: "P", pv: 2561, generation: 3, column: 6 }
    ],
    edges: [
      { from: "you", to: "leg1" }, { from: "you", to: "leg2" }, { from: "you", to: "leg3" },
      { from: "you", to: "leg4" }, { from: "you", to: "leg5" }, { from: "you", to: "leg6" }, { from: "you", to: "leg7" },
      { from: "leg4", to: "leg4_child" },
      { from: "leg5", to: "leg5_child" },
      { from: "leg7", to: "leg7_child" },
      { from: "leg7_child", to: "leg7_grand" }
    ],
    notes: [
      "סה\"כ נקודות מעודכן: 28,100.",
      "בונוס דרגה כולל: 3,600 ₪.",
      "חלוקת תשלום: 1,200 ₪ בחודש הראשון + 2,400 ₪ בחודש השני."
    ]
  },

  // שאר הדרגות (מבנה בסיסי)
  qssc: { title: "מבנה QSSC", nodes: [{id:"you", label:"אתה", code:"QSSC", generation:0, column:1}], edges:[], notes:[] },
  ssc: { title: "מבנה SSC", nodes: [{id:"you", label:"אתה", code:"SSC", generation:0, column:1}], edges:[], notes:[] },
  qnmd: { title: "מבנה QNMD", nodes: [{id:"you", label:"אתה", code:"QNMD", generation:0, column:1}], edges:[], notes:[] },
  nmd: { title: "מבנה NMD", nodes: [{id:"you", label:"אתה", code:"NMD", generation:0, column:1}], edges:[], notes:[] },
  imd: { title: "מבנה IMD", nodes: [{id:"you", label:"אתה", code:"IMD", generation:0, column:1}], edges:[], notes:[] },
  emd: { title: "מבנה EMD", nodes: [{id:"you", label:"אתה", code:"EMD", generation:0, column:1}], edges:[], notes:[] },
  pmd: { title: "מבנה PMD", nodes: [{id:"you", label:"אתה", code:"PMD", generation:0, column:1}], edges:[], notes:[] },
  pmd_plus: { title: "מבנה PMD+", nodes: [{id:"you", label:"אתה", code:"PMD+", generation:0, column:1}], edges:[], notes:[] }
};
