import { selectDOMClass, selectDOMClassAll } from '../utils/querySelectDOM';
import menuComponent from '../components/menuComponent';
import ElementHelpers from '../helpers/elementHelpers';
import STORAGE_KEYS from '../constants/storageKeys';
import { renderPopupError } from '../utils/handleError';

export default class MenuView {
  constructor() {
    this.elementHelpers = new ElementHelpers();
    this.mainWrapper = selectDOMClass('.main-wrapper');
    this.sectionWrapper = selectDOMClass('.section-wrapper');
  }

  /**
   * @description render menu in the left
   */
  renderMenu() {
    this.mainWrapper.insertBefore(menuComponent(), this.sectionWrapper);
  }

  /**
   * @description function change note page or trash page when click to
   * menu in the left. And after click, it will render out the corresponding interface
   *
   * @param {function} renderTabs is function transmitted in controller
   * @param {function} changeLogoFollowTab is function transmitted in controller
   */
  bindChangePage(renderTabs, changeLogoFollowTab) {
    const menu = selectDOMClassAll('.nav li');

    renderTabs();
    this.elementHelpers.addClass(menu[sessionStorage.getItem(STORAGE_KEYS.PAGE_NUMBER)], 'menu-color');

    menu.forEach((element) => {
      element.addEventListener('click', (e) => {
        if (e.target.hasAttribute('data-id')) {
          this.elementHelpers.removeClass(menu[sessionStorage.getItem(STORAGE_KEYS.PAGE_NUMBER)], 'menu-color');

          sessionStorage.setItem(STORAGE_KEYS.PAGE_NUMBER, e.target.getAttribute('data-id'));
          this.elementHelpers.addClass(menu[sessionStorage.getItem(STORAGE_KEYS.PAGE_NUMBER)], 'menu-color');

          renderTabs();
          changeLogoFollowTab(e.target.querySelector('span').textContent);
        }
      });
    });
  }
}
