// Select the celestial object (sun/moon)
const celestial = document.querySelector('.celestial');

// Start with the 'sun' class
celestial.classList.add('sun');

// Function to toggle between sun and moon
function toggleCelestial() {
  celestial.classList.toggle('sun');
  celestial.classList.toggle('moon');
}

// Sync toggle with the end of each orbit animation cycle
celestial.addEventListener('animationiteration', toggleCelestial);