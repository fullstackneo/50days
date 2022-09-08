let menuEl = document.querySelector('.menu');
let menuBtn = menuEl.querySelector('.btn');
menuBtn.addEventListener('click', () => {
  menuEl.classList.toggle('menu-active');
});
