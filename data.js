/* data.js
   THE "GOLDEN COPY"
   1. Ranks: Full details (Commission %, Bonus NIS, Targets).
   2. Trees: Restored COORDINATES (generation, column) so they appear on screen.
   3. Images: Fixed "assets/" paths.
*/

// --- 1. רשימת הדרגות (טקסטים מלאים) ---
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
      "דרישה: מבנה PB (זכיין אחד בדרגת P+ ומעלה)."
    ],
    nodeCode: "SC"
  },
  {
    id: "qssc",
    title: "QSSC",
    targetPoints: 56000,
    intro: "בדרך לטופ.",
    videoUrl: "https://youtu.be/ru06kEc9kqE",
    bullets: [
      "יעד: 56,000 נקודות.",
      "בונוס חד פעמי: 4,800 ₪.",
      "זכאות לבונוסים דוריים (BIB)."
    ],
    nodeCode: "QSSC"
  },
  {
    id: "ssc",
    title: "Senior Sales Coordinator",
    targetPoints: 111000,
    intro: "ניהול בכיר.",
    videoUrl: "https://youtu.be/xPwmFecZ8Ms",
    bullets: [
      "יעד: 111,000 נקודות.",
      "בונוס חד פעמי: 10,000 ₪.",
      "הכנסה ממוצעת: כ-5,000-8,000 ₪ בחודש."
    ],
    nodeCode: "SSC"
  },
  {
    id: "qnmd",
    title: "QNMD",
    targetPoints: 222000,
    intro: "טרום דרגה לאומית.",
    videoUrl: "https://youtu.be/W8Wm_c4kMUo",
    bullets: [
      "יעד: 222,000 נקודות.",
      "בונוס חד פעמי: 19,000 ₪.",
      "נחשבת דרגת מפתח בחברה."
    ],
    nodeCode: "QNMD"
  },
  {
    id: "nmd",
    title: "NMD",
    targetPoints: 222000,
    intro: "הדרגה הלאומית (National Marketing Director).",
    videoUrl: "https://youtu.be/muieHSXIocI",
    bullets: [
      "יעד: אשרור מחדש של QNMD.",
      "בונוס חד פעמי: 39,000 ₪.",
      "הטבות: ביטוח בריאות, קרן השתלמות ועוד."
    ],
    nodeCode: "NMD"
  },
  {
    id: "imd",
    title: "IMD",
    targetPoints: 444000,
    intro: "דרגה בינלאומית.",
    videoUrl: "https://youtu.be/WeEZlCjHAtU",
    bullets: [
      "יעד: 444,000 נקודות.",
      "בונוס חד פעמי: 77,000 ₪.",
      "השתתפות בכנסים בינלאומיים על חשבון החברה."
    ],
    nodeCode: "IMD"
  },
  {
    id: "emd",
    title: "EMD",
    targetPoints: 666000,
    intro: "Executive Marketing Director.",
    videoUrl: "https://youtu.be/KpKDNIc8R7k",
    bullets: [
      "יעד: 666,000 נקודות.",
      "בונוס חד פעמי: 115,000 ₪.",
      "דרגת מנהיגות בכירה מאוד."
    ],
    nodeCode: "EMD"
  },
  {
    id: "pmd",
    title: "PMD",
    targetPoints: 888000,
    intro: "פסגת המנהיגות (Presidential).",
    videoUrl: "https://youtu.be/2i3sVTpFxts",
    bullets: [
      "יעד: 888,000 נקודות.",
      "בונוס חד פעמי: 153,000 ₪.",
      "חלק מהמעגל העסקי הבכיר של החברה."
    ],
    nodeCode: "PMD"
  },
  {
    id: "pmd_plus",
    title: "PMD+",
    targetPoints: 1600000,
    intro: "הטופ של הטופ.",
    videoUrl: "https://youtu.be/MVxQ4LPsj6w",
    bullets: [
      "יעד: 1,600,000 נקודות.",
      "בונוס חד פעמי: 200,000 ₪.",
      "הדרגה הגבוהה ביותר האפשרית."
    ],
    nodeCode: "PMD+"
  }
];

// --- 2. מוצרים (פירוט מלא, תמונות assets) ---
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
      "ויטמין A: מסייע לשמירה על בריאות העור.",
      "ויטמין C: תורם לייצור קולגן ובריאות החניכיים."
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
      "ניקוי רעלים טבעי."
    ],
    usage: "2 קפסולות ביום עם כוס מים גדולה."
  },
  {
    id: "berry",
    title: "תערובת פירות יער (סגול)",
    subTitle: "Berry Blend",
    intro: "נוגדי חמצון עוצמתיים מהטבע.",
    image: "assets/cap_berry.jpg",
    ingredients: "ענבים, אוכמניות כחולות, חמוציות, אוכמניות שחורות, אוכמניות בלאק קורנט, בילברי, פטל, רימון, סמבוק, קקאו וארטישוק.",
    vitamins: "מכיל ויטמין C וויטמין E.",
    benefits: [
      "נוגדי חמצון חזקים במיוחד.",
      "תמיכה בבריאות הלב וכלי הדם.",
      "שיפור זרימת דם והתאוששות."
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
      "תמיכה בראייה, תפקוד המוח והלב."
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
      "עשיר בסיבים לתחושת שובע."
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
      "מקור מצוין לחלבון וסיבים."
    ],
    usage: "כף מדידה אחת עם 250 מ״ל מים או חלב צמחי."
  }
];

// --- 3. אסטרטגיות למחשבון (הניקוד שלך) ---
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

// --- 4. עצי דרגות (עם קואורדינטות - קריטי!) ---
window.RANK_TREES = {
  partner_plus: {
    title: "מבנה Partner Plus (סימולציה)",
    description: "יעד: 4,000 נקודות",
    highlightId: "you",
    nodes: [
      { id: "you", label: "אתה (P+)", code: "P+", pv: 866, totalVal: "סה״כ: 4,576", generation: 0, column: 1 },
      { id: "l1", label: "לקוח/זכיין", code: "P", pv: 283, generation: 1, column: 0 },
      { id: "l2", label: "קו אמצע", code: "P", pv: 2561, generation: 1, column: 1 },
      { id: "l3", label: "קו ימין", code: "P", pv: 866, generation: 1, column: 2 }
    ],
    edges: [{from:"you",to:"l1"}, {from:"you",to:"l2"}, {from:"you",to:"l3"}],
    notes: ["הושג היעד לדרגת Partner Plus!", "סה\"כ: 4,576 נקודות."]
  },
  senior_partner: {
    title: "מבנה Senior Partner (סימולציה)",
    description: "יעד: 12,000 נקודות",
    highlightId: "you",
    nodes: [
      { id: "you", label: "אתה (SP)", code: "SP", pv: 2561, totalVal: "סה״כ: 12,090", generation: 0, column: 2 },
      { id: "l1", label: "זכיין P", code: "P", pv: 4192, generation: 1, column: 0 },
      { id: "mid", label: "לקוח אישי", code: "Client", pv: 2561, generation: 1, column: 2 },
      { id: "r1", label: "זכיין P", code: "P", pv: 2776, generation: 1, column: 4 },
      { id: "l1_sub", label: "הזמנה", code: "Order", pv: 1631, generation: 2, column: 0 },
      { id: "r1_sub", label: "הזמנה", code: "Order", pv: 1145, generation: 2, column: 4 }
    ],
    edges: [{from:"you",to:"l1"}, {from:"you",to:"mid"}, {from:"you",to:"r1"}, {from:"l1",to:"l1_sub"}, {from:"r1",to:"r1_sub"}],
    notes: ["סה\"כ נקודות: 12,090", "עמדה ביעדי חודשיים רצופים."]
  },
  sales_coordinator: {
    title: "מבנה Sales Coordinator",
    description: "יעד: 28,000 נקודות + PB",
    highlightId: "you",
    nodes: [
      { id: "you", label: "אתה (SC)", code: "SC", pv: 1245, totalVal: "סה״כ: 27,170", generation: 0, column: 2 },
      { id: "pb", label: "זכיין PB", code: "P+", pv: 4500, generation: 1, column: 1 },
      { id: "team", label: "שאר הקבוצה", code: "GRP", pv: 21425, generation: 1, column: 3 }
    ],
    edges: [{from:"you",to:"pb"}, {from:"you",to:"team"}],
    notes: ["סה\"כ נקודות: 27,170", "קרוב ליעד של 28,000."]
  },
  // מבנה בסיסי למניעת קריסה לשאר הדרגות
  qssc: { title: "מבנה QSSC", nodes: [{id:"you", label:"אתה", code:"QSSC", generation:0, column:1}], edges:[], notes:[] },
  ssc: { title: "מבנה SSC", nodes: [{id:"you", label:"אתה", code:"SSC", generation:0, column:1}], edges:[], notes:[] },
  qnmd: { title: "מבנה QNMD", nodes: [{id:"you", label:"אתה", code:"QNMD", generation:0, column:1}], edges:[], notes:[] },
  nmd: { title: "מבנה NMD", nodes: [{id:"you", label:"אתה", code:"NMD", generation:0, column:1}], edges:[], notes:[] },
  imd: { title: "מבנה IMD", nodes: [{id:"you", label:"אתה", code:"IMD", generation:0, column:1}], edges:[], notes:[] },
  emd: { title: "מבנה EMD", nodes: [{id:"you", label:"אתה", code:"EMD", generation:0, column:1}], edges:[], notes:[] },
  pmd: { title: "מבנה PMD", nodes: [{id:"you", label:"אתה", code:"PMD", generation:0, column:1}], edges:[], notes:[] },
  pmd_plus: { title: "מבנה PMD+", nodes: [{id:"you", label:"אתה", code:"PMD+", generation:0, column:1}], edges:[], notes:[] }
};
