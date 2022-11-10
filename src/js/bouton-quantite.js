const addBtn = document.querySelector("#quantite-add");
const removeBtn = document.querySelector("#quantite-remove");
const output = document.querySelector("#quantite-output");
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
