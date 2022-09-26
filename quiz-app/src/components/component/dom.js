import { data } from './fetchData.js';
import { result } from './../../components/component/template.js';

let quizEl = document.querySelector('.quiz');
let questionEl = quizEl.querySelector('.question');
let choicesEl = quizEl.querySelector('.choices');
let submitBtn = quizEl.querySelector('.submitBtn');
let number = 0;
let correct = 0;

const generateQuiz = ({ question, choices }) => {
  questionEl.textContent = question;
  choicesEl.innerHTML = choices.reduce((res, cur, index) => res + /*html*/ `<li><label class="cursor-pointer text-2xl" for="quiz-${index}"><input class="cursor-pointer mr-3 scale-125" type="radio" name="quiz" id="quiz-${index}" />${cur}</label></li>`, '');
};

// display result
const generateResult = () => {
  quizEl.outerHTML = result(correct, data.length);
};

// generate first quiz
generateQuiz(data[0]);

submitBtn.onclick = () => {
  let allInput = choicesEl.querySelectorAll('input');
  let answer = data[number].answer;

  // if no answer was selected, return
  if (!choicesEl.querySelector('input:checked')) return;

  // if correct, add 1
  if (allInput[answer].checked) correct++;

  // GC
  allInput = null;

  // display next quiz
  number++;
  number >= 4 ? generateResult() : generateQuiz(data[number]);
};
