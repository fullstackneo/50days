import { verifyAccount } from './template.js';

// INSERT this component
document.querySelector('body').insertAdjacentHTML('beforeend', verifyAccount);

let codeEl = document.querySelector('.code');
// focus first box
codeEl.firstElementChild.focus();

codeEl.addEventListener('keydown', e => {
  if (e.key >= 0 && e.key < 10) {
    // 0-9
    e.target.value = '';
    focusNext(e);
  } else if (e.key === 'Backspace') {
    e.target.value = '';
    focusPrevious(e);
  } else if (e.key === 'Delete') {
    e.target.value = '';
  } else if (e.key === 'ArrowLeft') {
    focusPrevious(e);
  } else if (e.key === 'ArrowRight') {
    focusNext(e);
  }
});

const focusPrevious = e => setTimeout(() => e.target.previousElementSibling?.focus());

const focusNext = e => setTimeout(() => e.target.nextElementSibling?.focus());
