let h2Els = document.querySelectorAll('.key p');

document.onkeydown = e => {
  let key = e.key === ' ' ? 'Space' : e.key;
  if (key === h2Els[0].textContent) return;
  h2Els[0].textContent = key;
  h2Els[1].textContent = e.which || e.keyCode;
  h2Els[2].textContent = e.code;
};
