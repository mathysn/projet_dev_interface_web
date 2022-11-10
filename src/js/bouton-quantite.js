// variables import
const addBtn = document.querySelector("#quantity-add");
const removeBtn = document.querySelector("#quantity-remove");
const output = document.querySelector("#quantity-output");
let counter = 1;

// increment counter when clicking on "add" button
addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    output.textContent = ++counter;
});

// decrement counter when clicking on "remove" button
removeBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (counter <= 1) return;
    output.textContent = --counter;
});
