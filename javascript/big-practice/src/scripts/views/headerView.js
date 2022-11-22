import { selectDOMClass, selectDOMClassAll } from '../utils/querySelectDOM';
import logoComponent from '../components/logoComponent';
import inputSearchComponent from '../components/inputSearchComponent';
import menuUserComponent from '../components/menuUserComponent';
import navigatePage from '../utils/navigatePage';
import STORAGE_KEYS from '../constants/storageKeys';
import user from '../constants/mockUser';
import LocalStorage from '../utils/localStorage';
import ElementHelpers from '../helpers/elementHelpers';
import HeaderComponent from '../components/headerComponent';
import EventHelpers from '../helpers/eventHelpers';

export default class HeaderView {
  constructor() {
    this.mainWrapper = selectDOMClass('.main-wrapper');
    this.homePage = selectDOMClass('.home-page');
    this.localStorage = new LocalStorage();
    this.elementHelpers = new ElementHelpers();
    this.eventHelpers = new EventHelpers();
  }

  /**
   * @description render header with some components in header
   * like menu user, logo and input search
    */
  renderHeader() {
    this.homePage.insertBefore(HeaderComponent(), this.mainWrapper);
    const headerDefault = selectDOMClass('.header-default');
    const headerMenu = selectDOMClass('.header-menu');
    let tab = 'Keep';

    if (sessionStorage.getItem(STORAGE_KEYS.PAGE_NUMBER) === '4') {
      tab = 'Trash';
    }
    headerMenu.appendChild(logoComponent(tab));
    headerMenu.appendChild(inputSearchComponent());
    headerDefault.appendChild(menuUserComponent());
    this.bindNavigateHomePage();
  }

  /**
   * @description function show hide menu user when click
   * to icon avatar
   */
  bindShowMenuUser() {
    const avatarUser = selectDOMClass('.avatar-user-cover');
    const menuUserElement = selectDOMClass('.menu-user');

    avatarUser.addEventListener('click', () => {
      if (menuUserElement.classList.contains('hide')) {
        this.elementHelpers.removeClass(menuUserElement, 'hide');
      } else {
        this.elementHelpers.addClass(menuUserElement, 'hide');
      }
    });
  }

  /**
   * @description function handle logout, when user click
   * it will move to login page
   */
  bindLogOut() {
    const btnLogout = selectDOMClass('.btn-logout');

    btnLogout.addEventListener('click', () => {
      navigatePage('index.html');
      sessionStorage.setItem(STORAGE_KEYS.PAGE_NUMBER, '0');
      this.localStorage.removeItems(STORAGE_KEYS.IS_LOGIN);
    });
  }

  /**
   * @description set email to menu user
   */
  showInformationUser() {
    const emailUser = selectDOMClass('.menu-user-email');
    if (this.localStorage.getItems(STORAGE_KEYS.IS_LOGIN)) {
      emailUser.textContent = user.email;
    } else {
      emailUser.textContent = 'Unknown';
    }
  }

  /**
   * @description function change logo title according to each current tab
   *
   * @param {String} tab is according to each current tab
   */
  changeLogoByTab(tab) {
    const headerMenu = selectDOMClass('.header-menu');
    const inputSearch = selectDOMClass('.form-search');
    const iconLogo = selectDOMClass('.icon-logo');

    iconLogo.remove();
    headerMenu.insertBefore(logoComponent(tab), inputSearch);
    this.bindNavigateHomePage();
  }

  
  /**
   * @description function close header bulk actions of the
   * icon close in header when selected notes
   */
  closeSelected() {
    const headerAfterSelect = selectDOMClass('.header-after-select');
    const btnClose = selectDOMClass('.count-and-close .icon-close-cover');

    btnClose.addEventListener('click', () => {
      const noteSelected = selectDOMClassAll('.selected');

      noteSelected.forEach((note) => {
        this.elementHelpers.removeClass(note, 'selected');
      });

      this.elementHelpers.translateYElement(headerAfterSelect, '-200');
    });
  }

  /**
   * @description event of logo and title logo in header, when
   * user click, it will go to home page
   */
  bindNavigateHomePage() {
    const logoName = selectDOMClass('.icon-logo h1');
    const logo = selectDOMClass('.logo');

    if (!sessionStorage.getItem(STORAGE_KEYS.PAGE_NUMBER)) {
      sessionStorage.setItem(STORAGE_KEYS.PAGE_NUMBER, '0');
    }

    if (logo) {
      this.eventHelpers.navigateHomePage(logo);
    }

    this.eventHelpers.navigateHomePage(logoName);
  }
}
