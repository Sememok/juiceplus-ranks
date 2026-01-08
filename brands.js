const SITE_BASE = "https://sememok.github.io/juiceplus-ranks/";
const DEFAULT_LOGO_URL = "assets/ourway.jpg";

const BRAND_DEFAULT = {
  groupName: "המסע המשותף שלנו",
  tagline: "חוברת הדרגות – מדריך וידאו לזכיין חדש",
  logoDataUrl: "" // יכיל DataURL קטן (לא ענק)
};

function brandLoad() {
  try {
    const raw = localStorage.getItem("jp_brand");
    if (!raw) return { ...BRAND_DEFAULT };
    return { ...BRAND_DEFAULT, ...JSON.parse(raw) };
  } catch {
    return { ...BRAND_DEFAULT };
  }
}

function brandSave(next) {
  localStorage.setItem("jp_brand", JSON.stringify(next));
}

function brandReset() {
  localStorage.removeItem("jp_brand");
}

function brandApplyUrlOverrides(brand) {
  const p = new URLSearchParams(window.location.search);
  const name = p.get("group");
  const tag = p.get("tagline");
  if (name) brand.groupName = name;
  if (tag) brand.tagline = tag;
  return brand;
}

// מחשב base path אוטומטי (עוזר כשעובדים ב-GitHub Pages תחת repo)
function computeBasePath() {
  // לדוגמה: /juiceplus-ranks/brand.html => /juiceplus-ranks/
  const parts = window.location.pathname.split("/");
  if (parts.length >= 2) {
    const repo = parts[1];
    return `/${repo}/`;
  }
  return "/";
}

function resolveUrl(path) {
  // אם זה כבר http / data: מחזירים כמות שהוא
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) return path;

  // path יחסי => נכניס base path של הריפו
  const base = computeBasePath(); // /juiceplus-ranks/
  return base + path.replace(/^\/+/, "");
}

function setLogo(imgEl, fallbackEl, src) {
  if (!imgEl) return;

  imgEl.onerror = () => {
    imgEl.style.display = "none";
    if (fallbackEl) fallbackEl.style.display = "block";
  };

  imgEl.onload = () => {
    imgEl.style.display = "block";
    if (fallbackEl) fallbackEl.style.display = "none";
  };

  imgEl.src = src;
}

function brandRender() {
  let b = brandLoad();
  b = brandApplyUrlOverrides(b);

  const nameEls = document.querySelectorAll("[data-brand='groupName']");
  const tagEls  = document.querySelectorAll("[data-brand='tagline']");
  const logoEls = document.querySelectorAll("[data-brand='logo']");
  const fallbackEls = document.querySelectorAll("[data-brand='logoFallback']");

  nameEls.forEach(el => el.textContent = b.groupName);
  tagEls.forEach(el => el.textContent = b.tagline);

  const chosen = (b.logoDataUrl && b.logoDataUrl.trim())
    ? b.logoDataUrl
    : DEFAULT_LOGO_URL;

  const resolved = resolveUrl(chosen);

  logoEls.forEach((imgEl, i) => {
    const fb = fallbackEls[i] || document.querySelector("[data-brand='logoFallback']");
    setLogo(imgEl, fb, resolved);
  });

  // נשמור (כדי שברירת המחדל תתיישב פעם אחת)
  try { brandSave(b); } catch {}
  return b;
}
