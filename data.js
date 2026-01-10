/* data.js
   FULL REPLACEMENT
   - Updated Partner Plus (P+) content to match SP style/depth.
   - Added Total Value badge to P+ tree root.
   - Added detailed calculation notes for P+.
*/

window.RANKS = [
  {
    id: "partner_plus",
    title: "Partner Plus",
    intro: "התקדמות ראשונה ומשמעותית: בניית בסיס הלקוחות והנפח הראשוני.",
    videoUrl: "https://youtu.be/M293NdN7Sok?si=da8BUiVp5Qy-Z_5y",
    bullets: [
      "יעד ראשי: צבירת 4,000 נקודות פרומו (אישי + קבוצתי).",
      "מיקוד: יצירת בסיס של 3–5 לקוחות מרוצים.",
      "מבנה: אין חובת מבנה מורכב, אך מומלץ להתחיל לצרף שותפים.",
      "בונוס: זכאות לבונוס עלייה בדרגה (בכפוף ללוחות הזמנים)."
    ],
    nodeCode: "P+",
    qrFile: "Partner Plus.png"
  },
  {
    id: "senior_partner",
    title: "Senior Partner",
    intro: "מכאן מתחילים לעבוד באמת על פייליין: שילוב הזמנות אישיות והזמנות לקוחות.",
    videoUrl: "https://youtu.be/fnG6Eld0SPk?si=7ZozniTLZHIG5qR8",
    bullets: [
      "מיקוד: הרחבת בסיס לקוחות.",
      "מומלץ: בניית שני מסלולים — אישי + לקוחות.",
      "לייצר שגרה שבועית של שיווק ומעקב.",
      "תנאי סף: עמידה בנפח הנקודות במשך חודשיים רצופים."
    ],
    nodeCode: "SP",
    qrFile: "Senior Partner.png"
  },
  {
    id: "sales_coordinator",
    title: "Sales Coordinator",
    intro: "דגש על בניית צוות בסיסי (זכיינים) לצד יציבות לקוחות.",
    videoUrl: "https://youtu.be/cyJb_ecWjyA?si=JjClNcImW1bs86Ig",
    bullets: [
      "מיקוד: בניית 3 רגליים פעילות (מבנה רוחב).",
      "יעד: הגעה ל-8,000 נקודות קבוצתיות (Payline).",
      "תנאי סף קריטי: שמירה על המבנה והנפח במשך 3 חודשים רצופים.",
      "ניהול: התחלת חניכה של זכיינים תחתייך לדרגות P ו-P+."
    ],
    nodeCode: "SC",
    qrFile: "Sales Coordinator.png"
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
    nodeCode: "QSSC",
    qrFile: "Qualifying Senior Sales Coordinator.png"
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
    nodeCode: "SSC",
    qrFile: "Senior Sales Coordinator.png"
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
    nodeCode: "QNMD",
    qrFile: "Qualifying National Marketing Director.png"
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
    nodeCode: "NMD",
    qrFile: "National Marketing Director.png"
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
    nodeCode: "IMD",
    qrFile: "International Marketing Director.png"
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
    nodeCode: "EMD",
    qrFile: "Executive Marketing Director.png"
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
    nodeCode: "PMD",
    qrFile: "Presidential Marketing Director.png"
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
    nodeCode: "PMD+",
    qrFile: "Presidential Marketing Director Plus.png"
  }
];

/* Trees logic */
window.RANK_TREES = {
  partner_plus: {
    title: "עץ התקדמות – Partner Plus (P+)",
    description: "תרשים הממחיש הגעה ליעד של 4,000 נקודות.",
    highlightId: "you",
    nodes: [
      // דור 0: אתה. הוספתי את totalVal כדי שתהיה בועה כחולה עם הסיכום
      { id: "you",   label: "אתה",     code: "P+", pv: 866, totalVal: "סה״כ: 4,576", generation: 0, column: 1 },
      
      // דור 1: הרגליים (לפי השרטוט הידני)
      { id: "left",  label: "קו שמאל", code: "P",  pv: 283,  generation: 1, column: 0 },
      { id: "mid",   label: "קו אמצע", code: "P",  pv: 2561, generation: 1, column: 1 },
      { id: "right", label: "קו ימין", code: "P",  pv: 866,  generation: 1, column: 2 }
    ],
    edges: [
      { from: "you", to: "left" },
      { from: "you", to: "mid" },
      { from: "you", to: "right" }
    ],
    notes: [
      "<b>סה\"כ נקודות שהושגו:</b> <span style='color:#16a34a; font-weight:bold;'>4,576</span> (היעד: 4,000).",
      "<b>ניקוד אישי (אתה):</b> 866 נקודות.",
      "<b>ניתוח מבנה:</b> ישנה רגל מרכזית חזקה (2,561) ועוד שתי רגליים תומכות.",
      "<b>סטטוס:</b> <span style='color:#16a34a; font-weight:bold;'>הושג היעד לדרגת Partner Plus!</span>"
    ]
  },

  senior_partner: {
    title: "עץ התקדמות – Senior Partner (SP)",
    description: "תרשים מלא (כולל דור 2).",
    highlightId: "you",
    nodes: [
      { id: "you", label: "אתה (SP) - חודשיים", code: "P+", pv: 2561, totalVal: "סה״כ: 12,090", generation: 0, column: 2 },
      { id: "left_top", label: "זכיין P", code: "P", pv: 4192, generation: 1, column: 0 },
      { id: "mid_top", label: "לקוח אישי", code: "Client", pv: 2561, generation: 1, column: 2 },
      { id: "right_top", label: "זכיין P", code: "P", pv: 2776, generation: 1, column: 4 },
      { id: "left_bot", label: "לקוח/הזמנה", code: "Order", pv: 1631, generation: 2, column: 0 },
      { id: "right_bot", label: "לקוח/הזמנה", code: "Order", pv: 1145, generation: 2, column: 4 }
    ],
    edges: [
      { from: "you", to: "left_top" },
      { from: "you", to: "mid_top" },
      { from: "you", to: "right_top" },
      { from: "left_top", to: "left_bot" },
      { from: "right_top", to: "right_bot" }
    ],
    notes: [
      "<span style='color:#dc2626; font-weight:bold; font-size:1.1em;'>שים לב: יש לעמוד ביעדים אלו במשך חודשיים רצופים לקבלת הדרגה!</span>",
      "<b>סה\"כ נקודות פרומו שהושגו:</b> 12,090 (היעד: 12,000).",
      "<b>ניקוד אישי (אתה + לקוחות):</b> <span style='color:#16a34a; font-weight:bold;'>5,122</span> (מעל המינימום הנדרש של 4,000).",
      "<b>חוק ה-50% (מקסימום מרגל):</b> הרגל החזקה (שמאל) היא 4,192, שזה מתחת לתקרה של 6,000 - <span style='color:#16a34a; font-weight:bold;'>תקין.</span>",
      "<b>פירוט רגל שמאל:</b> 2,561 (אישי של הזכיין) + 1,631 (מהזמנה למטה) = 4,192.",
      "<b>פירוט רגל ימין:</b> 1,631 (אישי של הזכיין) + 1,145 (מהזמנה למטה) = 2,776."
    ]
  },

  sales_coordinator: {
    title: "עץ התקדמות – Sales Coordinator (SC)",
    description: "מבנה קלאסי לדרגת SC: שלוש רגליים פעילות בעוצמות שונות.",
    highlightId: "you",
    nodes: [
      { id: "you", label: "אתה (SC) - 3 חודשים", code: "SC", pv: 1500, totalVal: "סה״כ: 8,550", generation: 0, column: 1 },
      { id: "leg1_sp", label: "זכיין מוביל (SP)", code: "SP", pv: 3800, generation: 1, column: 0 },
      { id: "leg2_pp", label: "זכיין יציב (P+)", code: "P+", pv: 2100, generation: 1, column: 1 },
      { id: "leg3_p", label: "זכיין חדש/לקוחות (P)", code: "P", pv: 1150, generation: 1, column: 2 }
    ],
    edges: [
      { from: "you", to: "leg1_sp" },
      { from: "you", to: "leg2_pp" },
      { from: "you", to: "leg3_p" }
    ],
    notes: [
      "<span style='color:#dc2626; font-weight:bold; font-size:1.1em;'>דרישת סף קריטית: שמירה על המבנה והנפח למשך 3 חודשים רצופים!</span>",
      "<b>סה\"כ נקודות (Payline):</b> <span style='color:#16a34a; font-weight:bold;'>8,550</span> (היעד: 8,000). עמידה ביעד.",
      "<b>מבנה:</b> 3 רגליים פעילות (SP, P+, P). <span style='color:#16a34a; font-weight:bold;'>תקין.</span>",
      "<b>חוק ה-50% (מקסימום 4,000 מרגל):</b> הרגל החזקה ביותר (SP) היא 3,800. <span style='color:#16a34a; font-weight:bold;'>תקין</span> (לא עברה את ה-50%).",
      "<b>ניקוד אישי (אתה):</b> 1,500 PV (לקוחות אישיים + הזמנות שלך)."
    ]
  },

  qssc: { title: "עץ התקדמות – QSSC (תבנית זמנית)", description: "טרם הוגדר", highlightId: "you", nodes: [{id:"you", label:"אתה", code:"QSSC"}], edges:[], notes:["תבנית זמנית – נבנה מדויק לאחר שרטוט."] },
  ssc: { title: "עץ התקדמות – SSC (תבנית זמנית)", description: "טרם הוגדר", highlightId: "you", nodes: [{id:"you", label:"אתה", code:"SSC"}], edges:[], notes:["תבנית זמנית – נבנה מדויק לאחר שרטוט."] },
  qnmd: { title: "עץ התקדמות – QNMD (תבנית זמנית)", description: "טרם הוגדר", highlightId: "you", nodes: [{id:"you", label:"אתה", code:"QNMD"}], edges:[], notes:["תבנית זמנית – נבנה מדויק לאחר שרטוט."] },
  nmd: { title: "עץ התקדמות – NMD (תבנית זמנית)", description: "טרם הוגדר", highlightId: "you", nodes: [{id:"you", label:"אתה", code:"NMD"}], edges:[], notes:["תבנית זמנית – נבנה מדויק לאחר שרטוט."] },
  imd: { title: "עץ התקדמות – IMD (תבנית זמנית)", description: "טרם הוגדר", highlightId: "you", nodes: [{id:"you", label:"אתה", code:"IMD"}], edges:[], notes:["תבנית זמנית – נבנה מדויק לאחר שרטוט."] },
  emd: { title: "עץ התקדמות – EMD (תבנית זמנית)", description: "טרם הוגדר", highlightId: "you", nodes: [{id:"you", label:"אתה", code:"EMD"}], edges:[], notes:["תבנית זמנית – נבנה מדויק לאחר שרטוט."] },
  pmd: { title: "עץ התקדמות – PMD (תבנית זמנית)", description: "טרם הוגדר", highlightId: "you", nodes: [{id:"you", label:"אתה", code:"PMD"}], edges:[], notes:["תבנית זמנית – נבנה מדויק לאחר שרטוט."] },
  pmd_plus: { title: "עץ התקדמות – PMD+ (תבנית זמנית)", description: "טרם הוגדר", highlightId: "you", nodes: [{id:"you", label:"אתה", code:"PMD+"}], edges:[], notes:["תבנית זמנית – נבנה מדויק לאחר שרטוט."] }
};
