import STORAGE_KEYS from '../constants/storageKeys';
import navigatePage from '../utils/navigatePage';

export default class EventHelpers {
  /**
   * @description function stop overlay bubbling event
   *
   * @param {Object} element is element want to avoid bubbling event
   */
  stopEvents(element: HTMLElement) {
    const handler = (e: Event) => {
      e.stopPropagation();
    };

    this.addEvent(element, 'click', handler);
  }

  /**
   * @description function bind event for element
   *
   * @param {Object} element is element you want to bind event
   * @param {String} events is type of event
   * @param {function} handler is a function to handle event you just already bound
   */
  addEvent(element: HTMLElement, events: string, handler: (e: Event) => void) {
    element.addEventListener(events, (e) => {
      handler(e);
    });
  }

  /**
   * @description function move to home page when
   * click to element
   *
   * @param {Object} element is element want to
   * add event click move to home page
   */
  navigateHomePage(element: HTMLElement) {
    const handler = () => {
      navigatePage('home.html');
      sessionStorage.setItem(STORAGE_KEYS.PAGE_NUMBER, '0');
    };

    this.addEvent(element, 'click', handler);
  }
}
