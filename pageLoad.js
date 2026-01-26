document.addEventListener("DOMContentLoaded", () => {
  const lines = document.querySelectorAll(".loader-lines .line");
  const app = document.querySelector(".app"); // your main content

  // Hide content initially
  gsap.set(app, { opacity: 0 });

  const minLoaderTime = 1500;
  const loaderStartTime = Date.now();

  // Animate loader lines
  gsap.to(lines, {
    scaleY: 0.1,
    duration: 0.4,
    yoyo: true,
    repeat: -1,
    ease: "power1.inOut",
    stagger: { each: 0.1, yoyo: true, repeat: -1 }
  });

  window.addEventListener("load", () => {
    const elapsed = Date.now() - loaderStartTime;
    const remaining = Math.max(minLoaderTime - elapsed, 0);

    setTimeout(() => {
      // Create a timeline for fade-out + content fade-in
      const tl = gsap.timeline();

      tl.to("#loader", {
        opacity: 0,
        duration: 0.3,
        ease: "power1.out",
        onComplete: () => {
          document.getElementById("loader").style.display = "none";
        }
      })
      .to(app, {
        opacity: 1,
        duration: 0.5,
        ease: "power1.out"
      }, "-=0.1"); // slight overlap for smooth transition
    }, remaining);
  });
});
