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
  let length = wordEl.children.length;
  let i = 0;
  let timer = setInterval(() => {
    if (add) {
      wordEl.children[i].classList.add('-translate-y-7');
    } else {
      wordEl.children[i].classList.remove('-translate-y-7');
    }
    i++;
    if (i === length) {
      clearInterval(timer);
    }
  }, 70);
};


