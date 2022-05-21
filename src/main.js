import FilterView from './view/list-filter-view.js';
import ProfileView from './view/header-profile-view.js';
import BoardPresenter from './presenter/presenter.js';
import { generateMovie } from './mock/movies.js';
import { render } from './render.js';


const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');
const boardPresenter = new BoardPresenter();

render(new FilterView(), siteMainElement);
render(new ProfileView(), siteHeaderElement);

boardPresenter.init(siteMainElement);

console.log(generateMovie());