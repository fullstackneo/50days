let sliderHTML =
  /*html*/
  `<section class="flex h-full w-full items-center justify-center overflow-hidden">
  <div
    id="down"
    class="fixed right-2/3 top-1/2 z-10 h-[47px] w-[40px] cursor-pointer rounded-l-md bg-[#ffffff] text-center font-fa text-base leading-[47px] text-[#aaaaaa] hover:text-black"
    onclick="moveSlider(-1)"
  >
    
  </div>
  <div
    id="up"
    class="fixed left-1/3 top-1/2 z-10 h-[47px] w-[40px] -translate-y-full cursor-pointer rounded-r-md bg-[#ffffff] text-center font-fa text-base leading-[47px] text-[#aaaaaa] hover:text-black"
    onclick="moveSlider(1)"
  >
    
  </div>
  <div id="slider-text" class="h-screen basis-1/3 text-center text-white duration-500" style="transform: translateY(-300%)">
    <div id="flower" class="flex h-full w-full flex-col items-center justify-center bg-[#fd3555] pb-8">
      <h3 class="text-[42px] font-semibold">Nature flower</h3>
      <small class="text-[18px]">all in pink</small>
    </div>
    <div id="sky" class="flex h-full w-full flex-col items-center justify-center bg-[#2a86ba]">
      <h3 class="text-[42px] font-semibold">Bluuue Sky</h3>
      <small class="text-[18px]">with it's mountains</small>
    </div>
    <div id="castle" class="flex h-full w-full flex-col items-center justify-center bg-[#252e33]">
      <h3 class="text-[42px] font-semibold">Lonely castle</h3>
      <small class="text-[18px]">in the wilderness</small>
    </div>
    <div id="eagle" class="flex h-full w-full flex-col items-center justify-center bg-[#ffb866]">
      <h3 class="text-[42px] font-semibold">Flying eagle</h3>
      <small class="text-[18px]">in the sunset</small>
    </div>
  </div>
  <div id="slider-pic" class="h-screen basis-2/3 duration-500">
    <div class="h-full w-full bg-hero-eagle bg-cover bg-center"></div>
    <div class="h-full w-full bg-hero-castle bg-cover bg-center"></div>
    <div class="h-full w-full bg-hero-sky bg-cover bg-center"></div>
    <div class="h-full w-full bg-hero-flower bg-cover bg-center"></div>
  </div>
</section>`;

document.querySelector('body').insertAdjacentHTML('afterbegin', sliderHTML);

let sliderText = document.querySelector('#slider-text');
let sliderPic = document.querySelector('#slider-pic');
let currentSlider = 0;

let moveSlider = direction => {
  if (direction === 1) {
    currentSlider = currentSlider + 1 > 3 ? 0 : currentSlider + 1;
  } else {
    currentSlider = currentSlider - 1 < 0 ? 3 : currentSlider - 1;
  }
  sliderPic.style.transform = `translateY(-${currentSlider * 100}%)`;
  sliderText.style.transform = `translateY(-${300 - currentSlider * 100}%)`;
};
