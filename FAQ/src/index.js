let qBlock = (question, answer) => {
  return /*html*/ `<div
    class="rounded-xl border-[1px] border-gray-400 h-[90px] mb-[20px] pr-[100px] pl-[25px] w-[600px] duration-75 q relative overflow-hidden"
  >
    <p class="font-[600] top-[30px] left-[30px] text-[20px] z-10 absolute">${question}</p>
    <span class="top-[32px] right-[30px] text-3xl faqIcon absolute font-['icomoon'] block cursor-pointer" 
      ></span
    >
    <p class="bottom-[30px] left-[30px] z-10 absolute hidden">${answer}</p>
  </div>`;
};

let questions = [
  "Why shouldn't we trust atoms?",
  'What do you call someone with no body and no nose?',
  "What's the object-oriented way to become wealthy?",
  'How many tickles does it take to tickle an octopus?',
  'What is: 1 + 1?',
];
let answers = [
  'They make up everything',
  'Nobody knows.',
  'Inheritance',
  'Ten-tickles!',
  'Depends on who are you asking.',
];

let listContent = questions.reduce(
  (res, cur, i) => res + qBlock(cur, answers[i]),
  ''
);

let faqEl = document.querySelector('.faq');
faqEl.innerHTML += listContent;

faqEl.addEventListener('click', e => {
  if (e.target.classList.contains('faqIcon')) {
    e.target.parentElement.classList.toggle('active');
    e.target.textContent = e.target.textContent === '' ? '' : '';
  }
});
