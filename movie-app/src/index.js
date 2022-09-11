document.querySelector('.search').addEventListener('keydown', e => {
  if (e.code === 'Enter') {
    fetchMovies(e.target.value);
    e.target.value = '';
  }
});

let movieComponent = movie => {
  let voteColor;
  if (movie.vote_average >= 7) {
    voteColor = 'text-green';
  } else if (movie.vote_average >= 6) {
    voteColor = 'text-orange';
  } else {
    voteColor = 'text-red';
  }

  return /*html*/ `
    <div class="movie relative m-[15px] h-[560px] w-[300px] bg-primary rounded-sm group overflow-hidden ">
        <img class="w-full h-[450px]" src="https://image.tmdb.org/t/p/w1280/${movie.poster_path}" alt="${movie.title}" />
        <h2 class="w-[190px] m-[13px] text-[20px] text-[#eeeeee] font-semibold">${movie.title}</h2>
        <p class="absolute font-[700] ${voteColor} bg-background right-[20px] bottom-[40px] py-1 px-2 rounded-md ">${movie.vote_average.toFixed(
    1
  )}</p>
        <div class="absolute top-full left-0 px-7 max-h-full
         py-10 bg-white -translate-y-0 duration-500 group-hover:-translate-y-full">
          <p class="font-bold my-2 text-xl">Overview</p>
          <p>${movie.overview}</p>
        </div>
      </div>`;
};

const fetchMovies = async keyword => {
  let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=6bb849f769f65f07b355667055073f28&query=${keyword}&page=1`);

  const { results } = await response.json();
  document.querySelector('.movies').innerHTML = results.reduce((res, cur) => res + movieComponent(cur), '');
};

fetchMovies('hello');
