const canvas = document.getElementById('laser-bg');
const ctx = canvas.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

const spacing = 20; // gap between lines
const lineWidth = 0.2;
const linesBeforeRemove = 2.5; // disappear after 2 new lines

ctx.lineWidth = lineWidth;
ctx.strokeStyle = 'rgba(0, 255, 0, 0.65)';

// Queues to manage vertical and horizontal lines
let verticalQueue = [];
let horizontalQueue = [];

// Track all active lines
let activeVertical = [];
let activeHorizontal = [];

// Indices for next line to add
let nextVertical = 0;
let nextHorizontal = 0;

// Frame counters to slow down line addition
let frameCount = 0;
const addLineEvery = 6; // add a new line every 5 frames

// Precompute line positions
function initQueues() {
    verticalQueue = [];
    horizontalQueue = [];
    for (let x = 0; x < width; x += spacing) verticalQueue.push(x);
    for (let y = 0; y < height; y += spacing) horizontalQueue.push(y);
    nextVertical = 0;
    nextHorizontal = 0;
    activeVertical = [];
    activeHorizontal = [];
}

initQueues();

function animate() {
    frameCount++;

    // Fade background slightly to show movement
    ctx.fillStyle = 'rgba(0,0,0,0.07)';
    ctx.fillRect(0, 0, width, height);

    // Add next vertical line slower
    if (frameCount % addLineEvery === 0) {
        if (nextVertical < verticalQueue.length) {
            activeVertical.push({x: verticalQueue[nextVertical]});
            nextVertical++;
        } else {
            nextVertical = 0; // loop infinitely
        }

        // Add next horizontal line slower
        if (nextHorizontal < horizontalQueue.length) {
            activeHorizontal.push({y: horizontalQueue[nextHorizontal]});
            nextHorizontal++;
        } else {
            nextHorizontal = 0; // loop infinitely
        }
    }

    // Draw vertical lines
    activeVertical.forEach(line => {
        ctx.beginPath();
        ctx.moveTo(line.x, 0);
        ctx.lineTo(line.x, height);
        ctx.stroke();
    });

    // Draw horizontal lines
    activeHorizontal.forEach(line => {
        ctx.beginPath();
        ctx.moveTo(0, line.y);
        ctx.lineTo(width, line.y);
        ctx.stroke();
    });

    // Remove vertical lines after 5 new lines appear
    if (activeVertical.length > linesBeforeRemove) activeVertical.shift();

    // Remove horizontal lines after 5 new lines appear
    if (activeHorizontal.length > linesBeforeRemove) activeHorizontal.shift();

    requestAnimationFrame(animate);
}

// Handle resize
window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    initQueues();
});

animate();
