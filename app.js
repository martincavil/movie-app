// Add API URL
const APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
// Create a const with relative path of poster
const IMGPATH = 'https://image.tmdb.org/t/p/w1280';

// Create a function getMovie to get all information about movies
async function getmovies() {
  const resp = await fetch(APIURL);
  const respData = await resp.json();

  // Display the results of API movies
  console.log(respData);

  // Create an interation to play with each movie
  respData.results.forEach(movie => {
    const imgPoster = document.createElement('img'); // Add an element <img>
    imgPoster.src = IMGPATH + movie.poster_path; // Add the path of each movie to element <img>

    document.body.appendChild(imgPoster) // Display each movie poster
  })

  return respData;

}

getmovies();
