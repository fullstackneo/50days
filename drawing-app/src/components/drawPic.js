let canvasEl = document.querySelector('canvas');
let c = canvasEl.getContext('2d');

// 创建图片
let img = new Image();
img.src = 'https://img95.699pic.com/photo/40007/4125.jpg_wh300.jpg';

// 图片加载成功触发
img.onload = function () {
  console.log(img.width, img.height);
};

// * 画图 - drawImage三种方式
// 3参数 - drawImage(img,x,y)
// c.drawImage(img, 0, 0);

// 5参数 - drawImage(img,x,y,width,height)
// c.drawImage(img, 0, 0, 300, 200);

// 9参数 - 裁剪图片crop  (img, cropX1,cropY1, cropWidth, cropHeight, positionX1, positionY1, width(optional), height(optional))
// c.drawImage(img, 0, 0, 300, 300, 10, 10, 110, 110);

// * getImageData(startX, startY,width,height) 开始获取的位置，和宽高
// 拷贝画布指定矩形的像素数据
c.fillStyle = 'red';
c.fillRect(0, 0, 100, 100);

// 10*10 获取100个像素点，每个像素点颜色用sRGB。四个值顺序分别为RGBS， S为饱和度，一共返回400个值
let copy = c.getImageData(0, 0, 10, 10);

// * putImageData()方法，把刚刚截取的像素数据放置在新的位置
c.putImageData(copy, 790, 690);

// 高阶 - 可以处理图片
