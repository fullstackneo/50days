export const CatchInsect = /*html*/ `<div class="catch-the-insect h-full overflow-hidden font-press-start-2p text-white">
        <div class="page h-full duration-400 children:h-full">
          <div id="welcome" class="flex flex-col items-center justify-center bg-primary">
            <h2 class="mb-5 text-center text-[40px] font-bold">Catch The Insect</h2>
            <button class="bg-white px-7 py-4 text-base text-primary hover:bg-[#edf0ff]">Play Game</button>
          </div>
          <div id="choose-insect" class="flex flex-col items-center justify-center bg-primary">
            <h2 class="mb-10 text-center text-[40px] font-bold">What is your "favorite" insect?</h2>
            <ul class="flex items-center justify-center children:mx-3">
            </ul>
          </div>
          <div id="playground" class="relative bg-primary children:select-none">
            <div class="timer absolute left-5 top-10 text-2xl font-bold">Time: <span class="hr">00</span>:<span class="min">00</span></div>
            <div class="score absolute top-10 right-5 text-2xl font-bold">Score: <span>0</span></div>
          </div>
        </div>
      </div>`;

export const InsectCard = ({ name, url }) => /*html*/ `<li class="flex h-[185px] w-[185px] cursor-pointer flex-col items-center justify-center border-2 hover:bg-white hover:text-primary children:pointer-events-none">
  <p class="mb-1">${name}</p>
  <img class="h-[100px] object-contain" src="${url}" alt="${name}" />
</li>`;
