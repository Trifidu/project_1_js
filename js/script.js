"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt("Number of movies you have watched", "");

    while (
      personalMovieDB.count == "" ||
      personalMovieDB.count == null ||
      isNaN(personalMovieDB.count)
    ) {
      personalMovieDB.count = +prompt("Number of movies you have watched", "");
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      alert("You have watched too few movies");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      alert("You are classic viewer");
    } else if (personalMovieDB.count >= 30) {
      alert("You really like movies");
    } else {
      alert("Error");
    }
  },
  rememberMyMovies: function () {
    for (let i = 0; i < 2; i++) {
      const lastMovie = prompt("One of the last watched movie", "").trim(),
        stars = prompt("Rate this movie", "").trim();
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
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  writeYourGenres: function () {
    for (let i = 0; i < 1; i++) {
      //   let genre = prompt(`Your favorite genre by number ${i + 1} is`);
      //   if (genre === "" || genre == null) {
      //     console.log("error");
      //     i--;
      //   } else {
      //     personalMovieDB.genres[i] = genre;
      //   }
      // }
      // personalMovieDB.genres.forEach((item, i) => {
      //   console.log(`The favorite genre #${i + 1} - is ${item}`);
      // });

      let genres = prompt(`Enter your favorite genres separated by commas`);
      if (genres === "" || genres == null) {
        console.log("error");
        i--;
      } else {
        personalMovieDB.genres = genres.split(", ");
        personalMovieDB.genres.sort();
      }
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      return (personalMovieDB.privat = false);
    } else {
      return (personalMovieDB.privat = true);
    }
  },
};

// personalMovieDB.start();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.rememberMyMovies();
// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyDB();
