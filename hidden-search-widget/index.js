let searchBoxEl = document.querySelector('.search-box');
let searchContentEl = document.querySelector('.search-content');
let searchBtn = document.querySelector('.search-box span');

const toggleInput = () => {
  searchBoxEl.classList.toggle('active');
  if (searchBoxEl.classList.contains('active')) {
    searchContentEl.style.flex = '0';
    searchContentEl.style.padding = '0';
  } else {
    searchContentEl.style.flex = '5';
    searchContentEl.style.padding = '0 15px';
  }
};

searchBtn.addEventListener('click', toggleInput);
