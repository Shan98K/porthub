const toggleBtn = document.getElementById("toggleBtn");
const itemBox = document.querySelector(".itemBox");

// Toggle on button click
toggleBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  itemBox.classList.toggle("activate");
  toggleBtn.classList.toggle("activeBtn");
});

// Close when clicking outside
document.addEventListener("click", (e) => {
  if (!toggleBtn.contains(e.target) && !itemBox.contains(e.target)) {
    itemBox.classList.remove("activate");
    toggleBtn.classList.remove("activeBtn");
  }
});

// Close when scrolling
window.addEventListener("scroll", () => {
  itemBox.classList.remove("activate");
  toggleBtn.classList.remove("activeBtn");
});
