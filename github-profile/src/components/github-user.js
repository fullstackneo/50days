let userHTML = data => /*html*/ ` <div
  class="user my-4 flex w-[450px] flex-col items-center justify-center rounded-xl bg-primary py-10 px-14 text-white md:w-[700px] md:flex-row"
>
  <div id="avatar" class="h-[144px] w-[144px] min-w-[144px] rounded-full bg-[#2a2a72] p-2">
    <img class="h-full w-full overflow-hidden rounded-full bg-white" src=${data.avatar_url} alt=${data.name} />
  </div>
  <div class="my-2 flex h-full w-full flex-col items-start justify-center space-y-5 md:pl-8">
    <p class="text-2xl">${data.name}</p>
    <p>${data.login}</p>
    <div class="flex items-center justify-start text-sm font-semibold">
      <p class="mr-9"><span class='mr-2'>${data.followers}</span>Followers</p>
      <p class="mr-9"><span class='mr-2'>${data.following}</span>Following</p>
      <p class="mr-9"><span class='mr-2'>${data.public_repos}</span>Repos</p>
    </div>
    <div class="repos flex flex-wrap items-center justify-start text-[11px]"></div>
  </div>
</div>`;

document.querySelector('input').addEventListener('keyup', async e => {
  e.target.dataset.content = e.target.value;
  if (e.code === 'Enter') {
    // remove old user element
    document.querySelector('.user')?.remove();

    // insert user-info html fragment
    await fetch(`https://api.github.com/users/${e.target.dataset.content}`)
      .then(res => res.json())
      .then(data => document.querySelector('.user-profile').insertAdjacentHTML('beforeend', userHTML(data)));

    // insert repo-info html
    await fetch(`https://api.github.com/users/${e.target.dataset.content}/repos?page=1`)
      .then(res => res.json())
      .then(data => {
        let repoHTML = data.reduce((res, cur) => res + `<span class="mr-2 mb-2 bg-[#212a72] py-1 px-2">${cur.name}</span>`, '');

        document.querySelector('.repos').innerHTML = repoHTML;
      });

    e.target.value = '';
    e.target.dataset.content = '';
  }
});
