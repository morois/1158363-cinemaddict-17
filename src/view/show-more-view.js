import AbstractView from '../framework/view/abstract-view.js';

const buttonTemplate = () => '<button class="films-list__show-more">Show more</button>';

export default class ShowMoreView extends AbstractView {
  get template () {
    return buttonTemplate();
  }
}
