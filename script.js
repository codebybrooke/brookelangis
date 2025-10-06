const rocket = document.querySelector('.rocket');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const windowWidth = window.innerWidth;

    // Move rocket horizontally only
    const rocketHalf = rocket.offsetWidth / 2;
    let x = Math.min(Math.max(mouseX, rocketHalf), windowWidth - rocketHalf);

    rocket.style.transform = `translateX(${x - windowWidth/2}px)`;
});
