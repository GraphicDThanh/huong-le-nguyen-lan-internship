import { selectDOMClass, selectDOMClassAll } from '../utils/querySelectDOM';
import menuComponent from '../components/menu';
import ElementHelpers from '../helpers/elementHelpers';
import STORAGE_KEYS from '../constants/storageKeys';
import EventHelpers from '../helpers/eventHelpers';
import { buttonBulkActionsComponent } from '../components/header';

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
      const iconClose = selectDOMClass('.icon-close');
      if (searchInput.value) {
        searchInput.value = '';
      }

      if (e.target.hasAttribute('data-id')) {
        const logoName = e.target.querySelector('span').textContent;
        this.elementHelpers.removeMenuActive();
        sessionStorage.setItem(STORAGE_KEYS.PAGE_NUMBER, e.target.getAttribute('data-id'));
        this.elementHelpers.showMenuActive();

        renderTabs();
        this.changeButtonBulkActions(changeButtonBulkActions);
        if (logoName === 'Notes') {
          changeLogoFollowTab('Keep');
        } else {
          changeLogoFollowTab(logoName);
        }
      }
      iconClose.style.visibility = 'hidden';
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
