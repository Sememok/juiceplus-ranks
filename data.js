/* data.js
   FINAL VERSION - FIXED TREES & ASSETS
   - Images: assets/filename.jpg
   - Points: Exact user values
   - Trees: Restored coordinates (generation/column) so they appear.
*/

// --- 1. רשימת הדרגות ---
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
  { id: "pmd_plus", title: "PMD+", targetPoints: 1600000, intro: "הטופ של הטופ.", videoUrl: "https://youtu.be/MVxQ4LPsj6w", bullets: ["יעד: 1,600,000 נקודות.", "בונוס: 200,000 ₪."], nodeCode: "PMD+" }
];

// --- 2. מוצרים (עם הנתיב לתיקיית assets ורכיבים מלאים) ---
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
    ingredients: "ענבים, אוכמניות כחולות, חמוציות, אוכמניות שחורות, אוכמניות בלאק קורנט, אוכמניות בילברי, פטל, רימון, פרי הסמבוק, קקאו וארטישוק.",
    vitamins: "ויטמין C, ויטמין E.",
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

// --- 4. עצי דרגות (מתוקן עם קואורדינטות כדי שיופיעו!) ---
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
    edges: [
      { from: "you", to: "l1" },
      { from: "you", to: "l2" },
      { from: "you", to: "l3" }
    ],
    notes: ["סה\"כ 4,000 נקודות (אישי + קבוצתי)"]
  },
  senior_partner: {
    title: "מבנה Senior Partner",
    description: "יעד: 12,000 נקודות",
    highlightId: "you",
    nodes: [
      { id: "you", label: "אתה (SP)", code: "SP", pv: 2000, generation: 0, column: 2 },
      { id: "leg1", label: "קו 1", code: "P+", pv: 3000, generation: 1, column: 0 },
      { id: "leg2", label: "קו 2", code: "P", pv: 3000, generation: 1, column: 2 },
      { id: "leg3", label: "קו 3", code: "P", pv: 4000, generation: 1, column: 4 },
      { id: "sub1", label: "לקוח", code: "C", pv: 0, generation: 2, column: 0 }
    ],
    edges: [
      { from: "you", to: "leg1" },
      { from: "you", to: "leg2" },
      { from: "you", to: "leg3" },
      { from: "leg1", to: "sub1" }
    ],
    notes: ["כל קו תורם למאמץ הקבוצתי (חוק 50%)"]
  },
  sales_coordinator: {
    title: "מבנה SC",
    description: "מבנה נדרש: 1 PB",
    highlightId: "you",
    nodes: [
      { id: "you", label: "אתה (SC)", code: "SC", pv: 1000, generation: 0, column: 1 },
      { id: "p1", label: "שותף P+", code: "PB", pv: 4000, generation: 1, column: 1 },
      { id: "others", label: "שאר הקבוצה", code: "GRP", pv: 23000, generation: 1, column: 2 }
    ],
    edges: [
      { from: "you", to: "p1" },
      { from: "you", to: "others" }
    ],
    notes: ["נדרש זכיין אחד בדרגת P+ ומעלה (PB)"]
  },
  // שאר הדרגות עם מבנה בסיסי למניעת קריסה
  qssc: { title: "מבנה QSSC", nodes: [{id:"you", label:"אתה", code:"QSSC", generation:0, column:1}], edges:[], notes:[] },
  ssc: { title: "מבנה SSC", nodes: [{id:"you", label:"אתה", code:"SSC", generation:0, column:1}], edges:[], notes:[] },
  qnmd: { title: "מבנה QNMD", nodes: [{id:"you", label:"אתה", code:"QNMD", generation:0, column:1}], edges:[], notes:[] },
  nmd: { title: "מבנה NMD", nodes: [{id:"you", label:"אתה", code:"NMD", generation:0, column:1}], edges:[], notes:[] },
  imd: { title: "מבנה IMD", nodes: [{id:"you", label:"אתה", code:"IMD", generation:0, column:1}], edges:[], notes:[] },
  emd: { title: "מבנה EMD", nodes: [{id:"you", label:"אתה", code:"EMD", generation:0, column:1}], edges:[], notes:[] },
  pmd: { title: "מבנה PMD", nodes: [{id:"you", label:"אתה", code:"PMD", generation:0, column:1}], edges:[], notes:[] },
  pmd_plus: { title: "מבנה PMD+", nodes: [{id:"you", label:"אתה", code:"PMD+", generation:0, column:1}], edges:[], notes:[] }
};
