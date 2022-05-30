import { render } from '../render.js';
import FilmCardView from '../view/film-card-view.js';
import FilmContainerView from '../view/container-view.js';
import FilmsModel from '../model/movie-model.js';
import ShowMoreView from '../view/show-more-view.js';
import PopupFilmView from '../view/popup-film-view.js';

export default class FilmPresenter {
  #filmModel = new FilmsModel();
  #filmComponent = new FilmContainerView();
  #showMoreButton = new ShowMoreView();
  #filmPopup = new PopupFilmView(this.#filmModel.films);
  #filmContainer;
  #filmCards = [];

  init = (filmContainer, filmModel) => {
    this.#filmContainer = filmContainer;
    this.#filmModel = filmModel;
    this.#filmCards = [...this.#filmModel.films];

    for (const film of this.#filmModel.films) {
      const filmCard = new FilmCardView(film);
      render(filmCard, this.#filmComponent.element);

      filmCard.element.addEventListener('click', () => {
        this.#renderPopup(film);
      });
    }
    render(this.#filmComponent, this.#filmContainer);
    render(this.#showMoreButton, this.#filmContainer);
  };

  #renderPopup = (filmInfo) => {
    const body = document.querySelector('body');
    const popupFilm = new PopupFilmView(filmInfo);
    render(popupFilm, body);
    body.classList.add('hide-overflow');
  };

}