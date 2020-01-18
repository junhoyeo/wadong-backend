import { generateMovies } from './generate/index';

(async () => {
  console.log(
    await generateMovies(),
  );
})();
