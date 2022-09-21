export const pokeIndex =
  /*html*/
  ` <section class="pokedex py-5 px-4 text-center font-lato">
      <h1 class="mb-4 text-4xl font-bold">Pokedex</h1>
      <div class="cards flex flex-wrap items-center justify-center children:my-[10px] children:mx-[10px]">
      </div>
    </section>`;

export const card = data => {
  return /*html*/ `<div
          class="card flex h-[265px] shrink-0 basis-[160px] flex-col items-center justify-evenly rounded-lg bg-blue-400 py-2 shadow-[0px_2px_15px_gray]"
        >
          <div class="h-[115px] w-[115px] overflow-hidden rounded-full bg-blue-200 bg-center bg-contain bg-no-repeat" style="background-image:url('${data.url}')"></div>
          <p class="rounded-lg bg-[#c5c5c583] px-2 py-[3px] text-sm">${data.id}</p>
          <strong class="text-lg">${data.name}</strong>
          <p class="text-xs">Type: <span>${data.food}</span></p>
        </div>`;
};
