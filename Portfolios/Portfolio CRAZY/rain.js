const toggleBtn = document.querySelector(".toggle-Button");

function spawnRain(count, delay = 100, stopAfter = 10000) {
  let i = 0;
  let spawnInterval = setInterval(() => {
    if (i >= count) {
      clearInterval(spawnInterval);
      return;
    }
    let drop = document.createElement("div");
    drop.classList.add("rain");
    drop.style.left = Math.random() * window.innerWidth + "px";
    drop.style.animationDuration = (0.4 + Math.random() * 0.5) + "s"; // fast only
    drop.style.opacity = Math.random();
    drop.style.height = 10 + Math.random() * 20 + "px";
    document.body.appendChild(drop);
    i++;
  }, delay);

  // ⏸️ After `stopAfter` → pause all rain in place
  setTimeout(() => {
    clearInterval(spawnInterval); // stop creating new drops
    document.querySelectorAll(".rain").forEach(drop => {
      drop.style.animationPlayState = "paused"; // freeze in place
    });
  }, stopAfter);
}

toggleBtn.addEventListener("click", () => {
  setTimeout(() => {
    // First drizzle (10 drops, spaced out)
    spawnRain(10, 200, 5800); // lasts until 10s

    // After 3.2s → start heavy rain (100 drops)
    setTimeout(() => {
      spawnRain(50, 50, 5800); // also lasts until 10s
    }, 1600);
  }, 4800);
});