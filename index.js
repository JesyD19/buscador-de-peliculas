//Este módulo (index.js) tiene como propósito
//recibir el input por parte del usuario
//entenderlo y delegar la responsabilidad al módulo pelis.js

const {
  getAllMovies,
  sortTitle,
  sortRating,
  sortTag,
  searchWord,
  tagMovie,
} = require("./pelis");

const gettingInput = () => {
  const [, , ...args] = process.argv;
  const [parameter, property] = args;
  return {
    parameter,
    property,
  };
};

const givingResults = (obj) => {
  const { parameter, property } = obj;
  const movies = getAllMovies();
  const map = {
    undefined: movies,
    "--sort":
      property === "title"
        ? () => sortTitle(movies)
        : property === "rating"
        ? () => sortRating(movies)
        : property === "tags"
        ? () => sortTag(movies)
        : "Agregar una propiedad correcta",
    "--search": () => searchWord(movies, property),
    "--tag": () => tagMovie(movies, property),
  };
  const executor = map[parameter]();
  return executor;
};

function main() {
  const input = gettingInput();
  const result = givingResults(input);
  console.table(result);
}

main();
