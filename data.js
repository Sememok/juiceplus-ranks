/* data.js
   RANKS (videos + text) + RANK_TREES (tree diagrams)
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
    // which node code to highlight as “אתה כאן” for this page
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

// Tree definitions (simple but clear). You can expand generations later.
window.RANK_TREES = {
  "Partner Plus": {
    generations: [
      ["P+"],
      ["P", "P"]
    ],
    info: "דרישה: 400 נקודות אישיות (PV)"
  },
  "Senior Partner": {
    generations: [
      ["SP"],
      ["P+", "P+"],
      ["P", "P", "P"]
    ],
    info: "דגש: הגדלת פייליין + בסיס לקוחות"
  },
  "Sales Coordinator": {
    generations: [
      ["SC"],
      ["SP", "SP"],
      ["P+", "P+", "P+"],
      ["P", "P", "P", "P"]
    ],
    info: "דוגמה מבנית: צוות בסיסי (דורות) + פייליין יציב"
  },
  "QUALIFYING SENIOR SALES COORDINATOR": {
    generations: [
      ["QSSC"],
      ["SC", "SC"],
      ["SP", "SP", "SP"],
      ["P+", "P+", "P+", "P+"]
    ],
    info: "שלב מעבר: יציבות לאורך חודשים לפי הדרישות"
  },
  "Senior Sales Coordinator": {
    generations: [
      ["SSC"],
      ["QSSC", "QSSC"],
      ["SC", "SC", "SC"],
      ["SP", "SP", "SP", "SP"]
    ],
    info: "מבנה יציב: מספר קווים פעילים שמחזיקים נפח"
  },
  "QUALIFYING NATIONAL MARKETING DIRECTOR": {
    generations: [
      ["QNMD"],
      ["SSC", "SSC"],
      ["QSSC", "QSSC", "QSSC"],
      ["SC", "SC", "SC", "SC"]
    ],
    info: "שלב מעבר ל־NMD: שכפול + עומק"
  },
  "National Marketing Director": {
    generations: [
      ["NMD"],
      ["QNMD", "QNMD"],
      ["SSC", "SSC", "SSC"],
      ["SC", "SC", "SC", "SC", "SC"]
    ],
    info: "דגש: עומק דורות 2–5 ושכפול תהליך"
  },
  "International Marketing Director": {
    generations: [
      ["IMD"],
      ["NMD", "NMD"],
      ["QNMD", "QNMD", "QNMD"],
      ["SSC", "SSC", "SSC", "SSC"]
    ],
    info: "דגש: מנהיגות קווים ועומק"
  },
  "Executive Marketing Director": {
    generations: [
      ["EMD"],
      ["IMD", "IMD"],
      ["NMD", "NMD", "NMD"],
      ["QNMD", "QNMD", "QNMD", "QNMD"]
    ],
    info: "דגש: מנהיגים שמפתחים מנהיגים"
  },
  "Presidential Marketing Director": {
    generations: [
      ["PMD"],
      ["EMD", "EMD"],
      ["IMD", "IMD", "IMD"],
      ["NMD", "NMD", "NMD", "NMD"]
    ],
    info: "ארגון גדול: עומק ויציבות"
  },
  "Presidential Marketing Director Plus": {
    generations: [
      ["PMD+"],
      ["PMD", "PMD"],
      ["EMD", "EMD", "EMD"],
      ["IMD", "IMD", "IMD", "IMD"]
    ],
    info: "מקסימום יציבות ושכפול"
  }
};
