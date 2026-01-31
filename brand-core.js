/* brand-core.js - Brand Management */

document.addEventListener("DOMContentLoaded", () => {
    loadBrand();
    
    // מאפשר עריכה בלחיצה על אזור הלוגו
    const logoArea = document.querySelector('.brand-logo');
    if(logoArea) {
        logoArea.title = "לחץ כאן כדי לשנות לוגו ושם";
        logoArea.onclick = () => {
            const newName = prompt("הכנס את שם המותג / הקבוצה שלך:");
            if(newName) localStorage.setItem("myBrandName", newName);
            
            const newLogo = prompt("הכנס קישור לתמונת לוגו (URL):");
            if(newLogo) localStorage.setItem("myBrandLogo", newLogo);
            
            loadBrand();
        }
    }
});

function loadBrand() {
    const savedName = localStorage.getItem("myBrandName");
    const savedLogo = localStorage.getItem("myBrandLogo");

    // עדכון כותרות
    const titles = document.querySelectorAll('[data-brand="title"]');
    titles.forEach(el => {
        if(savedName) el.textContent = savedName;
    });

    // עדכון לוגו
    const logos = document.querySelectorAll('img[data-brand="logo"]');
    const fallbacks = document.querySelectorAll('span[data-brand="logoFallback"]');

    if (savedLogo) {
        logos.forEach(img => {
            img.src = savedLogo;
            img.style.display = 'block';
        });
        fallbacks.forEach(span => span.style.display = 'none');
    } else {
        logos.forEach(img => img.style.display = 'none');
        fallbacks.forEach(span => {
            span.style.display = 'block';
            if(savedName) span.textContent = savedName;
        });
    }
}
