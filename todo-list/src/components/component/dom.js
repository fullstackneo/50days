let todoEl = document.querySelector('.todo-list');
let listEl = todoEl.querySelector('.list');
let inputEl = todoEl.querySelector('input');

// left click: mark item as completed
listEl.onclick = e => {
  if (e.which !== 1) return;
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('line-through');
    e.target.classList.toggle('!text-[#d5d5d5]');
  }
};

// disable menu after right click
todoEl.addEventListener('contextmenu', e => e.preventDefault());

// right click: delete
listEl.onmouseup = e => {
  e.preventDefault();
  if (e.which !== 3) return;
  e.target.remove();
};

// add new todo
inputEl.addEventListener('keyup', e => {
  if (e.key === 'Enter') {
    listEl.insertAdjacentHTML('beforeend', /*html*/ `<li class="h-[85px] cursor-pointer select-none border-b px-8 text-3xl leading-[85px]">${e.target.value}</li>`);
    e.target.value = '';
  }
});
