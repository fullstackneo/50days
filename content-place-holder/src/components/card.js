let insertData = (cardEl, data) => {
  // remove extra loading bar from DOM
  cardEl.querySelectorAll('.loading').forEach(el => el.remove());

  // insert card img
  cardEl.querySelector('.card-header').innerHTML = `<img src=${data.img} class='h-full w-full object-cover' alt="" />`;

  // insert title and info
  cardEl.querySelector('.card-content').insertAdjacentHTML(
    'afterbegin',
    /*html*/ `
      <h2 class="mt-[20px] mb-[10px] text-[18px] font-[650]">${data.title}</h2>
      <p class="text-[16px] font-[400] leading-[18px] text-gray-500">${data.info}</p>`
  );

  // insert avatar,
  cardEl.querySelector('.avatar').innerHTML = /*html*/ `<img class="h-full w-full" src=${data.avatar} alt="Lorem pic" />`;

  // insert name and date
  cardEl.querySelector('.profile').insertAdjacentHTML(
    'beforeend',
    `<div>
    <p class="font-[600]">${data.name}</p>
    <p class="text-[11px] text-gray-400">${data.date}</p>
  </div>`
  );
};

let blankCard = /*html*/ `
<section class="card flex h-[400px] w-[350px] flex-col items-center justify-center overflow-hidden rounded-xl shadow-lg">
  <div class="card-header bg-move h-1/2 w-full">
  </div>
  <div class="card-content h-1/2 w-full bg-white px-[25px]">
    <div class="loading bg-move my-[30px] h-[10px] w-full rounded-full"></div>
    <div class="loading bg-move my-2 h-[10px] w-full rounded-full"></div>
    <div class="loading bg-move my-2 h-[10px] w-full rounded-full"></div>
    <div class="loading bg-move my-2 h-[10px] w-full rounded-full"></div>
    <div class="profile justify-begin mt-[20px] flex items-center">
      <div class="avatar bg-move mr-4 h-[40px] w-[40px] rounded-full overflow-hidden">  
      </div>
       <div class="loading flex flex-col items-center justify-center space-y-2">
       <p class="loading bg-move h-[10px] w-[100px] rounded-full"></p>
       <p class="loading bg-move h-[10px] w-[100px] rounded-full"></p>
    </div>   
    </div>
  </div>
</section>`;

// insert blankCard into document
document.querySelector('body').innerHTML = blankCard;

// fetch data
let fetched = [
  {
    img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80',
    title: 'Lorem ipsum dolor sit amet',
    info: 'Lorem ipsum dolor sit ame Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis',
    name: 'John Doe',
    date: 'Oct 08, 2020',
    avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
  },
];

// insert data into blankCard
setTimeout(() => {
  insertData(document.querySelector('.card'), fetched[0]);
}, 2000);
