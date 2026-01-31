/* data.js
   MASTER FILE - ISRAEL 2025
   - Images: Linked to "assets/" folder.
   - Points: Exact user list (380, 765, etc.)
   - Ingredients: Detailed list from PDF.
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

// --- 2. מוצרים (עם נתיב assets ורכיבים מלאים) ---
window.PRODUCTS = [
  {
    id: "fruit",
    title: "תערובת פירות (אדום)",
    subTitle: "Fruit Blend",
    intro: "המיטב של המטע, בתוך קפסולה.",
    image: "assets/cap_fruit.jpg",
    ingredients: "תפוחים, חמוציות, תפוזים, אננס, דובדבני אסרולה, אפרסקים, מנגו, תמרים, שזיפים וסלק סוכר.",
    vitamins: "מכיל ויטמין A, ויטמין C, ויטמין E וחומצה פולית.",
    benefits: [
      "מגשר על הפער בין התזונה המצויה לרצויה.",
      "ויטמין A: שומר על בריאות העור.",
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
    vitamins: "מכיל ויטמין A, ויטמין C, ויטמין E וחומצה פולית.",
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
    vitamins: "מכיל אומגה 3, 5, 6, 7 ו-9.",
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

// --- 3. אסטרטגיות למחשבון (לפי הרשימה המדויקת שלך) ---
window.STRATEGIES = [
  { name: "קפסולות פירות יער (380 נק')", points: 380 },
  { name: "מארז דואו - פירות וירקות (765 נק')", points: 765 },
  { name: "שלישייה - פירות, ירקות, יער (1145 נק')", points: 1145 },
  { name: "רביעייה - שלישייה + אומגה (1631 נק')", points: 1631 },
  { name: "שייק קומפליט (שקיות גדולות - טעם אחד)", points: 830 },
  { name: "קומפליט קומבי (מיקס טעמים)", points: 930 },
  { name: "קפסולות אומגה בלנד (486 נק')", points: 486 },
  { name: "אומגה בלנד + פירות יער (866 נק')", points: 866 },
  { name: "ערכה מלאה + קומפליט רגיל (2461 נק')", points: 2461 },
  { name: "ערכה מלאה + קומפליט קומבי (2561 נק')", points: 2561 }
];

// --- 4. עצי דרגות ---
window.RANK_TREES = {
  partner_plus: { title: "עץ P+", description: "יעד 4,000", nodes: [{id:"you", label:"אתה", code:"P+", pv:4000}], edges: [], notes: [] },
  senior_partner: { title: "עץ SP", description: "יעד 12,000", nodes: [{id:"you", label:"אתה", code:"SP", pv:12000}], edges: [], notes: [] },
  sales_coordinator: { title: "עץ SC", description: "יעד 28,000", nodes: [{id:"you", label:"אתה", code:"SC", pv:28000}], edges: [], notes: [] },
  qssc: { title: "עץ QSSC", description: "יעד 56,000", nodes: [{id:"you", label:"אתה", code:"QSSC"}], edges:[], notes:[] },
  ssc: { title: "עץ SSC", description: "יעד 111,000", nodes: [{id:"you", label:"אתה", code:"SSC"}], edges:[], notes:[] },
  qnmd: { title: "עץ QNMD", description: "יעד 222,000", nodes: [{id:"you", label:"אתה", code:"QNMD"}], edges:[], notes:[] },
  nmd: { title: "עץ NMD", description: "יעד 222,000", nodes: [{id:"you", label:"אתה", code:"NMD"}], edges:[], notes:[] },
  imd: { title: "עץ IMD", description: "יעד 444,000", nodes: [{id:"you", label:"אתה", code:"IMD"}], edges:[], notes:[] },
  emd: { title: "עץ EMD", description: "יעד 666,000", nodes: [{id:"you", label:"אתה", code:"EMD"}], edges:[], notes:[] },
  pmd: { title: "עץ PMD", description: "יעד 888,000", nodes: [{id:"you", label:"אתה", code:"PMD"}], edges:[], notes:[] },
  pmd_plus: { title: "עץ PMD+", description: "יעד 1.6M", nodes: [{id:"you", label:"אתה", code:"PMD+"}], edges:[], notes:[] }
};
