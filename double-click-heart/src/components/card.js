let picEl = document.querySelector('#card-pic');
let heartEl = document.querySelector('.heart');
let times = 0;

picEl.addEventListener('dblclick', e => {
  // get the position of mouse
  let posX, posY;
  if (e.pageX || e.pageY) {
    posX = e.pageX;
    posY = e.pageY;
  } else {
    //   for ie
    posX = e.clientX + document.documentElement.scrollLeft + document.body.scrollLeft;
    posY = e.clientY + document.documentElement.scrollTop + document.body.scrollTop;
  }

  let createHeart = (posX, posY) => {
    let clone = heartEl.cloneNode(true);

    // place the heart
    clone.style.top = posY - picEl.offsetTop - 10 + 'px';
    clone.style.left = posX - picEl.offsetLeft - 10 + 'px';

    // add the heart element to the pic
    clone.classList.remove('hidden');
    picEl.appendChild(clone);

    //  remove the heart element from dom
    setTimeout(() => {
      clone.remove();
      clone = null;
    }, 1000);
  };

  // change the times num
  document.querySelector('.like span').innerHTML = times++;
  // add heart elment
  createHeart(posX, posY);
});
