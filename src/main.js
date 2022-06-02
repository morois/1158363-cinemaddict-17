import { render } from './render.js';
import FilterView from './view/list-filter-view.js';
import FilmPresenter from './presenter/presenter.js';
import ProfileView from './view/header-profile-view.js';
import FilmsModel from './model/movie-model.js';
import CommentsModel from './model/comment-model.js';


const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const filmModel = new FilmsModel();
const commentModel = new CommentsModel();

render(new FilterView(), siteMainElement);
render(new ProfileView(), siteHeaderElement);

const boardPresenter = new FilmPresenter();
boardPresenter.init(siteMainElement, filmModel, commentModel);
