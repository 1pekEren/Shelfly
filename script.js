const hero = document.querySelector(".hero");

hero.addEventListener("mousemove", function(event) {

    const book = document.createElement("div");
    book.classList.add("flying-book");

    // Kitap kapağı
    const cover = document.createElement("div");
    cover.classList.add("book-cover");

    // Kitabın sırtı
    const spine = document.createElement("div");
    spine.classList.add("book-spine");

    // Kitabın sayfaları
    const pages = document.createElement("div");
    pages.classList.add("book-pages");

    book.appendChild(cover);
    book.appendChild(spine);
    book.appendChild(pages);

    const rect = hero.getBoundingClientRect();

    book.style.left = (event.clientX - rect.left) + "px";
    book.style.top = (event.clientY - rect.top) + "px";

    const x = Math.random() * 180 - 90;
    const y = Math.random() * -150 - 40;
    const rotate = Math.random() * 360 - 180;

    book.style.setProperty("--x", x + "px");
    book.style.setProperty("--y", y + "px");
    book.style.setProperty("--rotate", rotate + "deg");

    hero.appendChild(book);

    setTimeout(() => {
        book.remove();
    }, 1200);
});

//Kitap arama fonksiyonu

const searchInput = document.querySelector(".search-box input");
const bookCards = document.querySelectorAll(".book-card");

searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.toLowerCase();

    bookCards.forEach(function (book) {

        const bookName = book.querySelector("h3").textContent.toLowerCase();
        const author = book.querySelector("p").textContent.toLowerCase();

        if (
            bookName.includes(searchText) ||
            author.includes(searchText)
        ) {
            book.style.display = "";
        } else {
            book.style.display = "none";
        }

    });

});

// KATEGORİ FİLTRELEME

const categoryButtons = document.querySelectorAll(".category-btn");

categoryButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const selectedCategory = button.dataset.filter;

        // Aktif butonu değiştir
        categoryButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");


        // Kitapları filtrele
        bookCards.forEach(function(book) {

            const bookCategory = book.dataset.category;

            if (
                selectedCategory === "all" ||
                bookCategory === selectedCategory
            ) {
                book.style.display = "";
            } else {
                book.style.display = "none";
            }

        });

    });

});