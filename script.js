const rocket = document.querySelector('.rocket');
const bulletContainer = document.querySelector('.bullet-container');

// Rocket horizontal movement
document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const windowWidth = window.innerWidth;

    const rocketHalf = rocket.offsetWidth / 2;
    let x = Math.min(Math.max(mouseX, rocketHalf), windowWidth - rocketHalf);

    rocket.style.transform = `translateX(${x - windowWidth/2}px)`;
});

// Rocket shoots bullets upward periodically
setInterval(() => {
    const rocketRect = rocket.getBoundingClientRect();
    const bullet = document.createElement('div');
    bullet.classList.add('bullet');
    bullet.style.left = rocketRect.left + rocketRect.width/2 - 3 + 'px';
    bullet.style.top = rocketRect.top + 'px';
    document.body.appendChild(bullet);

    let bulletY = rocketRect.top;
    const interval = setInterval(() => {
        bulletY -= 8; // speed
        bullet.style.top = bulletY + 'px';
        if (bulletY < -20) {
            bullet.remove();
            clearInterval(interval);
        }
    }, 16);
}, 300); // fires every 0.3 seconds
