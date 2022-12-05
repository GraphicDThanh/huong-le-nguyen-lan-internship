import searchTemplate from '../components/searchTemplate';
import { selectDOMClass } from '../utils/querySelectDOM';
import STORAGE_KEYS from '../constants/storageKeys';
import ElementHelpers from '../helpers/elementHelpers';
import EventHelpers from '../helpers/eventHelpers';

export default class InputSearchView {
  constructor() {
    this.elementHelpers = new ElementHelpers();
    this.eventHelpers = new EventHelpers();
  }

  /**
   * @description function clear input search and render
   * tab note
   *
   * @param {function} renderTabs function render tab transmitted
   * from controller
   */
  clearSearch(renderTabs) {
    const clearElement = selectDOMClass('.icon-close-cover');
    const handler = () => {
      const search = selectDOMClass('.search');
      if (search.value) {
        search.value = '';
        sessionStorage.setItem(STORAGE_KEYS.PAGE_NUMBER, '0');
        this.elementHelpers.removeMenuActive();
        this.elementHelpers.showMenuActive();
        renderTabs();
      }
    };

    this.eventHelpers.addEvent(clearElement, 'click', handler);
  }

  /**
   * @description function search notes with
   * value of input entered and remove formElement
   *
   * @param {function} searchNote function transmitted
   * from controller
   */
  bindSearchNotes(renderTab) {
    const formSearch = selectDOMClass('.form-search');
    const iconSearch = selectDOMClass('.icon-search-cover');

    const handler = (e) => {
      e.preventDefault();
      const formData = new FormData(formSearch);
      const inputValue = formData.get('search');
      const sectionWrapper = selectDOMClass('.section-wrapper');

      sessionStorage.setItem(STORAGE_KEYS.PAGE_NUMBER, '0');
      sectionWrapper.innerHTML = '';
      sectionWrapper.appendChild(searchTemplate());
      renderTab(inputValue);
    };

    this.eventHelpers.addEvent(formSearch, 'submit', handler);
    this.eventHelpers.addEvent(iconSearch, 'click', handler);
  }
}
