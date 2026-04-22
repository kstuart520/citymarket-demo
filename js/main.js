/* ============================================
   CITY MARKET BBQ — main.js
   Mobile nav + auto-swap placeholders with real images
   ============================================ */

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
  });

  // Close menu when clicking a link
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('open');
    });
  });
}

/* ============================================
   AUTO-SWAP PLACEHOLDERS WITH REAL IMAGES
   When you drop a file into /images/ that matches
   a placeholder's data-img attribute, it'll auto-load.
   ============================================ */
document.querySelectorAll('[data-img]').forEach(el => {
  const filename = el.getAttribute('data-img');
  if (!filename) return;

  const testImg = new Image();
  testImg.onload = () => {
    // Image exists — swap it in
    el.style.backgroundImage = `url('images/${filename}')`;
    el.style.backgroundSize = 'cover';
    el.style.backgroundPosition = 'center';
    el.style.border = 'none';
    const label = el.querySelector('.placeholder-label');
    if (label) label.style.display = 'none';
    const hint = el.querySelector('::before');
    el.classList.add('img-loaded');
  };
  testImg.onerror = () => {
    // Image doesn't exist yet — placeholder stays. No action needed.
  };
  testImg.src = `images/${filename}`;
});

// Optional: Reveal-on-scroll for hero
const heroContent = document.querySelector('.hero-content');
if (heroContent) {
  heroContent.style.opacity = '0';
  heroContent.style.transform = 'translateY(20px)';
  requestAnimationFrame(() => {
    heroContent.style.transition = 'opacity 0.9s ease, transform 0.9s ease';
    heroContent.style.opacity = '1';
    heroContent.style.transform = 'translateY(0)';
  });
}
