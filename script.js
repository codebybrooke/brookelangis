const rocket = document.getElementById('rocket');
const sections = document.querySelectorAll('.section');

let lastShotTime = 0;
const fireRate = 300; // ms between bullets

document.addEventListener('mousemove', (e) => {
  // Move rocket horizontally
  rocket.style.left = e.clientX - rocket.offsetWidth / 2 + 'px';

  const now = Date.now();
  if (now - lastShotTime < fireRate) return;
  lastShotTime = now;

  // Create bullet
  const bullet = document.createElement('div');
  bullet.classList.add('bullet');

  const rocketRect = rocket.getBoundingClientRect();
  const scrollY = window.scrollY || window.pageYOffset;

  bullet.style.left = rocketRect.left + rocket.offsetWidth / 2 - 3 + 'px';
  bullet.style.top = rocketRect.top + scrollY + 'px';
  document.body.appendChild(bullet);

  let velocity = -10; // upward speed
  let hasBounced = false;

  const bulletInterval = setInterval(() => {
    const top = parseFloat(bullet.style.top);
    const newTop = top + velocity;

    // Check collision with each section
    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const secTop = rect.top + scrollY;

      // Only bounce once per bullet
      if (!hasBounced && newTop <= secTop + section.offsetHeight && newTop >= secTop) {
        velocity = -velocity * 0.5; // bounce slower
        hasBounced = true;
      }
    });

    bullet.style.top = newTop + 'px';

    // Remove bullet if off-screen
    if (newTop < -20 || newTop > window.innerHeight + scrollY) {
      bullet.remove();
      clearInterval(bulletInterval);
    }
  }, 20);
});
