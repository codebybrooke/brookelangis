// small utility for animated reveals
function revealOnScroll() {
  document.querySelectorAll('.animate').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < (window.innerHeight - 80)) {
      el.classList.add('inview');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', () => {
  revealOnScroll();
  document.getElementById('year').textContent = new Date().getFullYear();
});

// simple mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navList = document.querySelector('.nav-list');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navList.classList.toggle('show');
  });
}

// resume download fallback: if resume.pdf not found, show a small note
function checkResumeLink() {
  const resumeAnchor = document.getElementById('resumeLink');
  if (!resumeAnchor) return;
  // We'll try to fetch resume.pdf to confirm presence (same-origin)
  fetch('resume.pdf', { method: 'HEAD' })
    .then(r => {
      if (!r.ok) {
        // show a tooltip-like hint by changing href to # and appending info
        resumeAnchor.href = '#';
        resumeAnchor.addEventListener('click', (e) => {
          e.preventDefault();
          alert('Resume file not found in the repository root. Upload a file named "resume.pdf" to the repository root or edit the link in index.html to match your resume filename.');
        });
      }
    }).catch(_ => {
      // network or blocked -> do nothing
    });
}
window.addEventListener('load', checkResumeLink);
