import AbstractView from '../framework/view/abstract-view.js';
import { humanizeDate, getTimeFromMins } from '../utils/film-utils.js';

const filmCardViewTemplate = (film) => {

  const {
    comments,
    film_info: {
      title,
      rating,
      poster,
      release: {
        date,
      },
      runtime,
      genre,
      description
    },
    user_details: {
      watchlist,
      alreadyWatched,
      favorite
    }
  } = film;

  return (`<article class="film-card">
<a class="film-card__link">
  <h3 class="film-card__title">${title}</h3>
  <p class="film-card__rating">${rating}</p>
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
  <button class="film-card__controls-item film-card__controls-item--add-to-watchlist ${watchlist ? 'film-card__controls-item--active' : ''}" type="button">Add to watchlist</button>
  <button class="film-card__controls-item film-card__controls-item--mark-as-watched ${alreadyWatched ? 'film-card__controls-item--active' : ''}" type="button">Mark as watched</button>
  <button class="film-card__controls-item film-card__controls-item--favorite ${favorite ? 'film-card__controls-item--active' : ''}" type="button">Mark as favorite</button>
</div>
</article>
`);
};

export default class FilmCardView extends AbstractView {
  #film = null;

  constructor (film) {
    super();
    this.#film = film;
  }

  get template() {
    return filmCardViewTemplate(this.#film);
  }

  setClickHandler = (callback) => {
    this._callback.click = callback;
    this.element.addEventListener('click', this.#clickHandler);
  };

  #clickHandler = (evt) => {
    evt.preventDefault();
    this._callback.click();
  };
}

