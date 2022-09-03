const sectionEl = document.querySelector('section');
const h1El = document.querySelector('section h1');
const allBoxes = sectionEl.querySelectorAll('.box');

let distance =
  allBoxes[4].offsetTop + allBoxes[4].offsetHeight - window.innerHeight;
//   default position: top
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

let relativePosition;

let max = document.documentElement.offsetHeight - window.innerHeight;

window.addEventListener('scroll', () => {
  let scrollY = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollY <= distance) return;

  // get the current box in the bottom place
  let index = parseInt((scrollY - distance) / 232) + 4;
  if (scrollY > relativePosition) {
    // slide down
    if (index & 1) {
      allBoxes[index].classList.remove('right-slide');
    } else {
      allBoxes[index].classList.remove('left-slide');
    }
  } else if (scrollY < relativePosition) {
    //slide up
    if (index & 1) {
      allBoxes[index].classList.add('right-slide');
    } else {
      allBoxes[index].classList.add('left-slide');
    }
  }
  
  if (scrollY <= max) relativePosition = scrollY;
});
