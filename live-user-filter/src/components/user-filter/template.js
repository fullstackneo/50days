export const userFilter = users =>
  /*html*/
  `<section class="w-[300px] overflow-hidden rounded shadow-lg">
    <div class="panel flex h-[155px] flex-col items-start justify-center bg-[#3e57db] px-5 text-white">
      <h2 class="font-bold">Live User Filter</h2>
      <p class="text-xs text-gray-300">Search by name and/or location</p>
      <input class="searchBox mt-5 h-9 w-full rounded-full bg-[#2b3d99] px-4 text-sm placeholder-gray-500 outline-none" type="text" placeholder="Search" />
    </div>
    <div class="users h-[400px] overflow-auto">${users}</div>
  </section>`;

export const singleUser = ({ avatar, location, first_name, last_name }) => /*html*/ `
<div class="user flex h-[100px] items-center justify-start border-b-1 px-5">
  <img src="${avatar}" class="h-[50px] w-[50px] rounded-full object-cover" alt="" />
  <div class="ml-3">
    <h4 class="mb-2 font-bold">${first_name} ${last_name}</h4>
    <p class="text-xs">${location}</p>
  </div>
</div>`;
