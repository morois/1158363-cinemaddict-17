import { render } from '../render.js';
import FilmCardView from '../view/film-card-view.js';
import FilmContainerView from '../view/container-view.js';
import FilmsModel from '../model/movie-model.js';

export default class BoardPresenter {
  constructor (filmContainer) {
    this.filmComponent = new FilmContainerView();
    this.filmContainer = filmContainer;
    this.filmModel = new FilmsModel();

    render(this.filmComponent, this.filmContainer);

  }

  renderFilmCard = () => {
    const films = this.filmModel.films;
    for (const film of films) {
      const filmCard = new FilmCardView(film);
      render(filmCard, this.filmComponent.getElement());
    }
  };
}
