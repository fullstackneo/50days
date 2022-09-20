let pics = document.querySelector('.pics');

let count = 0;

// change slider automatically
setInterval(() => {
  pics.style.transform = `translateX(${-500 * count}px)`;

  count++;
  if (count >= 4) {
    count = 0;
  }
}, 1000);

// change slider manually
let changeSlider = value => {
  if (count === 0 && value < 0) {
    count = 3;
  } else if (count >= 3 && value > 0) {
    count = 0;
  } else {
    count += value;
  }

  pics.style.transform = `translateX(${-500 * count}px)`;
};
