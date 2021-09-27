let slidePosition = 0;
const slides = document.querySelectorAll(".carousel_item");
const totalSlides = slides.length;

document
  .querySelector("#carousel_button--next")
  .addEventListener("click", function () {
    moveToNextSlide();
  });

document
  .querySelector("#carousel_button--prev")
  .addEventListener("click", function () {
    moveToPrevSlide();
  });

function updateSlidePosition(a) {
  if (slidePosition === 0 && a === -1) {
    slides[totalSlides - 1].classList.remove("carousel_item--visible");
    slides[totalSlides - 1].classList.add("carousel_item--hidden");
  } else if (slidePosition + 1 == totalSlides && a === 1) {
    slides[0].classList.remove("carousel_item--visible");
    slides[0].classList.add("carousel_item--hidden");
  } else {
    slides[slidePosition + a].classList.remove("carousel_item--visible");
    slides[slidePosition + a].classList.add("carousel_item--hidden");
  }
  slides[slidePosition].classList.add("carousel_item--visible");
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updateSlidePosition(-1);
}
function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }
  updateSlidePosition(1);
}
