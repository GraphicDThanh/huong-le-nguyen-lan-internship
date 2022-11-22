import { selectDOMClassAll } from '../utils/querySelectDOM';

export default class ElementHelpers {
  /**
   * @description function show textarea height base on
   * length of text
   *
   * @param {Object} el is element textarea
   */
  showInputBreakDown(el) {
    const element = el;
    element.style.height = `${element.scrollHeight}px`;
    const height = element.style.height.split('px')[0];

    if (Number(height) > 500) {
      element.style.height = '400px';
    } else {
      element.style.height = `${element.scrollHeight}px`;
    }
  }

  /**
   * @description common events of textarea to increase the length
   *
   * @param {Object} el is element textarea
   */
  commonInputBreakDown(el) {
    const element = el;
    element.addEventListener('input', () => {
      element.style.height = '1px';
      element.style.height = `${element.scrollHeight < '250' ? element.scrollHeight : '250'}px`;
    });
  }

  /**
   * @description function count note selected and show total
   *
   * @param {Object} el is element text count note
   */
  countAndShowSelected(el) {
    const element = el;
    const listSelected = selectDOMClassAll('.selected');
    element.innerHTML = `${listSelected.length} Selected`;
  }

  /**
   * @description function show and hide elements with class
   * have CSS property is display none
   *
   * @param {Object} elementShow is DOM element you wanna show it
   * @param {Object} elementHide is DOM element you wanna hide it
   * @param {String} className is class has CSS property is display none
   */
  showHideElements(elementShow, elementHide, className) {
    this.removeClass(elementShow, className);
    this.addClass(elementHide, className);
  }

  /**
   * @description add class which is defined CSS properties to element
   *
   * @param {Object} element is element you want to add class
   * @param {String} className is class has been defined CSS properties
   */
  addClass(element, className) {
    element.classList.add(className);
  }

  /**
   * @description remove class of element
   *
   * @param {Object} element is element you want to remove class
   * @param {String} className is class has been defined CSS properties
   */
  removeClass(element, className) {
    element.classList.remove(className);
  }

  /**
   * @description move an element follow Y-axis with numbers corresponding
   *
   * @param {Object} e is element you want to move
   * @param {String} number is numbers corresponding you want to move to
   */
  translateYElement(e, number) {
    const element = e;
    element.style.transform = `translateY(${number}%)`;
  }
}
