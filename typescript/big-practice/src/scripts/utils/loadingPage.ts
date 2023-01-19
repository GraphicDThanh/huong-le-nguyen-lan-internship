import { querySelector } from './querySelectDOM';
import ElementHelpers from 'helpers/elementHelpers';

export default class LoadingPage {
  elementHelpers: ElementHelpers;

  overlay: Element;

  constructor() {
    this.elementHelpers = new ElementHelpers();
    this.overlay = querySelector('.overlay-wrapper')!;
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
  addLoading(): void {
    this.overlay.appendChild(this.createLoading());
  }

  /**
   * @description function remove loading page
   * after 1s
   */
  setTimeoutLoading(time: number): void {
    setTimeout(() => this.removeLoading(), time);
  }

  /**
   * @description function remove loading page
   */
  removeLoading(): void {
    this.overlay.innerHTML = '';
  }
}
