import FilterView from './view/list-filter-view.js';
import ProfileView from './view/header-profile-view.js';
import BoardPresenter from './presenter/presenter.js';
import { render } from './render.js';

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');

render(new FilterView(), siteMainElement);
render(new ProfileView(), siteHeaderElement);

const boardPresenter = new BoardPresenter(siteMainElement);
boardPresenter.renderFilmCard();

