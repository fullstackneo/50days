import {} from './template.js';

let imgs = [
  'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
  'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
];

document.querySelector('.nav').onclick = e => {
  if (e.target.tagName === 'LI') {
    e.target.parentElement.querySelector('.text-primary').classList.remove('text-primary');
    e.target.classList.add('text-primary');
    let num = [...document.querySelectorAll('.nav li')].indexOf(e.target);
    // change background image
    document.querySelector('.pic').style.backgroundImage = `url('${imgs[num]}')`;
  }
};
