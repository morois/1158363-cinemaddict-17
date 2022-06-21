import { generateComments } from '../mock/comments.js';

const FILMS_AMOUNT = 10;

export default class CommentModel {
  #comments = generateComments(FILMS_AMOUNT);

  get comments() {
    return this.#comments;
  }
}
