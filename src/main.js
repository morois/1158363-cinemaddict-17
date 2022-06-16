import MainPresenter from './presenter/main-presenter.js';

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');

new MainPresenter(siteHeaderElement, siteMainElement).init();
