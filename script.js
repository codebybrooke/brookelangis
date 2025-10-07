const rocket = document.querySelector('.rocket');
const bulletContainer = document.querySelector('.bullet-container');

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top < window.innerHeight && rect.bottom >= 0
    );
}

document.addEventListener('mousemove', (e) => {
    if (isInViewport(rocket)) {
        const mouseX = e.clientX;
        const rocketHalf = rocket.offsetWidth / 2;
        let x = Math.min(Math.max(mouseX, rocketHalf), window.innerWidth - rocketHalf);
        rocket.style.transform = `translateX(${x}px)`;
    }
});

setInterval(() => {
    if (isInViewport(rocket)) {
        const rocketRect = rocket.getBoundingClientRect();
        const bullet = document.createElement('div');
        bullet.classList.add('bullet');
        bullet.style.left = rocketRect.left + rocketRect.width / 2 - 3 + 'px';
        bullet.style.top = rocketRect.top + 'px';
        document.body.appendChild(bullet);

        let bulletY = rocketRect.top;
        const interval = setInterval(() => {
            bulletY -= 8;
            bullet.style.top = bulletY + 'px';
            if (bulletY < -20) {
                bullet.remove();
                clearInterval(interval);
            }
        }, 16);
    }
}, 300);
