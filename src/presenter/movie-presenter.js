import { render, RenderPosition } from '../framework/render.js';
import FilmCardView from '../view/film-card-view.js';
import FilmContainerView from '../view/film-container-view.js';
import FilmsListExtraView from '../view/film-list-extra-view.js';
import NoFilmView from '../view/no-movies-view.js';
import PopupFilmView from '../view/popup-film-view.js';
import CommentView from '../view/comment-film-view.js';
import CommentListView from '../view/comment-list-view.js';
import ShowMoreView from '../view/show-more-view.js';

const NUMBER_OF_MOVIE_CARDS = 5;

export default class Presenter {
  #bodyContainer = null;
  #movieModel = null;
  #commentsModel = null;

  #dataFilms = [];
  #dataComment = [];

  #filmCount = NUMBER_OF_MOVIE_CARDS;

  constructor (bodyContainer, movieModel, commentsModel) {
    this.#bodyContainer = bodyContainer;
    this.#movieModel = movieModel;
    this.#commentsModel = commentsModel;
  }

  init = () => {
    this.#dataFilms = [...this.#movieModel.films];
    this.#dataComment = [...this.#commentsModel.comments];

    this.#dataFilms.forEach((movie) => {
      movie.comments = this.#dataComment.filter((comment) => comment.filmId === movie.id);
    });

    this.#renderMovie();
  };

  #renderMovie = () => {
    const movieContainer = new FilmContainerView();

    render(movieContainer, this.#bodyContainer);

    const filmElemContainer = movieContainer.element;

    if(this.#dataFilms > 0) {
      const allMovies = new FilmsListExtraView('All movies. Upcoming', true, false);
      const topRatedMovies = new FilmsListExtraView('Top rated', false, true);
      const mostCommentedMovies = new FilmsListExtraView('Most commented', false, true);

      render(allMovies, filmElemContainer);
      render(topRatedMovies, filmElemContainer);
      render(mostCommentedMovies, filmElemContainer);

      const allMoviesContainer = allMovies.getFilmsListContainer();
      this.#renderMovieCards(allMoviesContainer, this.#dataFilms.slice(0, NUMBER_OF_MOVIE_CARDS));

      if (this.#dataFilms.length > this.#filmCount) {
        this.#renderShowMoreBtn(allMovies.element, allMoviesContainer);
      }

      const topRatedMoviesContainer = topRatedMovies.getFilmsListContainer();
      this.#renderMovieCards(topRatedMoviesContainer, this.#dataFilms.slice(0, 1));

      const mostCommentedMoviesContainer = mostCommentedMovies.getFilmsListContainer();
      this.#renderMovieCards(mostCommentedMoviesContainer, this.#dataFilms.slice(0, 1));
    } else {
      const noFilm = new NoFilmView();
      render(noFilm, filmElemContainer);
    }
  };

  #renderPopup = (filmInfo) => {
    const popupMovie = new PopupFilmView(filmInfo);
    const bodyDoc = document.querySelector('body');

    render(popupMovie, bodyDoc);
    bodyDoc.classList.add('hide-overflow');

    const removePopup = () => {
      popupMovie.element.parentNode.removeChild(popupMovie.element);
      popupMovie.removeElement();
      bodyDoc.classList.remove('hide-overflow');
    };

    popupMovie.setCloseElementClickHandler(() => removePopup());

    const closePopupPressEsc = (evt) => {
      evt.preventDefault();
      if (evt.key === 'Escape') {
        removePopup();
        bodyDoc.removeEventListener('keydown', closePopupPressEsc);
      }
    };
    bodyDoc.addEventListener('keydown', closePopupPressEsc);

    render(new CommentView(filmInfo.comments.length), popupMovie.getFilmDetailsBottomContainer());

    render(new CommentListView(), popupMovie.getFilmDetailsNewComment(), RenderPosition.BEFOREBEGIN);

    const commentList = popupMovie.getFilmDetailsCommentsList();
    filmInfo.comments.forEach((comment) => render(new CommentView(comment), commentList));
  };

  #renderMovieCards = (container, filmCard = []) => {
    if(filmCard.length === 0) {
      render(new NoFilmView(), container);
    }

    for (let i = 0; i < filmCard.length; i++) {
      const filmData = filmCard[i];
      const filmCardView = new FilmCardView(filmData);

      render(filmCardView, container);

      filmCardView.setClickHandler(() => {
        this.#renderPopup(filmData);
      });
    }
  };

  #renderShowMoreBtn = (btnContainer, cardsContainer) => {
    const showMoreBtn = new ShowMoreView();
    render(showMoreBtn, btnContainer);

    showMoreBtn.setClickHandler(() => {

      this.#renderMovieCards(cardsContainer, this.#dataFilms.slice(this.#filmCount, this.#filmCount + NUMBER_OF_MOVIE_CARDS));

      if (this.#dataFilms.length > this.#filmCount + NUMBER_OF_MOVIE_CARDS) {
        this.#filmCount += NUMBER_OF_MOVIE_CARDS;
      } else {
        this.#renderMovieCards = this.#dataFilms.length;
      }
    });
  };
}

