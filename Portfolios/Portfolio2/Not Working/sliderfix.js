let scrollContainer = document.getElementById("scrollContainer");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");


window.addEventListener("DOMContentLoaded", () => {
  // Scroll to the "Frontend Developer" section (index 2)
  setTimeout(() => {
    scrollContainer.scrollTo({ left: scrollContainer.offsetWidth * 2, behavior: "smooth" });
  }, 100);
});


scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
  scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", () => {
  scrollContainer.scrollLeft -= 900;
});