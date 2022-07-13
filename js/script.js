"use strict";

const numberOfMovies = +prompt("Number of films", "");
const personalMovieDB = {
  count: numberOfMovies,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

if (personalMovieDB.count < 10) {
  alert("You have watched too few movies");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  alert("You are classic viewer");
} else if (personalMovieDB.count >= 30) {
  alert("You really like movies");
} else {
  alert("Error");
}

for (let i = 0; i < numberOfMovies; i++) {
  const lastMovie = prompt("One of the last watched movie", ""),
    stars = prompt("Rate this movie", "");
  if (
    lastMovie != null &&
    stars != null &&
    lastMovie != "" &&
    stars != "" &&
    lastMovie.length < 50
  ) {
    personalMovieDB.movies[lastMovie] = stars;
    console.log("done");
  } else {
    console.log("error");
    i--;
  }
}

console.log(personalMovieDB);
