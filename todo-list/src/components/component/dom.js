let todoEl = document.querySelector('.todo-list');
let listEl = todoEl.querySelector('.list');
let inputEl = todoEl.querySelector('input');
let todos = JSON.parse(localStorage.getItem('todos')) || [];

listEl.innerHTML = todos.reduce((res, cur) => res + /*html*/ `<li class="h-[85px] cursor-pointer select-none border-b px-8 text-3xl leading-[85px]">${cur}</li>`, '');

// left click: mark item as completed
listEl.onclick = e => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('line-through');
    e.target.classList.toggle('!text-[#d5d5d5]');
  }
};

// right click: disable menu
todoEl.addEventListener('contextmenu', e => e.preventDefault());

// right click: delete
listEl.onmouseup = e => {
  if (e.which !== 3) return;
  e.target.remove();
};

// add new todo item
inputEl.addEventListener('keyup', e => {
  let newItem = e.target.value.trim();
  if (e.key === 'Enter' && newItem.length) {
    listEl.insertAdjacentHTML('beforeend', /*html*/ `<li class="h-[85px] cursor-pointer select-none border-b px-8 text-3xl leading-[85px]">${newItem}</li>`);
    e.target.value = '';

    // update list in localStorage
    todos.push(newItem);
    localStorage.setItem('todos', JSON.stringify(todos));
  }
});
