import { render } from '../render.js';
import FilmCardView from '../view/film-card-view.js';
import FilmContainerView from '../view/container-view.js';
import FilmsModel from '../model/movie-model.js';
import ShowMoreView from '../view/show-more-view.js';
import PopupFilmView from '../view/popup-film-view.js';
import CommentsModel from '../model/comment-model.js';
import CommentView from '../view/comment-film-view.js';

const FILM_COUNTS = 5;

export default class FilmPresenter {
  #filmModel = new FilmsModel();
  #filmComponent = new FilmContainerView();
  #showMoreButton = new ShowMoreView();
  #commentsModel = new CommentsModel();
  #filmPopup = new PopupFilmView(this.#filmModel.films);
  #filmContainer;
  #filmCards = [];
  #filmComments = [];
  #renderFilmCount = FILM_COUNTS;

  init = (filmContainer, filmModel, commentsModel) => {
    this.#filmContainer = filmContainer;
    this.#filmModel = filmModel;
    this.#commentsModel = commentsModel;
    this.#filmCards = [...this.#filmModel.films];

    this.#filmCards.forEach((film) => {
      const filmCard = new FilmCardView(film);
      render(filmCard, this.#filmComponent.element);

      filmCard.element.addEventListener('click', () => {
        this.#renderPopup(film);
      });
    });

    render(this.#filmComponent, this.#filmContainer);

    if(this.#filmCards.length > FILM_COUNTS) {
      render(this.#showMoreButton, this.#filmContainer);

      this.#showMoreButton.element.addEventListener('click', this.#handleShowMoreButtonClick);
    }
  };

  #renderPopup = (filmInfo) => {
    const body = document.querySelector('body');
    const popupFilm = new PopupFilmView(filmInfo);

    this.#getComments(popupFilm);

    render(popupFilm, body);
    body.classList.add('hide-overflow');

    const closePopup = () => {
      popupFilm.element.parentNode.removeChild(popupFilm.element);
      popupFilm.removeElement();
      body.classList.remove('hide-overflow');
    };

    const popupCloseBtn = popupFilm.element.querySelector('.film-details__close-btn');
    popupCloseBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closePopup();
    });

    const closePopupPressEsc = (e) => {
      e.preventDefault();
      if (e.key === 'Escape') {
        closePopup();
      }
    };
    body.addEventListener('keydown', closePopupPressEsc);
  };

  #getComments = (template) => {
    this.#commentsModel.comments.forEach((comment) => {
      const commentCard = new CommentView(comment);
      render(commentCard, template.element);
    });
  };

  #handleShowMoreButtonClick = (evt) => {
    evt.preventDefault();
    console.log('Good');
  }
}


