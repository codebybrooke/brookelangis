const rocket = document.querySelector('.rocket');

document.addEventListener('mousemove', (e) => {
    const mouseY = e.clientY;
    const windowHeight = window.innerHeight;

    // Offset from bottom
    const rocketBottom = 20;

    // Calculate vertical position
    let y = windowHeight - rocketBottom - rocket.offsetHeight;
    y = y - (windowHeight - mouseY);

    rocket.style.transform = `translate(-50%, ${y}px)`;
});

