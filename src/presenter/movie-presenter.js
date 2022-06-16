import { render, RenderPosition, remove, replace } from '../framework/render.js';
import FilmContainerView from '../view/film-container-view.js';
import NoFilmView from '../view/no-movies-view.js';
import ShowMoreView from '../view/show-more-view.js';
import FilmCardView from '../view/film-card-view.js';
import CommentView from '../view/comment-film-view.js';
import PopupFilmView from '../view/popup-film-view.js';

const NUMBER_OF_MOVIE_CARDS = 5;

export default class MoviePresenter {
  #movieModel = null;
  #movieListContainer = null;
  #commentsModel = null;
  #movieCardData = [];
  #showMoreBtn = new ShowMoreView();
  #noMovieNow = new NoFilmView();
  #filmContainerView = new FilmContainerView();
  #userComments = [];
  #movieComponent = null;

  #numberOfMovieCardsToRender = NUMBER_OF_MOVIE_CARDS;

  constructor (movieListContainer) {
    this.#movieListContainer = movieListContainer;
  }

  init (movieModel, commentsModel) {
    this.#movieModel = movieModel;
    this.#commentsModel = commentsModel;

    // const prevMovieComponent = this.#movieComponent;

    // this.#movieComponent = new FilmCardView(this.#movieCardData);

    // if(!prevMovieComponent) {
    //   render(this.#movieComponent, this.#movieListContainer);
    //   return;
    // }

    this.#movieCardData = [...this.#movieModel.films];
    this.#userComments = [...this.#commentsModel.comments];

    this.#renderingMovieCard();

    if(this.#movieCardData.length > this.#numberOfMovieCardsToRender) {
      render(this.#showMoreBtn, this.#movieListContainer, RenderPosition.AFTEREND);
      this.#showMoreBtn.setClickHandler(this.#removeShowMoreBtn);
    }

  }

  #renderMovie = (movieData, container) => {
    const movieCard = new FilmCardView(movieData);
    render(movieCard, container);
    // movieCard.element.addEventListener('click', () => {
    //   this.#renderPopup(movieData);
    // });
    movieCard.setClickHandler(this.#renderPopup(movieData));
  };

  #renderingMovieCard = () => {

    render(this.#filmContainerView, this.#movieListContainer);

    if (!this.#movieCardData.length) {
      render(this.#noMovieNow, this.#movieListContainer);
      return;
    }
    for(let i = 0; i < Math.min(this.#movieCardData.length, NUMBER_OF_MOVIE_CARDS); i++) {
      this.#renderMovie(this.#movieCardData[i], this.#filmContainerView.element);
    }
  };

  #getUserComments = (template) => {
    this.#commentsModel.comments.forEach((comment) => {
      const commentCard = new CommentView(comment);
      render(commentCard, template.element);
    });
  };

  #renderPopup = (filmInfo) => {
    const body = document.querySelector('body');
    const popupFilm = new PopupFilmView(filmInfo);

    this.#getUserComments(popupFilm);

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

  #removeShowMoreBtn = () => {
    this.#movieCardData
      .slice(this.#numberOfMovieCardsToRender, this.#numberOfMovieCardsToRender + NUMBER_OF_MOVIE_CARDS)
      .forEach((film) => this.#renderMovie(film, this.#filmContainerView.element));

    this.#numberOfMovieCardsToRender += NUMBER_OF_MOVIE_CARDS;

    if (this.#numberOfMovieCardsToRender >= this.#movieCardData.length) {
      remove(this.#showMoreBtn);
    }
  };

}
