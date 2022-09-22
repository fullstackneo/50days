let passwordEl = document.querySelector('#password');
passwordEl.addEventListener('keyup', e => {
  document.querySelector('.background').style.filter = `blur(${e.target.value.length >= 10 ? 0 : 10 - e.target.value.length}px)`;
});
