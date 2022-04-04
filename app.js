// Add API URL
const APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
// Create a const with relative path of poster
const IMGPATH = 'https://image.tmdb.org/t/p/w1280';

const movies = document.querySelector('.movies');

// Create a function getMovie to get all information about movies
async function getmovies() {
  const resp = await fetch(APIURL);
  const respData = await resp.json();

  // Display the results of API movies
  console.log(respData);

  respData.results.forEach(movie => {
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

   movies.appendChild(movieElement);
  });

  return respData;

}

// Create a function to add some color to vote average
 function getColorByRate(vote) {
   if (vote >= 7.5) {
     return 'green';
   } else if (vote >= 5) {
     return 'orange';
   } else {
     return 'red'
   }
 }

getmovies();
