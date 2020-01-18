import exec from '../utils/exec';

import { getBooks } from '../search/book';
import { getFoods } from '../search/food';
import { getMovies } from '../search/movie';

export const generateMovies = async () => {
  const { stdout: result } = await exec('python3 generate/movie.py');
  const keywords = JSON.parse(result);

  const movies = await Promise.all(keywords.map(async (q) => getMovies(q)));
  return [].concat.apply([], movies);
};

export const generateBooks = async () => {
  const keywords = ['클래식', '노인과 바다', '여행', '애자일', '일', '트렌드', '목소리', '인문학'];
  const books = await Promise.all(keywords.map(async (q) => getBooks(q)));
  return [].concat.apply([], books);
};

export const generateFoods = async () => {
  const keywords = ['용산', '원효로1동', '선린'];
  const foods = await Promise.all(keywords.map(async (q) => getFoods(q)));
  return [].concat.apply([], foods);
};
