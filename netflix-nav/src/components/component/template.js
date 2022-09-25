export const nav =
  /*html*/
  `<nav id="menu" class="fixed left-0 h-full w-1/4 font-muli">
      <span class="openMenu fa-solid fa-bars fixed left-5 top-5 cursor-pointer text-3xl text-black"></span>
      <div class="menu menuOpen relative h-full bg-black duration-400">
        <div class="absolute h-full w-[calc(100%-25px)] bg-[#e50914] duration-400"></div>
        <div class="absolute h-full w-[calc(100%-50px)] bg-white p-10 duration-400">
          <h1>NETFLIX</h1>
          <span class="closeMenu fa-solid fa-xmark absolute right-10 top-10 cursor-pointer text-2xl text-[#b3b3b3]"></span>
          <ul class="text-lg children:my-5">
            <li><a href="javascript:void()">TEAM</a></li>
            <li><a href="javascript:void()">LOCATIONS</a></li>
            <li>
              LIFE AT NETFLIX
              <ul class="ml-5 children:my-5">
                <li><a href="javascript:void()">NETFLIX CULTURE MEMO</a></li>
                <li><a href="javascript:void()">WORK LIFE BALANCE</a></li>
                <li><a href="javascript:void()">INCLUSION & DIVERSITY</a></li>
                <li><a href="javascript:void()">BLOG</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>`;
