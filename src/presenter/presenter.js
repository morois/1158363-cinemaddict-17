import { render } from '../render.js';
import FilmCardView from '../view/film-card-view.js';
import FilmContainerView from '../view/container-view.js';
import ShowMoreView from '../view/show-more-view.js';
import PopupFilmView from '../view/popup-film-view.js';
import FilmsModel from '../model/movie-model.js';
import CommentsModel from '../model/comment-model.js';

export default class BoardPresenter {
  filmComponent = new FilmContainerView();

  init = (filmContainer) => {
    this.filmContainer = filmContainer;

    render(this.filmComponent, this.filmContainer);
    render(new FilmCardView(), this.filmComponent.getElement());
    render(new PopupFilmView(), this.filmComponent.getElement());
    render(new ShowMoreView(), this.filmComponent.getElement());
    render(new FilmsModel(), this.filmComponent.getElement());
    render(new CommentsModel(), this.filmComponent.getElement());
  };

  renderFilmCard = (filmDetails) => {
    const filmCard = new FilmCardView(filmDetails);
    
  };
}
