import { selectDOMClass } from './querySelectDOM';
import ElementHelpers from '../helpers/elementHelpers';

export default class LoadingPage {
  constructor() {
    this.elementHelpers = new ElementHelpers();
    this.overlay = selectDOMClass('.overlay-wrapper');
  }

  /**
   * @description function create loadingElement
   *
   * @returns {Object} loadingElement
   */
  createLoading() {
    const loadingElement = document.createElement('div');
    this.elementHelpers.addClass(loadingElement, 'overlay');

    loadingElement.innerHTML = `
      <div class="loading">
      </div>
    `;

    return loadingElement;
  }

  /**
   * @description function render loading page
   */
  addLoading() {
    this.overlay.appendChild(this.createLoading());
  }

  /**
   * @description function remove loading page
   * after 1s
   */
  setTimeoutLoading() {
    setTimeout(() => this.removeLoading(), 800);
  }

  /**
   * @description function remove loading page
   */
  removeLoading() {
    this.overlay.innerHTML = '';
  }
}
