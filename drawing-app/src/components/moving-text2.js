let canvas = document.querySelector('canvas');
let c = canvas.getContext('2d');

function r(num) {
  return parseInt(Math.random() * num);
}

// 画文字
let drawText = (text, x, y) => {
  c.font = '200px serif';
  // c.fillStyle = color;
  c.textAlign = 'center';
  c.textBaseline = 'middle';
  c.fillText(text, x, y);
};

// 画填充文字
let drawFillText = (text, x, y, color) => {
  c.font = '10px serif';
  c.fillStyle = color;
  c.textAlign = 'center';
  c.textBaseline = 'middle';
  c.fillText(text, x, y);
};

// 画填充圆形
let drawCircle = (x, y, r, color) => {
  c.beginPath();
  c.fillStyle = color;
  c.arc(x, y, r, 0, Math.PI * 2, true);
  c.fill();
  c.closePath();
};

// 运动次数
let times = 100;
function Ball(xEnd, yEnd) {
  this.xStart = r(canvas.width);
  this.yStart = r(canvas.height);
  this.xEnd = xEnd;
  this.yEnd = yEnd;
  this.xSpeed = (this.xEnd - this.xStart) / times;
  this.ySpeed = (this.yEnd - this.yStart) / times;
  this.r = 5;
  this.color = '#f00';
  // 小球运动中心位置
  this.x = this.xStart;
  this.y = this.yStart;

  // 设置图案和文字
  this.text = '❤';
  this.color = `rgb(255,${r(255)}, ${r(255)})`;
}

Ball.prototype.show = function () {
  // 计算每次运动的坐标位置
  this.x += this.xSpeed;
  this.y += this.ySpeed;
  // drawCircle(this.x, this.y, this.r, this.color);
  drawFillText(this.text, this.x, this.y, this.color);
};

// ❀ 小logo都可以 🎵 ♥

drawText('❤', 400, 350);

// 获取图案像素点
let copy = c.getImageData(0, 0, canvas.width, canvas.height);

// 清除画布
c.clearRect(0, 0, canvas.width, canvas.height);

// 筛选有效像素点
let leap = 20;
let ballArr = [];
for (let y = 0; y < canvas.height; y += leap) {
  for (let x = 0; x < canvas.width; x += leap) {
    let index = x + y * canvas.width;
    // 选中饱和度数值0 - 255;
    let s = copy.data[index * 4 + 3];
    if (s > 128) {
      // 直接出静态效果;
      // drawCircle(x, y, 5, '#f00');

      // 调用小球类，画圆
      let ball = new Ball(x, y);

      ballArr.push(ball);
      ball.show();
    }
  }
}

// TO do 动起来
let count = 1;
let timer = setInterval(function () {
  // 清除画布
  c.clearRect(0, 0, canvas.width, canvas.height);

  // 更新位置
  for (let i = 0; i < ballArr.length; i++) {
    ballArr[i].show();
  }
  count++;
  if (count === times) {
    clearInterval(timer);
  }
}, 20);
