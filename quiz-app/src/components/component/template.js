export const quiz =
  /*html*/
  `<div class="quiz flex h-[610px] w-full flex-col items-stretch justify-center overflow-hidden rounded-xl bg-white pt-[100px] font-poppins">
        <h2 class="question mb-4 px-[120px] text-center text-[32px] font-[500] leading-[45px]"></h2>
        <ul class="choices px-[80px] children:my-6"></ul>
        <button class="submitBtn mt-auto h-[80px] bg-[#8e44ad] text-2xl text-white hover:bg-[#732d91] focus:bg-[#5e3370]">Submit</button>
      </div>`;

export const result = (correct, total) => /*html*/ `<div class="flex h-[170px] w-full flex-col items-stretch justify-center overflow-hidden rounded-xl bg-white pt-[25px] font-poppins">
  <h2 class=" mb-4  text-center text-[32px] font-[500] leading-[45px]">You answered ${correct}/${total} questions correctly</h2>
  <button class="mt-auto h-[80px] bg-[#8e44ad] text-2xl text-white hover:bg-[#732d91] focus:bg-[#5e3370]" onclick="location.reload()">Reload</button>
</div>`;
