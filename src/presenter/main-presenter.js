import {render} from '../framework/render.js';
import FilterView from '../view/list-filter-view.js';
import ProfileView from '../view/header-profile-view.js';
import FilmsModel from '../model/movie-model.js';
import CommentModel from '../model/comment-model.js';
import SortView from '../view/sort-view.js';
import Presenter from './movie-presenter.js';
import MainNavigationView from '../view/list-filter-view.js';
import { filtersFilms } from '../utils/filter-utils.js';

export default class MainPresenter {
  #filmModel = new FilmsModel();
  #commentModel = new CommentModel();
  #siteHeaderElement = null;
  #siteMainElement = null;
  #dataFilms = [];

  constructor (siteHeaderElement, siteMainElement) {
    this.#siteHeaderElement = siteHeaderElement;
    this.#siteMainElement = siteMainElement;
  }


  init = () => {
    this.#dataFilms = [...this.#filmModel.films];

    render(new FilterView(), this.#siteMainElement);
    render(new ProfileView(), this.#siteHeaderElement);
    render(new SortView(), this.#siteMainElement);
    new Presenter(this.#siteMainElement, this.#filmModel, this.#commentModel).init();
    render(new MainNavigationView(filtersFilms(this.#dataFilms)), this.#siteMainElement);
  };
}
