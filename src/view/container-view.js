import { createElement } from '../render.js';

const filmContainerTemplate = () => '<section class="films"></section>';

export default class FilmContainerView {

  getTemplate () {
    return filmContainerTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
