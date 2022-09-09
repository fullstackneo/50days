(() => {
  let numEl = document.querySelectorAll('.num');
  let i = 0;
  let timer = setInterval(() => {
    numEl[0].textContent = i += 120;
    numEl[1].textContent = i/12*5;
    numEl[2].textContent = i/120*75;
    if (i >= 12000) clearInterval(timer);
  }, 10);
})();
