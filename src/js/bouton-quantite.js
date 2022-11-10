const addBtn = document.querySelector("#quantity-add");
const removeBtn = document.querySelector("#quantity-remove");
const output = document.querySelector("#quantity-output");
let counter = 1;

addBtn.addEventListener("click", (e) => {
    e.preventDefault();

    output.textContent = ++counter;
});

removeBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (counter <= 1) return;
    output.textContent = --counter;
});
