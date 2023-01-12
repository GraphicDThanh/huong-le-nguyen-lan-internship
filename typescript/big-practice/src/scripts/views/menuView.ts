import { selectDOMClass, selectDOMClassAll } from '../utils/querySelectDOM';
import menuComponent from '../components/menu';
import ElementHelpers from '../helpers/elementHelpers';
import STORAGE_KEYS from '../constants/storageKeys';
import EventHelpers from '../helpers/eventHelpers';

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
  renderMenu(): void {
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
  bindChangePage(renderTabs, changeLogoFollowTab): void {
    const menu = selectDOMClassAll('.nav li');

    renderTabs();
    this.elementHelpers.showMenuActive();
    this.handleClickMenu(menu, changeLogoFollowTab, renderTabs);
  }

  /**
   * @description function handle click change page
   *
   * @param {function} renderTabs is function transmitted in controller
   * @param {function} changeLogoFollowTab is function transmitted in controller
   * @param {function} changeButtonBulkActions is function transmitted in controller
   */
  handleClickMenu(menu, changeLogoFollowTab, renderTabs): void {
    const handler = (e) => {
      const searchInput = selectDOMClass('.search');
      const iconClose = selectDOMClass('.icon-close');
      if (searchInput.value) {
        searchInput.value = '';
      }

      if (e.target.hasAttribute('data-id')) {
        const logoName = e.target.querySelector('span').textContent;
        this.elementHelpers.removeMenuActive();
        sessionStorage.setItem(
          STORAGE_KEYS.PAGE_NUMBER,
          this.elementHelpers.getAttributeElement(e.target, 'data-id')
        );
        this.elementHelpers.showMenuActive();

        renderTabs();
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
}
