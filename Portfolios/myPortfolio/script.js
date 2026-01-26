document.addEventListener("DOMContentLoaded", () => {

    // After 8 seconds → hide intro + disable clicks
    setTimeout(() => {
        const intro = document.querySelector(".intro");
        if (intro) intro.style.display = "none";

        document.body.style.pointerEvents = "none";
    }, 8000);

    // After the same 8 seconds → enable clicks again
    setTimeout(() => {
        document.body.style.pointerEvents = "auto";
    }, 8000);

});