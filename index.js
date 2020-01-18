import {
  getBooks,
  getFoods,
  getMovies,
} from './search';

(async () => {
  console.log(
    await getBooks('노인과바다'),
    await getFoods('원효로1동'),
    await getMovies(),
  );
})();
