document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const navbarHeight = navbar.clientHeight;
  let isNavbarFixed = false;
  const buttons = document.querySelectorAll(".movie-filter button");
  const filterButtons = document.querySelectorAll(".movie-filter button");
  const Modal = document.getElementById('myModal');
  const searchForm = document.getElementById("searchForm");
  const allCards = document.querySelectorAll(".col");
  const allCardsArray = Array.from(allCards);

  // Búsqueda
  searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const searchTerm = this.querySelector('input[type="search"]').value.toLowerCase();

    // Realizar la búsqueda en todas las tarjetas
    allCardsArray.forEach((card) => {
      const cardTitle = card.querySelector(".card-title").textContent.toLowerCase();
      const shouldShow = cardTitle.includes(searchTerm);
      card.style.display = shouldShow ? "block" : "none";
    });
  });

  // Mini menu
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = button.getAttribute("title");
      allCardsArray.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");
        if (category === "popular" || cardCategory === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // Efectos del mini menú
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      filterButtons.forEach((btn) => btn.classList.remove("btn-green"));
      filterButtons.forEach((btn) => btn.classList.add("btn-transparent"));
      this.classList.remove("btn-transparent");
      this.classList.add("btn-green");
    });
  });

  // Modal 
  Modal.addEventListener('shown.bs.modal', () => {
    myInput.focus();
  });

  // Efecto Navbar
  window.addEventListener("scroll", function () {
    const scrollY = window.scrollY;
    if (scrollY > navbarHeight) {
      if (!isNavbarFixed) {
        navbar.classList.add("navbar-fixed");
        isNavbarFixed = true;
      }
    }
  });
});
