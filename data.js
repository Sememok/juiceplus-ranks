/* data.js */
window.RANKS = [
  { id: "partner_plus", title: "Partner Plus", targetPoints: 4000, intro: "התקדמות ראשונה: בניית בסיס לקוחות ראשוני.", videoUrl: "https://youtu.be/M293NdN7Sok", bullets: ["יעד: 4,000 נקודות.", "עמלה: 14%.", "בונוס: 400 ₪."], nodeCode: "P+" },
  { id: "senior_partner", title: "Senior Partner", targetPoints: 12000, intro: "בניית יציבות ולקוחות חוזרים.", videoUrl: "https://youtu.be/fnG6Eld0SPk", bullets: ["יעד: 12,000 נקודות.", "עמלה: 19%.", "בונוס: 1,200 ₪."], nodeCode: "SP" },
  { id: "sales_coordinator", title: "Sales Coordinator", targetPoints: 28000, intro: "הדרגה הניהולית הראשונה.", videoUrl: "https://youtu.be/cyJb_ecWjyA", bullets: ["יעד: 28,000 נקודות.", "עמלה: 22%.", "בונוס: 3,600 ₪."], nodeCode: "SC" },
  { id: "qssc", title: "QSSC", targetPoints: 56000, intro: "שלב ביניים לניהול בכיר.", videoUrl: "https://youtu.be/ru06kEc9kqE", bullets: ["יעד: 56,000 נקודות.", "בונוס: 4,800 ₪."], nodeCode: "QSSC" },
  { id: "ssc", title: "Senior Sales Coordinator", targetPoints: 111000, intro: "ניהול צוות מתקדם.", videoUrl: "https://youtu.be/xPwmFecZ8Ms", bullets: ["יעד: 111,000 נקודות.", "בונוס: 10,000 ₪."], nodeCode: "SSC" },
  { id: "qnmd", title: "QNMD", targetPoints: 222000, intro: "הכנה לדרגה הבכירה ביותר.", videoUrl: "https://youtu.be/W8Wm_c4kMUo", bullets: ["יעד: 222,000 נקודות.", "בונוס: 19,000 ₪."], nodeCode: "QNMD" },
  { id: "nmd", title: "NMD", targetPoints: 222000, intro: "הדרגה הלאומית הבכירה.", videoUrl: "https://youtu.be/muieHSXIocI", bullets: ["יעד: 222,000 נקודות.", "בונוס: 39,000 ₪."], nodeCode: "NMD" },
  { id: "imd", title: "IMD", targetPoints: 444000, intro: "דרגה בינלאומית יוקרתית.", videoUrl: "https://youtu.be/WeEZlCjHAtU", bullets: ["יעד: 444,000 נקודות.", "בונוס: 77,000 ₪."], nodeCode: "IMD" },
  { id: "emd", title: "EMD", targetPoints: 666000, intro: "ניהול ארגון ענק ורב-דורי.", videoUrl: "https://youtu.be/KpKDNIc8R7k", bullets: ["יעד: 666,000 נקודות.", "בונוס: 115,000 ₪."], nodeCode: "EMD" },
  { id: "pmd", title: "PMD", targetPoints: 888000, intro: "פסגת המנהיגות.", videoUrl: "https://youtu.be/2i3sVTpFxts", bullets: ["יעד: 888,000 נקודות.", "בונוס: 153,000 ₪."], nodeCode: "PMD" },
  { id: "pmd_plus", title: "PMD+", targetPoints: 1600000, intro: "הדרגה הגבוהה ביותר בתוכנית.", videoUrl: "https://youtu.be/MVxQ4LPsj6w", bullets: ["יעד: 1,600,000 נקודות.", "בונוס: 200,000 ₪."], nodeCode: "PMD+" }
];

window.PRODUCTS = [
  { id: "fruit", title: "תערובת פירות (אדום)", subTitle: "Fruit Blend", intro: "המיטב של המטע, בתוך קפסולה.", image: "assets/cap_fruit.jpg", ingredients: "תפוחים, חמוציות, תפוזים, אננס, דובדבני אסרולה, אפרסקים, מנגו, תמרים, שזיפים וסלק סוכר.", vitamins: "ויטמין A, ויטמין C, ויטמין E וחומצה פולית.", benefits: ["מגשר על הפער התזונתי.", "ויטמין A: בריאות העור.", "ויטמין C: ייצור קולגן.", "ויטמין E: נוגד חמצון."], usage: "2 קפסולות ביום." },
  { id: "veg", title: "תערובת ירקות (ירוק)", subTitle: "Vegetable Blend", intro: "השלמה תזונתית של ירקות חיוניים.", image: "assets/cap_veg.jpg", ingredients: "גזר, פטרוזיליה, ברוקולי, קייל, כרוב לבן, עגבניות, תרד, שום וסלק.", vitamins: "ויטמין A, ויטמין C, ויטמין E וחומצה פולית.", benefits: ["תמיכה במערכת החיסון.", "הגנה על התאים.", "ניקוי רעלים."], usage: "2 קפסולות ביום." },
  { id: "berry", title: "תערובת פירות יער (סגול)", subTitle: "Berry Blend", intro: "נוגדי חמצון עוצמתיים מהטבע.", image: "assets/cap_berry.jpg", ingredients: "ענבים, אוכמניות כחולות, חמוציות, אוכמניות שחורות, בלאק קורנט, בילברי, פטל, רימון, סמבוק, קקאו וארטישוק.", vitamins: "ויטמין C, ויטמין E.", benefits: ["נוגדי חמצון חזקים.", "בריאות הלב.", "שיפור זרימת דם."], usage: "2 קפסולות ביום." },
  { id: "omega", title: "תערובת אומגה (Omega)", subTitle: "100% Plant Based", intro: "אומגה צמחית לחלוטין מאצות.", image: "assets/cap_omega.jpg", ingredients: "שמן אצות, שמן זרעי רימונים, פטל, אשחר ים, חריע ועגבניות.", vitamins: "אומגה 3, 5, 6, 7 ו-9.", benefits: ["מופק בכבישה קרה.", "ללא טעם לוואי.", "תמיכה במוח ובלב."], usage: "2 קפסולות ביום." },
  { id: "vanilla", title: "שייק וניל", subTitle: "Complete Vanilla", intro: "ארוחה מלאה ומאוזנת.", image: "assets/shake_vanilla.jpg", ingredients: "חלבון סויה, אפונה, אורז, חומוס (13 גרם חלבון).", vitamins: "ויטמינים ומינרלים מלאים.", benefits: ["אינדקס גליקמי נמוך.", "עשיר בסיבים.", "ללא גלוטן."], usage: "כף מדידה עם 250 מ״ל נוזל." },
  { id: "choco", title: "שייק שוקולד", subTitle: "Complete Chocolate", intro: "פינוק בריא ומזין.", image: "assets/shake_choco.jpg", ingredients: "חלבון סויה, אפונה, אורז, חומוס וקקאו.", vitamins: "ויטמינים ומינרלים מלאים.", benefits: ["טעם עשיר.", "תומך בבניית שריר.", "פתרון מהיר לארוחה."], usage: "כף מדידה עם 250 מ״ל נוזל." }
];

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

window.RANK_TREES = {
  partner_plus: {
    title: "מבנה Partner Plus",
    description: "יעד: 4,000 נקודות",
    highlightId: "you",
    nodes: [
      { id: "you", label: "אתה (P+)", code: "P+", pv: 1000, generation: 0, column: 1 },
      { id: "l1", label: "לקוח/זכיין", code: "P", pv: 1000, generation: 1, column: 0 },
      { id: "l2", label: "לקוח/זכיין", code: "P", pv: 1000, generation: 1, column: 1 },
      { id: "l3", label: "לקוח/זכיין", code: "P", pv: 1000, generation: 1, column: 2 }
    ],
    edges: [{from:"you",to:"l1"}, {from:"you",to:"l2"}, {from:"you",to:"l3"}],
    notes: ["סה\"כ 4,000 נקודות"]
  },
  senior_partner: {
    title: "מבנה Senior Partner",
    description: "יעד: 12,000 נקודות",
    highlightId: "you",
    nodes: [
      { id: "you", label: "אתה (SP)", code: "SP", pv: 2000, generation: 0, column: 2 },
      { id: "l1", label: "קו 1", code: "P+", pv: 3000, generation: 1, column: 0 },
      { id: "l2", label: "קו 2", code: "P", pv: 3000, generation: 1, column: 2 },
      { id: "l3", label: "קו 3", code: "P", pv: 4000, generation: 1, column: 4 },
      { id: "s1", label: "לקוח", code: "C", pv: 0, generation: 2, column: 0 }
    ],
    edges: [{from:"you",to:"l1"}, {from:"you",to:"l2"}, {from:"you",to:"l3"}, {from:"l1",to:"s1"}],
    notes: ["סה\"כ 12,090 נקודות"]
  },
  sales_coordinator: {
    title: "מבנה Sales Coordinator",
    description: "יעד: 28,000 + PB",
    highlightId: "you",
    nodes: [
      { id: "you", label: "אתה (SC)", code: "SC", pv: 1245, generation: 0, column: 1 },
      { id: "pb", label: "זכיין PB", code: "P+", pv: 4500, generation: 1, column: 0 },
      { id: "grp", label: "שאר הקבוצה", code: "GRP", pv: 21425, generation: 1, column: 2 }
    ],
    edges: [{from:"you",to:"pb"}, {from:"you",to:"grp"}],
    notes: ["סה\"כ 27,170 נקודות"]
  },
  // מבנה בסיסי לשאר הדרגות
  qssc: { title: "מבנה QSSC", nodes: [{id:"you", label:"אתה", code:"QSSC", generation:0, column:1}], edges:[], notes:[] },
  ssc: { title: "מבנה SSC", nodes: [{id:"you", label:"אתה", code:"SSC", generation:0, column:1}], edges:[], notes:[] },
  qnmd: { title: "מבנה QNMD", nodes: [{id:"you", label:"אתה", code:"QNMD", generation:0, column:1}], edges:[], notes:[] },
  nmd: { title: "מבנה NMD", nodes: [{id:"you", label:"אתה", code:"NMD", generation:0, column:1}], edges:[], notes:[] },
  imd: { title: "מבנה IMD", nodes: [{id:"you", label:"אתה", code:"IMD", generation:0, column:1}], edges:[], notes:[] },
  emd: { title: "מבנה EMD", nodes: [{id:"you", label:"אתה", code:"EMD", generation:0, column:1}], edges:[], notes:[] },
  pmd: { title: "מבנה PMD", nodes: [{id:"you", label:"אתה", code:"PMD", generation:0, column:1}], edges:[], notes:[] },
  pmd_plus: { title: "מבנה PMD+", nodes: [{id:"you", label:"אתה", code:"PMD+", generation:0, column:1}], edges:[], notes:[] }
};
