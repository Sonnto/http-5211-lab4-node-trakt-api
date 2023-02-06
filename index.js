//import required modules
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();
const trakt = require("./modules/trakt/api");

//set up Express app
const app = express();
const port = process.env.PORT || 8888;

//define important folders
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
//setup public folder
app.use(express.static(path.join(__dirname, "public")));

//PAGE ROUTES
app.get("/", async (request, response) => {
  let movieList = await trakt.getTrendingMovies();
  console.log(movieList);
  response.render("index", { title: "Movies", movies: movieList });
});

app.get("/movie-studios", async (request, response) => {
  let imdbId = request.query.id;
  let studioList = await trakt.getMovieStudios(imdbId);
  console.log(studioList);
  response.render("studios", { title: "Studios", studios: studioList });
});

app.get("/shows-popular", async (request, response) => {
  let showList = await trakt.getPopularShows();
  console.log(showList);
  response.render("shows", { title: "Shows", shows: showList });
});

//set up server listening
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
