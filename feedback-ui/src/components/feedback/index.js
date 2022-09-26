import {rating, thankYou } from './template.js';
// insert component
document.querySelector('#fb-section').innerHTML = rating;

// DOM operations
let fbSection = document.querySelector('#fb');
let feedbacks = fbSection.querySelector('.feedbacks');
let allfeedbacks = fbSection.querySelectorAll('li');
let sendBtn = fbSection.querySelector('.send');
let shadowEffect = 'shadow-[0_0_8px_#cccccc]';
let feedback = 'Satisfied';

// choose feedback
feedbacks.onclick = e => {
  if (e.target.tagName === 'LI') {
    allfeedbacks.forEach(el => el.classList.remove(shadowEffect));
    e.target.classList.add(shadowEffect);
    feedback = e.target.querySelector('p').textContent;
  }
};

// click send button
sendBtn.onclick = e => {
  if (!['Satisfied', 'Unhappy', 'Neutral'].includes(feedback)) return;
  fbSection.classList.add('!h-[220px]', 'space-y-3', '!justify-center');
  fbSection.innerHTML = thankYou(feedback);
};
