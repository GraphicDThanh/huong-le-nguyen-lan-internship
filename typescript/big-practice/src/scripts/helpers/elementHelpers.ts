import STORAGE_KEYS from '../constants/storageKeys';
import { selectDOMClassAll } from '../utils/querySelectDOM';
import EventHelpers from './eventHelpers';

export default class ElementHelpers {
  eventHelpers: EventHelpers;

  constructor() {
    this.eventHelpers = new EventHelpers();
  }

  /**
   * @description function show textarea height base on
   * length of text and if height of textarea more than
   * 500. It will stop in 400px
   *
   * @param {Object} el is element textarea
   */
  showInputBreakDown(el: HTMLElement | null): void {
    if (el) {
      const element = el;
      element.style.height = `${element.scrollHeight}px`;
      const height = element.style.height.split('px')[0];

      if (Number(height) > 500) {
        element.style.height = '400px';
      } else {
        element.style.height = `${element.scrollHeight}px`;
      }
    }
  }

  /**
   * @description common events of textarea to increase the length
   *
   * @param {Object} el is element textarea
   */
  commonInputBreakDown(el: HTMLElement | null): void {
    if (el) {
      const element = el;
      const handler = () => {
        element.style.height = '1px';
        element.style.height = `${
          element.scrollHeight < 250 ? element.scrollHeight : '250'
        }px`;
      };

      this.eventHelpers.addEvent(element, 'input', handler);
    }
  }

  /**
   * @description function count element and show total
   *
   * @param {Object} el is element text count note
   */
  countAndShowSelected(el: HTMLElement | null): void {
    if (el) {
      const element = el;
      const listSelected = selectDOMClassAll('.selected');

      if (listSelected) {
        element.innerHTML = `${listSelected.length} Selected`;
      }
    }
  }

  /**
   * @description function show and hide elements with class
   * have CSS property is display none
   *
   * @param {Object} elementShow is DOM element you wanna show it
   * @param {Object} elementHide is DOM element you wanna hide it
   * @param {String} className is class has CSS property is display none
   */
  showHideElements(
    elementShow: HTMLElement,
    elementHide: HTMLElement,
    className: string
  ): void {
    this.removeClass(elementShow, className);
    this.addClass(elementHide, className);
  }

  /**
   * @description add class which is defined CSS properties to element
   *
   * @param {Object} element is element you want to add class
   * @param {String} className is class has been defined CSS properties
   */
  addClass(element: HTMLElement | null, className: string): void {
    if (element) {
      element.classList.add(className);
    }
  }

  /**
   * @description remove class of element
   *
   * @param {Object} element is element you want to remove class
   * @param {String} className is class has been defined CSS properties
   */
  removeClass(element: HTMLElement | null, className: string): void {
    if (element) {
      element.classList.remove(className);
    }
  }

  /**
   * @description function get attribute
   *
   * @param element is element want get attribute
   * @param attribute is the name of attribute
   */
  getAttributeElement(
    element: HTMLElement | EventTarget | null,
    attribute: string
  ): string | undefined {
    if (element) {
      return (element as HTMLElement).getAttribute(attribute) as string;
    }

    return undefined;
  }

  /**
   * @description move an element follow Y-axis with numbers corresponding
   *
   * @param {Object} e is element you want to move
   * @param {String} number is numbers corresponding you want to move to
   */
  translateYElement(e: HTMLElement | null, number: string): void {
    if (e) {
      const element = e;
      element.style.transform = `translateY(${number}%)`;
    }
  }

  /**
   * @description remove all elements have class
   * selected
   */
  removeSelected(): void {
    const noteSelected = selectDOMClassAll('.selected');

    if (noteSelected) {
      noteSelected.forEach((note) => {
        this.removeClass(note, 'selected');
      });
    }
  }

  /**
   * @description function removes all menu tab is active
   * that means remove all the element have class
   * menu-color
   */
  removeMenuActive(): void {
    const menu = selectDOMClassAll('.nav li');

    if (menu) {
      menu.forEach((element) => {
        if (element.classList.contains('menu-color')) {
          this.removeClass(element, 'menu-color');
        }
      });
    }
  }

  /**
   * @description function show which menu is active by
   * getting information from session
   */
  showMenuActive(): void {
    const menu = selectDOMClassAll('.nav li');
    const index = Number(sessionStorage.getItem(STORAGE_KEYS.PAGE_NUMBER));

    if (menu) {
      this.addClass(menu[index], 'menu-color');
    }
  }

  /**
   * @description when having errors, this function will
   * keep outline of input red color, and avoid defined properties CSS
   * focus of input
   *
   * @param {Object} element is input your want to show hide error of label
   */
  showHideInputError(el: HTMLElement) {
    const element = el;
    const handler = () => {
      const message =
        element.parentNode?.querySelector('.message-error')?.textContent;
      if (message) {
        element.style.outlineColor = 'var(--danger-color)';
      } else {
        element.style.outlineColor = 'var(--info-color)';
      }
    };

    this.eventHelpers.addEvent(element, 'focus', handler);
  }
}
