import { generateMovie } from '../mock/movies.js';

const DATA_LENGTH = 10;

export default class FilmsModel {
  #films = Array.from({length: DATA_LENGTH}, generateMovie);

  get films () {return this.#films;}
}
