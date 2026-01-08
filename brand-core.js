// Shared branding loader for all pages
const DEFAULT_LOGO_URL = "assets/ourway.jpg";
const STORAGE_KEY = "jp_brand";

const BRAND_DEFAULT = {
  groupName: "המסע המשותף שלנו",
  tagline: "חוברת הדרגות – מדריך וידאו לזכיין חדש",
  logoDataUrl: ""
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

function applyBrandToPage() {
  const b = loadBrand();

  // Texts
  document.querySelectorAll("[data-brand='groupName']").forEach(el => (el.textContent = b.groupName));
  document.querySelectorAll("[data-brand='tagline']").forEach(el => (el.textContent = b.tagline));

  // Logo
  const chosen = b.logoDataUrl && b.logoDataUrl.trim() ? b.logoDataUrl : DEFAULT_LOGO_URL;
  const src = resolveUrl(chosen);

  document.querySelectorAll("[data-brand='logo']").forEach(img => {
    img.onload = () => (img.style.display = "block");
    img.onerror = () => (img.style.display = "none");
    img.src = src;
  });

  // fallback visibility
  const anyLogo = document.querySelector("[data-brand='logo']");
  const fallback = document.querySelector("[data-brand='logoFallback']");
  if (anyLogo && fallback) {
    anyLogo.addEventListener("load", () => (fallback.style.display = "none"));
    anyLogo.addEventListener("error", () => (fallback.style.display = "block"));
  }

  // Save defaults once (optional, harmless)
  try { saveBrand(b); } catch {}
}

document.addEventListener("DOMContentLoaded", applyBrandToPage);
