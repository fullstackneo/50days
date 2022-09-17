let stickyNav =
  /*html*/
  `<nav class="nav fixed top-0 z-10 flex h-[65px] w-full items-center justify-between bg-[#222222] px-[8px] duration-500">
      <a class="text-2xl font-semibold text-white duration-500 hover:text-menu-active" href="javascript:;">My Website</a>
      <div class="menu text-[17px] text-white">
        <a class="menuItem mx-4 font-medium text-white duration-500 hover:text-menu-active" href="javascript:;" onclick="toTop()">Home</a>
        <a class="menuItem mx-4 font-medium text-white duration-500 hover:text-menu-active" href="javascript:;" onclick="toTop()">About</a>
        <a class="menuItem mx-4 font-medium text-white duration-500 hover:text-menu-active" href="javascript:;" onclick="toTop()">Service</a>
        <a class="menuItem mx-4 font-medium text-white duration-500 hover:text-menu-active" href="javascript:void(0)" onclick="toTop()">Contact</a>
      </div>
    </nav>`;

// load sticky menu to page
document.querySelector('body').insertAdjacentHTML('beforebegin', stickyNav);

let nav = document.querySelector('.nav');
let menu = document.querySelector('.menu');

// highlight current menu item
menu.firstElementChild.classList.add('!text-menu-active');
menu.addEventListener('click', e => {
  menu.querySelectorAll('a').forEach(el => {
    el.classList.remove('!text-menu-active');
  });

  if (e.target.tagName === 'A') {
    e.target.classList.add('!text-menu-active');
  }
});

// change the theme of menu when scroll over 200px
document.addEventListener('scroll', e => {
  let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;

  if (scrollTop >= 200) {
    nav.classList.add('nav-active');
  } else {
    nav.classList.remove('nav-active');
  }
});

// scroll back to top
let toTop = () => {
  document.documentElement.scrollTop = 0;
};

// refresh and back to top
window.onbeforeunload = function () {
  document.documentElement.scrollTop = 0;
};
