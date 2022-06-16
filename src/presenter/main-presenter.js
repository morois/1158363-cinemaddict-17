import {render} from '../framework/render.js';
import FilterView from '../view/list-filter-view.js';
import ProfileView from '../view/header-profile-view.js';
import FilmsModel from '../model/movie-model.js';
import CommentsModel from '../model/comment-model.js';
import MoviePresenter from '../presenter/movie-presenter.js';
import SortView from '../view/sort-view.js';

export default class MainPresenter {
  #filmModel = new FilmsModel();
  #commentModel = new CommentsModel();
  #siteHeaderElement = null;
  #siteMainElement = null;

  constructor (siteHeaderElement, siteMainElement) {
    this.#siteHeaderElement = siteHeaderElement;
    this.#siteMainElement = siteMainElement;
  }


  init = () => {
    render(new FilterView(), this.#siteMainElement);
    render(new ProfileView(), this.#siteHeaderElement);
    render(new SortView(), this.#siteMainElement);

    new MoviePresenter(this.#siteMainElement).init(this.#filmModel, this.#commentModel);
  };
}
