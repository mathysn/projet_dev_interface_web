const slides = document.querySelectorAll(".slide");
const sliderBtnLeft = document.querySelector("#slider-btn-left");
const sliderBtnRight = document.querySelector("#slider-btn-right");
let activeSlide = 1;

// slides[activeSlide - 1].classList.add("active");

function slideLeft(e) {
    activeSlide--;
    if (activeSlide <= 1) sliderBtnLeft.style.display = "none";

    if (sliderBtnRight.style.display == "none" && activeSlide < slides.length) {
        sliderBtnRight.style.display == "flex";
    }

    sliderBtnLeft.setAttribute("href", `#slide-${activeSlide - 1}`);
    sliderBtnRight.setAttribute("href", `#slide-${activeSlide + 1}`);
}

function slideRight(e) {
    activeSlide++;
    if (activeSlide >= slides.length) sliderBtnRight.style.display = "none";

    if (sliderBtnLeft.style.display == "none" && activeSlide > 1) {
        sliderBtnLeft.style.display == "flex";
    }

    sliderBtnLeft.setAttribute("href", `#slide-${activeSlide - 1}`);
    sliderBtnRight.setAttribute("href", `#slide-${activeSlide + 1}`);
}

window.addEventListener('load', (e) => {
    sliderBtnLeft.style.display = "none";

    sliderBtnLeft.setAttribute("href", `#slide-${activeSlide - 1}`);
    sliderBtnRight.setAttribute("href", `#slide-${activeSlide + 1}`);
});

sliderBtnLeft.addEventListener("click", slideLeft);
sliderBtnRight.addEventListener("click", slideRight);
