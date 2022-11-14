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
  }

  /**
   * @description common events of textarea to increase the length
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
   * @param {Object} el is element text count note
   */
  countAndShowSelected(el) {
    const element = el;
    const listSelected = selectDOMClassAll('.selected');
    element.innerHTML = `${listSelected.length} Selected`;
  }

  /**
   * @description function show and hide element
   * @param {Object} elementShow is DOM element
   * @param {Object} elementHide is DOM element
   */
  showHideElement(elementShow, elementHide) {
    elementShow.classList.remove('hide');
    elementHide.classList.add('hide');
  }

  /**
   * @description function show hide empty list
   *
   * @param {Object} list is list
   * @param {Object} listEmpty is empty list
   */
  showEmptyList(list, listEmpty) {
    if (list.children.length < 1) {
      listEmpty.classList.remove('hide');
    } else {
      listEmpty.classList.add('hide');
    }
  }
}
