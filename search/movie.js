import axios from 'axios';

import exec from '../utils/exec';

export const getMovies = async (query) => {
  const { stdout: result } = await exec(`python3 search/movie.py ${query}`);
  return JSON.parse(result);
};
