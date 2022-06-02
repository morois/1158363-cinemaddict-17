import { createElement } from '../render.js';
import { getTimeFromMins, humanizeDate } from '../utils.js';

const popupTemplate = (filmDetails) => {

  const {
    comments,
    'film_info' : {
      title,
      alternativeTitle,
      rating,
      poster,
      ageRating,
      director,
      writers,
      actors,
      release : {
        date,
        releaseCountry
      },
      runtime,
      genre,
      description
    }
  } = filmDetails;

  return (`<section class="film-details">
<form class="film-details__inner" action="" method="get">
  <div class="film-details__top-container">
    <div class="film-details__close">
      <button class="film-details__close-btn" type="button">close</button>
    </div>
    <div class="film-details__info-wrap">
      <div class="film-details__poster">
        <img class="film-details__poster-img" src="${poster}" alt="">

        <p class="film-details__age">${ageRating}</p>
      </div>

      <div class="film-details__info">
        <div class="film-details__info-head">
          <div class="film-details__title-wrap">
            <h3 class="film-details__title">${title}</h3>
            <p class="film-details__title-original">${alternativeTitle}</p>
          </div>

          <div class="film-details__rating">
            <p class="film-details__total-rating">${rating}</p>
          </div>
        </div>

        <table class="film-details__table">
          <tr class="film-details__row">
            <td class="film-details__term">Director</td>
            <td class="film-details__cell">${director}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Writers</td>
            <td class="film-details__cell">${writers}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Actors</td>
            <td class="film-details__cell">${actors}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Release Date</td>
            <td class="film-details__cell">${humanizeDate(date, 'DD MM YYYY ')}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Runtime</td>
            <td class="film-details__cell">${getTimeFromMins(runtime)}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Country</td>
            <td class="film-details__cell">${releaseCountry}</td>
          </tr>
          <tr class="film-details__row">
            <td class="film-details__term">Genres</td>
            <td class="film-details__cell">
              ${genre}
          </tr>
        </table>

        <p class="film-details__film-description">
          ${description}
        </p>
      </div>
    </div>

    <div class="film-details__bottom-container">
    <section class="film-details__comments-wrap">
      <h3 class="film-details__comments-title">${(comments.length === 1) ? 'Comment': 'Comments'} <span class="film-details__comments-count">${comments.length}</span></h3>
      <ul class="film-details__comments-list"></ul>
    </section>
  </div>
</form>
</form>
</section>`
  );
};

export default class PopupFilmView {
  #element = null;
  #filmDetails = null;

  constructor (filmDetails) {
    this.#filmDetails = filmDetails;
  }

  get template() {
    return popupTemplate(this.#filmDetails  );
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
