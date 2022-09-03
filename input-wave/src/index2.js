let formEl = document.querySelector('.form');
let allInput = formEl.querySelectorAll('input');
let passwordEl = formEl.querySelector('.password');

allInput[0].addEventListener('focus', () => {
  slideUp(allInput[0].nextElementSibling, true);
  slideUp(allInput[1].nextElementSibling, false);
});

allInput[0].addEventListener('blur', () => {
  slideUp(allInput[0].nextElementSibling, false);
});

allInput[1].addEventListener('focus', () => {
  slideUp(allInput[1].nextElementSibling, true);
  slideUp(allInput[0].nextElementSibling, false);
});

allInput[1].addEventListener('blur', () => {
  slideUp(allInput[1].nextElementSibling, false);
});

const slideUp = (wordEl, add) => {
  if (add) {
    for (let el of wordEl.children) {
      el.classList.add('-translate-y-7');
    }
  } else {
    for (let el of wordEl.children) {
      el.classList.remove('-translate-y-7');
    }
  }
};
