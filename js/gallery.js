/* ============================================
   GALLERY FILTERS + LIGHTBOX
   ============================================ */

// Filter buttons
const filterButtons = document.querySelectorAll('.filter-btn');
const galleryTiles = document.querySelectorAll('.gallery-tile');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Toggle active state
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    galleryTiles.forEach(tile => {
      if (filter === 'all' || tile.getAttribute('data-category') === filter) {
        tile.classList.remove('hidden');
      } else {
        tile.classList.add('hidden');
      }
    });
  });
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.querySelector('.lightbox-close');

galleryTiles.forEach(tile => {
  tile.addEventListener('click', () => {
    const placeholder = tile.querySelector('.placeholder');
    if (!placeholder) return;

    const bgImage = window.getComputedStyle(placeholder).backgroundImage;
    // Only open lightbox if a real image is loaded (not default placeholder)
    if (bgImage && bgImage !== 'none' && !bgImage.includes('none')) {
      const url = bgImage.slice(5, -2); // strip url(" and ")
      lightboxImg.src = url;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    } else {
      // Demo mode — show placeholder text in a styled way
      const label = placeholder.querySelector('.placeholder-label');
      if (label) {
        alert('Image placeholder: ' + label.textContent + '\n\nReal photo will display here when added to /images/ folder.');
      }
    }
  });
});

function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}

if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
if (lightbox) {
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});
