"use strict";

const numberOfFilms = +prompt("Number of films", "");
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const a = prompt("last film", ""),
  b = prompt("stars", ""),
  c = prompt("last film", ""),
  d = prompt("stars", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
