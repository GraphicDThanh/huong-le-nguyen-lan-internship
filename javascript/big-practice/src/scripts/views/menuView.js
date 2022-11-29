import { selectDOMClass, selectDOMClassAll } from '../utils/querySelectDOM';
import menuComponent from '../components/menuComponent';
import ElementHelpers from '../helpers/elementHelpers';
import STORAGE_KEYS from '../constants/storageKeys';
import { renderPopupError } from '../utils/handleError';
import EventHelpers from '../helpers/eventHelpers';
import { buttonBulkActionsComponent } from '../components/headerComponent';

export default class MenuView {
  constructor() {
    this.elementHelpers = new ElementHelpers();
    this.eventHelpers = new EventHelpers();
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
   * @param {function} changeButtonBulkActions is function transmitted in controller
   */
  bindChangePage(renderTabs, changeLogoFollowTab, changeButtonBulkActions) {
    const menu = selectDOMClassAll('.nav li');

    renderTabs();
    this.elementHelpers.showMenuActive();
    const handler = (e) => {
      const searchInput = selectDOMClass('.search');
      if (searchInput.value) {
        searchInput.value = '';
      }

      if (e.target.hasAttribute('data-id')) {
        this.elementHelpers.removeMenuActive();
        sessionStorage.setItem(STORAGE_KEYS.PAGE_NUMBER, e.target.getAttribute('data-id'));
        this.elementHelpers.showMenuActive();

          renderTabs();
          changeLogoFollowTab(e.target.querySelector('span').textContent);
          this.changeButtonBulkActions(changeButtonBulkActions);
      }
    };

    menu.forEach((element) => {
      this.eventHelpers.addEvent(element, 'click', handler);
    });
  }

  /**
   * @description function change button delete in header selected
   *
   * @param {function} changeButtonBulkActions is function transmitted from
   * controller
   */
  changeButtonBulkActions(changeButtonBulkActions) {
    const headerSelected = selectDOMClass('.header-after-select');
    const headerBulkActions = selectDOMClass('.header-utilities');

    if (headerBulkActions) {
      headerBulkActions.remove();
    }
    headerSelected.appendChild(buttonBulkActionsComponent());
    changeButtonBulkActions();
  }
}
