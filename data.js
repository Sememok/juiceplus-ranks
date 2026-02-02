/* data.js */

window.RANKS = [
  { id: "partner_plus", title: "Partner Plus", targetPoints: 4000, intro: "התקדמות ראשונה.", videoUrl: "https://youtu.be/M293NdN7Sok", bullets: ["יעד: 4,000 נקודות.", "בונוס: 400 ₪."], nodeCode: "P+" },
  { id: "senior_partner", title: "Senior Partner", targetPoints: 12000, intro: "בניית יציבות ופתיחת בונוס PB.", videoUrl: "https://youtu.be/fnG6Eld0SPk", bullets: ["יעד: 12,000 נקודות פרומו.", "✅ חובה להכשיר 2 חודשים רצופים!", "חודש 1: בונוס 400 ₪.", "חודש 2: בונוס 800 ₪.", "סה\"כ בונוס מעבר דרגה: 1,200 ₪.", "🎯 בונוס PB: 3% על דור 1 + 4% על דורות 2-3.", "דרישה ל-PB: 5,000 נקודות PB בחודש.", "נקודות PB מחושבות מ: אתה + לקוחות + P ו-P+ (לא SP ומעלה)."], nodeCode: "SP" },
  { id: "sales_coordinator", title: "Sales Coordinator", targetPoints: 28000, intro: "דרגת מנהיגות עם PB ו-POB.", videoUrl: "https://youtu.be/cyJb_ecWjyA", bullets: ["יעד: 28,000 נקודות פרומו.", "דרישה: מינימום 1 זכיין P+ בארגון.", "✅ חובה להכשיר 2 חודשים רצופים!", "חודש 1: בונוס 1,200 ₪.", "חודש 2: בונוס 2,400 ₪.", "סה\"כ בונוס מעבר דרגה: 3,600 ₪.", "🎯 בונוס PB: 3% דור 1, 4% דורות 2-3 (דרישה: 5,000 נק' PB).", "🎯 בונוס POB: 3% על SC ומעלה בארגון (דרישה: 20,000 נק' POB)."], nodeCode: "SC" },
  { id: "qssc", title: "QSSC", targetPoints: 28000, intro: "Qualifying Senior Sales Coordinator - דרגת פייליין ראשונה.", videoUrl: "https://youtu.be/ru06kEc9kqE", bullets: ["יעד: 28,000 נקודות פייליין (לא פרומו!).", "חוק 50%: מקסימום 14,000 מרגל אחת.", "דרישה: 1 רגל PB מוסמכת (SP ומעלה).", "דרישה: הסמכה אישית ל-PB (5,000 נק' PB).", "✅ חובה להכשיר 3 חודשים רצופים!", "חודש 1: בונוס 1,400 ₪.", "חודש 2: בונוס 1,400 ₪.", "חודש 3: בונוס 2,000 ₪.", "סה\"כ בונוס מעבר דרגה: 4,800 ₪.", "🎯 בונוס PB: 3% דור 1, 4% דורות 2-3.", "🎯 בונוס POB: 3% (דרישה: 20,000 נק' POB).", "🎯 בונוס BIB: 5%-20% (מקסימום 1,500 ₪)."], nodeCode: "QSSC" },
  { id: "ssc", title: "Senior Sales Coordinator", targetPoints: 56000, intro: "ניהול בכיר עם 2 רגלי PB.", videoUrl: "https://youtu.be/xPwmFecZ8Ms", bullets: ["יעד: 56,000 נקודות פייליין.", "חוק 50%: מקסימום 28,000 מרגל אחת.", "דרישה: 2 רגליים PB מוסמכות.", "דרישה: הסמכה אישית ל-PB (5,000 נק' PB).", "✅ חובה להכשיר 3 חודשים רצופים!", "חודש 1: בונוס 2,500 ₪.", "חודש 2: בונוס 2,500 ₪.", "חודש 3: בונוס 5,000 ₪.", "סה\"כ בונוס מעבר דרגה: 10,000 ₪.", "🎯 בונוס PB: 3% דור 1, 4% דורות 2-3.", "🎯 בונוס POB: 3%.", "🎯 בונוס BIB: 5%-20% (מקסימום 2,300 ₪)."], nodeCode: "SSC" },
  { id: "qnmd", title: "QNMD", targetPoints: 222000, intro: "לפני פסגה.", videoUrl: "https://youtu.be/W8Wm_c4kMUo", bullets: ["יעד: 222,000 נקודות.", "בונוס: 19,000 ₪."], nodeCode: "QNMD" },
  { id: "nmd", title: "NMD", targetPoints: 222000, intro: "הדרגה הלאומית.", videoUrl: "https://youtu.be/muieHSXIocI", bullets: ["יעד: 222,000 נקודות.", "בונוס: 39,000 ₪."], nodeCode: "NMD" },
  { id: "imd", title: "IMD", targetPoints: 444000, intro: "בינלאומי.", videoUrl: "https://youtu.be/WeEZlCjHAtU", bullets: ["יעד: 444,000 נקודות.", "בונוס: 77,000 ₪."], nodeCode: "IMD" },
  { id: "emd", title: "EMD", targetPoints: 666000, intro: "אקזקיוטיב.", videoUrl: "https://youtu.be/KpKDNIc8R7k", bullets: ["יעד: 666,000 נקודות.", "בונוס: 115,000 ₪."], nodeCode: "EMD" },
  { id: "pmd", title: "PMD", targetPoints: 888000, intro: "פסגת המנהיגות.", videoUrl: "https://youtu.be/2i3sVTpFxts", bullets: ["יעד: 888,000 נקודות.", "בונוס: 153,000 ₪."], nodeCode: "PMD" },
  { id: "pmd_plus", title: "PMD+", targetPoints: 1600000, intro: "הטופ.", videoUrl: "https://youtu.be/MVxQ4LPsj6w", bullets: ["יעד: 1,600,000 נקודות.", "בונוס: 200,000 ₪."], nodeCode: "PMD+" }
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
      { id: "l2", label: "לקוח", code: "לקוח", pv: 2561, generation: 1, column: 1 },
      { id: "l3", label: "זכיין", code: "P", pv: 2776, generation: 1, column: 2 }
    ],
    edges: [{from:"you",to:"l1"}, {from:"you",to:"l2"}, {from:"you",to:"l3"}],
    notes: [
      "סה\"כ בתרשים: 12,090 נקודות פרומו (יעד 12,000 הושג ✓).",
      "זכיין שמאל (P 4,192): הזמנה 90 + לקוח כלשהו.",
      "זכיין ימין (P 2,776): הזמנה 1,145 + הזמנה 946 + לקוח 6,000.",
      "🎯 בונוס PB זמין מדרגה זו: 3% דור 1, 4% דורות 2-3.",
      "דרישה ל-PB: 5,000 נקודות PB בחודש (מ: אתה + לקוחות + P ו-P+).",
      "בונוס מעבר דרגה: 400 + 800 = 1,200 ₪."
    ]
  },

  sales_coordinator: {
    title: "מבנה Sales Coordinator",
    highlightId: "you",
    nodes: [
      { id: "you", label: "אתה (SC)", code: "SC", pv: 1245, generation: 0, column: 4 },
      { id: "leg1", label: "זכיין", code: "P", pv: 2561, generation: 1, column: 0 },
      { id: "leg2", label: "זכיין (PB)", code: "P+", pv: 4300, generation: 1, column: 1 },
      { id: "leg3", label: "זכיין", code: "P", pv: 930, generation: 1, column: 2 },
      { id: "leg4", label: "זכיין", code: "P", pv: 2561, generation: 1, column: 3 },
      { id: "leg5", label: "זכיין", code: "P", pv: 2561, generation: 1, column: 4 },
      { id: "leg6", label: "לקוח", code: "Client", pv: 1631, generation: 1, column: 5 },
      { id: "leg7", label: "לקוח", code: "Client", pv: 2561, generation: 1, column: 6 },
      { id: "leg8", label: "זכיין חדש", code: "P", pv: 1531, generation: 1, column: 7 },
      { id: "sub4", label: "זכיין", code: "P", pv: 2561, generation: 2, column: 3 },
      { id: "sub5", label: "זכיין", code: "P", pv: 2561, generation: 2, column: 4 },
      { id: "sub7", label: "לקוח", code: "Client", pv: 436, generation: 2, column: 6 },
      { id: "subsub7", label: "זכיין", code: "P", pv: 2561, generation: 3, column: 6 }
    ],
    edges: [
      {from:"you",to:"leg1"}, {from:"you",to:"leg2"}, {from:"you",to:"leg3"}, {from:"you",to:"leg4"}, {from:"you",to:"leg5"}, {from:"you",to:"leg6"}, {from:"you",to:"leg7"}, {from:"you",to:"leg8"},
      {from:"leg4",to:"sub4"}, {from:"leg5",to:"sub5"}, {from:"leg7",to:"sub7"},
      {from:"sub7",to:"subsub7"}
    ],
    notes: [
      "סה\"כ מוצג בתרשים: 28,000 נקודות (עם הרגל החדשה).",
      "יעד סופי לדרגה: 28,000 נקודות פרומו - הושג! ✓",
      "הרגל החדשה (P 1,531) משלימה את היעד.",
      "מינימום 1 זכיין P+ נדרש בארגון.",
      "🎯 בונוס PB: 3% דור 1, 4% דורות 2-3 (דרישה: 5,000 נק' PB).",
      "🎯 בונוס POB: 3% על SC ומעלה (דרישה: 20,000 נק' POB).",
      "בונוס מעבר דרגה: 1,200 + 2,400 = 3,600 ₪ (2 חודשים)."
    ]
  },
  
  qssc: {
    title: "מבנה QSSC",
    highlightId: "you",
    nodes: [
      { id: "you", label: "אתה", code: "QSSC", pv: 1345, generation: 0, column: 2 },
      
      // 5 רגליים ישירות
      { id: "leg1", label: "SP (PB מוסמך)", code: "SP*", pv: 8500, generation: 1, column: 0 },
      { id: "leg2", label: "זכיין", code: "P+", pv: 4300, generation: 1, column: 1 },
      { id: "leg3", label: "זכיין", code: "P", pv: 3200, generation: 1, column: 2 },
      { id: "leg4", label: "זכיין", code: "P", pv: 5100, generation: 1, column: 3 },
      { id: "leg5", label: "לקוח", code: "Client", pv: 2800, generation: 1, column: 4 },
      
      // תחת רגל 1 (SP/PB)
      { id: "sub1a", label: "זכיין", code: "P", pv: 2561, generation: 2, column: 0 },
      { id: "sub1b", label: "זכיין", code: "P", pv: 1631, generation: 2, column: 0 },
      
      // תחת רגל 4
      { id: "sub4", label: "זכיין", code: "P", pv: 930, generation: 2, column: 3 }
    ],
    edges: [
      {from:"you",to:"leg1"}, {from:"you",to:"leg2"}, {from:"you",to:"leg3"}, {from:"you",to:"leg4"}, {from:"you",to:"leg5"},
      {from:"leg1",to:"sub1a"}, {from:"leg1",to:"sub1b"},
      {from:"leg4",to:"sub4"}
    ],
    notes: [
      "⭐ רגל PB מוסמכת (SP): 8,500 + 2,561 + 1,631 = 12,692 נקודות.",
      "סה\"כ בתרשים: 30,367 נקודות פייליין (יעד 28,000 הושג ✓).",
      "חוק 50%: רגל הגדולה ביותר = 12,692 < 14,000 ✓",
      "דרישה: 1 רגל PB (מסומן ב-SP*) + הסמכה אישית ל-PB (5,000 נק').",
      "הבדל מ-SC: כאן נקודות פייליין, SC היו נקודות פרומו.",
      "בונוס: 1,400 + 1,400 + 2,000 = 4,800 ₪ (3 חודשים)."
    ]
  },
  ssc: { title: "מבנה SSC", highlightId: "you", nodes: [{id:"you", label:"אתה", code:"SSC", generation:0, column:0}], edges:[], notes:[] },
  qnmd: { title: "מבנה QNMD", highlightId: "you", nodes: [{id:"you", label:"אתה", code:"QNMD", generation:0, column:0}], edges:[], notes:[] },
  nmd: { title: "מבנה NMD", highlightId: "you", nodes: [{id:"you", label:"אתה", code:"NMD", generation:0, column:0}], edges:[], notes:[] },
  imd: { title: "מבנה IMD", highlightId: "you", nodes: [{id:"you", label:"אתה", code:"IMD", generation:0, column:0}], edges:[], notes:[] },
  emd: { title: "מבנה EMD", highlightId: "you", nodes: [{id:"you", label:"אתה", code:"EMD", generation:0, column:0}], edges:[], notes:[] },
  pmd: { title: "מבנה PMD", highlightId: "you", nodes: [{id:"you", label:"אתה", code:"PMD", generation:0, column:0}], edges:[], notes:[] },
  pmd_plus: { title: "מבנה PMD+", highlightId: "you", nodes: [{id:"you", label:"אתה", code:"PMD+", generation:0, column:0}], edges:[], notes:[] }
};
