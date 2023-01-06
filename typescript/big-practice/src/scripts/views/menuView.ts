import { selectDOMClass, selectDOMClassAll } from '../utils/querySelectDOM';
import menuComponent from '../components/menu';
import ElementHelpers from '../helpers/elementHelpers';
import STORAGE_KEYS from '../constants/storageKeys';
import EventHelpers from '../helpers/eventHelpers';

export default class MenuView {
  elementHelpers: ElementHelpers;

  eventHelpers: EventHelpers;

  mainWrapper: HTMLElement | null;

  sectionWrapper: HTMLElement | null;

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
    if (this.mainWrapper) {
      this.mainWrapper.insertBefore(menuComponent(), this.sectionWrapper);
    }
  }

  /**
   * @description function change note page or trash page when click to
   * menu in the left. And after click, it will render out the corresponding interface
   *
   * @param {function} renderTabs is function transmitted in controller
   * @param {function} changeLogoFollowTab is function transmitted in controller
   */
  bindChangePage(
    renderTabs: () => void,
    changeLogoFollowTab: (tab: string) => void
  ) {
    renderTabs();
    this.elementHelpers.showMenuActive();
    this.handleClickMenu(changeLogoFollowTab, renderTabs);
  }

  /**
   * @description handle click change menu
   *
   * @param {function} renderTabs is function transmitted in controller
   * @param {function} changeLogoFollowTab is function transmitted in controller
   */
  handleClickMenu(
    changeLogoFollowTab: (tab: string) => void,
    renderTabs: () => void
  ) {
    const menu = selectDOMClassAll('.nav li');
    const handler = (e: Event) => {
      const searchInput = selectDOMClass('.search') as HTMLInputElement;
      const iconClose = selectDOMClass('.icon-close');
      if (searchInput && searchInput.value) {
        searchInput.value = '';
      }

      if ((e.target as HTMLElement).hasAttribute('data-id')) {
        const logoName = (e.target as HTMLElement).querySelector(
          'span'
        )?.textContent;

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
      }

      if (iconClose) {
        iconClose.style.visibility = 'hidden';
      }
    };

    if (menu) {
      menu.forEach((element) => {
        this.eventHelpers.addEvent(element, 'click', handler);
      });
    }
  }
}
