const slides = document.querySelectorAll(".slide");
const sliderBtnLeft = document.querySelector("#slider-btn-left");
const sliderBtnRight = document.querySelector("#slider-btn-right");
let activeSlide = 1;

function slideLeft(e) {
    activeSlide--;

    let link = slides[activeSlide].getAttribute("id");

    if (activeSlide <= 1) sliderBtnLeft.style.visibility = "hidden";

    if (sliderBtnRight.style.visibility == "hidden" && activeSlide < slides.length) {
        sliderBtnRight.style.visibility = "visible";
    }

    sliderBtnLeft.setAttribute("href", `#slide-${parseInt(link.slice(-1), 10) - 1}`);
    sliderBtnRight.setAttribute("href", `#slide-${parseInt(link.slice(-1), 10) + 1}`);
}

function slideRight(e) {
    activeSlide++;

    let link = slides[activeSlide - 2].getAttribute("id");

    if (activeSlide >= slides.length) sliderBtnRight.style.visibility = "hidden";

    if (sliderBtnLeft.style.visibility == "hidden" && activeSlide > 1) {
        sliderBtnLeft.style.visibility = "visible";
    }

    sliderBtnLeft.setAttribute("href", `#slide-${parseInt(link.slice(-1), 10) - 1}`);
    sliderBtnRight.setAttribute("href", `#slide-${parseInt(link.slice(-1), 10) + 1}`);
}

window.addEventListener('load', (e) => {
    if (activeSlide <= 1) sliderBtnLeft.style.visibility = "hidden";
    if (activeSlide >= slides.length) sliderBtnRight.style.visibility = "hidden";

    console.log("hello");

    let link = slides[activeSlide - 1].getAttribute("id");

    sliderBtnLeft.setAttribute("href", `#slide-${parseInt(link.slice(-1), 10) - 1}`);
    sliderBtnRight.setAttribute("href", `#slide-${parseInt(link.slice(-1), 10) + 1}`);
});

sliderBtnLeft.addEventListener("click", slideLeft);
sliderBtnRight.addEventListener("click", slideRight);
