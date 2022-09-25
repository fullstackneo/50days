let closeMenu = document.querySelector('.closeMenu');
let menuEl = document.querySelector('.menu');
let openMenu = document.querySelector('.openMenu');

closeMenu.onclick = () => menuEl.classList.replace('menuOpen', 'menuClose');

openMenu.onclick = () => menuEl.classList.replace('menuClose', 'menuOpen');
