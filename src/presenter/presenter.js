import {render} from '../framework/render.js';
import FilmCardView from '../view/film-card-view.js';
import FilmContainerView from '../view/container-view.js';
import FilmsModel from '../model/movie-model.js';
import ShowMoreView from '../view/show-more-view.js';
import PopupFilmView from '../view/popup-film-view.js';
import CommentsModel from '../model/comment-model.js';
import CommentView from '../view/comment-film-view.js';
import NoFilmView from '../view/no-movies-view.js';
import SortView from '../view/sort-view.js';

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
  #NoFilms = new NoFilmView();
  #emptyContainer = new FilmContainerView();
  #sortView = new SortView();

  init = (filmContainer, filmModel, commentsModel) => {
    this.#filmContainer = filmContainer;
    this.#filmModel = filmModel;
    this.#commentsModel = commentsModel;
    this.#filmCards = [...this.#filmModel.films];

    render(this.#sortView, this.#filmContainer);
    render(this.#filmComponent, this.#filmContainer);

    this.#renderCardsFilms();

    if(this.#filmCards.length > FILM_COUNTS) {
      render(this.#showMoreButton, this.#filmContainer);

      this.#showMoreButton.element.addEventListener('click', this.#handleShowMoreButtonClick);
    }
  };

  #renderCardsFilms = () => {
    if (!this.#filmCards.length) {
      render(this.#NoFilms, this.#filmContainer);
      return;
    }
    for(let i = 0; i < Math.min(this.#filmCards.length, FILM_COUNTS); i++) {
      this.#renderFilm(this.#filmCards[i], this.#filmComponent.element);
    }
  };

  #renderFilm = (film, container) => {
    const filmCard = new FilmCardView(film);
    render(filmCard, container);

    filmCard.element.addEventListener('click', () => {
      this.#renderPopup(film);
    });

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

  #handleShowMoreButtonClick = () => {
    this.#filmCards
      .slice(this.#renderFilmCount, this.#renderFilmCount + FILM_COUNTS)
      .forEach((film) => this.#renderFilm(film, this.#filmComponent.element));

    this.#renderFilmCount += FILM_COUNTS;

    if (this.#renderFilmCount >= this.#filmCards.length) {
      this.#showMoreButton.element.remove();
      this.#showMoreButton.removeElement();
    }
  };
}


