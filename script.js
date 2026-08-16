document.getElementById('year').textContent = new Date().getFullYear();

const track = document.getElementById('sliderTrack');
const prevBtn = document.querySelector('.slider-arrow-left');
const nextBtn = document.querySelector('.slider-arrow-right');

function cardStep() {
  const card = track.querySelector('.project-card');
  if (!card) return 400;
  const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || 20);
  return card.getBoundingClientRect().width + gap;
}

function updateArrows() {
  const maxScroll = track.scrollWidth - track.clientWidth - 1;
  prevBtn.disabled = track.scrollLeft <= 0;
  nextBtn.disabled = track.scrollLeft >= maxScroll;
}

if (track && prevBtn && nextBtn) {
  prevBtn.addEventListener('click', () => {
    track.scrollBy({ left: -cardStep(), behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    track.scrollBy({ left: cardStep(), behavior: 'smooth' });
  });

  track.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') track.scrollBy({ left: cardStep(), behavior: 'smooth' });
    if (e.key === 'ArrowLeft') track.scrollBy({ left: -cardStep(), behavior: 'smooth' });
  });

  track.addEventListener('scroll', updateArrows);
  window.addEventListener('resize', updateArrows);
  updateArrows();
}