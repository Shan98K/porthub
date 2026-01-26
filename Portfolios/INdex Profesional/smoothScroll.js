function smoothScrollTo(targetY, duration = 600) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  let startTime = null;

  function animation(currentTime) {
    if (!startTime) startTime = currentTime;
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);

    // ease-in-out curve
    const ease = progress < 0.5
      ? 2 * progress * progress
      : -1 + (4 - 2 * progress) * progress;

    window.scrollTo(0, startY + distance * ease);

    if (elapsed < duration) requestAnimationFrame(animation);
  }

  requestAnimationFrame(animation);
}

document.querySelectorAll('.itemBox a').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href");

    if (targetId === "#" || targetId === "#pageA") {
      smoothScrollTo(0); // go to top
    } else {
      const section = document.querySelector(targetId);
      if (section) {
        const top = section.offsetTop;
        smoothScrollTo(top);
      }
    }
  });
});
