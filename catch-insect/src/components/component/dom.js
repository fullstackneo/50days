import { INSECTS } from './insects.js';
import { InsectCard } from './template.js';
let catchInsect = document.querySelector('.catch-the-insect');
let pageEl = catchInsect.querySelector('.page');
let startBtn = catchInsect.querySelector('#welcome button');
let insectsEl = catchInsect.querySelector('#choose-insect ul');
let playgroundEl = catchInsect.querySelector('#playground');
let scoreEl = catchInsect.querySelector('.score span');

let timeEl = playgroundEl.querySelector('.timer');
let gameTimer;
let insect;
let seconds = 0;
let score = 0;

// welcome users
startBtn.onclick = () => {
  insectsEl.innerHTML = INSECTS.reduce((res, cur) => res + InsectCard(cur), '');
  pageEl.classList.add('-translate-y-full');
};

// choose insect
insectsEl.onclick = e => {
  if (e.target.tagName === 'LI') {
    insect = e.target.closest('li').lastElementChild.src;
    pageEl.classList.add('-translate-y-[200%]');
    startTimer();
    createInsect(insect);
  }
};

// catch insect
playgroundEl.onclick = e => {
  if (e.target.classList.contains('insect')) {
    e.target.style.transform = e.target.style.transform.replace('scale(1, 1)', 'scale(0,0)');

    scoreEl.textContent = ++score;

    setTimeout(() => {
      e.target.remove();
      createInsect(750);
      createInsect(1500);
    }, 500);

    if (score === 20) {
      clearInterval(gameTimer);
      gameOver();
    }
  }
};

const randomDegree = () => parseInt(Math.random() * 360);
const randomPosition = length => parseInt(Math.random() * (length - 210) + 105);

const createInsect = time => {
  let gameWidth = catchInsect.offsetWidth;
  let gameHeight = catchInsect.offsetHeight;
  setTimeout(() => {
    playgroundEl.insertAdjacentHTML(
      'beforeend',
      /*html*/ `<img class="insect -translate-x-1/2 -translate-y-1/2 absolute h-[110px] object-contain duration-1000 cursor-pointer" src="${insect}" alt="fly" style="left:${randomPosition(gameWidth)}px;top:${randomPosition(gameHeight)}px;transform:scale(1,1) rotate(${randomDegree()}deg);"/>`
    );
  }, time);
};

const startTimer = () => {
  gameTimer = setInterval(() => {
    let sec = seconds % 60;
    let min = parseInt(seconds / 60);
    sec = sec < 10 ? '0' + sec : sec;
    min = min < 10 ? '0' + min : min;
    timeEl.innerHTML = `Time: ${min}:${sec}`;
    seconds++;
  }, 1000);
};

const gameOver = () => {
  playgroundEl.insertAdjacentHTML(
    'beforeend',
    /*html*/ `<div class="absolute top-1/4 flex h-[100px] w-full flex-col items-center justify-center bg-[#00000065] text-center z-10">
      <p class='leading-[30px]'>Are you annoyed yet?<br />You are playing an impossible game!!</p>
    </div>`
  );
};
