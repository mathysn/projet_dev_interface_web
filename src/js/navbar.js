const burgerMenu = document.querySelector(".nav-icon");
const navLinks = document.querySelector(".res-navbar-links-container");
var contener = document.getElementById('margin-32');

contener.classList.remove("margin-32");

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('ouvert');
    contener.classList.add("margin-32");
});