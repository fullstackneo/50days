let mainEl = document.querySelector('main');
let navEl = document.querySelector('nav');
let showMenuEl = document.querySelector('nav .show-menu');
let hideMenuEl = document.querySelector('nav .hide-menu');

let menuEl = document.querySelector('.menu');

const toggleMenu = () => {
  mainEl.classList.toggle('main-rotate');
  navEl.classList.toggle('nav-rotate');
  setTimeout(() => {
    menuEl.classList.toggle('menu-show');
  }, 500);
};

showMenuEl.addEventListener('click', toggleMenu);

hideMenuEl.addEventListener('click', toggleMenu);
