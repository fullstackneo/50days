let replayBtn = document.querySelector('.replayBtn');
let countdown = () => {
  document.querySelector('.number').classList.add('animate-[countdown_1s_linear_infinite]');

  document.querySelectorAll('.show').forEach(el => el.classList.add('hidden'));

  document.querySelectorAll('.hide').forEach(el => el.classList.remove('hidden'));

  let count = 3;
  let timer = setInterval(() => {
    document.querySelector('.number').textContent = count--;

    if (count < -1) {
      clearInterval(timer);

      document.querySelector('.number').classList.remove('animate-[countdown_1s_linear_infinite]');

      document.querySelector('.number').textContent = '';

      document.querySelectorAll('.show').forEach(el => el.classList.remove('hidden'));

      document.querySelectorAll('.hide').forEach(el => el.classList.add('hidden'));
    }
  }, 1000);
};
// countdown();
replayBtn.addEventListener('click', e => {
  countdown();
});
