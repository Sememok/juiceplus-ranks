// brand-core.js - FULL REPLACEMENT
// Shared branding loader for all pages

// שימוש בנתיב יחסי פשוט שעובד גם מקומית וגם ב-GitHub
const DEFAULT_LOGO_URL = "assets/ourway.jpg";
const STORAGE_KEY = "jp_brand";

const BRAND_DEFAULT = {
  groupName: "המסע המשותף שלנו",
  tagline: "חוברת הדרגות – מדריך וידאו לזכיין חדש",
  logoDataUrl: ""
};

function loadBrand() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { ...BRAND_DEFAULT };
    return { ...BRAND_DEFAULT, ...JSON.parse(raw) };
  } catch {
    return { ...BRAND_DEFAULT };
  }
}

function saveBrand(b) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(b));
}

function resetBrand() {
  localStorage.removeItem(STORAGE_KEY);
}

function applyBrandToPage() {
  const b = loadBrand();

  // 1. עדכון טקסטים
  document.querySelectorAll("[data-brand='groupName']").forEach(el => {
    if(el) el.textContent = b.groupName;
  });
  document.querySelectorAll("[data-brand='tagline']").forEach(el => {
    if(el) el.textContent = b.tagline;
  });

  // 2. טיפול בלוגו
  // אם יש לוגו שמור בזיכרון - נשתמש בו. אחרת - נשתמש בקובץ ברירת המחדל
  const chosenSrc = (b.logoDataUrl && b.logoDataUrl.length > 50) 
                    ? b.logoDataUrl 
                    : DEFAULT_LOGO_URL;

  document.querySelectorAll("[data-brand='logo']").forEach(img => {
    // הסתרת הלוגו עד לטעינה כדי למנוע הבהוב של "תמונה שבורה"
    img.style.display = "none";
    
    img.onload = function() {
      this.style.display = "block";
      // אם הלוגו נטען בהצלחה, נסתיר את טקסט הגיבוי
      const fallback = this.parentElement.querySelector(".fallback");
      if (fallback) fallback.style.display = "none";
    };

    img.onerror = function() {
      // אם התמונה לא נמצאה, נציג טקסט גיבוי
      this.style.display = "none";
      const fallback = this.parentElement.querySelector(".fallback");
      if (fallback) fallback.style.display = "block";
      console.warn("Logo failed to load:", chosenSrc);
    };

    img.src = chosenSrc;
  });
}

document.addEventListener("DOMContentLoaded", applyBrandToPage);
