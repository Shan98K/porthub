window.addEventListener("DOMContentLoaded", () => {
  // Scroll to the "Frontend Developer" section (index 2)
  setTimeout(() => {
    scrollContainer.scrollTo({ left: scrollContainer.offsetWidth * 2, behavior: "smooth" });
  }, 100);
});