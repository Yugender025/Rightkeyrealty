//opennewtab
function openInNewTab(imgSrc) {
  window.open(imgSrc, "_blank");
}
// Optional: Add keyboard accessibility
document.querySelectorAll(".carousel img").forEach((img) => {
  img.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      openInNewTab(img.src);
    }
  });
  img.setAttribute("tabindex", "0");
  img.setAttribute("role", "button");
  img.setAttribute("aria-label", `Open ${img.alt} in new tab`);
});

let currentSlide = 0;
const slider = document.querySelector(".testimonals_clients");
const slides = document.querySelectorAll(".testimonal1");
const slideCount = slides.length;

function updateSliderPosition() {
  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth <= 1200;
  let slideWidth;

  if (isMobile) {
    slideWidth = 100;
  } else if (isTablet) {
    slideWidth = 50; // Show 2 testimonials
  } else {
    slideWidth = 52; // Show 2.5 testimonials
  }

  slider.style.transform = `translateX(-${currentSlide * slideWidth}%)`;
}

function next() {
  const isMobile = window.innerWidth <= 768;
  const isTablet = window.innerWidth <= 1200;
  let maxSlides;

  if (isMobile) {
    maxSlides = slideCount - 1;
  } else if (isTablet) {
    maxSlides = slideCount - 2;
  } else {
    maxSlides = slideCount - 2;
  }

  if (currentSlide < maxSlides) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  updateSliderPosition();
}

function prev() {
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    const isMobile = window.innerWidth <= 768;
    const isTablet = window.innerWidth <= 1200;

    if (isMobile) {
      currentSlide = slideCount - 1;
    } else if (isTablet) {
      currentSlide = slideCount - 2;
    } else {
      currentSlide = slideCount - 2;
    }
  }
  updateSliderPosition();
}

// Initialize slider
function initSlider() {
  updateSliderPosition();
}

// Add event listeners
document.addEventListener("DOMContentLoaded", () => {
  initSlider();
  document.querySelector(".next_btn").addEventListener("click", next);
  document.querySelector(".prev_btn").addEventListener("click", prev);
});

window.addEventListener("resize", updateSliderPosition);
