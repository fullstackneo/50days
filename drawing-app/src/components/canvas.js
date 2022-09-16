let drawingComponent = /*html*/ `
<section class="flex h-[800px] w-[800px] flex-col items-center justify-center border-2 border-blue">
  <canvas width="796px" height="706px" class="">Please update your browser or try another browser to display this canvas</canvas>
  <div class="panel mt-auto flex h-[90px] w-full items-center justify-center bg-blue px-4">
    <div class="mx-1 flex h-[46px] w-[46px] cursor-pointer items-center justify-center bg-[#f5f5f5] pb-1 text-3xl font-bold" onclick="changeNum(-1)">
      -
    </div>
    <div class="mx-1 flex h-[46px] w-[46px] cursor-pointer items-center justify-center bg-[#f5f5f5] text-[32px] font-[400]">10</div>
    <div
      class="mx-1 flex h-[46px] w-[46px] cursor-pointer items-center justify-center overflow-hidden bg-[#f5f5f5] pb-1 text-3xl font-bold"
      onclick="changeNum(1)"
    >
      +
    </div>
    <input type="color" class="mx-1 flex h-[46px] w-[46px] cursor-pointer items-center justify-center bg-[#f5f5f5] p-1 text-3xl" />
    <div class="mx-1 ml-auto flex h-[46px] w-[46px] cursor-pointer items-center justify-center bg-[#f5f5f5] text-3xl font-[400]" onclick="cleanCanvas()">
      X
    </div>
  </div>
</section> `;

document.querySelector('body').innerHTML = drawingComponent;

let canvas = document.querySelector('canvas');
let boldEl = canvas.nextElementSibling.querySelector('div:nth-child(2)');
let ctx = canvas.getContext('2d');

canvas.addEventListener('mousedown', event => {

  // return the position of the mouse
  let getPosition = event => {
    if (event.pageX || event.pageY) {
      return [event.pageX - event.target.offsetLeft, event.pageY - event.target.offsetTop];
    } else {
      // for IE
      return [event.offsetX, event.offsetY];
    }
  };

  let [x1, y1] = getPosition(event);
  let bold = boldEl.textContent;
  let color = canvas.nextElementSibling.querySelector('input').value;

  // draw function
  let startDraw = event => {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(...getPosition(event));
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.strokeStyle = color;
    ctx.lineWidth = bold * 2;
    ctx.stroke();
    ctx.closePath();

    // update x1, y1
    x1 = event.offsetX;
    y1 = event.offsetY;
  };

  canvas.addEventListener('mousemove', startDraw);

  // mouseup: remove mousemove event
  window.addEventListener(
    'mouseup',
    () => {
      canvas.removeEventListener('mousemove', startDraw);
    },
    { once: true }
  );
});

// update the num of the stroke thickness
let changeNum = value => {
  let num = +boldEl.textContent;
  if (num <= 5 && value < 0) return;
  if (num >= 50 && value > 0) return;
  boldEl.textContent = value < 0 ? num - 5 : num + 5;
};

// clean the canvas
let cleanCanvas = () => ctx.clearRect(0, 0, canvas.width, canvas.height);
