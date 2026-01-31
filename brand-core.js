/* brand-core.js */
document.addEventListener("DOMContentLoaded", () => {
    loadBrand();
    const logoEl = document.querySelector('.brand-logo');
    if(logoEl) {
        logoEl.onclick = () => {
            const name = prompt("שם המותג:");
            if(name) localStorage.setItem("myBrandName", name);
            const logo = prompt("קישור ללוגו (URL):");
            if(logo) localStorage.setItem("myBrandLogo", logo);
            loadBrand();
        };
    }
});
function loadBrand() {
    const name = localStorage.getItem("myBrandName");
    const logo = localStorage.getItem("myBrandLogo");
    document.querySelectorAll('[data-brand="title"]').forEach(el => { if(name) el.textContent = name; });
    const logos = document.querySelectorAll('img[data-brand="logo"]');
    const fallbacks = document.querySelectorAll('span[data-brand="logoFallback"]');
    if(logo) {
        logos.forEach(el => { el.src = logo; el.style.display = 'block'; });
        fallbacks.forEach(el => el.style.display = 'none');
    }
}
