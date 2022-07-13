"use strict";

let numberOfMovies;
function start() {
  numberOfMovies = +prompt("Number of movies you have watched", "");

  while (
    numberOfMovies == "" ||
    numberOfMovies == null ||
    isNaN(numberOfMovies)
  ) {
    numberOfMovies = +prompt("Number of movies you have watched", "");
  }
}

start();

const personalMovieDB = {
  count: numberOfMovies,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert("You have watched too few movies");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("You are classic viewer");
  } else if (personalMovieDB.count >= 30) {
    alert("You really like movies");
  } else {
    alert("Error");
  }
}

// detectPersonalLevel();

function rememberMyMovies() {
  for (let i = 0; i < 2; i++) {
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
}

// rememberMyMovies();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

// showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 0; i < 3; i++) {
    personalMovieDB.genres[i] = prompt(
      `Your favorite genre by number ${i + 1} is`
    );
  }
}

writeYourGenres();
showMyDB(personalMovieDB.privat);
