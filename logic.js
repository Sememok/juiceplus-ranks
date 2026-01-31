/* logic.js
   ISRAEL 2025 - FINAL FIX
   - Fixed Image Paths: Added 'assets/' prefix.
   - Enhanced Content: Full ingredient lists from PDF.
   - Exact Points: As provided by user.
*/

// --- חלק 1: דרגות ---
window.RANKS = [
  { id: "partner_plus", title: "Partner Plus", targetPoints: 4000, intro: "התקדמות ראשונה.", videoUrl: "https://youtu.be/M293NdN7Sok?si=da8BUiVp5Qy-Z_5y", bullets: ["יעד: 4,000 נקודות.", "עמלה: 14%.", "בונוס: 400 ₪."], nodeCode: "P+" },
  { id: "senior_partner", title: "Senior Partner", targetPoints: 12000, intro: "בניית יציבות.", videoUrl: "https://youtu.be/fnG6Eld0SPk?si=7ZozniTLZHIG5qR8", bullets: ["יעד: 12,000 נקודות.", "עמלה: 19%.", "בונוס: 1,200 ₪."], nodeCode: "SP" },
  { id: "sales_coordinator", title: "Sales Coordinator", targetPoints: 28000, intro: "דרגת מנהיגות.", videoUrl: "https://youtu.be/cyJb_ecWjyA?si=JjClNcImW1bs86Ig", bullets: ["יעד: 28,000 נקודות.", "עמלה: 22%.", "בונוס: 3,600 ₪."], nodeCode: "SC" },
  { id: "qssc", title: "QSSC", targetPoints: 56000, intro: "בדרך לטופ.", videoUrl: "https://youtu.be/ru06kEc9kqE", bullets: ["יעד: 56,000 נקודות.", "בונוס: 4,800 ₪."], nodeCode: "QSSC" },
  { id: "ssc", title: "Senior Sales Coordinator", targetPoints: 111000, intro: "ניהול בכיר.", videoUrl: "https://youtu.be/xPwmFecZ8Ms", bullets: ["יעד: 111,000 נקודות.", "בונוס: 10,000 ₪."], nodeCode: "SSC" },
  { id: "qnmd", title: "QNMD", targetPoints: 222000, intro: "לפני פסגה.", videoUrl: "https://youtu.be/W8Wm_c4kMUo", bullets: ["יעד: 222,000 נקודות.", "בונוס: 19,000 ₪."], nodeCode: "QNMD" },
  { id: "nmd", title: "NMD", targetPoints: 222000, intro: "הדרגה הלאומית.", videoUrl: "https://youtu.be/muieHSXIocI", bullets: ["יעד: 222,000 נקודות.", "בונוס: 39,000 ₪."], nodeCode: "NMD" },
  { id: "imd", title: "IMD", targetPoints: 444000, intro: "בינלאומי.", videoUrl: "https://youtu.be/WeEZlCjHAtU", bullets: ["יעד: 444,000 נקודות.", "בונוס: 77,000 ₪."], nodeCode: "IMD" },
  { id: "emd", title: "EMD", targetPoints: 666000, intro: "אקזקיוטיב.", videoUrl: "https://youtu.be/KpKDNIc8R7k", bullets: ["יעד: 666,000 נקודות.", "בונוס: 115,000 ₪."], nodeCode: "EMD" },
  { id: "pmd", title: "PMD", targetPoints: 888000, intro: "פסגת המנהיגות.", videoUrl: "https://youtu.be/2i3sVTpFxts", bullets: ["יעד: 888,000 נקודות.", "בונוס: 153,000 ₪."], nodeCode: "PMD" },
  { id: "pmd_plus", title: "PMD+", targetPoints: 1600000, intro: "הטופ של הטופ.", videoUrl: "https://youtu.be/MVxQ4LPsj6w", bullets: ["יעד: 1,600,000 נקודות.", "בונוס: 200,000 ₪."], nodeCode: "PMD+" }
];

// --- חלק 2: מוצרים (פירוט מלא + נתיב תמונה מתוקן) ---
window.PRODUCTS = [
  {
    id: "fruit",
    title: "קפסולות תערובת פירות (אדום)",
    subTitle: "Fruit Blend",
    [cite_start]intro: "המיטב של המטע, בתוך קפסולה[cite: 37].",
    image: "assets/cap_fruit.jpg", // נתיב מתוקן
    [cite_start]ingredients: "תפוחים, חמוציות, תפוזים, אננס, דובדבני אסרולה, אפרסקים, מנגו, תמרים, שזיפים וסלק סוכר[cite: 67].",
    [cite_start]vitamins: "מכיל ויטמין A, ויטמין C, ויטמין E וחומצה פולית[cite: 68].",
    benefits: [
      "מגשר על הפער התזונתי היומי.",
      [cite_start]"ויטמין A: מסייע לשמירה על בריאות העור[cite: 77].",
      [cite_start]"ויטמין C: מסייע לייצור קולגן, בריאות החניכיים, השיניים וכלי הדם[cite: 78].",
      [cite_start]"ויטמין E + C: מגנים על התאים ממתח חמצוני (אנטי-אייג'ינג)[cite: 78].",
      [cite_start]"חומצה פולית: תומכת במערכת החיסון[cite: 77]."
    ],
    usage: "2 קפסולות ביום עם כוס מים גדולה."
  },
  {
    id: "veg",
    title: "קפסולות תערובת ירקות (ירוק)",
    subTitle: "Vegetable Blend",
    [cite_start]intro: "הדרך הקלה לאכול את הירקות שלך[cite: 62].",
    image: "assets/cap_veg.jpg", // נתיב מתוקן
    [cite_start]ingredients: "גזר, פטרוזיליה, ברוקולי, קייל, כרוב לבן, עגבניות, תרד, שום וסלק[cite: 70].",
    [cite_start]vitamins: "מכיל ויטמין A, ויטמין C, ויטמין E וחומצה פולית[cite: 71].",
    benefits: [
      "משלים את הירקות שחסרים בתפריט היומי.",
      [cite_start]"תמיכה במערכת החיסון (ויטמין A, C וחומצה פולית)[cite: 77].",
      "ניקוי רעלים ותמיכה בתהליכים טבעיים בגוף.",
      [cite_start]"ללא גלוטן ומתאים לטבעונים[cite: 50, 51]."
    ],
    usage: "2 קפסולות ביום עם כוס מים גדולה."
  },
  {
    id: "berry",
    title: "קפסולות פירות יער (סגול)",
    subTitle: "Berry Blend",
    [cite_start]intro: "נוגדי חמצון עוצמתיים מהטבע[cite: 39].",
    image: "assets/cap_berry.jpg", // נתיב מתוקן
    [cite_start]ingredients: "ענבים, אוכמניות כחולות, חמוציות, אוכמניות שחורות, אוכמניות בלאק קורנט, בילברי, פטל, רימון, סמבוק, קקאו וארטישוק[cite: 73].",
    [cite_start]vitamins: "מכיל ויטמין C וויטמין E[cite: 74].",
    benefits: [
      [cite_start]"נוגדי חמצון חזקים להגנה על התאים[cite: 78].",
      "תמיכה בבריאות הלב וכלי הדם.",
      "שיפור זרימת דם והתאוששות (מעולה לספורטאים).",
      "שמירה על מראה עור בריא."
    ],
    usage: "2 קפסולות ביום."
  },
  {
    id: "omega",
    title: "תערובת אומגה (Omega Blend)",
    subTitle: "Juice Plus+ Omega",
    [cite_start]intro: "אומגה צמחית לחלוטין - ישר מהמקור (אצות)[cite: 4].",
    image: "assets/cap_omega.jpg", // נתיב מתוקן
    [cite_start]ingredients: "שמן אצות, שמן זרעי רימונים, שמן פטל, שמן אשחר ים (אובליפיחה), שמן חריע, שמן עגבניות[cite: 19].",
    [cite_start]vitamins: "מכיל אומגה 3, 5, 6, 7 ו-9[cite: 16].",
    benefits: [
      [cite_start]"100% צמחי (טבעוני) - מופק מאצות ולא מדגים[cite: 20].",
      "ללא טעם לוואי של דגים.",
      [cite_start]"מופק בכבישה קרה לשמירה על איכות השמנים[cite: 17].",
      [cite_start]"תומך בבריאות המוח, הראייה והלב[cite: 30, 31, 32]."
    ],
    usage: "2 קפסולות ביום עם האוכל."
  },
  {
    id: "vanilla",
    title: "שייק קומפליט - וניל",
    subTitle: "Complete Vanilla",
    [cite_start]intro: "ארוחה מלאה ומאוזנת בכוס[cite: 92].",
    image: "assets/shake_vanilla.jpg", // נתיב מתוקן
    [cite_start]ingredients: "חלבון סויה, חלבון אפונה, חלבון אורז, אבקת חומוס[cite: 109].",
    vitamins: "מכיל סיבים תזונתיים, ויטמינים ומינרלים.",
    benefits: [
      [cite_start]"חלבון צמחי איכותי (13 גרם למנה)[cite: 109].",
      [cite_start]"אינדקס גליקמי נמוך (מתאים לשמירה על משקל)[cite: 110].",
      [cite_start]"עשיר בסיבים תזונתיים לשובע ממושך[cite: 106].",
      [cite_start]"ללא גלוטן וללא הנדסה גנטית[cite: 102, 103]."
    ],
    [cite_start]usage: "כף מדידה אחת עם 250 מ״ל מים או חלב צמחי[cite: 113]."
  },
  {
    id: "choco",
    title: "שייק קומפליט - שוקולד",
    subTitle: "Complete Chocolate",
    [cite_start]intro: "פינוק בריא ומזין לאוהבי שוקולד[cite: 92].",
    image: "assets/shake_choco.jpg", // נתיב מתוקן
    [cite_start]ingredients: "חלבון סויה, חלבון אפונה, חלבון אורז, אבקת חומוס, קקאו[cite: 109].",
    vitamins: "פרופיל מלא של ויטמינים ומינרלים.",
    benefits: [
      "פתרון מושלם לארוחת בוקר או אחרי אימון.",
      "טעם שוקולדי עשיר ללא רגשות אשם.",
      [cite_start]"מתאים לטבעונים[cite: 104].",
      "תומך בבניית שריר ואנרגיה."
    ],
    [cite_start]usage: "כף מדידה אחת עם 250 מ״ל מים או חלב צמחי[cite: 113]."
  }
];

// --- חלק 3: מחשבון אסטרטגיה (ניקוד מעודכן מהמשתמש) ---
window.STRATEGIES = [
  { name: "קפסולות פירות יער (בודד)", points: 380 },
  { name: "מארז דואו (פירות + ירקות)", points: 765 },
  { name: "שלישייה (פירות, ירקות, יער)", points: 1145 },
  { name: "רביעייה (שלישייה + אומגה)", points: 1631 },
  { name: "שייק קומפליט (שקיות גדולות - טעם אחד)", points: 830 },
  { name: "קומפליט קומבי (מיקס טעמים)", points: 930 },
  { name: "קפסולות אומגה בלנד (בודד)", points: 486 },
  { name: "אומגה בלנד + פירות יער", points: 866 },
  { name: "ערכה מלאה + קומפליט רגיל", points: 2461 },
  { name: "ערכה מלאה + קומפליט קומבי", points: 2561 }
];

// --- חלק 4: עצים (ללא שינוי) ---
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
