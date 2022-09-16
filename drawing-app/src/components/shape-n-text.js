// let drawingComponent = /*html*/ `
// `;

// document.querySelector('body').innerHTML = drawingComponent;

// let panelEl = document.querySelector('.panel');
// let numEl = panelEl.querySelector('div:nth-child(2)');

// let changeNum = value => {
//   let num = +numEl.textContent;
//   if (num <= 5 && value < 0) return;
//   if (num >= 50 && value > 0) return;
//   numEl.textContent = value < 0 ? num - 5 : num + 5;
// };

// 清空画布
// let clean = () => canvasEl.clear();

// 必须在canvas标签中标width height。css中写width height会让线条失真
// 1. draw line 画线
let canvasEl = document.querySelector('canvas');
let c = canvasEl.getContext('2d');
c.beginPath();
c.moveTo(50, 50);
c.lineTo(50, 200);
c.strokeStyle = 'green';
c.lineWidth = 1;
c.stroke();
c.closePath();

c.beginPath();
c.moveTo(50, 200);
c.lineTo(200, 200);
c.strokeStyle = 'red';
c.lineWidth = 1;
c.stroke();
c.closePath();

c.beginPath();
c.moveTo(200, 200);
c.lineTo(200, 50);
c.strokeStyle = 'blue';
c.lineWidth = 1;
c.stroke();
c.closePath();

c.beginPath();
c.moveTo(200, 50);
c.lineTo(50, 50);
c.strokeStyle = 'orange';
c.lineWidth = 1;
c.stroke();
c.closePath();

// 2. 函数画直线
function drawLine(x1, y1, x2, y2, color, width) {
  c.beginPath();
  c.moveTo(x1, y1);
  c.lineTo(x2, y2);
  c.strokeStyle = color;
  c.lineWidth = 1;
  c.stroke();
  c.closePath();
}

drawLine(200, 200, 50, 50, 'purple', 1);

// 3. 直线连用
// lineTo 多使用
c.beginPath();
c.moveTo(250, 300);
c.lineTo(350, 300);
c.lineTo(350, 400);
// c.lineTo(250, 400);
c.lineTo(250, 300);
c.strokeStyle = 'red';
c.lineWidth = 1;
c.stroke();
c.closePath();

// 虚线
for (let i = 1; i <= 25; i++) {
  // 直虚线
  drawLine(100 + 10 * i, 100, 105 + 10 * i, 100, 'red', 2);
  // 45度虚线
  drawLine(200 + 10 * i, 200 + 10 * i, 205 + 10 * i, 205 + 10 * i, 'red', 2);
}

// 矩形
// c.rect(x, y, width, height)
c.rect(130, 100, 200, 200);
c.strokeStyle = 'green';
c.lineWidth = 5;
c.fillStyle = 'red';
// 如果需要描边和填充，先填充
c.fill();
// 再描边
c.stroke();

// 实心矩形 - 填充矩形
c.fillStyle = 'pink';
c.fillRect(200, 200, 200, 200);

// 空心 - 描边矩形
c.stokeStyle = 'yellow';
c.strokeRect(400, 400, 200, 200);

// 画统计图
// c.beginPath();
// c.strokeStyle = 'black';
// c.lineWidth = 5;
// c.moveTo(120, 300);
// c.lineTo(120, 600);
// c.lineTo(500, 600);
// c.stroke();
// c.closePath();

// c.fillStyle = 'black';
// c.fillRect(200, 400, 20, 200);

// 生成随机颜色
// '#' + Math.floor(Math.random() * 0xfffff).toString(16);

// 清除画布
// c.clearRect(0, 0, 400, 600);

// 画圆circle
// let arc = (x, y, radius, startAngle, endAngle, counterclockwise) => {};
// startAggle 0从90度开始， 终点Math.PI*2

c.beginPath();
c.arc(250, 250, 200, 0, Math.PI * 2, false);
c.strokeStyle = 'red';
c.fillStyle = 'gold';
c.lineWidth = 10;
c.fill();
c.stroke();

// 画圆弧
c.beginPath();
c.arc(250, 250, 200, 0, Math.PI, true);
c.strokeStyle = 'green';
c.fillStyle = 'red';
c.lineWidth = 10;
c.fill();
c.stroke();

// 圆形统计图
let arc = (x, y, radius, startAngle, endAngle, counterclockwise) => {
  c.beginPath();
  c.arc(x, y, radius, startAngle, endAngle, counterclockwise);
  c.strokeStyle = 'black';
  c.fillStyle = 'gold';
  c.lineWidth = 10;
  c.fill();
  c.stroke();
};
// 动态画圆圈/统计图
// (() => {
//   let x = 0;
//   let y = 0.1;
//   let timer = setInterval(() => {
//     arc(250, 250, 200, x, y, false);
//     x = y;
//     y += 0.1;
//     if (y >= Math.PI() * 2) {
//       clearInterval(timer);
//     }
//   }, 10);
// })();

c.clearRect(0, 0, 600, 600);

// 画文字
// c.fillText(text, x, y, maxWidth(optional));
// maxWidth 允许的最大文本宽度，可选 （会横向挤压文字）
c.font = '100px bold';
c.font = '100px arial';
c.fillStyle = 'green';

c.fillText('hello', 250, 250, 200);

// * 空心文字
// c.strokeStyle = 'red';
c.lineWidth = 2;
c.font = '150px serif';
c.strokeStyle = 'blue';
c.strokeText('你好', 0, 300);

c.strokeText('hello 啊', 100, 110);
// c.clearRect(0, 0, 700, 800);

// * 线性渐变
let gradient = c.createLinearGradient(0, 800, canvasEl.width, 800);
gradient.addColorStop('0', 'blue');
gradient.addColorStop('0.5', 'red');
gradient.addColorStop('0.8', 'blue');
gradient.addColorStop('1', 'pink');

// 实心渐变
c.fillStyle = gradient;
c.fillText('你好', 200, 500);

// 空心渐变
c.strokeStyle = gradient;
c.strokeText('hello 啊', 200, 610);
c.clearRect(0, 0, 700, 800);

// * 文字位置
c.font = '100px serif';
//根据（400，300）坐标进行水平对齐 left/start right/end center
c.textAlign = 'center';
// 进行垂直对齐 top bottom middle
c.textBaseline = 'middle';
c.fillText('Hello, World!', 400, 350);

c.beginPath();
c.setLineDash([15, 15]);
c.moveTo(400, 0);
c.lineTo(400, 700);
c.stroke();

c.beginPath();
c.moveTo(0, 0);
c.lineTo(800, 700);
c.stroke();
c.closePath();

c.beginPath();
c.moveTo(800, 0);
c.lineTo(0, 700);
c.stroke();

c.beginPath();
c.moveTo(0, 350);
c.lineTo(800, 350);
c.stroke();
