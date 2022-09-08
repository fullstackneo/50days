let textBox = document.querySelector('.textBox');
let choicesEl = document.querySelector('.choices');
let choiceEl = choice => {
  return /*html*/ `
  <span class="inline-block px-[18px] py-[7px] rounded-[18px] h-[35px] leading-[20px] text-white text-center bg-[#f0932b] mx-[2px] my-[5px]">${choice}</span>`;
};

textBox.addEventListener('keydown', e => {
  let content = e.target.value;
  choicesEl.innerHTML = content.split(',').reduce((res, cur) => {
    if (cur.trim() === '') return res;
    return res + choiceEl(cur);
  }, '');
});
