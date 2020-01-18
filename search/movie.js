import axios from 'axios';
import childProcess from 'child_process';
import { promisify } from 'util';

const exec = promisify(childProcess.exec);

export const getMovies = async (query) => {
  const { stdout: result } = await exec(`python3 search/movie.py ${query}`);
  return JSON.parse(result);
};
