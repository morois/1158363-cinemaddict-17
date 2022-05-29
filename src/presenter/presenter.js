import { render } from '../render.js';
import FilmCardView from '../view/film-card-view.js';
import FilmContainerView from '../view/container-view.js';
import FilmsModel from '../model/movie-model.js';
import ShowMoreView from '../view/show-more-view.js';

const COUNT = 5;

export default class FilmPresenter {
  #filmModel = new FilmsModel();
  #filmComponent = new FilmContainerView();
  #showMoreButton = new ShowMoreView();
  #filmContainer;
  #filmCards = [];

  init = (filmContainer, filmModel) => {
    this.#filmContainer = filmContainer;
    this.#filmModel = filmModel;
    this.#filmCards = [...this.#filmModel.films];

    render(this.#showMoreButton, this.#filmContainer);
    console.log(this.#filmCards);
    for (let i = 0; i < COUNT; i++) {
      const filmsCard = new FilmCardView(this.#filmCards);
      render(filmsCard, this.#filmComponent.element);
    }
  };


  // constructor (filmContainer) {
  //   this.#filmContainer = filmContainer;
  // }

  // renderFilmCard = () => {
  //   const films = this.#filmModel.films;

  //   for (const film of films) {
  //     const filmCard = new FilmCardView(film);
  //     render(filmCard, this.#filmComponent.element);
  //   }
  //   render(this.#filmComponent, this.#filmContainer);
  //   // render(this.#renderShowMore(), this.#filmContainer);
  //   if (this.#showMoreButton > COUNT) {
  //     render(this.#showMoreButton, this.#filmContainer);
  //   }
  // };

  // #renderShowMore = () => {
  //   render(this.#showMoreButton, this.#filmContainer);
  //   this.#showMoreButton.element.addEventListener('click', () => {
  //     console.log('ldpsl');
  //   });


}

//   renderPopup = () => {
//     render(new PopupFilmView(new FilmsModel()), this.#filmContainer);
//   };
// }
