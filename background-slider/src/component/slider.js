// slider data
let sliders = [
  {
    title: 'thunder',
    url: 'https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  },
  {
    title: 'mountain',
    url: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  },
  {
    title: 'fire',
    url: 'https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  },
  {
    title: 'wind',
    url: 'https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  },
  {
    title: 'water',
    url: 'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
  },
];

// slider HTML and css
let sliderComponent = /*html*/ ` <section
  class="slider relative flex h-full w-full items-center justify-center bg-cover duration-500 before:absolute before:h-full before:w-full before:bg-black/60 before:content-['']"
  style="background-image:url(${sliders[0].url})"
  data-cur="0"
>
  <div class="h-4/5 w-4/5 overflow-hidden">
    <div class="current relative left-[-10vw] top-[-10vh] h-screen w-screen bg-cover" style="background-image:url(${sliders[0].url})"></div>
    <span
      class="left fixed top-1/2 h-16 w-16 -translate-y-1/2 -translate-x-full cursor-pointer border-[2px] border-r-0 border-solid border-[#ffa500] text-center font-[FontAwesome] text-2xl leading-[60px] text-white"
      onmouseover="loadImg(-1)"
      ></span
    >
    <span
      class="right fixed top-1/2 left-[90vw] h-16 w-16 -translate-y-1/2 cursor-pointer border-[2px] border-l-0 border-solid border-[#ffa500] text-center font-[FontAwesome] text-2xl leading-[60px] text-white"
      onmouseover="loadImg(1)"
      ></span
    >
  </div>
</section>`;

document.querySelector('body').innerHTML = sliderComponent;

// slider js
let sliderEl = document.querySelector('.slider');
let currentSliderEl = document.querySelector('.current');
let imgs = sliderEl.querySelectorAll('img');
let num = +sliderEl.dataset.cur;
let sliderCache = new Set('0');

// preload next img
let loadImg = direction => {
  let img = new Image();
  let newNum;
  if (direction < 0) {
    newNum = num === 0 ? sliders.length - 1 : num - 1;
    if (sliderCache.has(newNum)) return;
  } else {
    newNum = num === sliders.length - 1 ? 0 : num + 1;
    if (sliderCache.has(newNum)) return;
  }
  img.src = sliders[newNum].url;
  sliderCache.add(newNum);
};

// click left or right
sliderEl.addEventListener('click', e => {
  if (!e.target.classList.contains('left') && !e.target.classList.contains('right')) return;

  // update current slider num
  if (e.target.classList.contains('left')) {
    num = num - 1 < 0 ? 4 : num - 1;
    sliderEl.dataset.cur = num;
    // update bgImg of element
    sliderEl.style.backgroundImage = `url(${sliders[num].url})`;
    currentSliderEl.style.backgroundImage = `url(${sliders[num].url})`;
    //load next img
    loadImg(-1);
  } else {
    num = num + 1 === 5 ? 0 : num + 1;
    sliderEl.dataset.cur = num;
    // update bgImg of element
    sliderEl.style.backgroundImage = `url(${sliders[num].url})`;
    currentSliderEl.style.backgroundImage = `url(${sliders[num].url})`;
    //load next img
    loadImg(1);
  }
});
