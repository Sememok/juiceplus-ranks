const SITE_BASE = "https://sememok.github.io/juiceplus-ranks/";

const BRAND_DEFAULT = {
  groupName: "המסע המשותף שלנו",
  tagline: "חוברת הדרגות – מדריך וידאו לזכיין חדש",
  logoDataUrl: "" // אם ריק — יוצג placeholder
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

function brandRender() {
  let b = brandLoad();
  b = brandApplyUrlOverrides(b);

  const nameEl = document.querySelector("[data-brand='groupName']");
  const tagEl  = document.querySelector("[data-brand='tagline']");
  const logoEl = document.querySelector("[data-brand='logo']");
  const logoFallback = document.querySelector("[data-brand='logoFallback']");

  if (nameEl) nameEl.textContent = b.groupName;
  if (tagEl) tagEl.textContent = b.tagline;

  if (logoEl) {
    if (b.logoDataUrl) {
      logoEl.src = b.logoDataUrl;
      logoEl.style.display = "block";
      if (logoFallback) logoFallback.style.display = "none";
    } else {
      logoEl.removeAttribute("src");
      logoEl.style.display = "none";
      if (logoFallback) logoFallback.style.display = "block";
    }
  }

  brandSave(b);
  return b;
}
