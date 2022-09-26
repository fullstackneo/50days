export const testimonial =
  /*html*/
  `<div class="tesimonial flex w-full flex-col items-center justify-around rounded-2xl bg-primary p-8 font-montserrat text-white">
        <div class="progress mb-4 h-[5px] w-full">
          <div class="h-full animate-[progress_5s_linear_infinite] bg-white"></div>
        </div>
        <div class="content"></div>
      </div>`;

export const generateTestimonial = ({ intro, name, avatar, title }) => /*html*/ `
  <p class="intro mb-6 text-xl leading-[35px]">${intro}</p>
  <div class="flex items-center justify-center">
    <img class="h-[92px] w-[92px] rounded-full object-cover object-center" src="${avatar}" alt="${name}" />
    <div class="ml-2">
      <h3 class="text-xl font-[600]">${name}</h3>
      <p class="text-xl">${title}</p>
    </div>
  </div>`;
