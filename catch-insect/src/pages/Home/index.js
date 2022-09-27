// render component to page
// import { } from "./../../components/component/template.js";
// document.querySelector('').innerHTML =;

// insert DOM operation for component
// import('')

let catchInsect = document.querySelector('.catch-the-insect');
let pageEl = catchInsect.querySelector('.page');

// welcome section
let startBtn = catchInsect.querySelector('#welcome button');
startBtn.onclick = () => pageEl.classList.add('-translate-y-full');

// chooice-insect section
let insectsEl = catchInsect.querySelector('#choose-insect ul');
let insect;
insectsEl.onclick = e => {
  if (e.target.tagName === 'LI') {
    pageEl.classList.add('-translate-y-[200%]');
    insect = e.target.closest('li').lastElementChild.src;
    // create first insect
    createInsect(insect);
    // GC
    startBtn = null;
  }
};

// playground section
let gameWidth = catchInsect.offsetWidth;
let gameHeight = catchInsect.offsetHeight;
let playgroundEl = catchInsect.querySelector('#playground');
let scoreEl = catchInsect.querySelector('.score span');
let randomDegree = () => parseInt(Math.random() * 360);
let randomPosition = length => parseInt(Math.random() * (length - 210) + 105);

let score = 0;

let createInsect = time => {
  setTimeout(() => {
    playgroundEl.insertAdjacentHTML(
      'beforeend',
      /*html*/ `<img class="insect absolute h-[110px] object-contain duration-1000 cursor-pointer" src="${insect}" alt="fly" style="left:${randomPosition(gameWidth)}px;top:${randomPosition(gameHeight)}px;transform:scale(1,1) rotate(${randomDegree()}deg);"/>`
    );
  }, time);
};

// click insect and create more
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

// set timer
let hrNum = playgroundEl.querySelector('.timer .hr');
let minNum = playgroundEl.querySelector('.timer .min');
let gameTimer;
const startTimer = () => {
  let hr = 0;
  let min = 0;
  gameTimer = setInterval(() => {
    if (min === 59) {
      hrNum.textContent = hr + 1 < 10 ? '0' + (hr + 1) : hr + 1;
      minNum.textContent = '00';
      min = 0;
      hr++;
    } else {
      minNum.textContent = min + 1 <= 9 ? '0' + (min + 1) : min + 1;
    }
    min++;
  }, 1000);
};

startTimer();

let gameOver = () => {
  playgroundEl.insertAdjacentHTML(
    'beforeend',
    /*html*/ `<div class="absolute top-1/4 flex h-[100px] w-full flex-col items-center justify-center bg-[#00000065] text-center z-10">
      <p class='leading-[30px]'>Are you annoyed yet?<br />You are playing an impossible game!!</p>
    </div>`
  );
};
