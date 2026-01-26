const toggleBtn = document.querySelector('.aboutToggle');
const aboutBox = document.querySelector('.aboutBox');

function closeAbout() {
  toggleBtn.classList.remove('activate');
  aboutBox.classList.remove('activate');
}

toggleBtn.addEventListener('click', (e) => {
  e.stopPropagation(); // stop bubbling so it won’t instantly close
  toggleBtn.classList.toggle('activate');
  aboutBox.classList.toggle('activate');
});

// Close when clicking outside
document.addEventListener('click', (e) => {
  if (!aboutBox.contains(e.target) && !toggleBtn.contains(e.target)) {
    closeAbout();
  }
});

// Close when scrolling outside the aboutBox
document.addEventListener('scroll', (e) => {
  if (!aboutBox.contains(e.target) && !toggleBtn.contains(e.target)) {
    closeAbout();
  }
}, true); // capture phase so it catches all scrolls
