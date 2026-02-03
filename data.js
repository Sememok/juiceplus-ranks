/* data.js - עם עצי דרגה מפורטים לכל הדרגות */

window.RANKS = [
  { 
    id: "partner_plus", 
    title: "Partner Plus", 
    targetPoints: 4000, 
    targetType: "promo",
    intro: "התקדמות ראשונה.", 
    videoUrl: "https://youtu.be/M293NdN7Sok", 
    bullets: [
      "יעד: 4,000 נקודות פרומו.",
      "✅ חודש הסמכה אחד.",
      "בונוס מעבר דרגה: 400 ₪.",
      "עמלת צוות: 4% על הזמנות P ו-P+ בארגון."
    ], 
    nodeCode: "P+",
    certificationMonths: 1,
    bonusBreakdown: [400],
    totalBonus: 400
  },
  { 
    id: "senior_partner", 
    title: "Senior Partner", 
    targetPoints: 12000, 
    targetType: "promo",
    intro: "בניית יציבות ופתיחת בונוס PB.", 
    videoUrl: "https://youtu.be/fnG6Eld0SPk", 
    bullets: [
      "יעד: 12,000 נקודות פרומו.",
      "דרישה: מקסימום 6,000 מרגל אחת (חוק 50%).",
      "דרישה: מינימום 4,000 נקודות אישיות.",
      "✅ חובה להכשיר 2 חודשים רצופים!",
      "חודש 1: בונוס 400 ₪.",
      "חודש 2: בונוס 800 ₪.",
      "סה\"כ בונוס מעבר דרגה: 1,200 ₪.",
      "🎯 בונוס PB: 3% על דור 1 (דרישה: 5,000 נק' PB).",
      "עמלת צוות: 5% על כל הזמנות הצוות."
    ], 
    nodeCode: "SP",
    certificationMonths: 2,
    bonusBreakdown: [400, 800],
    totalBonus: 1200,
    pbGenerations: 1,
    pbRates: [3]
  },
  { 
    id: "sales_coordinator", 
    title: "Sales Coordinator", 
    targetPoints: 28000, 
    targetType: "promo",
    intro: "דרגת מנהיגות עם PB ו-POB.", 
    videoUrl: "https://youtu.be/cyJb_ecWjyA", 
    bullets: [
      "יעד: 28,000 נקודות פרומו.",
      "דרישה: חוק 50% - מקסימום 14,000 מרגל אחת.",
      "דרישה: מינימום 1 זכיין P+ בארגון.",
      "✅ חובה להכשיר 2 חודשים רצופים!",
      "חודש 1: בונוס 1,200 ₪.",
      "חודש 2: בונוס 2,400 ₪.",
      "סה\"כ בונוס מעבר דרגה: 3,600 ₪.",
      "🎯 בונוס PB: 3% דור 1, 4% דור 2 (דרישה: 5,000 נק' PB).",
      "🎯 בונוס POB: 3% על SC ומעלה בארגון (דרישה: 20,000 נק' POB).",
      "עמלת צוות: 5% על כל הזמנות הצוות."
    ], 
    nodeCode: "SC",
    certificationMonths: 2,
    bonusBreakdown: [1200, 2400],
    totalBonus: 3600,
    pbGenerations: 2,
    pbRates: [3, 4],
    hasPOB: true
  },
  { 
    id: "qssc", 
    title: "QSSC", 
    targetPoints: 28000, 
    targetType: "payline",
    intro: "Qualifying Senior Sales Coordinator - דרגת פייליין ראשונה.", 
    videoUrl: "https://youtu.be/ru06kEc9kqE", 
    bullets: [
      "יעד: 28,000 נקודות פייליין (לא פרומו!).",
      "חוק 50%: מקסימום 14,000 מרגל אחת.",
      "דרישה: 1 רגל PB מוסמכת (SP ומעלה שביצע הסמכה ל-PB).",
      "דרישה: הסמכה אישית ל-PB (5,000 נק' PB).",
      "✅ חובה להכשיר 3 חודשים רצופים!",
      "חודש 1: בונוס 1,400 ₪.",
      "חודש 2: בונוס 1,400 ₪.",
      "חודש 3: בונוס 2,000 ₪.",
      "סה\"כ בונוס מעבר דרגה: 4,800 ₪.",
      "🎯 בונוס PB: 3% דור 1, 4% דורות 2-3 (דרישה: 5,000 נק' PB).",
      "🎯 בונוס POB: 3% (דרישה: 20,000 נק' POB).",
      "🎯 בונוס BIB: 5%-20% מרווחי החודש הקודם (מקסימום 1,500 ₪)."
    ], 
    nodeCode: "QSSC",
    certificationMonths: 3,
    bonusBreakdown: [1400, 1400, 2000],
    totalBonus: 4800,
    pbLegs: 1,
    pbGenerations: 3,
    pbRates: [3, 4, 4],
    hasPOB: true,
    hasBIB: true,
    bibMax: 1500
  },
  { 
    id: "ssc", 
    title: "Senior Sales Coordinator", 
    targetPoints: 56000, 
    targetType: "payline",
    intro: "ניהול בכיר עם 2 רגלי PB.", 
    videoUrl: "https://youtu.be/xPwmFecZ8Ms", 
    bullets: [
      "יעד: 56,000 נקודות פייליין.",
      "חוק 50%: מקסימום 28,000 מרגל אחת.",
      "דרישה: 2 רגליים PB מוסמכות.",
      "דרישה: הסמכה אישית ל-PB (5,000 נק' PB).",
      "✅ חובה להכשיר 3 חודשים רצופים!",
      "חודש 1: בונוס 2,500 ₪.",
      "חודש 2: בונוס 2,500 ₪.",
      "חודש 3: בונוס 5,000 ₪.",
      "סה\"כ בונוס מעבר דרגה: 10,000 ₪.",
      "🎯 בונוס PB: 3% דור 1, 4% דורות 2-4 (דרישה: 5,000 נק' PB).",
      "🎯 בונוס POB: 3% (דרישה: 20,000 נק' POB).",
      "🎯 בונוס BIB: 5%-20% (מקסימום 2,300 ₪)."
    ], 
    nodeCode: "SSC",
    certificationMonths: 3,
    bonusBreakdown: [2500, 2500, 5000],
    totalBonus: 10000,
    pbLegs: 2,
    pbGenerations: 4,
    pbRates: [3, 4, 4, 4],
    hasPOB: true,
    hasBIB: true,
    bibMax: 2300
  },
  { 
    id: "qnmd", 
    title: "QNMD", 
    targetPoints: 111000, 
    targetType: "payline",
    intro: "Qualifying National Marketing Director - לפני הדרגה הלאומית.", 
    videoUrl: "https://youtu.be/W8Wm_c4kMUo", 
    bullets: [
      "יעד: 111,000 נקודות פייליין.",
      "חוק 50%: מקסימום 55,500 מרגל אחת.",
      "דרישה: 3 רגליים PB מוסמכות.",
      "דרישה: הסמכה אישית ל-PB (5,000 נק' PB).",
      "✅ חובה להכשיר 3 חודשים רצופים!",
      "חודש 1: בונוס 4,500 ₪.",
      "חודש 2: בונוס 4,500 ₪.",
      "חודש 3: בונוס 10,000 ₪.",
      "סה\"כ בונוס מעבר דרגה: 19,000 ₪.",
      "🎯 בונוס PB: 3% דור 1, 4% דורות 2-4 (דרישה: 5,000 נק' PB).",
      "🎯 בונוס POB: 3% (דרישה: 20,000 נק' POB).",
      "🎯 בונוס BIB: 5%-20% (מקסימום 3,800 ₪)."
    ], 
    nodeCode: "QNMD",
    certificationMonths: 3,
    bonusBreakdown: [4500, 4500, 10000],
    totalBonus: 19000,
    pbLegs: 3,
    pbGenerations: 4,
    pbRates: [3, 4, 4, 4],
    hasPOB: true,
    hasBIB: true,
    bibMax: 3800
  },
  { 
    id: "nmd", 
    title: "NMD", 
    targetPoints: 222000, 
    targetType: "payline",
    intro: "National Marketing Director - הדרגה הלאומית.", 
    videoUrl: "https://youtu.be/muieHSXIocI", 
    bullets: [
      "יעד: 222,000 נקודות פייליין.",
      "חוק 50%: מקסימום 111,000 מרגל אחת.",
      "דרישה: 5 רגליים PB מוסמכות.",
      "דרישה: 2 רגליים POB מוסמכות.",
      "דרישה: הסמכה אישית ל-PB (5,000 נק' PB).",
      "✅ חובה להכשיר 4 חודשים מתוך 5!",
      "חודש 1: בונוס 9,500 ₪.",
      "חודש 2: בונוס 9,500 ₪.",
      "חודש 3+4: בונוס 20,000 ₪.",
      "סה\"כ בונוס מעבר דרגה: 39,000 ₪.",
      "🎯 בונוס PB: 3% דור 1, 4% דורות 2-5 (דרישה: 5,000 נק' PB).",
      "🎯 בונוס POB: 3% (דרישה: 20,000 נק' POB).",
      "🎯 בונוס BIB: 5%-20% (מקסימום 9,600 ₪)."
    ], 
    nodeCode: "NMD",
    certificationMonths: 5,
    certificationRequired: 4,
    bonusBreakdown: [9500, 9500, 20000],
    totalBonus: 39000,
    pbLegs: 5,
    pobLegs: 2,
    pbGenerations: 5,
    pbRates: [3, 4, 4, 4, 4],
    hasPOB: true,
    hasBIB: true,
    bibMax: 9600
  },
  { 
    id: "imd", 
    title: "IMD", 
    targetPoints: 444000, 
    targetType: "payline",
    intro: "International Marketing Director - בינלאומי.", 
    videoUrl: "https://youtu.be/WeEZlCjHAtU", 
    bullets: [
      "יעד: 444,000 נקודות פייליין.",
      "חוק 50%: מקסימום 222,000 מרגל אחת.",
      "דרישה: 5 רגליים PB מוסמכות.",
      "דרישה: 3 רגליים POB מוסמכות.",
      "דרישה: הסמכה אישית ל-PB (5,000 נק' PB).",
      "✅ חובה להכשיר 4 חודשים מתוך 5!",
      "בונוס מעבר דרגה: 77,000 ₪.",
      "🎯 בונוס PB: 3% דור 1, 4% דורות 2-5 (דרישה: 5,000 נק' PB).",
      "🎯 בונוס POB: 3% (דרישה: 20,000 נק' POB).",
      "🎯 בונוס BIB: 5%-20% (מקסימום 9,600 ₪)."
    ], 
    nodeCode: "IMD",
    certificationMonths: 5,
    certificationRequired: 4,
    bonusBreakdown: [77000],
    totalBonus: 77000,
    pbLegs: 5,
    pobLegs: 3,
    pbGenerations: 5,
    pbRates: [3, 4, 4, 4, 4],
    hasPOB: true,
    hasBIB: true,
    bibMax: 9600
  },
  { 
    id: "emd", 
    title: "EMD", 
    targetPoints: 666000, 
    targetType: "payline",
    intro: "Executive Marketing Director - אקזקיוטיב.", 
    videoUrl: "https://youtu.be/KpKDNIc8R7k", 
    bullets: [
      "יעד: 666,000 נקודות פייליין.",
      "חוק 50%: מקסימום 333,000 מרגל אחת.",
      "דרישה: 5 רגליים PB מוסמכות.",
      "דרישה: 4 רגליים POB מוסמכות.",
      "דרישה: הסמכה אישית ל-PB (5,000 נק' PB).",
      "✅ חובה להכשיר 4 חודשים מתוך 5!",
      "בונוס מעבר דרגה: 115,000 ₪.",
      "🎯 בונוס PB: 3% דור 1, 4% דורות 2-5 (דרישה: 5,000 נק' PB).",
      "🎯 בונוס POB: 3% (דרישה: 20,000 נק' POB).",
      "🎯 בונוס BIB: 5%-20% (מקסימום 9,600 ₪)."
    ], 
    nodeCode: "EMD",
    certificationMonths: 5,
    certificationRequired: 4,
    bonusBreakdown: [115000],
    totalBonus: 115000,
    pbLegs: 5,
    pobLegs: 4,
    pbGenerations: 5,
    pbRates: [3, 4, 4, 4, 4],
    hasPOB: true,
    hasBIB: true,
    bibMax: 9600
  },
  { 
    id: "pmd", 
    title: "PMD", 
    targetPoints: 888000, 
    targetType: "payline",
    intro: "Presidential Marketing Director - פסגת המנהיגות.", 
    videoUrl: "https://youtu.be/2i3sVTpFxts", 
    bullets: [
      "יעד: 888,000 נקודות פייליין.",
      "חוק 50%: מקסימום 444,000 מרגל אחת.",
      "דרישה: 5 רגליים PB מוסמכות.",
      "דרישה: 5 רגליים POB מוסמכות.",
      "דרישה: הסמכה אישית ל-PB (5,000 נק' PB).",
      "✅ חובה להכשיר 4 חודשים מתוך 5!",
      "בונוס מעבר דרגה: 153,000 ₪.",
      "🎯 בונוס PB: 3% דור 1, 4% דורות 2-5 (דרישה: 5,000 נק' PB).",
      "🎯 בונוס POB: 3% (דרישה: 20,000 נק' POB).",
      "🎯 בונוס BIB: 5%-20% (מקסימום 9,600 ₪)."
    ], 
    nodeCode: "PMD",
    certificationMonths: 5,
    certificationRequired: 4,
    bonusBreakdown: [153000],
    totalBonus: 153000,
    pbLegs: 5,
    pobLegs: 5,
    pbGenerations: 5,
    pbRates: [3, 4, 4, 4, 4],
    hasPOB: true,
    hasBIB: true,
    bibMax: 9600
  },
  { 
    id: "pmd_plus", 
    title: "PMD+", 
    targetPoints: 1600000, 
    targetType: "payline",
    intro: "Presidential Marketing Director Plus - הטופ.", 
    videoUrl: "https://youtu.be/MVxQ4LPsj6w", 
    bullets: [
      "יעד: 1,600,000 נקודות פייליין.",
      "חוק 50%: מקסימום 800,000 מרגל אחת.",
      "דרישה: 8 רגליים PB מוסמכות.",
      "דרישה: 6 רגליים POB מוסמכות.",
      "דרישה: הסמכה אישית ל-PB (5,000 נק' PB).",
      "✅ חובה להכשיר 4 חודשים מתוך 6!",
      "בונוס מעבר דרגה: 200,000 ₪.",
      "🎯 בונוס PB: 3% דור 1, 4% דורות 2-5 (דרישה: 5,000 נק' PB).",
      "🎯 בונוס POB: 3% (דרישה: 20,000 נק' POB).",
      "🎯 בונוס BIB: 5%-20% (מקסימום 9,600 ₪)."
    ], 
    nodeCode: "PMD+",
    certificationMonths: 6,
    certificationRequired: 4,
    bonusBreakdown: [200000],
    totalBonus: 200000,
    pbLegs: 8,
    pobLegs: 6,
    pbGenerations: 5,
    pbRates: [3, 4, 4, 4, 4],
    hasPOB: true,
    hasBIB: true,
    bibMax: 9600
  }
];

window.PRODUCTS = [
  { id: "fruit", title: "פירות (אדום)", subTitle: "Fruit Blend", intro: "המיטב של המטע.", image: "assets/cap_fruit.jpg", ingredients: "תפוחים, חמוציות...", vitamins: "A, C, E", benefits: ["בריאות העור"], usage: "2 ביום" },
  { id: "veg", title: "ירקות (ירוק)", subTitle: "Vegetable Blend", intro: "ירקות חיוניים.", image: "assets/cap_veg.jpg", ingredients: "גזר, כרוב...", vitamins: "A, C, E", benefits: ["חיזוק"], usage: "2 ביום" },
  { id: "berry", title: "פירות יער (סגול)", subTitle: "Berry Blend", intro: "נוגדי חמצון.", image: "assets/cap_berry.jpg", ingredients: "ענבים, פטל...", vitamins: "C, E", benefits: ["זרימת דם"], usage: "2 ביום" },
  { id: "omega", title: "אומגה בלנד", subTitle: "Omega Blend", intro: "אומגה צמחית.", image: "assets/cap_omega.jpg", ingredients: "אצות, רימונים...", vitamins: "אומגה 3,5,6,7,9", benefits: ["מוח ולב"], usage: "2 ביום" },
  { id: "vanilla", title: "שייק וניל", subTitle: "Complete Vanilla", intro: "ארוחה מלאה.", image: "assets/shake_vanilla.jpg", ingredients: "חלבון סויה...", vitamins: "ויטמינים ומינרלים", benefits: ["שובע"], usage: "כף מדידה" },
  { id: "choco", title: "שייק שוקולד", subTitle: "Complete Chocolate", intro: "ארוחה מלאה.", image: "assets/shake_choco.jpg", ingredients: "חלבון סויה...", vitamins: "ויטמינים ומינרלים", benefits: ["אנרגיה"], usage: "כף מדידה" }
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
    highlightId: "you",
    nodes: [
      { id: "you", label: "אתה", code: "P+", pv: 866, generation: 0, column: 1 },
      { id: "l1", label: "שמאל", code: "P", pv: 283, generation: 1, column: 0 },
      { id: "l2", label: "אמצע", code: "P", pv: 2561, generation: 1, column: 1 },
      { id: "l3", label: "ימין", code: "P", pv: 866, generation: 1, column: 2 }
    ],
    edges: [{from:"you",to:"l1"}, {from:"you",to:"l2"}, {from:"you",to:"l3"}],
    notes: ["סה\"כ בתרשים: 4,576 נקודות (יעד 4,000 הושג)."]
  },

  senior_partner: {
    title: "מבנה Senior Partner",
    highlightId: "you",
    nodes: [
      { id: "you", label: "אתה", code: "SP", pv: 2561, generation: 0, column: 1 },
      { id: "l1", label: "זכיין", code: "P", pv: 4192, generation: 1, column: 0 },
      { id: "l2", label: "לקוח", code: "Client", pv: 2561, generation: 1, column: 1 },
      { id: "l3", label: "זכיין", code: "P", pv: 2776, generation: 1, column: 2 }
    ],
    edges: [{from:"you",to:"l1"}, {from:"you",to:"l2"}, {from:"you",to:"l3"}],
    notes: [
      "סה\"כ בתרשים: 12,090 נקודות פרומו (יעד 12,000 הושג ✓).",
      "🎯 בונוס PB זמין מדרגה זו: 3% דור 1.",
      "דרישה ל-PB: 5,000 נקודות PB בחודש.",
      "בונוס מעבר דרגה: 400 + 800 = 1,200 ₪ (2 חודשים)."
    ]
  },

  sales_coordinator: {
    title: "מבנה Sales Coordinator",
    highlightId: "you",
    nodes: [
      { id: "you", label: "אתה (SC)", code: "SC", pv: 1245, generation: 0, column: 4 },
      { id: "leg1", label: "זכיין", code: "P", pv: 2561, generation: 1, column: 0 },
      { id: "leg2", label: "זכיין (P+)", code: "P+", pv: 4300, generation: 1, column: 1.5, isPBLeg: true },
      { id: "leg3", label: "זכיין", code: "P", pv: 930, generation: 1, column: 3 },
      { id: "leg4", label: "זכיין", code: "P", pv: 2561, generation: 1, column: 4.5 },
      { id: "leg5", label: "זכיין", code: "P", pv: 2561, generation: 1, column: 6 },
      { id: "leg6", label: "לקוח", code: "Client", pv: 1631, generation: 1, column: 7.5 },
      { id: "leg7", label: "לקוח", code: "Client", pv: 2561, generation: 1, column: 9 },
      { id: "leg8", label: "זכיין חדש", code: "P", pv: 1531, generation: 1, column: 10.5 },
      { id: "sub4", label: "זכיין", code: "P", pv: 2561, generation: 2, column: 4.5 },
      { id: "sub5", label: "זכיין", code: "P", pv: 2561, generation: 2, column: 6 },
      { id: "sub7", label: "לקוח", code: "Client", pv: 436, generation: 2, column: 9 },
      { id: "subsub7", label: "זכיין", code: "P", pv: 2561, generation: 3, column: 9 }
    ],
    edges: [
      {from:"you",to:"leg1"}, {from:"you",to:"leg2"}, {from:"you",to:"leg3"}, {from:"you",to:"leg4"}, {from:"you",to:"leg5"}, {from:"you",to:"leg6"}, {from:"you",to:"leg7"}, {from:"you",to:"leg8"},
      {from:"leg4",to:"sub4"}, {from:"leg5",to:"sub5"}, {from:"leg7",to:"sub7"},
      {from:"sub7",to:"subsub7"}
    ],
    notes: [
      "סה\"כ מוצג בתרשים: 28,000 נקודות פרומו (יעד הושג ✓).",
      "דרישה: מינימום 1 זכיין P+ בארגון (מסומן בירוק).",
      "🎯 בונוס PB: 3% דור 1, 4% דור 2 (דרישה: 5,000 נק' PB).",
      "🎯 בונוס POB: 3% על SC ומעלה (דרישה: 20,000 נק' POB).",
      "בונוס מעבר דרגה: 1,200 + 2,400 = 3,600 ₪ (2 חודשים)."
    ]
  },
  
  qssc: {
    title: "מבנה QSSC - Qualifying Senior Sales Coordinator",
    highlightId: "you",
    nodes: [
      { id: "you", label: "אתה", code: "QSSC", pv: 2000, generation: 0, column: 3 },
      
      // רגל 1 - רגל PB מוסמכת (SP שביצע הסמכה)
      { id: "leg1", label: "רגל PB", code: "SP", pv: 5000, generation: 1, column: 0, isPBLeg: true, pbQualified: true },
      { id: "leg1_sub1", label: "זכיין", code: "P+", pv: 3500, generation: 2, column: 0 },
      { id: "leg1_sub2", label: "זכיין", code: "P", pv: 2500, generation: 2, column: 1.5 },
      { id: "leg1_sub3", label: "לקוח", code: "Client", pv: 2000, generation: 3, column: 0 },
      
      // רגל 2
      { id: "leg2", label: "זכיין", code: "P+", pv: 4000, generation: 1, column: 3 },
      { id: "leg2_sub1", label: "זכיין", code: "P", pv: 2500, generation: 2, column: 3 },
      
      // רגל 3
      { id: "leg3", label: "זכיין", code: "P", pv: 3000, generation: 1, column: 5 },
      { id: "leg3_sub1", label: "לקוח", code: "Client", pv: 1500, generation: 2, column: 5 },
      
      // רגל 4
      { id: "leg4", label: "זכיין", code: "P", pv: 2500, generation: 1, column: 7 },
      
      // רגל 5 - לקוחות
      { id: "leg5", label: "לקוח", code: "Client", pv: 2000, generation: 1, column: 9 }
    ],
    edges: [
      {from:"you",to:"leg1"}, {from:"you",to:"leg2"}, {from:"you",to:"leg3"}, {from:"you",to:"leg4"}, {from:"you",to:"leg5"},
      {from:"leg1",to:"leg1_sub1"}, {from:"leg1",to:"leg1_sub2"}, {from:"leg1_sub1",to:"leg1_sub3"},
      {from:"leg2",to:"leg2_sub1"},
      {from:"leg3",to:"leg3_sub1"}
    ],
    notes: [
      "⭐ יעד: 28,000 נקודות פייליין (לא פרומו!).",
      "⭐ רגל PB מוסמכת (SP): מסומנת בכוכב - חובה 1 רגל.",
      "חוק 50%: מקסימום 14,000 מרגל אחת.",
      "🎯 בונוס PB: 3% דור 1, 4% דורות 2-3.",
      "🎯 בונוס POB: 3% (דרישה: 20,000 נק' POB).",
      "🎯 בונוס BIB: 5%-20% (מקסימום 1,500 ₪).",
      "בונוס מעבר דרגה: 1,400 + 1,400 + 2,000 = 4,800 ₪ (3 חודשים)."
    ]
  },

  ssc: {
    title: "מבנה SSC - Senior Sales Coordinator",
    highlightId: "you",
    nodes: [
      { id: "you", label: "אתה", code: "SSC", pv: 3000, generation: 0, column: 4 },
      
      // רגל PB 1 - SC מוסמך
      { id: "leg1", label: "רגל PB 1", code: "SC", pv: 8000, generation: 1, column: 0, isPBLeg: true, pbQualified: true },
      { id: "leg1_sub1", label: "זכיין", code: "P+", pv: 4000, generation: 2, column: 0 },
      { id: "leg1_sub2", label: "זכיין", code: "P", pv: 3500, generation: 2, column: 1.5 },
      { id: "leg1_sub3", label: "לקוח", code: "Client", pv: 2500, generation: 3, column: 0 },
      
      // רגל PB 2 - SP מוסמך
      { id: "leg2", label: "רגל PB 2", code: "SP", pv: 7000, generation: 1, column: 3, isPBLeg: true, pbQualified: true },
      { id: "leg2_sub1", label: "זכיין", code: "P+", pv: 4500, generation: 2, column: 3 },
      { id: "leg2_sub2", label: "זכיין", code: "P", pv: 3000, generation: 2, column: 4.5 },
      { id: "leg2_sub3", label: "לקוח", code: "Client", pv: 2000, generation: 3, column: 3 },
      
      // רגל 3
      { id: "leg3", label: "זכיין", code: "P+", pv: 5000, generation: 1, column: 6 },
      { id: "leg3_sub1", label: "זכיין", code: "P", pv: 4000, generation: 2, column: 6 },
      { id: "leg3_sub2", label: "לקוח", code: "Client", pv: 2500, generation: 3, column: 6 },
      
      // רגל 4
      { id: "leg4", label: "זכיין", code: "P", pv: 4000, generation: 1, column: 8 },
      { id: "leg4_sub1", label: "זכיין", code: "P", pv: 3000, generation: 2, column: 8 },
      
      // לקוחות
      { id: "leg5", label: "לקוח", code: "Client", pv: 3000, generation: 1, column: 10 }
    ],
    edges: [
      {from:"you",to:"leg1"}, {from:"you",to:"leg2"}, {from:"you",to:"leg3"}, {from:"you",to:"leg4"}, {from:"you",to:"leg5"},
      {from:"leg1",to:"leg1_sub1"}, {from:"leg1",to:"leg1_sub2"}, {from:"leg1_sub1",to:"leg1_sub3"},
      {from:"leg2",to:"leg2_sub1"}, {from:"leg2",to:"leg2_sub2"}, {from:"leg2_sub1",to:"leg2_sub3"},
      {from:"leg3",to:"leg3_sub1"}, {from:"leg3_sub1",to:"leg3_sub2"},
      {from:"leg4",to:"leg4_sub1"}
    ],
    notes: [
      "⭐ יעד: 56,000 נקודות פייליין.",
      "⭐ 2 רגליים PB מוסמכות (מסומנות בכוכב).",
      "חוק 50%: מקסימום 28,000 מרגל אחת.",
      "🎯 בונוס PB: 3% דור 1, 4% דורות 2-4.",
      "🎯 בונוס POB: 3% (דרישה: 20,000 נק' POB).",
      "🎯 בונוס BIB: 5%-20% (מקסימום 2,300 ₪).",
      "בונוס מעבר דרגה: 2,500 + 2,500 + 5,000 = 10,000 ₪ (3 חודשים)."
    ]
  },

  qnmd: {
    title: "מבנה QNMD - Qualifying National Marketing Director",
    highlightId: "you",
    nodes: [
      { id: "you", label: "אתה", code: "QNMD", pv: 5000, generation: 0, column: 5 },
      
      // רגל PB 1 - SSC
      { id: "leg1", label: "רגל PB 1", code: "SSC", pv: 15000, generation: 1, column: 0, isPBLeg: true, pbQualified: true },
      { id: "leg1_sub1", label: "SC", code: "SC", pv: 8000, generation: 2, column: 0 },
      { id: "leg1_sub2", label: "זכיין", code: "P+", pv: 5000, generation: 3, column: 0 },
      
      // רגל PB 2 - SC
      { id: "leg2", label: "רגל PB 2", code: "SC", pv: 12000, generation: 1, column: 2.5, isPBLeg: true, pbQualified: true },
      { id: "leg2_sub1", label: "SP", code: "SP", pv: 6000, generation: 2, column: 2.5 },
      { id: "leg2_sub2", label: "זכיין", code: "P+", pv: 4500, generation: 3, column: 2.5 },
      
      // רגל PB 3 - SP
      { id: "leg3", label: "רגל PB 3", code: "SP", pv: 10000, generation: 1, column: 5, isPBLeg: true, pbQualified: true },
      { id: "leg3_sub1", label: "זכיין", code: "P+", pv: 6000, generation: 2, column: 5 },
      { id: "leg3_sub2", label: "זכיין", code: "P", pv: 4000, generation: 2, column: 6.5 },
      
      // רגל 4
      { id: "leg4", label: "זכיין", code: "P+", pv: 12000, generation: 1, column: 8 },
      { id: "leg4_sub1", label: "זכיין", code: "P", pv: 7000, generation: 2, column: 8 },
      { id: "leg4_sub2", label: "לקוח", code: "Client", pv: 4000, generation: 3, column: 8 },
      
      // רגל 5
      { id: "leg5", label: "זכיין", code: "P", pv: 8000, generation: 1, column: 10 },
      
      // לקוחות
      { id: "leg6", label: "לקוח", code: "Client", pv: 5000, generation: 1, column: 12 }
    ],
    edges: [
      {from:"you",to:"leg1"}, {from:"you",to:"leg2"}, {from:"you",to:"leg3"}, {from:"you",to:"leg4"}, {from:"you",to:"leg5"}, {from:"you",to:"leg6"},
      {from:"leg1",to:"leg1_sub1"}, {from:"leg1_sub1",to:"leg1_sub2"},
      {from:"leg2",to:"leg2_sub1"}, {from:"leg2_sub1",to:"leg2_sub2"},
      {from:"leg3",to:"leg3_sub1"}, {from:"leg3",to:"leg3_sub2"},
      {from:"leg4",to:"leg4_sub1"}, {from:"leg4_sub1",to:"leg4_sub2"}
    ],
    notes: [
      "⭐ יעד: 111,000 נקודות פייליין.",
      "⭐ 3 רגליים PB מוסמכות (מסומנות בכוכב).",
      "חוק 50%: מקסימום 55,500 מרגל אחת.",
      "🎯 בונוס PB: 3% דור 1, 4% דורות 2-4.",
      "🎯 בונוס POB: 3% (דרישה: 20,000 נק' POB).",
      "🎯 בונוס BIB: 5%-20% (מקסימום 3,800 ₪).",
      "בונוס מעבר דרגה: 4,500 + 4,500 + 10,000 = 19,000 ₪ (3 חודשים)."
    ]
  },

  nmd: {
    title: "מבנה NMD - National Marketing Director",
    highlightId: "you",
    nodes: [
      { id: "you", label: "אתה", code: "NMD", pv: 8000, generation: 0, column: 6 },
      
      // רגל PB+POB 1 - QNMD
      { id: "leg1", label: "רגל PB+POB", code: "QNMD", pv: 30000, generation: 1, column: 0, isPBLeg: true, isPOBLeg: true, pbQualified: true },
      { id: "leg1_sub1", label: "SSC", code: "SSC", pv: 15000, generation: 2, column: 0 },
      { id: "leg1_sub2", label: "SC", code: "SC", pv: 8000, generation: 3, column: 0 },
      
      // רגל PB+POB 2 - SSC
      { id: "leg2", label: "רגל PB+POB", code: "SSC", pv: 25000, generation: 1, column: 2.5, isPBLeg: true, isPOBLeg: true, pbQualified: true },
      { id: "leg2_sub1", label: "SC", code: "SC", pv: 12000, generation: 2, column: 2.5 },
      { id: "leg2_sub2", label: "SP", code: "SP", pv: 7000, generation: 3, column: 2.5 },
      
      // רגל PB 3 - SC
      { id: "leg3", label: "רגל PB", code: "SC", pv: 18000, generation: 1, column: 5, isPBLeg: true, pbQualified: true },
      { id: "leg3_sub1", label: "SP", code: "SP", pv: 9000, generation: 2, column: 5 },
      { id: "leg3_sub2", label: "P+", code: "P+", pv: 6000, generation: 3, column: 5 },
      
      // רגל PB 4 - SP
      { id: "leg4", label: "רגל PB", code: "SP", pv: 15000, generation: 1, column: 7.5, isPBLeg: true, pbQualified: true },
      { id: "leg4_sub1", label: "P+", code: "P+", pv: 8000, generation: 2, column: 7.5 },
      { id: "leg4_sub2", label: "P", code: "P", pv: 5000, generation: 3, column: 7.5 },
      
      // רגל PB 5 - SP
      { id: "leg5", label: "רגל PB", code: "SP", pv: 12000, generation: 1, column: 10, isPBLeg: true, pbQualified: true },
      { id: "leg5_sub1", label: "P+", code: "P+", pv: 7000, generation: 2, column: 10 },
      
      // רגליים נוספות
      { id: "leg6", label: "זכיין", code: "P+", pv: 20000, generation: 1, column: 12.5 },
      { id: "leg6_sub1", label: "P", code: "P", pv: 10000, generation: 2, column: 12.5 },
      
      // לקוחות
      { id: "leg7", label: "לקוח", code: "Client", pv: 10000, generation: 1, column: 15 }
    ],
    edges: [
      {from:"you",to:"leg1"}, {from:"you",to:"leg2"}, {from:"you",to:"leg3"}, {from:"you",to:"leg4"}, {from:"you",to:"leg5"}, {from:"you",to:"leg6"}, {from:"you",to:"leg7"},
      {from:"leg1",to:"leg1_sub1"}, {from:"leg1_sub1",to:"leg1_sub2"},
      {from:"leg2",to:"leg2_sub1"}, {from:"leg2_sub1",to:"leg2_sub2"},
      {from:"leg3",to:"leg3_sub1"}, {from:"leg3_sub1",to:"leg3_sub2"},
      {from:"leg4",to:"leg4_sub1"}, {from:"leg4_sub1",to:"leg4_sub2"},
      {from:"leg5",to:"leg5_sub1"},
      {from:"leg6",to:"leg6_sub1"}
    ],
    notes: [
      "⭐ יעד: 222,000 נקודות פייליין.",
      "⭐ 5 רגליים PB מוסמכות (מסומנות בסגול).",
      "⭐ 2 רגליים POB מוסמכות (מסומנות בכתום).",
      "חוק 50%: מקסימום 111,000 מרגל אחת.",
      "🎯 בונוס PB: 3% דור 1, 4% דורות 2-5 (כל 5 הדורות פתוחים!).",
      "🎯 בונוס POB: 3% (דרישה: 20,000 נק' POB).",
      "🎯 בונוס BIB: 5%-20% (מקסימום 9,600 ₪).",
      "בונוס מעבר דרגה: 9,500 + 9,500 + 20,000 = 39,000 ₪ (4 מתוך 5 חודשים)."
    ]
  },

  imd: {
    title: "מבנה IMD - International Marketing Director",
    highlightId: "you",
    nodes: [
      { id: "you", label: "אתה", code: "IMD", pv: 15000, generation: 0, column: 6 },
      
      // רגל PB+POB 1 - NMD
      { id: "leg1", label: "רגל PB+POB", code: "NMD", pv: 60000, generation: 1, column: 0, isPBLeg: true, isPOBLeg: true, pbQualified: true },
      { id: "leg1_sub1", label: "QNMD", code: "QNMD", pv: 30000, generation: 2, column: 0 },
      { id: "leg1_sub2", label: "SSC", code: "SSC", pv: 18000, generation: 3, column: 0 },
      
      // רגל PB+POB 2 - QNMD
      { id: "leg2", label: "רגל PB+POB", code: "QNMD", pv: 50000, generation: 1, column: 2.5, isPBLeg: true, isPOBLeg: true, pbQualified: true },
      { id: "leg2_sub1", label: "SSC", code: "SSC", pv: 25000, generation: 2, column: 2.5 },
      { id: "leg2_sub2", label: "SC", code: "SC", pv: 15000, generation: 3, column: 2.5 },
      
      // רגל PB+POB 3 - SSC
      { id: "leg3", label: "רגל PB+POB", code: "SSC", pv: 40000, generation: 1, column: 5, isPBLeg: true, isPOBLeg: true, pbQualified: true },
      { id: "leg3_sub1", label: "SC", code: "SC", pv: 20000, generation: 2, column: 5 },
      { id: "leg3_sub2", label: "SP", code: "SP", pv: 12000, generation: 3, column: 5 },
      
      // רגל PB 4 - SC
      { id: "leg4", label: "רגל PB", code: "SC", pv: 30000, generation: 1, column: 7.5, isPBLeg: true, pbQualified: true },
      { id: "leg4_sub1", label: "SP", code: "SP", pv: 15000, generation: 2, column: 7.5 },
      { id: "leg4_sub2", label: "P+", code: "P+", pv: 10000, generation: 3, column: 7.5 },
      
      // רגל PB 5 - SP
      { id: "leg5", label: "רגל PB", code: "SP", pv: 25000, generation: 1, column: 10, isPBLeg: true, pbQualified: true },
      { id: "leg5_sub1", label: "P+", code: "P+", pv: 14000, generation: 2, column: 10 },
      
      // רגליים נוספות
      { id: "leg6", label: "זכיין", code: "P+", pv: 35000, generation: 1, column: 12.5 },
      { id: "leg6_sub1", label: "P", code: "P", pv: 20000, generation: 2, column: 12.5 },
      
      // לקוחות
      { id: "leg7", label: "לקוח", code: "Client", pv: 15000, generation: 1, column: 15 }
    ],
    edges: [
      {from:"you",to:"leg1"}, {from:"you",to:"leg2"}, {from:"you",to:"leg3"}, {from:"you",to:"leg4"}, {from:"you",to:"leg5"}, {from:"you",to:"leg6"}, {from:"you",to:"leg7"},
      {from:"leg1",to:"leg1_sub1"}, {from:"leg1_sub1",to:"leg1_sub2"},
      {from:"leg2",to:"leg2_sub1"}, {from:"leg2_sub1",to:"leg2_sub2"},
      {from:"leg3",to:"leg3_sub1"}, {from:"leg3_sub1",to:"leg3_sub2"},
      {from:"leg4",to:"leg4_sub1"}, {from:"leg4_sub1",to:"leg4_sub2"},
      {from:"leg5",to:"leg5_sub1"},
      {from:"leg6",to:"leg6_sub1"}
    ],
    notes: [
      "⭐ יעד: 444,000 נקודות פייליין.",
      "⭐ 5 רגליים PB מוסמכות (מסומנות בסגול).",
      "⭐ 3 רגליים POB מוסמכות (מסומנות בכתום).",
      "חוק 50%: מקסימום 222,000 מרגל אחת.",
      "🎯 בונוס PB: 3% דור 1, 4% דורות 2-5.",
      "🎯 בונוס POB: 3% (דרישה: 20,000 נק' POB).",
      "🎯 בונוס BIB: 5%-20% (מקסימום 9,600 ₪).",
      "בונוס מעבר דרגה: 77,000 ₪ (4 מתוך 5 חודשים)."
    ]
  },

  emd: {
    title: "מבנה EMD - Executive Marketing Director",
    highlightId: "you",
    nodes: [
      { id: "you", label: "אתה", code: "EMD", pv: 20000, generation: 0, column: 6 },
      
      // רגל PB+POB 1 - IMD
      { id: "leg1", label: "רגל PB+POB", code: "IMD", pv: 90000, generation: 1, column: 0, isPBLeg: true, isPOBLeg: true, pbQualified: true },
      { id: "leg1_sub1", label: "NMD", code: "NMD", pv: 50000, generation: 2, column: 0 },
      
      // רגל PB+POB 2 - NMD
      { id: "leg2", label: "רגל PB+POB", code: "NMD", pv: 75000, generation: 1, column: 2.5, isPBLeg: true, isPOBLeg: true, pbQualified: true },
      { id: "leg2_sub1", label: "QNMD", code: "QNMD", pv: 40000, generation: 2, column: 2.5 },
      
      // רגל PB+POB 3 - QNMD
      { id: "leg3", label: "רגל PB+POB", code: "QNMD", pv: 60000, generation: 1, column: 5, isPBLeg: true, isPOBLeg: true, pbQualified: true },
      { id: "leg3_sub1", label: "SSC", code: "SSC", pv: 35000, generation: 2, column: 5 },
      
      // רגל PB+POB 4 - SSC
      { id: "leg4", label: "רגל PB+POB", code: "SSC", pv: 50000, generation: 1, column: 7.5, isPBLeg: true, isPOBLeg: true, pbQualified: true },
      { id: "leg4_sub1", label: "SC", code: "SC", pv: 28000, generation: 2, column: 7.5 },
      
      // רגל PB 5 - SC
      { id: "leg5", label: "רגל PB", code: "SC", pv: 40000, generation: 1, column: 10, isPBLeg: true, pbQualified: true },
      { id: "leg5_sub1", label: "SP", code: "SP", pv: 22000, generation: 2, column: 10 },
      
      // רגליים נוספות
      { id: "leg6", label: "זכיין", code: "P+", pv: 55000, generation: 1, column: 12.5 },
      { id: "leg7", label: "זכיין", code: "P", pv: 45000, generation: 1, column: 15 },
      { id: "leg8", label: "לקוח", code: "Client", pv: 20000, generation: 1, column: 17.5 }
    ],
    edges: [
      {from:"you",to:"leg1"}, {from:"you",to:"leg2"}, {from:"you",to:"leg3"}, {from:"you",to:"leg4"}, {from:"you",to:"leg5"}, {from:"you",to:"leg6"}, {from:"you",to:"leg7"}, {from:"you",to:"leg8"},
      {from:"leg1",to:"leg1_sub1"},
      {from:"leg2",to:"leg2_sub1"},
      {from:"leg3",to:"leg3_sub1"},
      {from:"leg4",to:"leg4_sub1"},
      {from:"leg5",to:"leg5_sub1"}
    ],
    notes: [
      "⭐ יעד: 666,000 נקודות פייליין.",
      "⭐ 5 רגליים PB מוסמכות (מסומנות בסגול).",
      "⭐ 4 רגליים POB מוסמכות (מסומנות בכתום).",
      "חוק 50%: מקסימום 333,000 מרגל אחת.",
      "🎯 בונוס PB: 3% דור 1, 4% דורות 2-5.",
      "🎯 בונוס POB: 3% (דרישה: 20,000 נק' POB).",
      "🎯 בונוס BIB: 5%-20% (מקסימום 9,600 ₪).",
      "בונוס מעבר דרגה: 115,000 ₪ (4 מתוך 5 חודשים)."
    ]
  },

  pmd: {
    title: "מבנה PMD - Presidential Marketing Director",
    highlightId: "you",
    nodes: [
      { id: "you", label: "אתה", code: "PMD", pv: 25000, generation: 0, column: 6 },
      
      // רגל PB+POB 1 - EMD
      { id: "leg1", label: "רגל PB+POB", code: "EMD", pv: 120000, generation: 1, column: 0, isPBLeg: true, isPOBLeg: true, pbQualified: true },
      { id: "leg1_sub1", label: "IMD", code: "IMD", pv: 70000, generation: 2, column: 0 },
      
      // רגל PB+POB 2 - IMD
      { id: "leg2", label: "רגל PB+POB", code: "IMD", pv: 100000, generation: 1, column: 2.5, isPBLeg: true, isPOBLeg: true, pbQualified: true },
      { id: "leg2_sub1", label: "NMD", code: "NMD", pv: 55000, generation: 2, column: 2.5 },
      
      // רגל PB+POB 3 - NMD
      { id: "leg3", label: "רגל PB+POB", code: "NMD", pv: 85000, generation: 1, column: 5, isPBLeg: true, isPOBLeg: true, pbQualified: true },
      { id: "leg3_sub1", label: "QNMD", code: "QNMD", pv: 45000, generation: 2, column: 5 },
      
      // רגל PB+POB 4 - QNMD
      { id: "leg4", label: "רגל PB+POB", code: "QNMD", pv: 70000, generation: 1, column: 7.5, isPBLeg: true, isPOBLeg: true, pbQualified: true },
      { id: "leg4_sub1", label: "SSC", code: "SSC", pv: 38000, generation: 2, column: 7.5 },
      
      // רגל PB+POB 5 - SSC
      { id: "leg5", label: "רגל PB+POB", code: "SSC", pv: 60000, generation: 1, column: 10, isPBLeg: true, isPOBLeg: true, pbQualified: true },
      { id: "leg5_sub1", label: "SC", code: "SC", pv: 32000, generation: 2, column: 10 },
      
      // רגליים נוספות
      { id: "leg6", label: "זכיין", code: "SC", pv: 70000, generation: 1, column: 12.5 },
      { id: "leg7", label: "זכיין", code: "P+", pv: 60000, generation: 1, column: 15 },
      { id: "leg8", label: "לקוח", code: "Client", pv: 25000, generation: 1, column: 17.5 }
    ],
    edges: [
      {from:"you",to:"leg1"}, {from:"you",to:"leg2"}, {from:"you",to:"leg3"}, {from:"you",to:"leg4"}, {from:"you",to:"leg5"}, {from:"you",to:"leg6"}, {from:"you",to:"leg7"}, {from:"you",to:"leg8"},
      {from:"leg1",to:"leg1_sub1"},
      {from:"leg2",to:"leg2_sub1"},
      {from:"leg3",to:"leg3_sub1"},
      {from:"leg4",to:"leg4_sub1"},
      {from:"leg5",to:"leg5_sub1"}
    ],
    notes: [
      "⭐ יעד: 888,000 נקודות פייליין.",
      "⭐ 5 רגליים PB מוסמכות (מסומנות בסגול).",
      "⭐ 5 רגליים POB מוסמכות (מסומנות בכתום).",
      "חוק 50%: מקסימום 444,000 מרגל אחת.",
      "🎯 בונוס PB: 3% דור 1, 4% דורות 2-5.",
      "🎯 בונוס POB: 3% (דרישה: 20,000 נק' POB).",
      "🎯 בונוס BIB: 5%-20% (מקסימום 9,600 ₪).",
      "בונוס מעבר דרגה: 153,000 ₪ (4 מתוך 5 חודשים)."
    ]
  },

  pmd_plus: {
    title: "מבנה PMD+ - Presidential Marketing Director Plus",
    highlightId: "you",
    nodes: [
      { id: "you", label: "אתה", code: "PMD+", pv: 35000, generation: 0, column: 7 },
      
      // רגל PB+POB 1 - PMD
      { id: "leg1", label: "רגל PB+POB", code: "PMD", pv: 180000, generation: 1, column: 0, isPBLeg: true, isPOBLeg: true, pbQualified: true },
      { id: "leg1_sub1", label: "EMD", code: "EMD", pv: 100000, generation: 2, column: 0 },
      
      // רגל PB+POB 2 - EMD
      { id: "leg2", label: "רגל PB+POB", code: "EMD", pv: 150000, generation: 1, column: 2.5, isPBLeg: true, isPOBLeg: true, pbQualified: true },
      { id: "leg2_sub1", label: "IMD", code: "IMD", pv: 85000, generation: 2, column: 2.5 },
      
      // רגל PB+POB 3 - IMD
      { id: "leg3", label: "רגל PB+POB", code: "IMD", pv: 130000, generation: 1, column: 5, isPBLeg: true, isPOBLeg: true, pbQualified: true },
      { id: "leg3_sub1", label: "NMD", code: "NMD", pv: 70000, generation: 2, column: 5 },
      
      // רגל PB+POB 4 - NMD
      { id: "leg4", label: "רגל PB+POB", code: "NMD", pv: 110000, generation: 1, column: 7.5, isPBLeg: true, isPOBLeg: true, pbQualified: true },
      { id: "leg4_sub1", label: "QNMD", code: "QNMD", pv: 60000, generation: 2, column: 7.5 },
      
      // רגל PB+POB 5 - QNMD
      { id: "leg5", label: "רגל PB+POB", code: "QNMD", pv: 95000, generation: 1, column: 10, isPBLeg: true, isPOBLeg: true, pbQualified: true },
      { id: "leg5_sub1", label: "SSC", code: "SSC", pv: 50000, generation: 2, column: 10 },
      
      // רגל PB+POB 6 - SSC
      { id: "leg6", label: "רגל PB+POB", code: "SSC", pv: 80000, generation: 1, column: 12.5, isPBLeg: true, isPOBLeg: true, pbQualified: true },
      { id: "leg6_sub1", label: "SC", code: "SC", pv: 45000, generation: 2, column: 12.5 },
      
      // רגל PB 7 - SC
      { id: "leg7", label: "רגל PB", code: "SC", pv: 70000, generation: 1, column: 15, isPBLeg: true, pbQualified: true },
      
      // רגל PB 8 - SP
      { id: "leg8", label: "רגל PB", code: "SP", pv: 60000, generation: 1, column: 17.5, isPBLeg: true, pbQualified: true },
      
      // רגליים נוספות
      { id: "leg9", label: "זכיין", code: "P+", pv: 80000, generation: 1, column: 20 },
      { id: "leg10", label: "לקוח", code: "Client", pv: 35000, generation: 1, column: 22.5 }
    ],
    edges: [
      {from:"you",to:"leg1"}, {from:"you",to:"leg2"}, {from:"you",to:"leg3"}, {from:"you",to:"leg4"}, {from:"you",to:"leg5"}, {from:"you",to:"leg6"}, {from:"you",to:"leg7"}, {from:"you",to:"leg8"}, {from:"you",to:"leg9"}, {from:"you",to:"leg10"},
      {from:"leg1",to:"leg1_sub1"},
      {from:"leg2",to:"leg2_sub1"},
      {from:"leg3",to:"leg3_sub1"},
      {from:"leg4",to:"leg4_sub1"},
      {from:"leg5",to:"leg5_sub1"},
      {from:"leg6",to:"leg6_sub1"}
    ],
    notes: [
      "⭐ יעד: 1,600,000 נקודות פייליין.",
      "⭐ 8 רגליים PB מוסמכות (מסומנות בסגול).",
      "⭐ 6 רגליים POB מוסמכות (מסומנות בכתום).",
      "חוק 50%: מקסימום 800,000 מרגל אחת.",
      "🎯 בונוס PB: 3% דור 1, 4% דורות 2-5.",
      "🎯 בונוס POB: 3% (דרישה: 20,000 נק' POB).",
      "🎯 בונוס BIB: 5%-20% (מקסימום 9,600 ₪).",
      "בונוס מעבר דרגה: 200,000 ₪ (4 מתוך 6 חודשים).",
      "🏆 זו הדרגה הגבוהה ביותר בג'וס פלאס!"
    ]
  }
};
