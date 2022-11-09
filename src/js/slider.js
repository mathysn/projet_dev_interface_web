const slides = document.querySelectorAll(".slide");
const sliderBtnLeft = document.querySelector("#slider-btn-left");
const sliderBtnRight = document.querySelector("#slider-btn-right");
let activeSlide = 1;

const slidesContainer = document.querySelector("#slides");

function changeLinksButtons(link) {
    sliderBtnLeft.setAttribute("href", `#slide-${parseInt(link.slice(-1), 10) - 1}`);
    sliderBtnRight.setAttribute("href", `#slide-${parseInt(link.slice(-1), 10) + 1}`);
}

function slideLeft(e) {
    activeSlide--;

    let link = slides[activeSlide].getAttribute("id");

    if (activeSlide <= 1) sliderBtnLeft.style.visibility = "hidden";

    if (sliderBtnRight.style.visibility == "hidden" && activeSlide < slides.length) {
        sliderBtnRight.style.visibility = "visible";
    }

    changeLinksButtons(link);
}

function slideRight(e) {
    activeSlide++;

    let link = slides[activeSlide - 2].getAttribute("id");

    if (activeSlide >= slides.length) sliderBtnRight.style.visibility = "hidden";

    if (sliderBtnLeft.style.visibility == "hidden" && activeSlide > 1) {
        sliderBtnLeft.style.visibility = "visible";
    }

    changeLinksButtons(link);
}

window.addEventListener('load', (e) => {
    if (activeSlide <= 1) sliderBtnLeft.style.visibility = "hidden";
    if (activeSlide >= slides.length) sliderBtnRight.style.visibility = "hidden";

    let link = slides[activeSlide - 1].getAttribute("id");

    changeLinksButtons(link);
});

sliderBtnLeft.addEventListener("click", slideLeft);
sliderBtnRight.addEventListener("click", slideRight);

function changeScrollSnapAlign(value) {
    slides.forEach(slide => {
        slide.style.scrollSnapAlign = value;
    });
}

function hoverEffect(cssClass, cssValue) {
    slidesContainer.classList.add(cssClass);
    changeScrollSnapAlign(cssValue);
}

function leaveHoverEffect(cssClass, cssValue) {
    slidesContainer.classList.remove(cssClass);
    changeScrollSnapAlign(cssValue);
}

sliderBtnRight.addEventListener("mouseover", (e) => {
    hoverEffect("right-btn-hovered", "start");
});
sliderBtnRight.addEventListener("mouseout", (e) => {
    leaveHoverEffect("right-btn-hovered", "start");
});

sliderBtnLeft.addEventListener("mouseover", (e) => {
    hoverEffect("left-btn-hovered", "end");
});
sliderBtnLeft.addEventListener("mouseout", (e) => {
    leaveHoverEffect("left-btn-hovered", "end");
});
