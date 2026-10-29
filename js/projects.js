// bikin perintah di laman contact

// dari sini
const filterButtons = document.querySelectorAll(".filter-button"); // . berarti class yang diambil
const projectCards = document.querySelectorAll(".project-card"); // ambil class juga
const filterStatus = document.querySelector("#filter-status");
const emptyState = document.querySelector("#empty-state"); // tanda # berarti yang diambil id
// sampe sini buat ambil elemen elemen dari html (tombol filter, "proyek card") 

// event tombol di klik buat setiap tombol filter nya
filterButtons.forEach(function (button) {
    button.addEventListener("click", function(){
        const selectedCategory = button.dataset.filter;
        let visibleProjectCount = 0;

        filterButtons.forEach(function (item) {
            const isActive = item === button;
            item.classList.toggle("active", isActive);
            item.setAttribute("aria-pressed", String(isActive));
        });

        projectCards.forEach(function (card) {
            const projectCategory = card.dataset.category;
            const shouldShow = selectedCategory === "all" || projectCategory === selectedCategory;

            card.hidden = !shouldShow;
            card.closest("article").hidden = !shouldShow;

            if (shouldShow) {
                visibleProjectCount += 1;
            }
        });

        if (selectedCategory === "all") {
            filterStatus.textContent = "Menampilkan semua proyek.";
        } else if (selectedCategory === "html-css") {
            filterStatus.textContent = "Menampilkan proyek kategory HTML/CSS.";
        } else {
            filterStatus.textContent = "Menampilkan proyek kategory JavaScript.";
        }

        if (emptyState) {
            emptyState.hidden = visibleProjectCount !== 0;
        }
    });
});