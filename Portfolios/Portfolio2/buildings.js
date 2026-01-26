const container = document.querySelector('.buildings-container');

// Define dark shades for realistic silhouette graphics
const colors = [
  "#0a0a0a", // very dark gray
  "#1c1c1c", // dark charcoal
  "#2e2e2e", // graphite
  "#3f3f3f", // dim gray
  "#222222", // almost black
  "#151515", // darker gray
  "#333333", // dark medium gray
  "#292929", // shadow gray
];

// Clear existing buildings if rerun
container.innerHTML = "";

// Initialize building placement x position
let currentLeft = 0;

// Calculate total target width (1.75x window innerWidth)
const targetWidth = window.innerWidth * 1.75;

while (currentLeft < targetWidth) {
  const div = document.createElement('div');
  div.classList.add('building');

  // Randomize width between 30px and 80px
  const randomWidth = Math.floor(Math.random() * 50) + 30;
  div.style.width = randomWidth + 'px';

  // Randomize height between 100px and 400px
  const randomHeight = Math.floor(Math.random() * 300) + 100;
  div.style.height = randomHeight + 'px';

  // Randomize dark color
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  div.style.backgroundColor = randomColor;

  // Optional: add slight opacity for depth
  div.style.opacity = '0.8';

  // Slight overlap: random offset between -20px to +10px
  const overlapOffset = Math.floor(Math.random() * 30) - 20;
  currentLeft += overlapOffset;

  // Set position
  div.style.position = 'absolute';
  div.style.bottom = '0';
  div.style.left = currentLeft + 'px';

  // Increment currentLeft by building width for next building
  currentLeft += randomWidth;

  container.appendChild(div);
}
