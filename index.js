import {
  generateBooks,
  generateFoods,
  generateMovies,
} from './generate';

(async () => {
  const books = await generateBooks();
  const foods = await generateFoods();
  const movies = await generateMovies();

  console.log(JSON.stringify({
    books,
    foods,
    movies,
  }));
})();
