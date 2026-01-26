// To get from Intro Ending to the next main page

window.addEventListener("DOMContentLoaded", () => {
    const intro = document.querySelector(".bop");

    // Listen for the zoomOut animation to finish
    intro.addEventListener("animationend", (e) => {
        if (e.animationName === "zoomOut") {
            window.location.href = "nextpage.html";
        }
    });
});

// Scroll Effect from .navopts to .page{1,2,3}

document.querySelector('.top').addEventListener('click', () => {
    document.getElementById('page1').scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('.about').addEventListener('click', () => {
    document.getElementById('page2').scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('.details').addEventListener('click', () => {
    document.getElementById('page3').scrollIntoView({ behavior: 'smooth' });
});