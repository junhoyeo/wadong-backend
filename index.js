import {
  generateBooks,
  generateFoods,
  generateMovies,
} from './generate';

(async () => {
  console.log(
    await generateBooks(),
    await generateFoods(),
    await generateMovies(),
  );
})();
