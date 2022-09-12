// Part I - html, css
let clockHTML =
  /*html*/
  `<section class="flex h-[500px] w-[250px] flex-col items-center font-heboo">
      <button
        class="themeBtn mb-auto h-[30px] w-[80px] rounded-md bg-black text-xs text-white duration-500 before:content-['Dark_Mode'] dark:bg-white dark:text-black dark:before:content-['Light_Mode']"
      ></button>
      <div class="clock relative mt-auto h-[200px] w-[200px] translate-x-1/2 translate-y-1/2">
        <div class="redSpot absolute z-10 h-[10px] w-[10px] -translate-y-[calc(50%-1.5px)] -translate-x-1/2 rounded-full bg-[#e74c3c]"></div>
        <div
          class="blackSpot absolute z-40 h-[5px] w-[5px] -translate-y-[calc(50%-1.5px)] -translate-x-1/2 rounded-full bg-black dark:bg-white"
        ></div>
        <div class="hr absolute h-[3px] w-[60px] origin-[0px_1.5px] bg-black duration-200 [transform:rotate(-90deg)] dark:bg-white"></div>
        <div class="min absolute h-[3px] w-[90px] origin-[0px_1.5px] bg-black duration-200 [transform:rotate(-90deg)] dark:bg-white"></div>
        <div class="sec absolute z-30 h-[3px] w-[100px] origin-[0px_1.5px] bg-[#e74c3c] duration-200 [transform:rotate(-90deg)]"></div>
      </div>
      <p class="time my-3 text-5xl font-light dark:text-white">PM</p>
      <p class="date text-xs font-light text-[#aaaaaa]">
        <span></span>
        <span class="inline-block h-4 w-4 rounded-full bg-black text-center text-[10px] font-normal leading-4 dark:bg-white">11</span>
      </p>
    </section>`;

document.querySelector('body').innerHTML = clockHTML;

// Part I - js
let hrEl = document.querySelector('.hr');
let minEl = document.querySelector('.min');
let secEl = document.querySelector('.sec');
const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// switch dark and light theme
document.querySelector('.themeBtn').onclick = () => document.querySelector('html').classList.toggle('dark');

// update the sec, min ,hr every 1s
setInterval(() => {
  let time = new Date();
  let month = months[time.getMonth()].toUpperCase();
  let date = time.getDate();
  let day = weekday[time.getDay()].toUpperCase();
  let hr = time.getHours() % 12 || 12;
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let ap = time.getHours() >= 12 ? 'PM' : 'AM';

  // fill in data and day
  document.querySelector('.date span:first-child').textContent = day + ', ' + month;
  document.querySelector('.date span:last-child').textContent = date;

  // fill in time
  document.querySelector('.time').textContent = `${hr >= 10 ? hr : '0' + hr}:${min >= 10 ? min : '0' + min} ${ap}`;

  // rotate the pointers
  secEl.style.transform = `rotate(${sec * 6 - 90}deg)`;
  minEl.style.transform = `rotate(${min * 6 - 90}deg)`;
  hrEl.style.transform = `rotate(${hr * 30 - 90}deg)`;
  sec += 1;
  if (sec === 60) {
    min++;
    if (min === 60) {
      hr++;
      min = 0;
      if (hr === 12) hr = 0;
    }
    sec = 0;
  }
}, 1000);
