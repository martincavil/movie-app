// Add API URL
const APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
// Create a const with relative path of poster
const IMGPATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=';


const main = document.querySelector('main');
const form = document.querySelector('form');
const search = document.querySelector("#search");

// Get all movies
getMovies(APIURL);

// Create a function getMovie to get all informations about movies
async function getMovies(url) {
  const resp = await fetch(url);
  const respData = await resp.json();

  showMovies(respData.results);
}
function showMovies(movies) {
  // Clear main
  main.innerHTML = "";

  // Movies Iteration
  movies.forEach(movie => {
    const { poster_path, title, vote_average } = movie
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');

    movieElement.innerHTML = `
    <div class="movie-img">
      <img
      src="${IMGPATH + poster_path}"
      alt=""
      >
    </div>
    <div class="movie-desc">
      <h3>${title}</h3>
      <span class="${getColorByRate(vote_average)}">${vote_average}</span>
    </div>`

   main.appendChild(movieElement);
  });

}


// Create a function to add some color to vote average
 function getColorByRate(vote) {
   if (vote >= 7.5) {
     return 'green';
   } else if (vote >= 5) {
     return 'orange';
   } else {
     return 'red';
   }
 }

// Create a function to get movies by search
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchChar = search.value;

  if (searchChar) {
    getMovies(SEARCHAPI + searchChar);
    search.value = "";
  }
});
