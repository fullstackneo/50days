let buttonRipple =
  /*html*/
  `<section class="button-ripple relative cursor-default overflow-hidden bg-primary px-7 py-4 font-[Arial] text-sm tracking-[0.15em] text-white">
      CLICK ME
    </section>`;
document.querySelector('body').innerHTML = buttonRipple;

let rippleBtn = document.querySelector('.button-ripple');
let el = /*html*/ `<div class="ripple scale-0 absolute h-[10px] w-[10px] rounded-full bg-white opacity-90"></div>`;
let flag = true;

rippleBtn.onclick = e => {
  if (!flag) return;
  flag = false;
  rippleBtn.innerHTML += el;
  let ripple = rippleBtn.querySelector('.ripple');
  let x = e.clientX - rippleBtn.offsetLeft;
  let y = e.clientY - rippleBtn.offsetTop;

  ripple.style.left = x - 5 + 'px';
  ripple.style.top = y - 5 + 'px';

  ripple.classList.add('duration-1000');
  ripple.classList.add('scale-[50]');
  ripple.classList.add('!opacity-0');

  setTimeout(() => {
    rippleBtn.innerHTML = 'CLICK ME';
    ripple = null;
    flag = true;
  }, 800);
};
