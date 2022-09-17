let nav = document.querySelector('.nav');
let menu = document.querySelector('.menu');
menu.firstElementChild.classList.add('!text-menu-active');

menu.addEventListener('click', e => {
  menu.querySelectorAll('a').forEach(el => {
    el.classList.remove('!text-menu-active');
  });

  if (e.target.tagName === 'A') {
    e.target.classList.add('!text-menu-active');
  }
});

document.addEventListener('scroll', e => {
  let length = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  if (length >= 200) {
    nav.classList.add('nav-active');
  } else {
    nav.classList.remove('nav-active');
  }
});

let toTop = () => {
  if (window.pageYOffset) return (window.pageYOffset = 0);
  if (document.documentElement.scrollTop) return (document.documentElement.scrollTop = 0);
  if (document.body.scrollTop) return (document.body.scrollTop = 0);
};
