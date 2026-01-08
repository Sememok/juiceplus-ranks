const DEFAULT_LOGO_URL = "assets/ourway.jpg";
const STORAGE_KEY = "jp_brand";

const BRAND_DEFAULT = {
  groupName: "המסע המשותף שלנו",
  tagline: "חוברת הדרגות – מדריך וידאו לזכיין חדש",
  logoDataUrl: "" // אם מעלים דרך האתר נשמור פה DataURL קטן
};

function basePath() {
  // /juiceplus-ranks/
  const repo = location.pathname.split("/")[1];
  return `/${repo}/`;
}

function resolveUrl(path) {
  if (!path) return "";
  if (path.startsWith("data:") || path.startsWith("http://") || path.startsWith("https://")) return path;
  return basePath() + path.replace(/^\/+/, "");
}

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

// דחיסה אגרסיבית כדי שלא ניפול על מגבלת localStorage
async function fileToSmallDataUrl(file, maxSize = 420, quality = 0.82) {
  const dataUrl = await new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(r.result);
    r.onerror = reject;
    r.readAsDataURL(file);
  });

  const img = new Image();
  img.src = dataUrl;
  await new Promise((res, rej) => { img.onload = res; img.onerror = rej; });

  const scale = Math.min(1, maxSize / Math.max(img.width, img.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(img.width * scale);
  canvas.height = Math.round(img.height * scale);
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  return canvas.toDataURL("image/jpeg", quality);
}

function setTopBrandUI(brand) {
  const logoImg = document.getElementById("brandLogoImg");
  const logoFallback = document.getElementById("brandLogoFallback");
  const groupNameEl = document.getElementById("brandGroupName");
  const taglineEl = document.getElementById("brandTagline");

  if (groupNameEl) groupNameEl.textContent = brand.groupName;
  if (taglineEl) taglineEl.textContent = brand.tagline;

  const src = brand.logoDataUrl && brand.logoDataUrl.trim()
    ? brand.logoDataUrl
    : resolveUrl(DEFAULT_LOGO_URL);

  if (logoImg) {
    logoImg.onload = () => {
      logoImg.style.display = "block";
      if (logoFallback) logoFallback.style.display = "none";
    };
    logoImg.onerror = () => {
      logoImg.style.display = "none";
      if (logoFallback) logoFallback.style.display = "block";
    };
    logoImg.src = src;
  }
}

function initBrandPage() {
  const brand = loadBrand();

  // UI ראשי
  setTopBrandUI(brand);

  // טופס
  const groupName = document.getElementById("groupName");
  const tagline = document.getElementById("tagline");
  const logoFile = document.getElementById("logoFile");
  const preview = document.getElementById("previewImg");
  const msg = document.getElementById("msg");

  if (groupName) groupName.value = brand.groupName;
  if (tagline) tagline.value = brand.tagline;

  function setMsg(t) { if (msg) msg.textContent = t; }

  // Preview
  if (logoFile) {
    logoFile.addEventListener("change", async () => {
      if (!logoFile.files || !logoFile.files[0]) return;
      try {
        setMsg("טוען Preview...");
        const small = await fileToSmallDataUrl(logoFile.files[0]);
        preview.src = small;
        preview.style.display = "block";
        setMsg("Preview מוכן. לחצי 'שמור'.");
      } catch (e) {
        setMsg("שגיאה בקריאת קובץ. נסי JPG/PNG קטן יותר.");
      }
    });
  }

  // Save
  const saveBtn = document.getElementById("saveBtn");
  if (saveBtn) {
    saveBtn.addEventListener("click", async () => {
      try {
        const next = loadBrand();
        next.groupName = (groupName?.value || "").trim() || next.groupName;
        next.tagline = (tagline?.value || "").trim() || next.tagline;

        if (logoFile?.files && logoFile.files[0]) {
          setMsg("דוחס ושומר לוגו...");
          next.logoDataUrl = await fileToSmallDataUrl(logoFile.files[0]);
        }

        saveBrand(next);
        setTopBrandUI(next);
        setMsg("נשמר. עברי לחוברת/דף הבית ובדקי.");
      } catch (e) {
        setMsg("לא הצליח לשמור. נסי תמונה קטנה יותר.");
      }
    });
  }

  // Reset
  const resetBtn = document.getElementById("resetBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      resetBrand();
      const b = loadBrand();

      if (groupName) groupName.value = b.groupName;
      if (tagline) tagline.value = b.tagline;
      if (logoFile) logoFile.value = "";
      if (preview) { preview.removeAttribute("src"); preview.style.display = "none"; }

      setTopBrandUI(b);
      setMsg("אופס. איפוס בוצע. אמור להופיע לוגו ברירת מחדל (ourway.jpg).");
    });
  }
}

document.addEventListener("DOMContentLoaded", initBrandPage);
