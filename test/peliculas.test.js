const test = require("ava");
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "../pelis.json");
const peliculas = JSON.parse(fs.readFileSync(filePath, "utf-8"));

const {
  getAllMovies,
  sortTitle,
  sortRating,
  sortTag,
  searchWord,
  tagMovie,
} = require("../pelis");

//1. Test para verificar que se cargan todas las películas
test("debería cargar todas las películas", (t) => {
  const movies = getAllMovies();
  t.is(movies.length, 32);
});

//2. Test para verificar el orden de las películas por título
test("debería ordenar las películas por título alfabéticamente", (t) => {
  const sortedMovies = sortTitle(peliculas);
  const titles = sortedMovies.map((movie) => movie.title);
  const sortedTitles = [...titles].sort((a, b) => a.localeCompare(b));
  t.deepEqual(titles, sortedTitles);
});

//-3. Test para verificar el orden de las películas por raiting ascendente
test("debería ordenar las películas por rating ascendente", (t) => {
  const sortedMovies = sortRating(peliculas);
  const ratings = sortedMovies.map((movie) => movie.rating);
  const sortedRatings = [...ratings].sort((a, b) => a - b);
  t.deepEqual(ratings, sortedRatings);
});

//4. Test para verificar el orden de las películas por el primer tag alfabéticamente
test("debería ordenar las películas por el primer tag alfabéticamente", (t) => {
  const sortedMovies = sortTag(peliculas);
  const firstTags = sortedMovies.map((movie) => movie.tags[0]);
  const sortedFirstTags = [...firstTags].sort((a, b) => a.localeCompare(b));
  t.deepEqual(firstTags, sortedFirstTags);
});

//5. Test para verificar las películas que contienen la palabra indicada en el título
test("debería devolver películas que contienen la palabra buscada (case insensitive)", (t) => {
  const resultado = searchWord(peliculas, "forrest");
  t.is(resultado.length, 1);
  t.true(
    resultado.every((movie) => movie.title.toLowerCase().includes("forrest"))
  );
});

test("debería devolver mensaje si no se pasa palabra para buscar", (t) => {
  const resultado = searchWord(peliculas, "");
  t.is(resultado, "Agregar palabra para buscar");
});

test("debería devolver mensaje si no hay coincidencias", (t) => {
  const resultado = searchWord(peliculas, "zombie");
  t.is(resultado, "Ninguna película contiene la palabra zombie en su título");
});

//6. Test para verificar las películas que contienen el tag indicado
test("debería devolver películas que contienen el tag indicado (case insensitive)", (t) => {
  const resultado = tagMovie(peliculas, "comedia");
  t.is(resultado.length, 3);
  t.true(
    resultado.every((movie) =>
      movie.tags.some((tag) => tag.toLowerCase() === "comedia")
    )
  );
});

test("debería devolver mensaje si no se pasa tag", (t) => {
  const resultado = tagMovie(peliculas, "");
  t.is(resultado, "Agregar tag");
});

test("debería devolver mensaje si no hay películas con el tag", (t) => {
  const resultado = tagMovie(peliculas, "terror");
  t.is(resultado, "Ninguna película contiene el tag terror");
});
