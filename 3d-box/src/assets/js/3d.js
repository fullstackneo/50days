// nth-piece html
const piece = n => {
  let offsetX = -125 * parseInt(n % 4);
  let offsetY = -125 * parseInt(n / 4);
  return /*html*/ `<div class="piece relative h-[125px] w-[125px] bg-[url('https://media.giphy.com/media/EZqwsBSPlvSda/giphy.gif')] bg-[length:500px_500px] bg-no-repeat duration-500" style="background-position:left ${offsetX}px top ${offsetY}px">
    <span class="bottom-face absolute content-[''] w-full h-5 top-full left-[10px] bg-primary skew-x-[45deg]"></span>
    <span class="right-face absolute content-[''] h-full w-5 left-full top-[10px] bg-secondary skew-y-[45deg]"></span>
      </div>`;
};

// concat all pieces
const generatePieces = () => {
  let piecesHTML = '';
  for (let i = 0; i < 16; i++) {
    piecesHTML += piece(i);
  }
  return piecesHTML;
};

// ** DOM Operations **

// insert all the pieces into page
document.querySelector('.pieces').innerHTML = generatePieces();

document.querySelector('.magicBtn').onmouseup = () => {
  // change pieces' container size
  document.querySelector('.pieces').classList.toggle('!w-[630px]');
  // change piece's style
  document.querySelectorAll('.piece').forEach(el => {
    el.classList.toggle('-translate-y-5');
    el.classList.toggle('rotate-[360deg]');
    el.classList.toggle('m-4');
  });
};
