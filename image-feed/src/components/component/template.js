export const ImageFeed = /*html*/ `<div class="image-feed">
        <h2 class="my-5 text-center font-roboto text-[38px] font-[700]">Random Image Feed</h2>
        <div class="images flex flex-wrap items-center justify-center children:m-3">
        </div>
      </div>`;

export const generatePic = ({ url, title }) => /*html*/ `<img
  class="h-[370px] w-[370px] object-cover object-center"
  src="${url}"
  alt="${title}"
/>`;
