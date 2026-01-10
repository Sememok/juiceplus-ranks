/* data.js
   FULL REPLACEMENT
   - Updated partner_plus notes based on manual diagram
*/

window.RANKS = [
  {
    id: "partner_plus",
    title: "Partner Plus",
    intro: "התקדמות ראשונה שמבוססת על פעילות עקבית והגדלת נפח אישי/קבוצתי.",
    videoUrl: "https://youtu.be/M293NdN7Sok?si=da8BUiVp5Qy-Z_5y",
    bullets: [
      "מיקוד: הזמנה אישית + סגירות פשוטות.",
      "יעד: יצירת 2–3 לקוחות חוזרים יציבים.",
      "לייצר הרגל עבודה עקבי."
    ],
    nodeCode: "P+"
  },
  {
    id: "senior_partner",
    title: "Senior Partner",
    intro: "מכאן מתחילים לעבוד באמת על פייליין: שילוב הזמנות אישיות והזמנות לקוחות.",
    videoUrl: "https://youtu.be/fnG6Eld0SPk?si=7ZozniTLZHIG5qR8",
    bullets: [
      "מיקוד: הרחבת בסיס לקוחות.",
      "מומלץ: בניית שני מסלולים — אישי + לקוחות.",
      "לייצר שגרה שבועית של שיווק ומעקב."
    ],
    nodeCode: "SP"
  },
  {
    id: "sales_coordinator",
    title: "Sales Coordinator",
    intro: "דגש על בניית צוות בסיסי (זכיינים) לצד יציבות לקוחות.",
    videoUrl: "https://youtu.be/cyJb_ecWjyA?si=JjClNcImW1bs86Ig",
    bullets: [
      "מיקוד: 2–3 זכיינים פעילים, עם נפח בסיסי.",
      "חיזוק פייליין: אישי + לקוחות + צוות.",
      "תיעוד ומעקב כדי לא לאבד נקודות חודשיות."
    ],
    nodeCode: "SC"
  },
  {
    id: "qssc",
    title: "QUALIFYING SENIOR SALES COORDINATOR",
    intro: "שלב מעבר: עמידה בדרישות QSSC לפני SSC. דורש עקביות על פני חודשים.",
    videoUrl: "https://youtu.be/ru06kEc9kqE?si=9yvL3LZ5Qm80YEak",
    bullets: [
      "מיקוד: יציבות לאורך זמן (לא רק חודש חזק אחד).",
      "בנייה נכונה של עומק: דורות מתחתייך.",
      "חיבור בונוסים/עמלות לתפעול צוות."
    ],
    nodeCode: "QSSC"
  },
  {
    id: "ssc",
    title: "Senior Sales Coordinator",
    intro: "דרגה שמבוססת על צוות פעיל ומבנה יציב של נפח לאורך זמן.",
    videoUrl: "https://youtu.be/xPwmFecZ8Ms?si=rqjGaml0ySJoif0x",
    bullets: [
      "מיקוד: לייצב 2–3 קווים שמייצרים נפח חודשי.",
      "להטמיע תהליך הדרכה לזכיינים חדשים.",
      "אופטימיזציה: עבודה חכמה במקום רק יותר עבודה."
    ],
    nodeCode: "SSC"
  },
  {
    id: "qnmd",
    title: "QUALIFYING NATIONAL MARKETING DIRECTOR",
    intro: "שלב מעבר לקראת NMD: עמידה בדרישות לאורך מס' חודשים.",
    videoUrl: "https://youtu.be/W8Wm_c4kMUo?si=sRYcBXB5K67s3CgE",
    bullets: [
      "מיקוד: יציבות צוותית + נפח.",
      "חיזוק דור שני/שלישי.",
      "ניהול מדדים חודשיים."
    ],
    nodeCode: "QNMD"
  },
  {
    id: "nmd",
    title: "National Marketing Director",
    intro: "הרחבת ארגון, ניהול קווים, והפיכת המערכת לשכפולית.",
    videoUrl: "https://youtu.be/muieHSXIocI?si=mgdWJi4OJRh0YzLE",
    bullets: [
      "מיקוד: שכפול תהליך קל לזכיינים.",
      "ניהול עומק: דור 2–5.",
      "טיפול בנקודות: פייליין / PB / POB."
    ],
    nodeCode: "NMD"
  },
  {
    id: "imd",
    title: "International Marketing Director",
    intro: "דגש על עומק ארגוני וקווים מובילים עצמאיים.",
    videoUrl: "https://youtu.be/WeEZlCjHAtU?si=O0jNx22vXu_D9QZC",
    bullets: [
      "מיקוד: פיתוח מנהיגות בקווים.",
      "העמקת דור 3–5.",
      "בניית מערכי הדרכה."
    ],
    nodeCode: "IMD"
  },
  {
    id: "emd",
    title: "Executive Marketing Director",
    intro: "ארגון עם מספר מנהיגים פעילים וקצב שכפול גבוה.",
    videoUrl: "https://youtu.be/KpKDNIc8R7k?si=SrOdHEqDI50v0lGi",
    bullets: [
      "מיקוד: מנהיגים שמייצרים מנהיגים.",
      "ניהול ביצועים לפי חודשים.",
      "סטנדרט תפעולי גבוה."
    ],
    nodeCode: "EMD"
  },
  {
    id: "pmd",
    title: "Presidential Marketing Director",
    intro: "תפעול ארגון גדול מאוד, עומק דורות, ושגרות מנהיגות.",
    videoUrl: "https://youtu.be/2i3sVTpFxts?si=qD2kCXt6GRrnapvF",
    bullets: [
      "מיקוד: מבנה יציב לדורות 2–5.",
      "חיזוק מערך הדרכה ושימור.",
      "שיפור מדדים/בונוסים."
    ],
    nodeCode: "PMD"
  },
  {
    id: "pmd_plus",
    title: "Presidential Marketing Director Plus",
    intro: "מקסימום עומק ויציבות. שכפול קבוע לאורך זמן.",
    videoUrl: "https://youtu.be/MVxQ4LPsj6w?si=KS57tgB9Lhyk_00X",
    bullets: [
      "מיקוד: שכפול מנגנון עבודה.",
      "ניהול מסות של קווים ומנהיגים.",
      "אופטימיזציה של בונוסים ועמלות."
    ],
    nodeCode: "PMD+"
  }
];

/* Trees keyed by rank ID */
window.RANK_TREES = {
  partner_plus: {
    title: "עץ התקדמות – Partner Plus (P+)",
    description: "סימולציה המבוססת על יעד של 4,000 נקודות פרומו.",
    highlightId: "you",
    nodes: [
      { id: "you",   label: "אתה",     code: "P+", pv: 866,  generation: 0, column: 1 },
      { id: "left",  label: "Partner/Uplift", code: "P",  pv: 283,  generation: 1, column: 0 },
      { id: "mid",   label: "לקוח", code: "P",  pv: 2561, generation: 1, column: 1 },
      { id: "right", label: "לקוח", code: "P",  pv: 866,  generation: 1, column: 2 }
    ],
    edges: [
      { from: "you", to: "left" },
      { from: "you", to: "mid" },
      { from: "you", to: "right" }
    ],
    notes: [
      "סה\"כ נקודות פרומו שהושגו בדוגמה זו: 4,576 (היעד הוא 4,000).",
      "בונוס צפוי בחודש הבא: 400 ש\"ח.",
      "חישוב הנקודות כולל: הזמנות אישיות + לקוחות + זכיינים ישירים (P)."
    ]
  },

  senior_partner: {
    title: "עץ התקדמות – Senior Partner",
    description: "מבנה לדוגמה (יעודכן בהמשך לפי שרטוט).",
    highlightId: "you",
    nodes: [
      { id: "you", label: "אתה", code: "SP", pv: 0, generation: 0, column: 1 },
      { id: "a", label: "קו 1", code: "P+", pv: 0, generation: 1, column: 0 },
      { id: "b", label: "קו 2", code: "P+", pv: 0, generation: 1, column: 2 }
    ],
    edges: [{ from: "you", to: "a" }, { from: "you", to: "b" }],
    notes: ["להגעה ל-SP נדרש נפח קבוצתי ומבנה יציב."]
  },

  sales_coordinator: {
    title: "עץ התקדמות – Sales Coordinator",
    description: "מבנה לדוגמה (יעודכן בהמשך לפי שרטוט).",
    highlightId: "you",
    nodes: [
      { id: "you", label: "אתה", code: "SC", pv: 0, generation: 0, column: 1 },
      { id: "a", label: "קו 1", code: "SP", pv: 0, generation: 1, column: 0 },
      { id: "b", label: "קו 2", code: "SP", pv: 0, generation: 1, column: 2 }
    ],
    edges: [{ from: "you", to: "a" }, { from: "you", to: "b" }],
    notes: ["ב-SC הדגש הוא על שכפול זכיינים והגדלת הנפח הארגוני."]
  },

  // שאר הדרגות נשארות כרגע ריקות/תבנית
  qssc: { title: "עץ התקדמות – QSSC", description: "", highlightId: "you",
    nodes: [{ id:"you", label:"אתה", code:"QSSC", pv:0, generation:0, column:1 }], edges: [], notes:[] },

  ssc: { title: "עץ התקדמות – SSC", description: "", highlightId: "you",
    nodes: [{ id:"you", label:"אתה", code:"SSC", pv:0, generation:0, column:1 }], edges: [], notes:[] },

  qnmd: { title: "עץ התקדמות – QNMD", description: "", highlightId: "you",
    nodes: [{ id:"you", label:"אתה", code:"QNMD", pv:0, generation:0, column:1 }], edges: [], notes:[] },

  nmd: { title: "עץ התקדמות – NMD", description: "", highlightId: "you",
    nodes: [{ id:"you", label:"אתה", code:"NMD", pv:0, generation:0, column:1 }], edges: [], notes:[] },

  imd: { title: "עץ התקדמות – IMD", description: "", highlightId: "you",
    nodes: [{ id:"you", label:"אתה", code:"IMD", pv:0, generation:0, column:1 }], edges: [], notes:[] },

  emd: { title: "עץ התקדמות – EMD", description: "", highlightId: "you",
    nodes: [{ id:"you", label:"אתה", code:"EMD", pv:0, generation:0, column:1 }], edges: [], notes:[] },

  pmd: { title: "עץ התקדמות – PMD", description: "", highlightId: "you",
    nodes: [{ id:"you", label:"אתה", code:"PMD", pv:0, generation:0, column:1 }], edges: [], notes:[] },

  pmd_plus: { title: "עץ התקדמות – PMD+", description: "", highlightId: "you",
    nodes: [{ id:"you", label:"אתה", code:"PMD+", pv:0, generation:0, column:1 }], edges: [], notes:[] }
};
