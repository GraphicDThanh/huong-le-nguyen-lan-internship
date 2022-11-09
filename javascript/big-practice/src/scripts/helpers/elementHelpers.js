import { selectDOMClassAll } from '../utils/querySelectDOM';

export default class ElementHelpers {
  /**
   * @description function show textarea height base on
   * length of text
   *
   * @param {Object} el is element textarea
   */
  static showInputBreakDown(el) {
    const element = el;
    element.style.height = `${element.scrollHeight}px`;
  }

  /**
   * @description common events of textarea to increase the length
   * @param {Object} el is element textarea
   */
  static commonInputBreakDown(el) {
    const element = el;
    element.addEventListener('input', () => {
      element.style.height = '1px';
      element.style.height = `${element.scrollHeight < '250' ? element.scrollHeight : '250'}px`;
    });
  }

  /**
   * @description function count note selected and show total
   * @param {Object} el is element text count note
   */
  static countAndShowSelected(el) {
    const element = el;
    const listSelected = selectDOMClassAll('.selected');
    element.innerHTML = `${listSelected.length} Selected`;
  }
}
