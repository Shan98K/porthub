const container = document.querySelector(".aboutContainer");
const items = document.querySelectorAll(".about");

function updateActive() {
  let containerRect = container.getBoundingClientRect();
  let containerCenter = containerRect.left + containerRect.width / 2;

  let closestItem = null;
  let closestDistance = Infinity;
  let closestIndex = -1;

  items.forEach((item, index) => {
    let rect = item.getBoundingClientRect();
    let itemCenter = rect.left + rect.width / 2;
    let distance = Math.abs(containerCenter - itemCenter);

    if (distance < closestDistance) {
      closestDistance = distance;
      closestItem = item;
      closestIndex = index;
    }
  });

  // reset all
  items.forEach((item) => item.classList.remove("upFront", "adjacent"));

  if (closestItem) {
    closestItem.classList.add("upFront");

    // mark neighbors
    if (closestIndex > 0) items[closestIndex - 1].classList.add("adjacent");
    if (closestIndex < items.length - 1) items[closestIndex + 1].classList.add("adjacent");
  }
}

container.addEventListener("scroll", () => {
  requestAnimationFrame(updateActive);
});

// run once on load
updateActive();