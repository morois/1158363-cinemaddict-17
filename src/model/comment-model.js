import { generateComment } from '../mock/comments.js';

const DATA_LENGTH = 5;

export default class CommentsModel {
  #comments = Array.from({length: DATA_LENGTH}, generateComment);

  get comments () {return this.#comments;}
}
