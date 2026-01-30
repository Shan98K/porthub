// ====== JS: tiny sprinkles only ======

// 1) Dynamic year
document.getElementById("year").textContent = new Date().getFullYear();

// 2) Theme toggle (persist)
const themeBtn = document.getElementById("themeBtn");
const preferDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const saved = localStorage.getItem("theme");
if (saved) {
  document.documentElement.setAttribute("data-theme", saved);
} else {
  document.documentElement.setAttribute(
    "data-theme",
    preferDark ? "dark" : "light",
  );
}
themeBtn.addEventListener("click", () => {
  const next =
    document.documentElement.getAttribute("data-theme") === "dark"
      ? "light"
      : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

// 3) Float big bubbles with varied transparency & sizes
const bubbleRoot = document.getElementById("bubbles");
const bubbleCount = 14;
for (let i = 0; i < bubbleCount; i++) {
  const b = document.createElement("span");
  b.className = "bubble";
  const size = Math.random() * 220 + 120; // 120–340px (bigger)
  const left = Math.random() * 100; // vw
  const delay = Math.random() * -30; // start at random spot
  const dur = Math.random() * 18 + 18; // 18–36s
  const op = Math.random() * 0.35 + 0.08; // varied transparency .08–.43
  b.style.width = size + "px";
  b.style.height = size + "px";
  b.style.left = left + "vw";
  b.style.bottom = -Math.random() * 40 + "vh";
  b.style.opacity = op;
  b.style.setProperty("--s", (Math.random() * 0.6 + 0.8).toFixed(2));
  b.style.animationDuration = dur + "s";
  b.style.animationDelay = delay + "s";
  bubbleRoot.appendChild(b);
}

// 4) Simple scroll-reveal
const observer = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.animate(
          [
            { opacity: 0, transform: "translateY(10px)" },
            { opacity: 1, transform: "none" },
          ],
          { duration: 500, easing: "ease-out", fill: "forwards" },
        );
        observer.unobserve(e.target);
      }
    }
  },
  { threshold: 0.12 },
);
document
  .querySelectorAll(".card, .pill, .step")
  .forEach((el) => observer.observe(el));

// 5) Form: mailto fallback with encoded body
function sendMail(form) {
  const data = new FormData(form);
  const name = data.get("name");
  const email = data.get("email");
  const subject = data.get("subject") || "New message";
  const message = data.get("message") || "";
  const body = encodeURIComponent(
    `Hey Harsh,\n\n${message}\n\n— ${name} (${email})`,
  );
  window.location.href = `mailto:harshraj@example.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  return false; // prevent default submit
}
