import AbstractView from '../framework/view/abstract-view.js';

const createNoMoviesTemplate = () => (`
<section class="films-list">
  <h2 class="films-list__title">There are no movies in our database</h2>
</section>`
);


export default class NoFilmView extends AbstractView {
  get template() {
    return createNoMoviesTemplate();
  }
}
