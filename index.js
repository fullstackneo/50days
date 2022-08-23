let progress = document.querySelector('.progress-bar');
let allProgress = document.querySelectorAll('.progress-bar .progress');
let allFills = document.querySelectorAll('.connecter .fill');
let prevBtn = document.querySelector('.prev');
let nextBtn = document.querySelector('.next');

allProgress[0].style.backgroundColor = '#3498db';

const increment = () => {
  if (progress.dataset.cur === '1') {
    prevBtn.className = 'prev btn-active';
  }
  if (progress.dataset.cur < 4) {
    progress.dataset.cur++;
    if (progress.dataset.cur === '4') {
      nextBtn.className = 'next btn-inactive';
    }
    allProgress[progress.dataset.cur - 1].style.backgroundColor = '#3498db';
    allFills[progress.dataset.cur - 2].classList.toggle('fill-full');
  }
};

const decrease = () => {
  if (progress.dataset.cur === '4') {
    nextBtn.className = 'next btn-active';
  }

  if (progress.dataset.cur > 1) {
    progress.dataset.cur--;
    if (progress.dataset.cur === '1') {
      prevBtn.className = 'prev btn-inactive';
    }
    allProgress[progress.dataset.cur].style.backgroundColor = '#e0e0e0';
    allFills[progress.dataset.cur - 1].classList.toggle('fill-full');
  }
};

prevBtn.addEventListener('click', decrease);
nextBtn.addEventListener('click', increment);
