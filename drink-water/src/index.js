let bigUp = document.querySelector('.big .up');
let bigDown = document.querySelector('.big .down');
let smallEl = document.querySelector('.smallSection');
let smalls = smallEl.querySelectorAll('.small');

smallEl.addEventListener('click', e => {
  // use event delegation
  if (!e.target.classList.contains('small')) return;
  let index = e.target.dataset.num;
  let mark;
  if (!e.target.classList.contains('!bg-[#6ab3f8]')) {
    for (let el of smalls) {
      el.classList.add('!bg-[#6ab3f8]');
      el.classList.add('text-white');
      if (el === e.target) {
        mark = index;
        break;
      }
    }
  } else {
    if (smalls[+index + 1].classList.contains('!bg-[#6ab3f8]') || index === 7) {
      for (let i = +index + 1; i < 8; i++) {
        smalls[i].classList.remove('!bg-[#6ab3f8]');
        smalls[i].classList.remove('text-white');
      }
      mark = index;
    } else {
      smalls[index].classList.remove('!bg-[#6ab3f8]');
      smalls[index].classList.remove('text-white');
      mark = +index - 1;
    }
  }

  bigDown.style.height = 40 * (+mark + 1) + 'px';
  bigDown.textContent = (100 * (+mark + 1)) / 8 + '%';
  if (mark === -1) {
    bigUp.innerHTML =
      /*html*/
      ` <p class="font-[600] duration-300">2L</p>
          <p class="text-[14px] leading-[14px] duration-300">Remained</p>`;

    bigDown.innerHTML = '';
    return;
  }

  if (mark === '7') {
    bigUp.lastElementChild.textContent = '';
    bigUp.firstElementChild.textContent = '';
    bigUp.style.height = '0px';
  } else {
    bigUp.innerHTML = /*html*/ `
        <p class="font-[600] duration-300">${2 * (1 - (+mark + 1) / 8)}L</p>
          <p class="text-[14px] leading-[14px] duration-300">Remained</p>`;
  }
});
