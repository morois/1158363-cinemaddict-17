import { createElement } from '../render.js';

const filmContainerTemplate = () => '<section class="films"></section>';

export default class FilmContainerView {
  #element = null;

  get template () {
    return filmContainerTemplate();
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
