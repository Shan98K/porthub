const container = document.querySelector('.lineFaded');
const screenWidth = window.innerWidth;

// how many rows fit in the container height (200px here)
const rowHeight = 40; // adjust to control row spacing
const rows = Math.floor(container.offsetHeight / rowHeight);

for (let r = 0; r < rows; r++) {
  let currentWidth = 0;

  while (currentWidth < screenWidth * 1.5) { // fill 150vw
    const w = Math.floor(Math.random() * 50) + 50; // width 50–100px
    const h = Math.floor(Math.random() * 30) + 10;  // height 10–15px

    const div = document.createElement('div');
    div.classList.add('line');
    div.style.width = w + "px";
    div.style.height = h + "px";
    div.style.marginTop = (r * rowHeight) + "px"; // push to its row

    container.appendChild(div);
    currentWidth += w + 8;
  }
}
