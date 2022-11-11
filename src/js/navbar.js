const burgerMenu = document.querySelector(".nav-icon");
const navLinks = document.querySelector(".res-navbar-links-container");

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('ouvert');
});