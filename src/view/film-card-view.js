import { createElement } from '../render.js';
import { humanizeDate, getTimeFromMins } from '../utils.js';

const filmCardViewTemplate = (film) => {

  const {
    comments,
    filmInfo: {
      title,
      totalRating,
      poster,
    },
    release: {
      date,
    },
    runtime,
    genre,
    description
  } = film;

  return (`<article class="film-card">
<a class="film-card__link">
  <h3 class="film-card__title">${title}</h3>
  <p class="film-card__rating">${totalRating}</p>
  <p class="film-card__info">
    <span class="film-card__year">${humanizeDate(date, 'YYYY')}</span>
    <span class="film-card__duration">${getTimeFromMins(runtime)}</span>
    <span class="film-card__genre">${genre}</span>
  </p>
  <img src=${poster} alt="" class="film-card__poster">
  <p class="film-card__description">${description}</p>
  <span class="film-card__comments">${comments.length} ${(comments.length === 1) ? 'comment': 'comments'}</span>
</a>
<div class="film-card__controls">
  <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
  <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
  <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
</div>
</article>
</div>
</section>
`);
};

export default class FilmCardView {

  constructor (film) {
    this.film = film;
  }

  get Template() {
    return filmCardViewTemplate(this.film);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}