import AbstractView from '../framework/view/abstract-view.js';

const commentsTemplate = (dataComments) => {

  const {
    author,
    comment,
    date,
    emotion,
  } = dataComments;

  return  (`
<li class="film-details__comment">
  <span class="film-details__comment-emoji">
    <img src="${emotion}"  width="55" height="55" alt="emoji-smile">
  </span>
  <div>
    <p class="film-details__comment-text">${comment}</p>
    <p class="film-details__comment-info">
      <span class="film-details__comment-author">${author}</span>
      <span class="film-details__comment-day">${date}</span>
      <button class="film-details__comment-delete">Delete</button>
    </p>
  </div>
</li>
`);
};

export default class CommentView extends AbstractView {
  #comment = {};

  constructor(comment) {
    super();
    this.#comment = comment;
  }

  get template() {
    return commentsTemplate(this.#comment);
  }

}
