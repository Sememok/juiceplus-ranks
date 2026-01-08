const DEFAULT_LOGO_URL = "assets/ourway.jpg";
const STORAGE_KEY = "jp_brand";

const BRAND_DEFAULT = {
  groupName: "המסע המשותף שלנו",
  tagline: "חוברת הדרגות – מדריך וידאו לזכיין חדש",
  logoDataUrl: ""
};

function basePath() {
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

function applyBrandToPage() {
  const b = loadBrand();

  // טקסטים (אם קיימים בעמוד)
  document.querySelectorAll("[data-brand='groupName']").forEach(el => el.textContent = b.groupName);
  document.querySelectorAll("[data-brand='tagline']").forEach(el => el.textContent = b.tagline);

  // לוגו (אם קיים בעמוד)
  const logoSrc = (b.logoDataUrl && b.logoDataUrl.trim())
    ? b.logoDataUrl
    : resolveUrl(DEFAULT_LOGO_URL);

  document.querySelectorAll("[data-brand='logo']").forEach(img => {
    img.onerror = () => { img.style.display = "none"; };
    img.onload  = () => { img.style.display = "block"; };
    img.src = logoSrc;
  });
}

document.addEventListener("DOMContentLoaded", applyBrandToPage);
