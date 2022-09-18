let notificationBtn =
  /*html*/
  `<button class="show h-[50px] w-[150px] rounded-md bg-white text-sm font-[600] text-primary">Show Notification</button>
    <div id="notification" class="fixed right-[20px] bottom-[10px] flex flex-col items-end justify-end text-center"></div>`;

document.querySelector('body').insertAdjacentHTML('afterbegin', notificationBtn);

let noticeEl = document.querySelector('#notification');
let showBtn = document.querySelector('.show');
showBtn.onclick = () => {
  let divEl = document.createElement('div');
  divEl.className = 'my-2 h-[50px] px-3 rounded-md bg-white text-sm font-[600] leading-[50px] text-primary';
  divEl.textContent = 'Message';
  let randomColor = '#' + parseInt(Math.random() * 0xffffff).toString(16);
  divEl.style.color = randomColor;
  noticeEl.appendChild(divEl);
  setTimeout(() => {
    divEl.remove();
    divEl = null;
  }, 2500);
};
