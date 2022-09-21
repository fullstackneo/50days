import { hoverboard } from './template.js';

// render a 25*20 hoverboard
document.querySelector('body').insertAdjacentHTML('beforeend', hoverboard(25, 20));

// DOM operation
let colors = ['#e64c3d', '#2cbb69', '#338bc9', '#8a43a8', '#cb7422'];

document.querySelector('.hoverboard').addEventListener('mouseover', e => {
  if (e.target.tagName === 'SPAN') {
    //  generate new style
    let block = e.target;
    let randomColor = colors[parseInt(Math.random() * colors.length)];
    block.style.backgroundColor = randomColor;
    block.style.boxShadow = `0px 0px 10px 0px ${randomColor}`;
    block.style.transition = '0s';

    // back to normal style
    setTimeout(() => {
      block.style.backgroundColor = '';
      block.style.boxShadow = '';
      block.style.transition = '1.5s';
      block = null;
    }, 1500);
  }
});
