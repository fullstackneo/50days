let showText = document.querySelector('.showText');
let str = 'We Love Programming!';
let speeder = document.querySelector('.speeder');
let i = 0;

let writeText = time => {
  setInterval(() => {
    if (i === str.length) {
      i = 0;
      showText.innerHTML = '';
    }
    showText.insertAdjacentText('beforeend', str[i++]);
  }, time);
};

writeText(400);

speeder.oninput = () => writeText(400 - 20 * speeder.value);
