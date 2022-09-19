document.querySelector('.selections').addEventListener('click', e => {
  if (e.target.classList.contains('select')) {
    e.target.firstElementChild.classList.toggle('left-[43px]');
    e.target.classList.toggle('bg-primary');
  }
});
