// filenya kepake semua halaman

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function() {
        const menuIsOpen = navLinks.classList.toggle("is-open");
        menuToggle.setAttribute("aria-expanded", String(menuIsOpen));
        menuToggle.setAttribute(
            "aria-label",
            menuIsOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
        );
        menuToggle.textContent = menuIsOpen ? "×" : "☰"; // ini buat di handphone
    });
}

const yearElements = document.querySelectorAll(".current-year");
yearElements.forEach(function(element) {
    element.textContent = new Date().getFullYear();
});