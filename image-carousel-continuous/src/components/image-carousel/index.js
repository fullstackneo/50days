import { singleSlider, carouselHTML } from './template.js';

// fetched data
let data = [
  {
    title: '0',
    url: 'https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80',
  },
  {
    title: '1',
    url: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  },
  {
    title: '2',
    url: 'https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
  },
  {
    title: '3',
    url: 'https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80',
  },
  {
    title: '4',
    url: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  },
  {
    title: '5',
    url: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
  },
  {
    title: '6',
    url: 'https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  },
  {
    title: '7',
    url: 'https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80',
  },
  {
    title: '8',
    url: 'https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjE yMDd9&auto=format&fit=crop&w=2100&q=80',
  },
];

// generate N+2 sliders' html
// ** Attention: to generate a seamless sliding effect without rolling back to the 1st when the last img slides, so the html structure is: '<last pic/> + <all pics/> + <first pic/>', the imgs' order is like: 5,0,1,2,3,4,5,0
let sliders = data.reduce((res, cur) => res + singleSlider(cur), singleSlider(data.at(-1))) + singleSlider(data[0]);

// render carousel and sliders to page
document.querySelector('body').insertAdjacentHTML('beforeend', carouselHTML(sliders));

let pics = document.querySelector('.pics');
let count = 1;
let timer;

// reset position of the whole pics element
let resetPosition = () => {
  if (count === data.length + 1) {
    pics.style.transition = '0s';
    pics.style.transform = `translateX(-500px)`;
    count = 1;
  } else if (count === 0) {
    pics.style.transition = '0s';
    pics.style.transform = `translateX(-${500 * data.length}px)`;
    count = data.length;
  }
};

// show a specific img
let moveToPosition = count => {
  pics.style.transition = '1s ease-in-out';
  pics.style.transform = `translateX(-${count * 500}px)`;
};

// slide automatically every 2 sec
let autoSlide = () => {
  timer = setInterval(() => {
    count++;
    moveToPosition(count);
    if (count === data.length + 1) {
      setTimeout(() => resetPosition(), 1000);
    }
  }, 2000);
};

// slide manually by clicking 'prev' and 'next'
let changeSlider = value => {
  // reset position when img is
  if ((count === 0 && value < 0) || (count === data.length + 1 && value > 0)) {
    resetPosition();
  }
  // move to specific position
  setTimeout(() => {
    count += value;
    moveToPosition(count);
  }, 0);
};

// slide automatically
autoSlide(); 

// click 'prev' or 'next' to slide pics
document.querySelector('.prev').onclick = () => changeSlider(-1);
document.querySelector('.next').onclick = () => changeSlider(1);

// mouseover: stop sliding automatically
document.querySelector('.carousel').onmouseover = () => clearInterval(timer);

// mouseout: start sliding automatically
document.querySelector('.carousel').onmouseout = () => autoSlide();
