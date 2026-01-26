// Neon/cyberpunk colors
const colors = ["#00FFFF", "#FF00FF", "#8A2BE2", "#FF69B4", "#7FFF00", "#00CED1", "#9400D3", "#FF1493"];
const sizes = [4, 6, 8, 10, 12]; // 5 different sizes

function spawnCyberDot() {
    const dot = document.createElement("div");
    dot.classList.add("cyber-dot");

    const size = sizes[Math.floor(Math.random() * sizes.length)];
    dot.style.width = size + "px";
    dot.style.height = size + "px";

    const color = colors[Math.floor(Math.random() * colors.length)];
    dot.style.backgroundColor = color;
    dot.style.boxShadow = `0 0 ${size * 2}px ${color}`;

    dot.style.left = Math.random() * window.innerWidth + "px";
    dot.style.opacity = 0.7 + Math.random() * 0.3;

    const duration = 5 + Math.random() * 3;
    dot.style.animationDuration = duration + "s";

    document.body.appendChild(dot);

    // Remove dot after animation ends to avoid DOM clutter
    setTimeout(() => {
        dot.remove();
    }, duration * 1300);
}

// Spawn a dot every 200ms infinitely
setInterval(spawnCyberDot, 200);
