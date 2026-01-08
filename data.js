// Brand settings page logic (uses brand-core.js functions)
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

function initBrandSettingsPage() {
  const b = loadBrand();
  applyBrandToPage();

  const groupName = document.getElementById("groupName");
  const tagline = document.getElementById("tagline");
  const logoFile = document.getElementById("logoFile");
  const preview = document.getElementById("previewImg");
  const msg = document.getElementById("msg");
  const checkUrl = document.getElementById("logoCheckUrl");

  const url = `${location.origin}/${location.pathname.split("/")[1]}/assets/ourway.jpg`;
  if (checkUrl) checkUrl.textContent = url;

  if (groupName) groupName.value = b.groupName;
  if (tagline) tagline.value = b.tagline;

  const setMsg = (t) => { if (msg) msg.textContent = t; };

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
        setMsg("שגיאה בקריאת הקובץ. נסי JPG/PNG קטן יותר.");
      }
    });
  }

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
        applyBrandToPage();
        setMsg("נשמר. עברי לעמוד הבית/חוברת ובדקי.");
      } catch {
        setMsg("לא הצליח לשמור. נסי תמונה קטנה יותר.");
      }
    });
  }

  const resetBtn = document.getElementById("resetBtn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      resetBrand();
      const d = loadBrand();

      if (groupName) groupName.value = d.groupName;
      if (tagline) tagline.value = d.tagline;
      if (logoFile) logoFile.value = "";
      if (preview) { preview.removeAttribute("src"); preview.style.display = "none"; }

      applyBrandToPage();
      setMsg("איפוס בוצע. אמור להופיע לוגו ברירת המחדל assets/ourway.jpg");
    });
  }
}

document.addEventListener("DOMContentLoaded", initBrandSettingsPage);
