const fs = require("fs");

//Muestra todas la películas
const getAllMovies = () => {
  const movies = JSON.parse(
    fs.readFileSync(__dirname + "/pelis.json", "utf-8")
  );
  return movies;
};

//Muestra las películas ordenadas por título alfabéticamente
const sortTitle = (m) => {
  return [...m].sort((a, b) => a.title.localeCompare(b.title));
};

//Muestra las películas ordenadas por raiting de manera ascendente
const sortRating = (m) => {
  return [...m].sort((a, b) => a.rating - b.rating);
};

//Muestra las películas ordenadas por tags usando el primer tag de cada película
const sortTag = (m) => {
  return [...m].sort((a, b) => a.tags[0].localeCompare(b.tags[0]));
};

//Muestra las películas que contienen la palabra indicada en el título
const searchWord = (m, word) => {
  if (!word) return "Agregar palabra para buscar";
  const search = [...m].filter((movie) =>
    movie.title.toLowerCase().includes(word.toLowerCase())
  );
  if (!search.length) {
    return `Ninguna película contiene la palabra ${word} en su título`;
  }
  return search;
};

//Muestra las películas que contienen el tag indicado
const tagMovie = (m, tag) => {
  if (!tag) return "Agregar tag";
  const tagMovies = [...m].filter((movie) =>
    movie.tags.some((m) => m.toLowerCase() === tag.toLowerCase())
  );
  if (!tagMovies.length) {
    return `Ninguna película contiene el tag ${tag}`;
  }
  return tagMovies;
};

module.exports = {
  getAllMovies,
  sortTitle,
  sortRating,
  sortTag,
  searchWord,
  tagMovie,
};
