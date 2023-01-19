import StorageKeys from 'constants/storageKeys';
import navigatePage from 'utils/navigatePage';

export default class EventHelpers {
  /**
   * @description function stop overlay bubbling event
   *
   * @param {Element} element is element want to avoid bubbling event
   */
  stopEvents(element: Element): void {
    const handler = (e: Event) => {
      e.stopPropagation();
    };

    this.addEvent(element, 'click', handler);
  }

  /**
   * @description function bind event for element
   *
   * @param {Element} element is element you want to bind event
   * @param {String} events is type of event
   * @param {function} handler is a function to handle event you just already bound
   */
  addEvent(
    element: Element,
    events: string,
    handler: (e: Event) => void
  ): void {
    element.addEventListener(events, (e) => {
      handler(e);
    });
  }

  /**
   * @description function move to home page when
   * click to element
   *
   * @param {Element} element is element want to
   * add event click move to home page
   */
  navigateHomePage(element: Element): void {
    const handler = () => {
      navigatePage('home.html');
      sessionStorage.setItem(StorageKeys.PAGE_NUMBER, '0');
    };

    this.addEvent(element, 'click', handler);
  }

  /**
   * @description function change page by click with url of page want to change
   *
   * @param {Element} element is element bind event
   * @param {string} page is page want to move to
   */
  changePage(element: Element | null, page: string): void {
    if (element) {
      const handler = () => {
        navigatePage(page);
      };

      this.addEvent(element, 'click', handler);
    }
  }
}
