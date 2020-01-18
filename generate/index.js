import exec from '../utils/exec';

import { getMovies } from '../search/movie';

export const generateMovies = async () => {
  const { stdout: result } = await exec('python3 generate/movie.py');
  const keywords = JSON.parse(result);

  const movies = await Promise.all(keywords.map(async (q) => getMovies(q)));
  return [].concat.apply([], movies);
};
