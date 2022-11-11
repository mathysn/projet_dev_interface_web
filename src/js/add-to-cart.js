// increment the cart counter in the navbar
document.querySelector("#add-cart-button").addEventListener("click", (e) => {
    let carts = document.querySelectorAll("a[href=\"cart.html\"]");

    carts.forEach(cart => {
        cart.childNodes[1].textContent = parseInt(cart.textContent, 10) + 1;
    });
});
