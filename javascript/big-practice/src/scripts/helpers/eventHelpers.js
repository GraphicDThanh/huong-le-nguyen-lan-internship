import STORAGE_KEYS from '../constants/storageKeys';
import navigatePage from '../utils/navigatePage';

export default class EventHelpers {
  /**
   * @description function stop overlay bubbling event
   *
   * @param {Object} element is element want to avoid bubbling event
   */
  stopEvents(element) {
    element.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }

  /**
   * @description function move to home page when
   * click to element
   *
   * @param {Object} element is element want to
   * add event click move to home page
   */
  navigateHomePage(element) {
    element.addEventListener('click', () => {
      navigatePage('home.html');
      sessionStorage.setItem(STORAGE_KEYS.PAGE_NUMBER, '0');
    });
  }
}
