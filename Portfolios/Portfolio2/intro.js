const text = document.querySelector('.percentage-text');
let count = 0;
const duration = 2000; // animation duration (2 seconds)
const interval = 20;   // update every 20ms
const delay = 2000;    // delay before starting (2 seconds)

const step = () => {
  count += 100 / (duration / interval);
  if (count >= 100) {
    count = 100;
    clearInterval(counter);
    text.textContent = Math.round(count) + '%';
    text.style.fill = 'white'; // change text color to white at end

    // ➡️ Wait 0.5s before redirecting
    setTimeout(() => {
      window.location.href = 'main.html';
    }, 300); // 500ms = 0.5 seconds
  } else {
    text.textContent = Math.round(count) + '%';
  }
}

let counter;

// ➡️ Add delay before starting counter
setTimeout(() => {
  counter = setInterval(step, interval);
}, delay);
