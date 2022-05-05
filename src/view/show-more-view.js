import { createElement } from '../render.js';

const buttonTemplate = () => '<button class="films-list__show-more">Show more</button>';

export default class ShowMoreView {
  getTemplate() {
    return buttonTemplate();
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
