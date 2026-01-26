const scrollContainer = document.getElementById("scrollContainer");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

window.addEventListener("DOMContentLoaded", () => {
  // Scroll to the "Frontend Developer" section (index 2)
  setTimeout(() => {
    scrollContainer.scrollTo({ left: scrollContainer.offsetWidth * 2, behavior: "smooth" });
  }, 100);

  // Mouse wheel horizontal scroll
  scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollBy({ left: evt.deltaY, behavior: "smooth" });
  });
});

nextBtn.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: scrollContainer.offsetWidth, behavior: "smooth" });
});

backBtn.addEventListener("click", () => {
  scrollContainer.scrollBy({ left: -scrollContainer.offsetWidth, behavior: "smooth" });
});

function goBack() {
  window.location.href = "main.html";
}
