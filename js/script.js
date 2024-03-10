// Toggle navbar menu untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
const menu = document.querySelector("#hamburger-menu");

// ketika hamburger menu di klik
menu.onclick = () => {
  navbarNav.classList.add("active");
};

// ketika close menu di klik
document.querySelector("#close-nav").onclick = (e) => {
  navbarNav.classList.remove("active");
  e.preventDefault();
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const sb = document.querySelector("#search-button");

sb.onclick = () => {
  searchForm.classList.toggle("active");
  searchBox.focus();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
const scb = document.querySelector("#shopping-cart-button");
const scClose = document.querySelector("#close-sc");

// ketika shopping cart button di klik
scb.onclick = () => {
  shoppingCart.classList.add("active");
};

// ketika tombol close shopping cart di klik
scClose.onclick = (e) => {
  shoppingCart.classList.remove("active");
  e.preventDefault();
};

// klik diluar elemen

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!scb.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");
const modalContainer = document.querySelector(".modal-container");

itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModal.style.display = "flex";
        modalContainer.style.animation = "animateModal .5s";
        e.preventDefault();
    };
})

// ketika tombol close modal di klik 
document.querySelector('.modal .modal-close').onclick = (e) => {
    modalContainer.style.animation = "closeModal .3s forwards";
    e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
    if(e.target === itemDetailModal) {
        itemDetailModal.style.display = 'none';
    }
};

modalContainer.addEventListener('animationend', function(e) {
    if(e.animationName === 'closeModal') {
        itemDetailModal.style.display = "none";
    } else {
        itemDetailModal.style.display = "flex";
    }
})