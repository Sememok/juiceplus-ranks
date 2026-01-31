/* data.js
   FINAL "GOLDEN" VERSION
   1. TREES: Complex structure restored (SC matches screenshot with 7 legs).
   2. CONTENT: Full ingredients & details.
   3. IMAGES: assets/ folder.
*/

// --- 1. רשימת הדרגות (פירוט מלא) ---
window.RANKS = [
  {
    id: "partner_plus",
    title: "Partner Plus",
    targetPoints: 4000,
    intro: "התקדמות ראשונה: בניית בסיס לקוחות ראשוני.",
    videoUrl: "https://youtu.be/M293NdN7Sok",
    bullets: [
      "יעד: 4,000 נקודות (בחלון זמן של חודש עד חצי שנה).",
      "עמלה ישירה: 14% (במקום 10%).",
      "בונוס חד פעמי: 400 ₪.",
      "דרישה: 2 רגליים פעילות לפחות."
    ],
    nodeCode: "P+"
  },
  {
    id: "senior_partner",
    title: "Senior Partner",
    targetPoints: 12000,
    intro: "בניית יציבות וצוות.",
    videoUrl: "https://youtu.be/fnG6Eld0SPk",
    bullets: [
      "יעד: 12,000 נקודות.",
      "עמלה ישירה: 19%.",
      "בונוס חד פעמי: 1,200 ₪.",
      "דרישה: 3 רגליים פעילות (אחת P+)."
    ],
    nodeCode: "SP"
  },
  {
    id: "sales_coordinator",
    title: "Sales Coordinator",
    targetPoints: 28000,
    intro: "הדרגה הניהולית המשמעותית הראשונה.",
    videoUrl: "https://youtu.be/cyJb_ecWjyA",
    bullets: [
      "יעד: 28,000 נקודות.",
      "עמלה ישירה: 22% (מקסימלית על מכירות אישיות).",
      "בונוס חד פעמי: 3,600 ₪.",
      "דרישה: מבנה PB (זכיין אחד בדרגת P+ ומעלה).",
      "הטבה: פתיחת דורות ועמלות ניהול."
    ],
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

// --- 2. מוצרים (עם הנתיב assets ורכיבים מלאים מה-PDF) ---
window.PRODUCTS = [
  {
    id: "fruit",
    title: "תערובת פירות (אדום)",
    subTitle: "Fruit Blend",
    intro: "המיטב של המטע, בתוך קפסולה.",
    image: "assets/cap_fruit.jpg",
    ingredients: "תפוחים, חמוציות, תפוזים, אננס, דובדבני אסרולה, אפרסקים, מנגו, תמרים, שזיפים וסלק סוכר.",
    vitamins: "ויטמין A, ויטמין C, ויטמין E וחומצה פולית.",
    benefits: [
      "מגשר על הפער בין התזונה המצויה לרצויה.",
      "ויטמין A: מסייע לשמירה על בריאות העור.",
      "ויטמין C: תורם לייצור קולגן ובריאות החניכיים.",
      "ויטמין E: מגן על התאים ממתח חמצוני."
    ],
    usage: "2 קפסולות ביום עם כוס מים גדולה."
  },
  {
    id: "veg",
    title: "תערובת ירקות (ירוק)",
    subTitle: "Vegetable Blend",
    intro: "השלמה תזונתית של ירקות חיוניים.",
    image: "assets/cap_veg.jpg",
    ingredients: "גזר, פטרוזיליה, ברוקולי, קייל, כרוב לבן, עגבניות, תרד, שום וסלק.",
    vitamins: "ויטמין A, ויטמין C, ויטמין E וחומצה פולית.",
    benefits: [
      "תמיכה במערכת החיסון (חומצה פולית).",
      "הגנה על התאים מנזקי חמצון.",
      "תמיכה בתהליכי ניקוי טבעיים.",
      "ללא גלוטן וללא הנדסה גנטית."
    ],
    usage: "2 קפסולות ביום עם כוס מים גדולה."
  },
  {
    id: "berry",
    title: "תערובת פירות יער (סגול)",
    subTitle: "Berry Blend",
    intro: "נוגדי חמצון עוצמתיים מהטבע.",
    image: "assets/cap_berry.jpg",
    ingredients: "ענבים, אוכמניות כחולות, חמוציות, אוכמניות שחורות, אוכמניות בלאק קורנט, בילברי, פטל, רימון, פרי הסמבוק, קקאו וארטישוק.",
    vitamins: "מכיל ויטמין C וויטמין E.",
    benefits: [
      "נוגדי חמצון חזקים במיוחד.",
      "תמיכה בבריאות הלב וכלי הדם.",
      "שיפור זרימת דם והתאוששות.",
      "שמירה על מראה עור בריא וחיוני."
    ],
    usage: "2 קפסולות ביום."
  },
  {
    id: "omega",
    title: "תערובת אומגה (Omega Blend)",
    subTitle: "100% Plant Based Omega",
    intro: "אומגה צמחית לחלוטין - ישר מהמקור (אצות).",
    image: "assets/cap_omega.jpg",
    ingredients: "שמן אצות, שמן זרעי רימונים, שמן פטל, שמן אשחר ים (אובליפיחה), שמן חריע, שמן עגבניות.",
    vitamins: "אומגה 3, 5, 6, 7 ו-9.",
    benefits: [
      "מופק בכבישה קרה לשמירה על איכות השמנים.",
      "ללא טעם לוואי של דגים (מקור צמחי).",
      "תמיכה בראייה, תפקוד המוח והלב.",
      "ידידותי לסביבה ובר-קיימא."
    ],
    usage: "2 קפסולות ביום עם האוכל."
  },
  {
    id: "vanilla",
    title: "שייק קומפליט - וניל",
    subTitle: "Complete Vanilla",
    intro: "ארוחה מלאה ומאוזנת בטעם וניל.",
    image: "assets/shake_vanilla.jpg",
    ingredients: "חלבון סויה, חלבון אפונה, חלבון אורז, אבקת חומוס, סיבים תזונתיים.",
    vitamins: "פרופיל מלא של ויטמינים ומינרלים.",
    benefits: [
      "חלבון צמחי איכותי (13 גרם למנה).",
      "אינדקס גליקמי נמוך (מתאים לשמירה על משקל).",
      "עשיר בסיבים לתחושת שובע.",
      "מתאים לטבעונים וללא גלוטן."
    ],
    usage: "כף מדידה אחת עם 250 מ״ל מים או חלב צמחי."
  },
  {
    id: "choco",
    title: "שייק קומפליט - שוקולד",
    subTitle: "Complete Chocolate",
    intro: "פינוק בריא ומזין בטעם שוקולד.",
    image: "assets/shake_choco.jpg",
    ingredients: "חלבון סויה, חלבון אפונה, חלבון אורז, אבקת חומוס, קקאו.",
    vitamins: "פרופיל מלא של ויטמינים ומינרלים.",
    benefits: [
      "טעם שוקולדי עשיר ללא רגשות אשם.",
      "תומך בבניית שריר ואנרגיה.",
      "מקור מצוין לחלבון וסיבים.",
      "פתרון מהיר לארוחת בוקר או אחרי אימון."
    ],
    usage: "כף מדידה אחת עם 250 מ״ל מים או חלב צמחי."
  }
];

// --- 3. אסטרטגיות למחשבון (ניקוד מעודכן) ---
window.STRATEGIES = [
  { name: "קפסולות פירות יער (380 נק')", points: 380 },
  { name: "מארז דואו - פירות וירקות (765 נק')", points: 765 },
  { name: "שלישייה - פירות, ירקות, יער (1145 נק')", points: 1145 },
  { name: "רביעייה - שלישייה + אומגה (1631 נק')", points: 1631 },
  { name: "שייק קומפליט (שקיות גדולות) (830 נק')", points: 830 },
  { name: "קומפליט קומבי - 2 הטעמים (930 נק')", points: 930 },
  { name: "קפסולות אומגה בלנד (486 נק')", points: 486 },
  { name: "אומגה בלנד + פירות יער (866 נק')", points: 866 },
  { name: "ערכה מלאה + קומפליט רגיל (2461 נק')", points: 2461 },
  { name: "ערכה מלאה + קומפליט קומבי (2561 נק')", points: 2561 }
];

// --- 4. עצי דרגות מורכבים (השחזור המדויק לפי צילום המסך) ---
window.RANK_TREES = {
  partner_plus: {
    title: "מבנה Partner Plus (סימולציה)",
    description: "יעד: 4,000 נקודות",
    highlightId: "you",
    nodes: [
      { id: "you", label: "אתה (P+)", code: "P+", pv: 866, totalVal: "4,576", generation: 0, column: 2 },
      { id: "l1", label: "לקוח", code: "P", pv: 283, generation: 1, column: 1 },
      { id: "l2", label: "שותף חדש", code: "P", pv: 2561, generation: 1, column: 2 },
      { id: "l3", label: "הזמנה", code: "P", pv: 866, generation: 1, column: 3 }
    ],
    edges: [
      { from: "you", to: "l1" },
      { from: "you", to: "l2" },
      { from: "you", to: "l3" }
    ],
    notes: ["הושג יעד 4,000 נקודות!", "בונוס: 400 ₪"]
  },

  senior_partner: {
    title: "מבנה Senior Partner (סימולציה)",
    description: "יעד: 12,000 נקודות",
    highlightId: "you",
    nodes: [
      { id: "you", label: "אתה (SP)", code: "SP", pv: 2561, totalVal: "12,090", generation: 0, column: 2 },
      // שורה 1
      { id: "leg1", label: "זכיין P", code: "P", pv: 4192, generation: 1, column: 0 },
      { id: "leg2", label: "לקוח אישי", code: "Client", pv: 2561, generation: 1, column: 2 },
      { id: "leg3", label: "זכיין P", code: "P", pv: 2776, generation: 1, column: 4 },
      // שורה 2 (מתחת לרגליים)
      { id: "leg1_sub", label: "לקוח", code: "Order", pv: 1631, generation: 2, column: 0 },
      { id: "leg3_sub", label: "לקוח", code: "Order", pv: 1145, generation: 2, column: 4 }
    ],
    edges: [
      { from: "you", to: "leg1" },
      { from: "you", to: "leg2" },
      { from: "you", to: "leg3" },
      { from: "leg1", to: "leg1_sub" },
      { from: "leg3", to: "leg3_sub" }
    ],
    notes: ["סה\"כ נקודות: 12,090", "דרישה: 3 קווים פעילים (אחת P+)"]
  },

  sales_coordinator: {
    title: "מבנה Sales Coordinator (סימולציה מלאה)",
    description: "יעד: 28,000 נקודות (בסימולציה: 27,170)",
    highlightId: "you",
    nodes: [
      // רמה 0: אתה
      { id: "you", label: "אתה (SC)", code: "SC", pv: 1245, totalVal: "27,170", generation: 0, column: 3 },
      
      // רמה 1: הרגליים הישירות (7 רגליים פרוסות לרוחב)
      { id: "leg1", label: "זכיין P", code: "P", pv: 2561, generation: 1, column: 0 },
      { id: "leg2", label: "זכיין P+ (PB)", code: "P+", pv: 4300, generation: 1, column: 1 },
      { id: "leg3", label: "זכיין P", code: "P", pv: 930, generation: 1, column: 2 },
      { id: "leg4", label: "זכיין P", code: "P", pv: 2561, generation: 1, column: 3 },
      { id: "leg5", label: "זכיין P", code: "P", pv: 2561, generation: 1, column: 4 },
      { id: "leg6", label: "לקוח נוסף", code: "Client", pv: 1631, generation: 1, column: 5 },
      { id: "leg7", label: "לקוח ישיר", code: "Client", pv: 2561, generation: 1, column: 6 },

      // רמה 2: מתחת לרגליים (לפי צילום המסך)
      { id: "leg4_sub", label: "זכיין P", code: "P", pv: 2561, generation: 2, column: 3 },
      { id: "leg5_sub", label: "זכיין P", code: "P", pv: 2561, generation: 2, column: 4 },
      { id: "leg7_sub", label: "לקוח", code: "Client", pv: 436, generation: 2, column: 6 },

      // רמה 3: עומק
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
      "סה\"כ נקודות מעודכן: 27,170 (היעד 28,000).",
      "בונוס דרגה כולל: 3,600 ₪.",
      "חלוקת תשלום: 1,200 בחודש ראשון + 2,400 בחודש שני."
    ]
  },

  // שאר הדרגות (מבנה בסיסי למניעת שגיאות)
  qssc: { title: "מבנה QSSC", nodes: [{id:"you", label:"אתה", code:"QSSC", generation:0, column:1}], edges:[], notes:[] },
  ssc: { title: "מבנה SSC", nodes: [{id:"you", label:"אתה", code:"SSC", generation:0, column:1}], edges:[], notes:[] },
  qnmd: { title: "מבנה QNMD", nodes: [{id:"you", label:"אתה", code:"QNMD", generation:0, column:1}], edges:[], notes:[] },
  nmd: { title: "מבנה NMD", nodes: [{id:"you", label:"אתה", code:"NMD", generation:0, column:1}], edges:[], notes:[] },
  imd: { title: "מבנה IMD", nodes: [{id:"you", label:"אתה", code:"IMD", generation:0, column:1}], edges:[], notes:[] },
  emd: { title: "מבנה EMD", nodes: [{id:"you", label:"אתה", code:"EMD", generation:0, column:1}], edges:[], notes:[] },
  pmd: { title: "מבנה PMD", nodes: [{id:"you", label:"אתה", code:"PMD", generation:0, column:1}], edges:[], notes:[] },
  pmd_plus: { title: "מבנה PMD+", nodes: [{id:"you", label:"אתה", code:"PMD+", generation:0, column:1}], edges:[], notes:[] }
};
