document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("imageModal");
  const seeAllBtn = document.querySelector(".seeAllcontainer");
  const closeBtn = document.querySelector(".close-btn");
  const carousel = document.getElementById("imageCarousel");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  // Modal open/close with animation timing
  seeAllBtn.addEventListener("click", () => {
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
  });

  function closeModal() {
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // Carousel navigation
  prevBtn.addEventListener("click", () => {
    carousel.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  });

  nextBtn.addEventListener("click", () => {
    carousel.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  });

  // Drag to scroll
  let isDown = false;
  let startX;
  let scrollLeft;

  carousel.addEventListener("mousedown", (e) => {
    isDown = true;
    carousel.style.cursor = "grabbing";
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });

  carousel.addEventListener("mouseleave", () => {
    isDown = false;
    carousel.style.cursor = "grab";
  });

  carousel.addEventListener("mouseup", () => {
    isDown = false;
    carousel.style.cursor = "grab";
  });

  carousel.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 2;
    carousel.scrollLeft = scrollLeft - walk;
  });

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (!modal.classList.contains("show")) return;

    if (e.key === "Escape") {
      closeModal();
    }
    if (e.key === "ArrowLeft") {
      carousel.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
    if (e.key === "ArrowRight") {
      carousel.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  });
});
