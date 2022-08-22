let contentEls = document.querySelector('.content');

const fun1 = async e => {
  if (e.target.className === 'panel') {
    // remove stretch class from all the child el
    contentEls.querySelectorAll('.panel').forEach(div => {
      div.classList.remove('stretch');
      div.querySelector('h2').classList.remove('show');
    });

    //add the stretch class
    e.target.classList.add('stretch');

    const showText = () => {
      e.target.querySelector('h2').classList.add('show');
    };

    let textDelay = setTimeout(showText, 650);
  }
};

contentEls.addEventListener('click', fun1);


// collect all the info
let backgroundImgs = [
  {
    title: 'Explore The World',
    url: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  },
  {
    title: 'Wild Forest',
    url: 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  },
  {
    title: 'Sunny Beach',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80',
  },
  {
    title: 'City on Winter',
    url: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
  },
  {
    title: 'Mountains Clouds',
    url: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  },
];

(() => {
  // create all the panels
    contentEls.innerHTML = `
  <div class="panel stretch">
          <h2 class="show"></h2>
        </div>
        <div class="panel">
          <h2></h2>
        </div>
        <div class="panel">
          <h2></h2>
        </div>
        <div class="panel">
          <h2></h2>
        </div>
        <div class="panel">
          <h2></h2>
        </div>`;

  // fill in background images and title
  contentEls.querySelectorAll('.panel').forEach((div, i) => {
    div.style.backgroundImage = `url(${backgroundImgs[i].url})`;
    div.querySelector('h2').innerText = backgroundImgs[i].title;
  });
})();
