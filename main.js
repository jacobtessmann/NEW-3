const slides = document.querySelectorAll('.slideshow figure');
let current = 0;
let timer;

function next() {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}

function restart() {
  clearInterval(timer);
  timer = setInterval(next, 1000);
}

document.querySelector('.slideshow').addEventListener('click', () => { next(); restart(); });
restart();

const cv = document.getElementById('cv');

document.getElementById('cv-toggle').addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  cv.hidden = !cv.hidden;
});

document.addEventListener('click', (e) => {
  if (!cv.contains(e.target)) cv.hidden = true;
});
