const slides = document.querySelectorAll(".slide");
const sliderBtnLeft = document.querySelector("#slider-btn-left");
const sliderBtnRight = document.querySelector("#slider-btn-right");
let activeSlide = 1;

function slideLeft(e) {
    activeSlide--;

    let link = slides[activeSlide].getAttribute("id");

    if (activeSlide <= 1) sliderBtnLeft.style.display = "none";

    if (sliderBtnRight.style.display == "none" && activeSlide < slides.length) {
        sliderBtnRight.style.display = "flex";
    }

    sliderBtnLeft.setAttribute("href", `#slide-${parseInt(link.slice(-1), 10) - 1}`);
    sliderBtnRight.setAttribute("href", `#slide-${parseInt(link.slice(-1), 10) + 1}`);
}

function slideRight(e) {
    activeSlide++;

    let link = slides[activeSlide - 2].getAttribute("id");

    if (activeSlide >= slides.length) sliderBtnRight.style.display = "none";

    if (sliderBtnLeft.style.display == "none" && activeSlide > 1) {
        sliderBtnLeft.style.display = "flex";
    }

    sliderBtnLeft.setAttribute("href", `#slide-${parseInt(link.slice(-1), 10) - 1}`);
    sliderBtnRight.setAttribute("href", `#slide-${parseInt(link.slice(-1), 10) + 1}`);
}

window.addEventListener('load', (e) => {
    sliderBtnLeft.style.display = "none";

    let link = slides[activeSlide - 1].getAttribute("id");

    sliderBtnLeft.setAttribute("href", `#slide-${parseInt(link.slice(-1), 10) - 1}`);
    sliderBtnRight.setAttribute("href", `#slide-${parseInt(link.slice(-1), 10) + 1}`);
});

sliderBtnLeft.addEventListener("click", slideLeft);
sliderBtnRight.addEventListener("click", slideRight);
