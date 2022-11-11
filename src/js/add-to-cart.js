// increment the cart counter in the navbar
document.querySelector("#add-cart-button").addEventListener("click", (e) => {
    let cart = document.querySelector("a[href=\"./cart.html\"]");
    
    cart.childNodes[1].textContent = parseInt(cart.textContent, 10) + 1;
});
