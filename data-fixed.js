/* data-fixed.js
   FINAL ISRAEL VERSION 2025 (NIS ONLY)
   - Fixed currency to ₪ (New Israeli Shekel) exclusively.
   - Synced top bullets with bottom details perfectly.
*/

window.RANKS = [
  {
    id: "partner_plus",
    title: "Partner Plus",
    intro: "התקדמות ראשונה: בניית בסיס לקוחות ראשוני.",
    videoUrl: "https://youtu.be/M293NdN7Sok?si=da8BUiVp5Qy-Z_5y",
    bullets: [
      "יעד: 4,000 נקודות פרומו (חודש 1 להסמכה).",
      "מינימום אישי: 4,000 נקודות (אפשר הכל אישי או עם לקוחות).",
      "בונוס דרגה: 400 ₪.",
      "תשלום הבונוס: תשלום אחד."
    ],
    fullDetails: {
        requirements: "<ul><li><b>אופציה מהירה:</b> צבירת 1,000 נקודות פרומו תוך 30 יום.</li><li><b>אופציה מצטברת:</b> צבירת 4,000 נקודות פרומו (ללא הגבלת זמן).</li><li><b>חובה:</b> צירוף שותף אחד חדש או לקוח אישי אחד לפחות.</li></ul>",
        commissions: "10% עמלת מכירה בסיסית<br>+ <b>4% עמלה נוספת</b> (סה״כ 14%).",
        bonuses: "בונוס דרגה (Title Reward): <b>400 ₪</b>."
    },
    nodeCode: "P+",
    qrFile: "Partner Plus.png"
  },
  {
    id: "senior_partner",
    title: "Senior Partner",
    intro: "בניית יציבות ולקוחות חוזרים.",
    videoUrl: "https://youtu.be/fnG6Eld0SPk?si=7ZozniTLZHIG5qR8",
    bullets: [
      "יעד: 12,000 נקודות פרומו (בתוך חלון של 2 חודשים).",
      "חוק 50%: מקסימום 6,000 נקודות מרגל אחת.",
      "מינימום אישי: 4,000 נקודות.",
      "בונוס דרגה כולל: 1,200 ₪.",
      "חלוקת הבונוס: 400 ₪ בחודש א' + 800 ₪ בחודש ב'."
    ],
    fullDetails: {
        requirements: "<ul><li>צבירת 3,000 נקודות פרומו (בחלון של חודשיים).</li><li>מבנה: רגל אחת בדרגת Partner Plus (או 3 שותפים ישירים עם הזמנה).</li></ul>",
        commissions: "10% עמלת מכירה בסיסית<br>+ <b>7% עמלה נוספת</b> (סה״כ 17%).",
        bonuses: "בונוס דרגה כולל: <b>1,200 ₪</b>.<br>חלוקה: 400 ₪ בחודש הראשון + 800 ₪ בחודש השני (מותנה באישור מחדש)."
    },
    nodeCode: "SP",
    qrFile: "Senior Partner.png"
  },
  {
    id: "sales_coordinator",
    title: "Sales Coordinator",
    intro: "הדרגה הניהולית הראשונה: בניית צוות ומבנה רוחב.",
    videoUrl: "https://youtu.be/cyJb_ecWjyA?si=JjClNcImW1bs86Ig",
    bullets: [
      "מבנה נדרש: זכיין אחד בדרגת Partner Plus (מבנה 1 רגל PB).",
      "יעד: 28,000 נקודות פרומו (בחלון של 2 חודשים).",
      "חוק 50%: מקסימום 14,000 נקודות מרגל אחת.",
      "מינימום אישי: 4,000 נקודות.",
      "בונוס דרגה כולל: 3,600 ₪.",
      "חלוקת הבונוס: 1,200 ₪ בחודש א' + 2,400 ₪ בחודש ב'."
    ],
    fullDetails: {
        requirements: "<ul><li>6,000 נקודות פרומו (בחלון של חודשיים).</li><li>מבנה: 2 רגליים פעילות (אחת Senior Partner, אחת Partner Plus).</li></ul>",
        commissions: "10% עמלת מכירה בסיסית<br>+ <b>10% עמלה נוספת</b> (סה״כ 20%).<br>זכאות לעמלות דורות (BIB) ובונוסים על ביצועי הצוות.",
        bonuses: "בונוס דרגה כולל: <b>3,600 ₪</b>.<br>חלוקה: 1,200 ₪ בחודש הראשון + 2,400 ₪ בחודש השני."
    },
    nodeCode: "SC",
    qrFile: "Sales Coordinator.png"
  },
  {
    id: "qssc",
    title: "Qualifying Senior Sales Coordinator",
    intro: "שלב ביניים בדרך לניהול בכיר.",
    videoUrl: "https://youtu.be/ru06kEc9kqE?si=9yvL3LZ5Qm80YEak",
    bullets: [
      "מבנה נדרש: 2 רגלי PB (זכיינים בדרגת P+ ומעלה).",
      "יעד: 56,000 נקודות (בחלון של 3 חודשים).",
      "חוק 50%: מקסימום 28,000 נקודות מרגל אחת.",
      "בונוס דרגה כולל: 4,800 ₪.",
      "חלוקת הבונוס: 3 תשלומים (1,400+1,400+2,000)."
    ],
    fullDetails: {
        requirements: "<ul><li>12,000 נקודות פרומו.</li><li>מבנה: 2 רגליים (אחת SC, אחת SP).</li></ul>",
        commissions: "מקסימום עמלות ישירות + הרחבת עמלות BIB לעומק הארגון.",
        bonuses: "בונוס דרגה כולל: <b>4,800 ₪</b>.<br>משולם ב-3 פעימות: 1,400 ₪, 1,400 ₪, ולבסוף 2,000 ₪."
    },
    nodeCode: "QSSC",
    qrFile: "Qualifying Senior Sales Coordinator.png"
  },
  {
    id: "ssc",
    title: "Senior Sales Coordinator",
    intro: "ניהול צוות מתקדם ויציב.",
    videoUrl: "https://youtu.be/xPwmFecZ8Ms?si=rqjGaml0ySJoif0x",
    bullets: [
      "מבנה נדרש: 3 רגלי PB (שלושה קווים פעילים).",
      "יעד: 111,000 נקודות (בחלון של 3 חודשים).",
      "חוק 50%: מקסימום 55,500 נקודות מרגל אחת.",
      "בונוס דרגה כולל: 10,000 ₪.",
      "חלוקת הבונוס: 3 תשלומים (2,500+2,500+5,000)."
    ],
    fullDetails: {
        requirements: "<ul><li>24,000 נקודות פרומו.</li><li>מבנה: 3 רגליים (אחת QSSC, שתיים SP).</li></ul>",
        commissions: "מקסימום עמלות + בונוס מנהיגות (Lead Bonus).",
        bonuses: "בונוס דרגה כולל: <b>10,000 ₪</b>.<br>משולם ב-3 פעימות: 2,500 ₪, 2,500 ₪, ולבסוף 5,000 ₪."
    },
    nodeCode: "SSC",
    qrFile: "Senior Sales Coordinator.png"
  },
  {
    id: "qnmd",
    title: "Qualifying National Marketing Director",
    intro: "הכנה לדרגה הבכירה ביותר.",
    videoUrl: "https://youtu.be/W8Wm_c4kMUo?si=sRYcBXB5K67s3CgE",
    bullets: [
      "מבנה נדרש: 3 רגלי PB (מתוכן התחזקות קווים).",
      "יעד: 222,000 נקודות (בחלון של 3 חודשים).",
      "חוק 50%: מקסימום 111,000 נקודות מרגל אחת.",
      "בונוס דרגה כולל: 19,000 ₪.",
      "חלוקת הבונוס: 3 תשלומים (4,500+4,500+10,000)."
    ],
    fullDetails: {
        requirements: "<ul><li>48,000 נקודות פרומו.</li><li>מבנה: 3 רגליים (אחת SSC, שתיים SC).</li></ul>",
        commissions: "זכאות לבונוס ביצועים עסקיים (BIB) מורחב לרוחב ולעומק.",
        bonuses: "בונוס דרגה כולל: <b>19,000 ₪</b>.<br>משולם ב-3 פעימות: 4,500 ₪, 4,500 ₪, ולבסוף 10,000 ₪."
    },
    nodeCode: "QNMD",
    qrFile: "Qualifying National Marketing Director.png"
  },
  {
    id: "nmd",
    title: "National Marketing Director",
    intro: "הדרגה הלאומית הבכירה - NMD.",
    videoUrl: "https://youtu.be/muieHSXIocI?si=mgdWJi4OJRh0YzLE",
    bullets: [
      "מבנה נדרש: 5 רגלי PB + מתוכן 2 רגלי POB.",
      "יעד: 222,000 נקודות (בחלון של 3 חודשים).",
      "חוק 50%: מקסימום 111,000 נקודות מרגל אחת.",
      "בונוס דרגה כולל: 39,000 ₪.",
      "חלוקת הבונוס: 3 תשלומים (9,500+9,500+20,000)."
    ],
    fullDetails: {
        requirements: "<ul><li>96,000 נקודות פרומו.</li><li>מבנה: 4 רגליים (אחת QNMD, אחת SSC, שתיים SC).</li></ul>",
        commissions: "כל עמלות המנהיגות + חבילת הטבות NMD (קרן השתלמות, ביטוחים, בונוס חג המולד).",
        bonuses: "בונוס דרגה כולל: <b>39,000 ₪</b>.<br>משולם ב-3 פעימות: 9,500 ₪, 9,500 ₪, ולבסוף 20,000 ₪."
    },
    nodeCode: "NMD",
    qrFile: "National Marketing Director.png"
  },
  {
    id: "imd",
    title: "International Marketing Director",
    intro: "דרגה בינלאומית יוקרתית.",
    videoUrl: "https://youtu.be/WeEZlCjHAtU?si=O0jNx22vXu_D9QZC",
    bullets: [
      "מבנה נדרש: 5 רגלי PB + מתוכן 3 רגלי POB.",
      "יעד: 444,000 נקודות (4 מתוך 5 חודשים).",
      "בונוס דרגה כולל: 77,000 ₪.",
      "תנאי: עמידה ביעדים במשך 4 מתוך 5 חודשים."
    ],
    fullDetails: {
        requirements: "<ul><li>מבנה: 5 רגליים פעילות (3 רגלי POB).</li><li>נפח פעילות: 444,000 נקודות.</li></ul>",
        commissions: "מקסימום עמלות גלובליות + השתתפות ברווחי החברה הבינלאומיים (NMD Bonus).",
        bonuses: "בונוס דרגה כולל: <b>77,000 ₪</b>."
    },
    nodeCode: "IMD",
    qrFile: "International Marketing Director.png"
  },
  {
    id: "emd",
    title: "Executive Marketing Director",
    intro: "ניהול ארגון ענק ורב-דורי.",
    videoUrl: "https://youtu.be/KpKDNIc8R7k?si=SrOdHEqDI50v0lGi",
    bullets: [
      "מבנה נדרש: 5 רגלי PB + מתוכן 4 רגלי POB.",
      "יעד: 666,000 נקודות (4 מתוך 5 חודשים).",
      "בונוס דרגה כולל: 115,000 ₪.",
      "תנאי: עמידה ביעדים במשך 4 מתוך 5 חודשים."
    ],
    fullDetails: {
        requirements: "<ul><li>מבנה: 5 רגליים פעילות (4 רגלי POB).</li><li>נפח פעילות: 666,000 נקודות.</li></ul>",
        commissions: "בונוסים מיוחדים לדרגות על (Executive Bonus).",
        bonuses: "בונוס דרגה כולל: <b>115,000 ₪</b>."
    },
    nodeCode: "EMD",
    qrFile: "Executive Marketing Director.png"
  },
  {
    id: "pmd",
    title: "Presidential Marketing Director",
    intro: "פסגת המנהיגות.",
    videoUrl: "https://youtu.be/2i3sVTpFxts?si=qD2kCXt6GRrnapvF",
    bullets: [
      "מבנה נדרש: 5 רגלי PB + מתוכן 5 רגלי POB.",
      "יעד: 888,000 נקודות (4 מתוך 5 חודשים).",
      "בונוס דרגה כולל: 153,000 ₪.",
      "תנאי: עמידה ביעדים במשך 4 מתוך 5 חודשים."
    ],
    fullDetails: {
        requirements: "<ul><li>מבנה: 5 רגליים פעילות (5 רגלי POB).</li><li>נפח פעילות: 888,000 נקודות.</li></ul>",
        commissions: "פסגת תוכנית התגמול של ג'וס פלאס.",
        bonuses: "בונוס דרגה כולל: <b>153,000 ₪</b>."
    },
    nodeCode: "PMD",
    qrFile: "Presidential Marketing Director.png"
  },
  {
    id: "pmd_plus",
    title: "Presidential Marketing Director Plus",
    intro: "הדרגה הגבוהה ביותר בתוכנית.",
    videoUrl: "https://youtu.be/MVxQ4LPsj6w?si=KS57tgB9Lhyk_00X",
    bullets: [
      "מבנה נדרש: 8 רגלי PB + מתוכן 6 רגלי POB.",
      "יעד: 1,600,000 נקודות (4 מתוך 6 חודשים).",
      "בונוס דרגה כולל: 200,000 ₪.",
      "תנאי: עמידה ביעדים במשך 4 מתוך 6 חודשים."
    ],
    fullDetails: {
        requirements: "<ul><li>מבנה רחב במיוחד: 8 רגליים פעילות (6 POB).</li><li>נפח פעילות: 1,600,000 נקודות.</li></ul>",
        commissions: "הטבות נשיאותיות ייחודיות ובונוסים גלובליים.",
        bonuses: "בונוס דרגה כולל: <b>200,000 ₪</b>."
    },
    nodeCode: "PMD+",
    qrFile: "Presidential Marketing Director Plus.png"
  }
];

/* Trees logic - UNTOUCHED */
window.RANK_TREES = {
  partner_plus: {
    title: "עץ התקדמות – Partner Plus (P+)",
    description: "תרשים הממחיש הגעה ליעד של 4,000 נקודות.",
    highlightId: "you",
    nodes: [
      { id: "you",   label: "אתה",   code: "P+", pv: 866, totalVal: "סה״כ: 4,576", generation: 0, column: 1 },
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
      "<b>סטטוס:</b> הושג היעד לדרגת Partner Plus!",
      "<b>בונוס צפוי:</b> 400 ₪ (בתשלום אחד)."
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
      "<span style='color:#dc2626; font-weight:bold; font-size:1.1em;'>שים לב: יש לעמוד ביעדים אלו במשך חודשיים רצופים!</span>",
      "<b>סה\"כ נקודות:</b> 12,090 (היעד: 12,000).",
      "<b>בונוס צפוי:</b> 1,200 ₪ (400 חודש א' + 800 חודש ב')."
    ]
  },

  sales_coordinator: {
    title: "עץ התקדמות – Sales Coordinator (SC)",
    description: "סימולציה מותאמת (כולל תוספת לקוחות ישירים).",
    highlightId: "you",
    nodes: [
      { id: "you", label: "אתה (SC)", code: "SC", pv: 1245, totalVal: "סה״כ: 27,170", generation: 0, column: 3 },
      { id: "leg1_client", label: "לקוח ישיר", code: "Client", pv: 2561, generation: 1, column: 0 },
      { id: "leg_new_client", label: "לקוח נוסף", code: "Client", pv: 1631, generation: 1, column: 1 },
      { id: "leg2_top", label: "זכיין", code: "P", pv: 1631, generation: 1, column: 2 },
      { id: "leg2_bot", label: "זכיין", code: "P", pv: 2561, generation: 2, column: 2 },
      { id: "leg3_top", label: "זכיין", code: "P", pv: 2561, generation: 1, column: 4 },
      { id: "leg3_bot", label: "זכיין", code: "P", pv: 2561, generation: 2, column: 4 },
      { id: "leg4_top", label: "זכיין", code: "P", pv: 930, generation: 1, column: 5 },
      { id: "leg5_top", label: "זכיין (P+)", code: "P+", pv: 4300, generation: 1, column: 6 },
      { id: "leg5_mid_client", label: "לקוח", code: "Client", pv: 436, generation: 2, column: 5.8 },
      { id: "leg5_mid_p", label: "זכיין", code: "P", pv: 2561, generation: 2, column: 6.2 },
      { id: "leg5_bot_p", label: "זכיין", code: "P", pv: 2561, generation: 3, column: 6.2 },
      { id: "leg6_top", label: "זכיין", code: "P", pv: 2561, generation: 1, column: 7 }
    ],
    edges: [
      { from: "you", to: "leg1_client" },
      { from: "you", to: "leg_new_client" },
      { from: "you", to: "leg2_top" },
      { from: "you", to: "leg3_top" },
      { from: "you", to: "leg4_top" },
      { from: "you", to: "leg5_top" },
      { from: "you", to: "leg6_top" },
      { from: "leg2_top", to: "leg2_bot" },
      { from: "leg3_top", to: "leg3_bot" },
      { from: "leg5_top", to: "leg5_mid_client" },
      { from: "leg5_top", to: "leg5_mid_p" },
      { from: "leg5_mid_p", to: "leg5_bot_p" }
    ],
    notes: [
      "<span style='color:#dc2626; font-weight:bold; font-size:1.1em;'>דרישת סף: שמירה על הדרגה למשך 2 חודשים רצופים.</span>",
      "<b>סה\"כ נקודות מעודכן:</b> 27,170 (התקרבות ליעד של 28,000).",
      "<b>בונוס דרגה כולל:</b> 3,600 ₪.",
      "<b>חלוקת תשלום:</b> 1,200 ₪ בחודש הראשון + 2,400 ₪ בחודש השני.",
      "<b>עדכונים:</b> הקטנת העץ לתצוגה מלאה + עדכון זכיין ל-2561."
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
