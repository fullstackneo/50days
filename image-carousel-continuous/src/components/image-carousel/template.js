export const singleSlider = img => /*html*/ `
    <div
      class="h-full w-full bg-cover bg-center"
      alt="2" style="background-image:url('${img.url}')" alt=${img.title}
    ></div>
  `;

export const carouselHTML = sliders => /*html*/ `<section class="carousel w-[500px] overflow-hidden shadow-[2px_1px_6px_0px_gray]">
    <div class="h-[500px] w-[500px] overflow-hidden">
      <div class="pics flex h-full flex-nowrap items-center justify-start [&>*]:shrink-0 [&>*]:basis-[500px]" style="transform: translateX(-500px)">
        ${sliders}
      </div>
    </div>
    <div class="flex h-[30px] items-center justify-center text-center text-sm leading-[30px] text-white">
      <span class="prev mr-1 h-full flex-auto cursor-pointer bg-primary">Prev</span>
      <span class="next h-full flex-auto cursor-pointer bg-primary">Next</span>
    </div>
  </section>`;
