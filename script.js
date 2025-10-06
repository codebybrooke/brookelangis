const rocket = document.querySelector('.rocket');

document.addEventListener('mousemove', (e) => {
    const windowHeight = window.innerHeight;
    const mouseY = e.clientY;

    // Calculate rocket vertical position
    const rocketBottom = 20; // bottom margin in px
    const maxHeight = windowHeight - rocket.offsetHeight - rocketBottom;

    // Rocket follows mouse vertically
    const newY = Math.min(Math.max(mouseY, 0), maxHeight);

    rocket.style.transform = `translate(-50%, -${windowHeight - newY - rocket.offsetHeight - rocketBottom}px)`;
});
