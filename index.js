import {
  getBooks,
  getFoods,
  getMovies,
} from './search';

(async () => {
  console.log(
    await getBooks(),
    await getFoods('원효로1동'),
    await getMovies(),
  );
})();
