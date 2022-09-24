const data = [
  { icon: '☹️', content: 'Unhappy' },
  { icon: '😐', content: 'Neutral' },
  { icon: '😁', content: 'Satisfied', shadow: true },
];

// generate choice fragment
const generateChoice = ({ icon, content, shadow }) =>
  /*html*/
  `<li class="mx-1 h-[85px] w-[95px] cursor-pointer rounded pt-4 duration-300 hover:shadow-[0_0_8px_#cccccc] children:pointer-events-none ${shadow && 'shadow-[0_0_8px_#cccccc]'}">
    <span class="text-2xl">${icon}</span>
    <p class="my-1">${content}</p>
  </li>`;

export const chooseFeedback =
  /*html*/
  ` <section id="fb" class="FB flex h-[280px] w-[370px] flex-col items-center justify-evenly rounded bg-white pt-2 text-center font-montserrat text-sm shadow-[0_0_9px_0_#aaaaaa]">
      <h2 class="px-14 font-[600]">How satisfied are you with our customer support performance?</h2>
      <ul class="feedbacks flex items-center justify-center text-xs">
        ${data.reduce((res, cur) => res + generateChoice(cur), '')}
      </ul>
      <button class="send h-[40px] w-[140px] rounded bg-black text-xs text-white">Send Review</button>
    </section>`;

export const thankYou = feedback =>
  /*html*/
  ` <p class="text-4xl text-[#ff0000]">❤</p>
      <p class="font-semibold">Thank You!</p>
      <p class="font-semibold">Feedback: ${feedback}</p>
      <p class="px-12">We'll use your feedback to improve our customer support</p>`;
