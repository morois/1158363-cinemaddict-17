import { generateMovieFish } from '../fish_files/movie-fish.js';

export default class FilmsModel {
    films = Array.from({length: 5}, generateMovieFish);

    getFilms () => this.films;
}