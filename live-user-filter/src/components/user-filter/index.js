import { singleUser, userFilter } from './template.js';
import { USERS } from './fetchData.js';

// render all users to page
let users = USERS.reduce((res, cur) => res + singleUser(cur), '');
document.querySelector('body').insertAdjacentHTML('beforeend', userFilter(users));

// DOM Operation
let searchBox = document.querySelector('.searchBox');
let allUsers = document.querySelectorAll('.user');

// filter result when keyup
searchBox.onkeyup = () => {
  showAll();
  let searchItem = searchBox.value.toLowerCase();
  USERS.forEach((user, i) => {
    let name = user.first_name + ' ' + user.last_name;
    if (name.toLowerCase().includes(searchItem) && user.location.toLowerCase().includes(searchItem)) {
      allUsers[i].style.display = 'none';
    }
  });
};

// display all users
const showAll = () => allUsers.forEach(el => (el.style.display = 'flex'));
