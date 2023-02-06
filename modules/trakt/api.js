const trakt = "https://api.trakt.tv"; //base URL for any Trakt API requests

//ENVIRONMENT VARIABLES can be accessed with process.env.<environment_variable>
/*
 * Functions for Trakt API requests.
 */
async function getTrendingMovies() {
  let reqUrl = `${trakt}/movies/trending`; //the GET URL for getting the trending movies as provided by Trakt
  //For Fetch, other options are:
  // * body: <data for POST request>
  var response = await fetch(reqUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "trakt-api-version": "2",
      "trakt-api-key": process.env.TRAKT_CLIENT_ID,
    },
  });
  //The JSON response data will be found in response.json();
  return await response.json();
}

async function getMovieStudios(imdbId) {
  let reqUrl = `${trakt}/movies/${imdbId}/studios`;
  var response = await fetch(reqUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "trakt-api-version": "2",
      "trakt-api-key": process.env.TRAKT_CLIENT_ID,
    },
  });
  return await response.json();
}

async function getPopularShows() {
  let reqUrl = `${trakt}/shows/popular?page=1&limit=15`;
  var response = await fetch(reqUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "trakt-api-version": "2",
      "trakt-api-key": process.env.TRAKT_CLIENT_ID,
    },
  });
  return await response.json();
}
//EXPORT any functions to be used outside this file
module.exports = {
  getTrendingMovies,
  getMovieStudios,
  getPopularShows,
};
