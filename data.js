/* data.js
   FINAL EXACT MATCH - RESTORED FROM SCREENSHOTS
   1. SC Tree: Matches "Screenshot 2026-01-11" perfectly (7 legs wide).
   2. P+ Tree: Matches "Screenshot 2026-01-10" perfectly.
*/

// --- 1. רשימת הדרגות ---
window.RANKS = [
  { 
    id: "partner_plus", 
    title: "Partner Plus", 
    targetPoints: 4000, 
    intro: "התקדמות ראשונה: בניית בסיס לקוחות.", 
    videoUrl: "https://youtu.be/M293NdN7Sok", 
    bullets: ["יעד: 4,000 נקודות.", "עמלה: 14%.", "בונוס: 400 ₪."], 
    nodeCode: "P+" 
  },
  { 
    id: "senior_partner", 
    title: "Senior Partner", 
    targetPoints: 12000, 
    intro: "בניית יציבות וצוות.", 
    videoUrl: "https://youtu.be/fnG6Eld0SPk", 
    bullets: ["יעד: 12,000 נקודות.", "עמלה: 19%.", "בונוס: 1,200 ₪."], 
    nodeCode: "SP" 
  },
  { 
    id: "sales_coordinator", 
    title: "Sales Coordinator", 
    targetPoints: 28000, 
    intro: "דרגת מנהיגות ראשונה.", 
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
  { id: "pmd_plus", title: "PMD+", targetPoints: 1600000, intro: "הטופ של הטופ.", videoUrl: "https://youtu.be/MVxQ4LPsj6w", bullets: ["יעד: 1,600,000 נקודות.", "בונוס: 200,000 ₪."], nodeCode: "PMD+" }
];

// --- 2. מוצרים ---
window.PRODUCTS = [
  { id: "fruit", title: "תערובת פירות (אדום)", subTitle: "Fruit Blend", intro: "המיטב של המטע.", image: "assets/cap_fruit.jpg", ingredients: "תפוחים, חמוציות, תפוזים, אננס, דובדבני אסרולה, אפרסקים, מנגו, תמרים, שזיפים וסלק סוכר.", vitamins: "ויטמין A, ויטמין C, ויטמין E וחומצה פולית.", benefits: ["מגשר על הפער התזונתי.", "ויטמין A לבריאות העור.", "ויטמין C לייצור קולגן."], usage: "2 קפסולות ביום." },
  { id: "veg", title: "תערובת ירקות (ירוק)", subTitle: "Vegetable Blend", intro: "השלמה תזונתית של ירקות.", image: "assets/cap_veg.jpg", ingredients: "גזר, פטרוזיליה, ברוקולי, קייל, כרוב לבן, עגבניות, תרד, שום וסלק.", vitamins: "ויטמין A, ויטמין C, ויטמין E וחומצה פולית.", benefits: ["תמיכה במערכת החיסון.", "ניקוי רעלים טבעי."], usage: "2 קפסולות ביום." },
  { id: "berry", title: "תערובת פירות יער (סגול)", subTitle: "Berry Blend", intro: "נוגדי חמצון עוצמתיים.", image: "assets/cap_berry.jpg", ingredients: "ענבים, אוכמניות כחולות, חמוציות, אוכמניות שחורות, בלאק קורנט, בילברי, פטל, רימון, סמבוק, קקאו וארטישוק.", vitamins: "ויטמין C, ויטמין E.", benefits: ["נוגדי חמצון חזקים.", "בריאות הלב.", "שיפור זרימת דם."], usage: "2 קפסולות ביום." },
  { id: "omega", title: "תערובת אומגה (Omega)", subTitle: "100% Plant Based", intro: "אומגה צמחית לחלוטין.", image: "assets/cap_omega.jpg", ingredients: "שמן אצות, שמן זרעי רימונים, פטל, אשחר ים, חריע ועגבניות.", vitamins: "אומגה 3, 5, 6, 7 ו-9.", benefits: ["מופק בכבישה קרה.", "ללא טעם לוואי דגי.", "תמיכה במוח ובלב."], usage: "2 קפסולות ביום." },
  { id: "vanilla", title: "שייק וניל", subTitle: "Complete Vanilla", intro: "ארוחה מלאה ומאוזנת.", image: "assets/shake_vanilla.jpg", ingredients: "חלבון סויה, אפונה, אורז, חומוס (13 גרם חלבון).", vitamins: "ויטמינים ומינרלים מלאים.", benefits: ["אינדקס גליקמי נמוך.", "עשיר בסיבים.", "ללא גלוטן."], usage: "כף מדידה עם 250 מ״ל נוזל." },
  { id: "choco", title: "שייק שוקולד", subTitle: "Complete Chocolate", intro: "פינוק בריא ומזין.", image: "assets/shake_choco.jpg", ingredients: "חלבון סויה, אפונה, אורז, חומוס וקקאו.", vitamins: "ויטמינים ומינרלים מלאים.", benefits: ["טעם עשיר.", "תומך בבניית שריר.", "פתרון מהיר לארוחה."], usage: "כף מדידה עם 250 מ״ל נוזל." }
];

// --- 3. אסטרטגיות למחשבון ---
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

// --- 4. עצי דרגות משוחזרים (לפי התמונות) ---
window.RANK_TREES = {
  // P+ שוחזר לפי תמונה 2026-01-10 235603.png
  partner_plus: {
    title: "עץ התקדמות – Partner Plus (P+)",
    description: "סימולציה מותאמת לשרטוט הידני (הדגשת נקודות אישיות).",
    highlightId: "you",
    nodes: [
      // שים לב: לפי התמונה אתה 866, ימין 866, אמצע 2561, שמאל 283
      { id: "you", label: "אתה", code: "P+", pv: 866, totalVal: "סה״כ: 4,576", generation: 0, column: 1 },
      { id: "left", label: "קו שמאל", code: "P", pv: 283, generation: 1, column: 0 },
      { id: "mid", label: "קו אמצע", code: "P", pv: 2561, generation: 1, column: 1 },
      { id: "right", label: "קו ימין", code: "P", pv: 866, generation: 1, column: 2 }
    ],
    edges: [
      { from: "you", to: "left" },
      { from: "you", to: "mid" },
      { from: "you", to: "right" }
    ],
    notes: ["זהו עץ דרגה P+ בלבד.", "PV בכל כרטיס משקף את הנקודות שסימנת בעיגול אדום."]
  },

  // SP: עץ ביניים
  senior_partner: {
    title: "מבנה Senior Partner (SP)",
    description: "יעד: 12,000 נקודות",
    highlightId: "you",
    nodes: [
      { id: "you", label: "אתה (SP)", code: "P+", pv: 2561, totalVal: "12,090", generation: 0, column: 2 },
      { id: "l1", label: "זכיין", code: "P", pv: 4192, generation: 1, column: 0 },
      { id: "l2", label: "לקוח", code: "Client", pv: 2561, generation: 1, column: 2 },
      { id: "l3", label: "זכיין", code: "P", pv: 2776, generation: 1, column: 4 },
      { id: "l1_c", label: "הזמנה", code: "Order", pv: 1631, generation: 2, column: 0 },
      { id: "l3_c", label: "הזמנה", code: "Order", pv: 1145, generation: 2, column: 4 }
    ],
    edges: [{from:"you",to:"l1"}, {from:"you",to:"l2"}, {from:"you",to:"l3"}, {from:"l1",to:"l1_c"}, {from:"l3",to:"l3_c"}],
    notes: ["סה\"כ: 12,090 נקודות."]
  },

  // SC שוחזר במדויק לפי תמונה 2026-01-11 083608.png
  sales_coordinator: {
    title: "עץ התקדמות לדרגה (SC)",
    description: "סימולציה מותאמת (כולל תוספת לקוחות ישירים).",
    highlightId: "you",
    nodes: [
      // רמה 0: אתה (1,245)
      { id: "you", label: "אתה (SC)", code: "SC", pv: 1245, totalVal: "28,100", generation: 0, column: 3 },
      
      // רמה 1: 7 רגליים (משמאל לימין לפי התמונה)
      // 1. זכיין P 2561
      { id: "leg1", label: "זכיין P", code: "P", pv: 2561, generation: 1, column: 0 },
      // 2. זכיין P+ 4300
      { id: "leg2", label: "זכיין (P+)", code: "P+", pv: 4300, generation: 1, column: 1 },
      // 3. זכיין P 930
      { id: "leg3", label: "זכיין P", code: "P", pv: 930, generation: 1, column: 2 },
      // 4. זכיין P 2561 (יש לו ילד)
      { id: "leg4", label: "זכיין P", code: "P", pv: 2561, generation: 1, column: 3 },
      // 5. זכיין P 2561 (יש לו ילד)
      { id: "leg5", label: "זכיין P", code: "P", pv: 2561, generation: 1, column: 4 },
      // 6. לקוח נוסף 1631
      { id: "leg6", label: "לקוח נוסף", code: "Client", pv: 1631, generation: 1, column: 5 },
      // 7. לקוח ישיר 2561 (יש לו ילד)
      { id: "leg7", label: "לקוח ישיר", code: "Client", pv: 2561, generation: 1, column: 6 },

      // רמה 2: ילדים של רגל 4, 5, 7
      { id: "leg4_sub", label: "זכיין P", code: "P", pv: 2561, generation: 2, column: 3 },
      { id: "leg5_sub", label: "זכיין P", code: "P", pv: 2561, generation: 2, column: 4 },
      { id: "leg7_sub", label: "לקוח", code: "Client", pv: 436, generation: 2, column: 6 },

      // רמה 3: נכד של רגל 7
      { id: "leg7_sub_sub", label: "זכיין P", code: "P", pv: 2561, generation: 3, column: 6 }
    ],
    edges: [
      // חיבורים לדור ראשון
      { from: "you", to: "leg1" }, { from: "you", to: "leg2" }, { from: "you", to: "leg3" },
      { from: "you", to: "leg4" }, { from: "you", to: "leg5" }, { from: "you", to: "leg6" }, { from: "you", to: "leg7" },
      // חיבורים לדור שני
      { from: "leg4", to: "leg4_sub" },
      { from: "leg5", to: "leg5_sub" },
      { from: "leg7", to: "leg7_sub" },
      // חיבורים לדור שלישי
      { from: "leg7_sub", to: "leg7_sub_sub" }
    ],
    notes: [
      "דרישת סף: שמירה על הדרגה למשך 2 חודשים רצופים.",
      "סה\"כ נקודות מעודכן: 28,100 (הושג היעד של 28,000!).",
      "בונוס דרגה כולל: 3,600 ₪.",
      "חלוקת תשלום: 1,200 ₪ בחודש הראשון + 2,400 ₪ בחודש השני.",
      "עדכונים: זכיין נוסף עודכן ל-2,561 נקודות."
    ]
  },

  // שאר הדרגות
  qssc: { title: "מבנה QSSC", nodes: [{id:"you", label:"אתה", code:"QSSC", generation:0, column:1}], edges:[], notes:[] },
  ssc: { title: "מבנה SSC", nodes: [{id:"you", label:"אתה", code:"SSC", generation:0, column:1}], edges:[], notes:[] },
  qnmd: { title: "מבנה QNMD", nodes: [{id:"you", label:"אתה", code:"QNMD", generation:0, column:1}], edges:[], notes:[] },
  nmd: { title: "מבנה NMD", nodes: [{id:"you", label:"אתה", code:"NMD", generation:0, column:1}], edges:[], notes:[] },
  imd: { title: "מבנה IMD", nodes: [{id:"you", label:"אתה", code:"IMD", generation:0, column:1}], edges:[], notes:[] },
  emd: { title: "מבנה EMD", nodes: [{id:"you", label:"אתה", code:"EMD", generation:0, column:1}], edges:[], notes:[] },
  pmd: { title: "מבנה PMD", nodes: [{id:"you", label:"אתה", code:"PMD", generation:0, column:1}], edges:[], notes:[] },
  pmd_plus: { title: "מבנה PMD+", nodes: [{id:"you", label:"אתה", code:"PMD+", generation:0, column:1}], edges:[], notes:[] }
};
