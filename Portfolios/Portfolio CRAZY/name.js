const firstName = "Harsh";
const finalName = "Shan98K";
const nameElement = document.getElementById("nameText");
let charIndex = 0;
function typeFirst() {
    if (charIndex < firstName.length) {
        nameElement.textContent += firstName.charAt(charIndex);
        charIndex++;
        setTimeout(typeFirst, 200); // typing speed
    } else {
        setTimeout(deleteFirst, 1000); // pause before deleting
    }
}
function deleteFirst() {
    if (charIndex > 0) {
        nameElement.textContent = firstName.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteFirst, 100); // deleting speed
    } else {
        setTimeout(typeFinal, 500); // pause before final name
    }
}
let finalIndex = 0;
function typeFinal() {
    if (finalIndex < finalName.length) {
        nameElement.textContent += finalName.charAt(finalIndex);
        finalIndex++;
        setTimeout(typeFinal, 200); // typing speed
    }
}
toggleBtn.addEventListener("click", () => {
    typeFirst();
});