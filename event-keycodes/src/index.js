let keySectionEl = document.querySelector('.key');

let boxComponent = value => {
  return ` <div
    class="relative flex  items-center justify-center border-[1px] border-gray-400 bg-[#eeeeee] shadow-md shadow-gray-300 "
  >
    <h2
      class="absolute left-1/2 top-[-32px] -translate-x-1/2 text-lg font-[500]  text-gray-600"
    >
      event.key
    </h2>
    <p class="text-[25px] font-[600]">${value}</p>
  </div>`;
};

document.onkeydown = e => {
  keySectionEl.innerHTML =
    boxComponent(e.key === ' ' ? 'Space' : e.key) +
    boxComponent(e.which || e.keyCode) +
    boxComponent(e.code);
};
