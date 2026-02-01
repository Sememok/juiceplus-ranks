/* data.js - FINAL FIXED DATA */

// 1. רשימת הדרגות
window.RANKS = [
  { id: "partner_plus", title: "Partner Plus", targetPoints: 4000, intro: "התקדמות ראשונה.", videoUrl: "https://youtu.be/M293NdN7Sok", bullets: ["יעד: 4,000 נקודות.", "עמלה: 14%.", "בונוס: 400 ₪."], nodeCode: "P+" },
  { id: "senior_partner", title: "Senior Partner", targetPoints: 12000, intro: "בניית יציבות.", videoUrl: "https://youtu.be/fnG6Eld0SPk", bullets: ["יעד: 12,000 נקודות.", "עמלה: 19%.", "בונוס: 1,200 ₪."], nodeCode: "SP" },
  { id: "sales_coordinator", title: "Sales Coordinator", targetPoints: 28000, intro: "דרגת מנהיגות.", videoUrl: "https://youtu.be/cyJb_ecWjyA", bullets: ["יעד: 28,000 נקודות.", "עמלה: 22%.", "בונוס: 3,600 ₪."], nodeCode: "SC" },
  { id: "qssc", title: "QSSC", targetPoints: 56000, intro: "בדרך לטופ.", videoUrl: "https://youtu.be/ru06kEc9kqE", bullets: ["יעד: 56,000 נקודות.", "בונוס: 4,800 ₪."], nodeCode: "QSSC" },
  { id: "ssc", title: "Senior Sales Coordinator", targetPoints: 111000, intro: "ניהול בכיר.", videoUrl: "https://youtu.be/xPwmFecZ8Ms", bullets: ["יעד: 111,000 נקודות.", "בונוס: 10,000 ₪."], nodeCode: "SSC" },
  { id: "qnmd", title: "QNMD", targetPoints: 222000, intro: "לפני פסגה.", videoUrl: "https://youtu.be/W8Wm_c4kMUo", bullets: ["יעד: 222,000 נקודות.", "בונוס: 19,000 ₪."], nodeCode: "QNMD" },
  { id: "nmd", title: "NMD", targetPoints: 222000, intro: "הדרגה הלאומית.", videoUrl: "https://youtu.be/muieHSXIocI", bullets: ["יעד: 222,000 נקודות.", "בונוס: 39,000 ₪."], nodeCode: "NMD" },
  { id: "imd", title: "IMD", targetPoints: 444000, intro: "בינלאומי.", videoUrl: "https://youtu.be/WeEZlCjHAtU", bullets: ["יעד: 444,000 נקודות.", "בונוס: 77,000 ₪."], nodeCode: "IMD" },
  { id: "emd", title: "EMD", targetPoints: 666000, intro: "אקזקיוטיב.", videoUrl: "https://youtu.be/KpKDNIc8R7k", bullets: ["יעד: 666,000 נקודות.", "בונוס: 115,000 ₪."], nodeCode: "EMD" },
  { id: "pmd", title: "PMD", targetPoints: 888000, intro: "פסגת המנהיגות.", videoUrl: "https://youtu.be/2i3sVTpFxts", bullets: ["יעד: 888,000 נקודות.", "בונוס: 153,000 ₪."], nodeCode: "PMD" },
  { id: "pmd_plus", title: "PMD+", targetPoints: 1600000, intro: "הטופ.", videoUrl: "https://youtu.be/MVxQ4LPsj6w", bullets: ["יעד: 1,600,000 נקודות.", "בונוס: 200,000 ₪."], nodeCode: "PMD+" }
];

// 2. מוצרים
window.PRODUCTS = [
  { id: "fruit", title: "פירות (אדום)", subTitle: "Fruit Blend", intro: "המיטב של המטע.", image: "assets/cap_fruit.jpg", ingredients: "תפוחים, חמוציות...", vitamins: "A, C, E", benefits: ["בריאות העור"], usage: "2 ביום" },
  { id: "veg", title: "ירקות (ירוק)", subTitle: "Vegetable Blend", intro: "ירקות חיוניים.", image: "assets/cap_veg.jpg", ingredients: "גזר, כרוב...", vitamins: "A, C, E", benefits: ["חיזוק"], usage: "2 ביום" },
  { id: "berry", title: "פירות יער (סגול)", subTitle: "Berry Blend", intro: "נוגדי חמצון.", image: "assets/cap_berry.jpg", ingredients: "ענבים, פטל...", vitamins: "C, E", benefits: ["זרימת דם"], usage: "2 ביום" },
  { id: "omega", title: "אומגה בלנד", subTitle: "Omega Blend", intro: "אומגה צמחית.", image: "assets/cap_omega.jpg", ingredients: "אצות, רימונים...", vitamins: "אומגה 3,5,6,7,9", benefits: ["מוח ולב"], usage: "2 ביום" },
  { id: "vanilla", title: "שייק וניל", subTitle: "Complete Vanilla", intro: "ארוחה מלאה.", image: "assets/shake_vanilla.jpg", ingredients: "חלבון סויה...", vitamins: "ויטמינים ומינרלים", benefits: ["שובע"], usage: "כף מדידה" },
  { id: "choco", title: "שייק שוקולד", subTitle: "Complete Chocolate", intro: "ארוחה מלאה.", image: "assets/shake_choco.jpg", ingredients: "חלבון סויה...", vitamins: "ויטמינים ומינרלים", benefits: ["אנרגיה"], usage: "כף מדידה" }
];

// 3. אסטרטגיות למחשבון
window.STRATEGIES = [
  { name: "קפסולות פירות יער (380 נק')", points: 380 },
  { name: "מארז דואו (765 נק')", points: 765 },
  { name: "שלישייה (1145 נק')", points: 1145 },
  { name: "רביעייה (1631 נק')", points: 1631 },
  { name: "שייק קומפליט (830 נק')", points: 830 },
  { name: "קומפליט קומבי (930 נק')", points: 930 },
  { name: "קפסולות אומגה (486 נק')", points: 486 },
  { name: "אומגה + יער (866 נק')", points: 866 },
  { name: "ערכה מלאה + רגיל (2461 נק')", points: 2461 },
  { name: "ערכה מלאה + קומבי (2561 נק')", points: 2561 }
];

// 4. עצי דרגות מדויקים
window.RANK_TREES = {
  partner_plus: {
    title: "מבנה Partner Plus",
    highlightId: "you",
    nodes: [
      { id: "you", label: "אתה", code: "P+", pv: 866, generation: 0, column: 1 },
      { id: "l1", label: "שמאל", code: "P", pv: 283, generation: 1, column: 0 },
      { id: "l2", label: "אמצע", code: "P", pv: 2561, generation: 1, column: 1 },
      { id: "l3", label: "ימין", code: "P", pv: 866, generation: 1, column: 2 }
    ],
    edges: [{from:"you",to:"l1"}, {from:"you",to:"l2"}, {from:"you",to:"l3"}],
    notes: ["סה\"כ 4,576 נקודות."]
  },
  
  senior_partner: {
    title: "מבנה Senior Partner",
    highlightId: "you",
    nodes: [
      { id: "you", label: "אתה", code: "SP", pv: 2561, generation: 0, column: 2 },
      { id: "l1", label: "זכיין", code: "P", pv: 4192, generation: 1, column: 0 },
      { id: "l2", label: "לקוח", code: "C", pv: 2561, generation: 1, column: 2 },
      { id: "l3", label: "זכיין", code: "P", pv: 2776, generation: 1, column: 4 },
      { id: "sub1", label: "הזמנה", code: "O", pv: 1631, generation: 2, column: 0 },
      { id: "sub2", label: "הזמנה", code: "O", pv: 1145, generation: 2, column: 4 }
    ],
    edges: [{from:"you",to:"l1"}, {from:"you",to:"l2"}, {from:"you",to:"l3"}, {from:"l1",to:"sub1"}, {from:"l3",to:"sub2"}],
    notes: ["סה\"כ 12,090 נקודות."]
  },

  // SC - שחזור מדויק 1:1 לתמונה (עם המספרים הנכונים!)
  sales_coordinator: {
    title: "מבנה Sales Coordinator (28,100)",
    highlightId: "you",
    nodes: [
      { id: "you", label: "אתה (SC)", code: "SC", pv: 1245, generation: 0, column: 3 },
      
      // שורה 1 (7 רגליים)
      { id: "leg1", label: "זכיין", code: "P", pv: 2561, generation: 1, column: 0 },
      { id: "leg2", label: "זכיין", code: "P+", pv: 4300, generation: 1, column: 1 },
      { id: "leg3", label: "זכיין", code: "P", pv: 930, generation: 1, column: 2 },
      { id: "leg4", label: "זכיין", code: "P", pv: 2561, generation: 1, column: 3 },
      { id: "leg5", label: "זכיין", code: "P", pv: 2561, generation: 1, column: 4 },
      { id: "leg6", label: "לקוח", code: "Client", pv: 1631, generation: 1, column: 5 },
      { id: "leg7", label: "לקוח", code: "Client", pv: 2561, generation: 1, column: 6 },

      // שורה 2 (ילדים)
      { id: "sub4", label: "זכיין", code: "P", pv: 2561, generation: 2, column: 3 },
      { id: "sub5", label: "זכיין", code: "P", pv: 2561, generation: 2, column: 4 },
      { id: "sub7", label: "לקוח", code: "Client", pv: 436, generation: 2, column: 6 },

      // שורה 3 (נכד)
      { id: "subsub7", label: "זכיין", code: "P", pv: 2561, generation: 3, column: 6 }
    ],
    edges: [
      {from:"you",to:"leg1"}, {from:"you",to:"leg2"}, {from:"you",to:"leg3"}, {from:"you",to:"leg4"}, {from:"you",to:"leg5"}, {from:"you",to:"leg6"}, {from:"you",to:"leg7"},
      {from:"leg4",to:"sub4"}, {from:"leg5",to:"sub5"}, {from:"leg7",to:"sub7"},
      {from:"sub7",to:"subsub7"}
    ],
    notes: ["סה\"כ: 28,100 נקודות.", "בונוס דרגה: 3,600 ₪ (1,200 + 2,400)."]
  },
  
  qssc: { title: "מבנה QSSC", nodes: [{id:"you", label:"אתה", code:"QSSC", generation:0, column:1}], edges:[], notes:[] },
  ssc: { title: "מבנה SSC", nodes: [{id:"you", label:"אתה", code:"SSC", generation:0, column:1}], edges:[], notes:[] },
  qnmd: { title: "מבנה QNMD", nodes: [{id:"you", label:"אתה", code:"QNMD", generation:0, column:1}], edges:[], notes:[] },
  nmd: { title: "מבנה NMD", nodes: [{id:"you", label:"אתה", code:"NMD", generation:0, column:1}], edges:[], notes:[] },
  imd: { title: "מבנה IMD", nodes: [{id:"you", label:"אתה", code:"IMD", generation:0, column:1}], edges:[], notes:[] },
  emd: { title: "מבנה EMD", nodes: [{id:"you", label:"אתה", code:"EMD", generation:0, column:1}], edges:[], notes:[] },
  pmd: { title: "מבנה PMD", nodes: [{id:"you", label:"אתה", code:"PMD", generation:0, column:1}], edges:[], notes:[] },
  pmd_plus: { title: "מבנה PMD+", nodes: [{id:"you", label:"אתה", code:"PMD+", generation:0, column:1}], edges:[], notes:[] }
};
