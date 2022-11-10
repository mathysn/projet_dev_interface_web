// variables import
const slides = document.querySelectorAll(".slide");
const sliderBtnLeft = document.querySelector("#slider-btn-left");
const sliderBtnRight = document.querySelector("#slider-btn-right");
let activeSlide = 1;

const slidesContainer = document.querySelector("#slides");

// change buttons' target link
function changeLinksButtons(link) {
    sliderBtnLeft.setAttribute("href", `#slide-${parseInt(link.slice(-1), 10) - 1}`);
    sliderBtnRight.setAttribute("href", `#slide-${parseInt(link.slice(-1), 10) + 1}`);
}

// go to the previous image of the slider
function slideLeft(e) {
    activeSlide--;

    let link = slides[activeSlide].getAttribute("id");

    if (activeSlide <= 1) sliderBtnLeft.style.visibility = "hidden";

    if (sliderBtnRight.style.visibility == "hidden" && activeSlide < slides.length) {
        sliderBtnRight.style.visibility = "visible";
    }

    changeLinksButtons(link);
}

// go to the next image of the slider
function slideRight(e) {
    activeSlide++;

    let link = slides[activeSlide - 2].getAttribute("id");

    if (activeSlide >= slides.length) sliderBtnRight.style.visibility = "hidden";

    if (sliderBtnLeft.style.visibility == "hidden" && activeSlide > 1) {
        sliderBtnLeft.style.visibility = "visible";
    }

    changeLinksButtons(link);
}

// prepare slider when user go on the page or refresh it
window.addEventListener('load', (e) => {
    if (activeSlide <= 1) sliderBtnLeft.style.visibility = "hidden";
    if (activeSlide >= slides.length) sliderBtnRight.style.visibility = "hidden";

    let link = slides[activeSlide - 1].getAttribute("id");

    changeLinksButtons(link);
});

// trigger slideLeft/slideRight when button is clicked
sliderBtnLeft.addEventListener("click", slideLeft);
sliderBtnRight.addEventListener("click", slideRight);

// change image's scroll-snap-align css property
function changeScrollSnapAlign(value) {
    slides.forEach(slide => {
        slide.style.scrollSnapAlign = value;
    });
}

// when mouse over button, trigger the animation to show a small part of the next/previous image in the slider
function hoverEffect(cssClass, cssValue) {
    slidesContainer.classList.add(cssClass);
    changeScrollSnapAlign(cssValue);
}

// when mouse leave button, cancel the animation that show a small part of the next/previous image in the slider
function leaveHoverEffect(cssClass, cssValue) {
    slidesContainer.classList.remove(cssClass);
    changeScrollSnapAlign(cssValue);
}

// events for right button
sliderBtnRight.addEventListener("mouseover", (e) => {
    hoverEffect("right-btn-hovered", "start");
});
sliderBtnRight.addEventListener("mouseout", (e) => {
    leaveHoverEffect("right-btn-hovered", "start");
});

// events for left button
sliderBtnLeft.addEventListener("mouseover", (e) => {
    hoverEffect("left-btn-hovered", "end");
});
sliderBtnLeft.addEventListener("mouseout", (e) => {
    leaveHoverEffect("left-btn-hovered", "end");
});
