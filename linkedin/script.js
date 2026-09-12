const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".recommendation-card");
const dots = document.querySelectorAll(".carousel-dot");

let current = 0;

function showSlide(index) {
  if (index < 0) {
    current = slides.length - 1;
  } else if (index >= slides.length) {
    current = 0;
  } else {
    current = index;
  }

  track.style.transform = `translateX(-${current * 100}%)`;

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === current);
  });
}

document
  .querySelector(".carousel-arrow--prev")
  .addEventListener("click", () => {
    showSlide(current - 1);
  });

document
  .querySelector(".carousel-arrow--next")
  .addEventListener("click", () => {
    showSlide(current + 1);
  });

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
  });
});


/* Touch swipe */

let startX = 0;

track.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

track.addEventListener("touchend", e => {
  const endX = e.changedTouches[0].clientX;
  const distance = endX - startX;

  if (Math.abs(distance) < 50) return;

  if (distance < 0) {
    showSlide(current + 1);
  } else {
    showSlide(current - 1);
  }
});

showSlide(0);