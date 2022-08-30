let counterEl = document.querySelector('.counter');

let bgEl = document.querySelector('.bg');

(() => {
  let num = 0;
  let counterInterval = setInterval(() => {
    num++;
    counterEl.textContent = num + '%';
    counterEl.style.opacity = 100 - num + '%';
    bgEl.style.filter = `blur(${20 - 0.2 * num}px)`;
    if (num > 100) clearInterval(counterInterval);
  }, 30);
})();
