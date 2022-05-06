import { render } from '../render.js';
import FilmCardView from '../view/film-card-view.js';
import FilmContainerView from '../view/container-view.js';
import ShowMoreView from '../view/show-more-view.js';
import PopupFilmView from '../view/popup-film-view.js';

export default class BoardPresenter {
  boardComponent = new FilmContainerView();

  init = (boardContainer) => {
    this.boardContainer = boardContainer;

    render(this.boardComponent, this.boardContainer);
    render(new FilmCardView(), this.boardComponent.getElement());
    render(new PopupFilmView(), this.boardComponent.getElement());
    render(new ShowMoreView(), this.boardComponent.getElement());
  };
}
