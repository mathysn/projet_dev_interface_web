

const dropdown = document.querySelector('.contener-policy');
const btnDrop = document.querySelector('.plus');
var btn = document.getElementById('id_plus');

let toggleIndex = 0;

btnDrop.addEventListener('click', () => {

    if(toggleIndex === 0){
        dropdown.style.height = `${dropdown.scrollHeight}px`;
        btn.classList.remove("fa-plus");
        toggleIndex++;
    } else {
        dropdown.style.height = `${btnDrop.scrollHeight}px`;
        btn.classList.add("fa-plus");
        toggleIndex--;
    }

})