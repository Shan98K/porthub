document.addEventListener("DOMContentLoaded", () => {
  const bgContainer = document.querySelector(".selectionBox .connectingBg");
  if (!bgContainer) return;

  let numBoxes = 10; 
  if (window.innerWidth > 1100) {
    numBoxes = 30;
  } else if (window.innerWidth > 550) {
    numBoxes = 20;
  }

  const placed = [];

  for (let i = 0; i < numBoxes; i++) {
    const box = document.createElement("div");
    box.classList.add("randomBox");

    // size 100–200 px
    const width = Math.floor(Math.random() * 101) + 100;
    const height = Math.random() < 0.7 ? width : Math.floor(Math.random() * 101) + 100;

    box.style.width = width + "px";
    box.style.height = height + "px";
    box.style.position = "absolute";

    // --- placement with larger area (120vw / 120vh in percent) ---
    let top, left, tries = 0, tooClose;
    do {
      tooClose = false;
      top = Math.floor(Math.random() * 120) - 10;  // -10% to 110% (extra bleed)
      left = Math.floor(Math.random() * 120) - 10; // -10% to 110%
      for (let pos of placed) {
        if (Math.abs(pos.top - top) < 15 && Math.abs(pos.left - left) < 15) {
          tooClose = true;
          break;
        }
      }
      tries++;
    } while (tooClose && tries < 50);

    placed.push({ top, left });
    box.style.top = top + "%";
    box.style.left = left + "%";

    // random grey
    const greys = [
      "rgba(50, 50, 50, 0.2)",
      "rgba(100, 100, 100, 0.2)",
      "rgba(150, 150, 150, 0.2)",
      "rgba(200, 200, 200, 0.2)",
      "rgba(230, 230, 230, 0.2)"
    ];
    box.style.background = greys[Math.floor(Math.random() * greys.length)];

    box.style.border = "1px solid rgba(0, 0, 0, 0.25)";
    box.style.borderRadius = "8px";

    // floating animation
    const duration = Math.floor(Math.random() * 6) + 4;
    const delay = Math.floor(Math.random() * 5);
    box.style.setProperty("--rand-x", Math.random());
    box.style.setProperty("--rand-y", Math.random());
    box.style.animation = `float ${duration}s ease-in-out ${delay}s infinite alternate`;

    bgContainer.appendChild(box);
  }
});
