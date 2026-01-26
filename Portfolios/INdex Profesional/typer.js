const words = ["Harsh Raj", "Shan98K"]; 
let i = 0; 
let j = 0; 
let isDeleting = false;
const typingSpeed = 100; // typing speed (ms per letter)
const pauseTime = 800;   // pause before deleting
const target = document.getElementById("typer");

function type() {
  const current = words[i];
  
  if (!isDeleting) {
    target.textContent = current.substring(0, j + 1);
    j++;
    if (j === current.length) {
      isDeleting = true;
      setTimeout(type, pauseTime);
      return;
    }
  } else {
    target.textContent = current.substring(0, j - 1);
    j--;
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % words.length;
    }
  }
  setTimeout(type, typingSpeed);
}

type();