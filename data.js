// data.js (SAFE)
// Always expose RANKS on window so pages can read it reliably.

(function () {
  window.RANKS = [
    {
      id: "partner",
      title: "Partner",
      video: "",
      intro: "נקודת פתיחה במערכת. מתמקדים בהבנת מוצר, שירות, ותהליך רכישה חוזרת.",
      learn: [
        "להכיר את מוצרי הליבה ואת השפה הנכונה להסבר.",
        "לבנות הרגל עבודה שבועי (מעקב, פגישות, סגירות).",
        "להתחיל ליצור בסיס לקוחות חוזרים."
      ]
    },
    {
      id: "partner-plus",
      title: "Partner Plus",
      video: "https://youtu.be/M293NdN7Sok?si=da8BUiVp5Qy-Z_5y",
      intro: "התקדמות ראשונה שמבוססת על פעילות עקבית והגדלת נפח אישי/קבוצתי.",
      learn: [
        "מיקוד: שגרה יומית קצרה + סגירות פשוטות.",
        "יעד: יצירת 2–3 לקוחות חוזרים יציבים.",
        "לדעת להסביר “למה עכשיו” ולקבוע שיחת המשך."
      ]
    },
    {
      id: "senior-partner",
      title: "Senior Partner",
      video: "https://youtu.be/fnG6Eld0SPk?si=7ZozniTLZHIG5qR8",
      intro: "שלב בו מתחילים לבנות קצב שכפול וליווי בסיסי של אחרים.",
      learn: [
        "תהליך שכפול: איך כל אדם חדש עושה 3 צעדים ראשונים.",
        "כלים: תסריט הזמנה, סיכום שיחה, ומעקב.",
        "הכשרת לקוח להיות גם שותף (לפי התאמה)."
      ]
    },
    {
      id: "sales-coordinator",
      title: "Sales Coordinator",
      video: "https://youtu.be/cyJb_ecWjyA?si=JjClNcImW1bs86Ig",
      intro: "תפקיד ניהולי-תפעולי: ארגון, מעקב, ותמיכה בקבוצה.",
      learn: [
        "להחזיק לוח יעדים שבועי (פגישות, הצגות, סגירות).",
        "לבנות שגרה של 'מעקב אחרי מעקב'.",
        "לעבוד עם טמפלטים (מסרים/מצגות/לינקים)."
      ]
    },
    {
      id: "qssc",
      title: "Qualifying Senior Sales Coordinator",
      video: "https://youtu.be/ru06kEc9kqE?si=9yvL3LZ5Qm80YEak",
      intro: "שלב הסמכה: מוכיחים יציבות ביצועים לפני עלייה לדרגה הבאה.",
      learn: [
        "ליישר קו על סטנדרט: פעילות חודשית עקבית.",
        "להגדיר 2–3 מובילי מיקרו בתוך הקבוצה.",
        "למדוד התקדמות לפי מדדים קבועים."
      ]
    },
    {
      id: "ssc",
      title: "Senior Sales Coordinator",
      video: "https://youtu.be/xPwmFecZ8Ms?si=rqjGaml0ySJoif0x",
      intro: "קבוצה כבר מתנהלת עם היררכיה ראשונית ותהליכי עבודה קבועים.",
      learn: [
        "להפוך הצגות/וובינרים לשגרה קבועה.",
        "לשפר איכות לידים וניהול זמן.",
        "להחזיק 'מעגל מנהיגות' קטן."
      ]
    },
    {
      id: "qnmd",
      title: "Qualifying National Marketing Director",
      video: "https://youtu.be/W8Wm_c4kMUo?si=sRYcBXB5K67s3CgE",
      intro: "שלב הסמכה לדרגת NMD – יציבות והובלה.",
      learn: [
        "הרחבת שכפול: לא רק להביא — גם לייצב.",
        "לזהות צווארי בקבוק (תנועה/הצגה/סגירה).",
        "לנהל תקשורת קבוצה ברורה ומדידה."
      ]
    },
    {
      id: "nmd",
      title: "National Marketing Director",
      video: "https://youtu.be/muieHSXIocI?si=mgdWJi4OJRh0YzLE",
      intro: "הובלה ברמה גבוהה יותר: מערכת שמייצרת תוצאות דרך אנשים.",
      learn: [
        "להגדיר KPI למובילים: פגישות, הצגות, לקוחות חוזרים.",
        "Onboarding לזכיינים חדשים.",
        "לבנות קהילה פעילה עם ערך."
      ]
    },
    {
      id: "imd",
      title: "International Marketing Director",
      video: "https://youtu.be/WeEZlCjHAtU?si=O0jNx22vXu_D9QZC",
      intro: "בנייה ותחזוקה של צוותים גדולים יותר ותרבות ארגונית.",
      learn: [
        "ניהול שכבות מנהיגות (Leader of Leaders).",
        "מסרים אחידים ועמוקים יותר.",
        "תכנון רבעוני."
      ]
    },
    {
      id: "emd",
      title: "Executive Marketing Director",
      video: "https://youtu.be/KpKDNIc8R7k?si=SrOdHEqDI50v0lGi",
      intro: "התמקצעות: אסטרטגיה, תרבות, וסקייל יציב.",
      learn: [
        "מערכת הדרכות קבועה (אקדמיה פנימית).",
        "סטנדרטים של שירות ומנהיגות.",
        "חיזוק שימור לאורך זמן."
      ]
    },
    {
      id: "pmd",
      title: "Presidential Marketing Director",
      video: "https://youtu.be/2i3sVTpFxts?si=qD2kCXt6GRrnapvF",
      intro: "הובלה ארגונית ברמה גבוהה במיוחד.",
      learn: [
        "פיתוח מנהיגות עמוקה.",
        "תמיכה במובילים ושימור יציבות.",
        "שכפול איכותי."
      ]
    },
    {
      id: "pmd-plus",
      title: "Presidential Marketing Director Plus",
      video: "https://youtu.be/MVxQ4LPsj6w?si=KS57tgB9Lhyk_00X",
      intro: "שיא ההתקדמות: מערכת עם תרבות, יציבות ושכפול מתמשך.",
      learn: [
        "לשמר תרבות וערכים בסקייל גדול.",
        "לנהל מנהיגים שמנהלים מנהיגים.",
        "פיתוח תהליכים לטווח ארוך."
      ]
    }
  ];

  window.getRankById = function (id) {
    return window.RANKS.find(r => r.id === id) || null;
  };

  window.toYouTubeEmbed = function (url) {
    if (!url) return "";
    try {
      const u = new URL(url);
      if (u.hostname.includes("youtu.be")) {
        const vid = u.pathname.replace("/", "");
        return vid ? `https://www.youtube-nocookie.com/embed/${vid}` : "";
      }
      const v = u.searchParams.get("v");
      if (v) return `https://www.youtube-nocookie.com/embed/${v}`;
      if (u.pathname.includes("/embed/")) return url;
      return url;
    } catch {
      return url;
    }
  };
})();

const RANK_TREES = {
  "Partner": {
    generations: [
      ["P"]
    ],
    info: "400 נקודות אישיות"
  },

  "Partner Plus": {
    generations: [
      ["P+"],
      ["P", "P"]
    ],
    info: "400 נקודות אישיות"
  },

  "Senior Partner": {
    generations: [
      ["SP"],
      ["P+", "P+"],
      ["P", "P"]
    ],
    info: "12,000 נקודות בפייליין"
  },

  "Sales Coordinator": {
    generations: [
      ["SC"],
      ["P+", "P+"],
      ["P", "P", "P"]
    ],
    info: "28,000 נקודות בפייליין"
  },

  "Qualifying Senior Sales Coordinator": {
    generations: [
      ["QSSC"],
      ["SC", "SC"],
      ["P+", "P+"]
    ],
    info: "28,000 נקודות בפייליין"
  },

  "Senior Sales Coordinator": {
    generations: [
      ["SSC"],
      ["QSSC", "QSSC"],
      ["SC", "SC"]
    ],
    info: "56,000 נקודות בפייליין"
  }
};
