let barEl = document.querySelector('.bar');
let rangeSlider = document.querySelector('.range-slider');
let circleEl = rangeSlider.querySelector('.circle');
let boardEl = rangeSlider.querySelector('.board');

// update circle's position
let updatePosition = e => {
  let posX;
  let offsetX = barEl.offsetLeft;
  if (e.pageX) {
    posX = e.pageX - offsetX;
  } else if (e.clientX) {
    posX = e.clientX + document.documentElement.scrollLeft + document.body.scrollLeft - offsetX;
  }

  if (posX < 0) {
    posX = 0;
  } else if (posX > 370) {
    posX = 370;
  }

  circleEl.style.left = posX + 'px';
  boardEl.textContent = parseInt(posX / 3.7);
};

circleEl.addEventListener('mousedown', () => {
  window.addEventListener('mousemove', updatePosition);

  window.addEventListener('mouseup', () => window.removeEventListener('mousemove', updatePosition), { once: true });
});


barEl.addEventListener('click', updatePosition);
