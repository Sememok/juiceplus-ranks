// brand-core.js - גרסה יציבה ופשוטה
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

  // 2. טיפול בלוגו - פשוט וישיר
  // אם יש מידע שמור (ארוך מספיק כדי להיות תמונה) נשתמש בו, אחרת בברירת המחדל
  let chosenSrc = DEFAULT_LOGO_URL;
  if (b.logoDataUrl && b.logoDataUrl.length > 50) {
    chosenSrc = b.logoDataUrl;
  }

  document.querySelectorAll("[data-brand='logo']").forEach(img => {
    // מציגים תמיד, ללא הסתרה
    img.style.display = "block";
    img.src = chosenSrc;
    
    // אם התמונה נשברת, ננסה להציג את ברירת המחדל כגיבוי אחרון
    img.onerror = function() {
      console.warn("Logo failed to load:", this.src);
      // מונע לולאה אינסופית
      if (this.src.includes("ourway.jpg")) return; 
      this.src = DEFAULT_LOGO_URL;
    };
  });
  
  // הסתרת טקסט הגיבוי אם יש תמונה
  document.querySelectorAll(".fallback").forEach(el => el.style.display = "none");
}

document.addEventListener("DOMContentLoaded", applyBrandToPage);
