import { selectDOMClass } from '../utils/querySelectDOM';
import logoComponent from '../components/logo';
import inputSearchComponent from '../components/inputSearch';
import menuUserComponent from '../components/menuUser';
import navigatePage from '../utils/navigatePage';
import StorageKeys from '../constants/storageKeys';
import LocalStorage from '../utils/localStorage';
import ElementHelpers from '../helpers/elementHelpers';
import {
  headerComponent,
  buttonBulkActionsComponent,
} from '../components/header';
import EventHelpers from '../helpers/eventHelpers';
import User from '../interfaces/user';
import Menu from '../constants/menu';

export default class HeaderView {
  mainWrapper: HTMLElement;

  homePage: HTMLElement;

  localStorage: LocalStorage<string>;

  elementHelpers: ElementHelpers;

  eventHelpers: EventHelpers;

  constructor() {
    this.mainWrapper = selectDOMClass('.main-wrapper')!;
    this.homePage = selectDOMClass('.home-page')!;
    this.localStorage = new LocalStorage();
    this.elementHelpers = new ElementHelpers();
    this.eventHelpers = new EventHelpers();
  }

  /**
   * @description render header with some components in header
   * like menu user, logo and input search
   */
  renderHeader(): void {
    this.homePage.insertBefore(headerComponent(), this.mainWrapper);
    const headerDefault = selectDOMClass('.header-default')!;
    const headerMenu = selectDOMClass('.header-menu')!;
    const headerSelected = selectDOMClass('.header-after-select')!;
    let tab = 'Keep';

    if (sessionStorage.getItem(StorageKeys.PAGE_NUMBER) === '4') {
      tab = 'Trash';
    }
    this.setDefaultPageNumber();

    headerSelected.appendChild(buttonBulkActionsComponent());
    headerMenu.appendChild(logoComponent(tab));
    headerMenu.appendChild(inputSearchComponent());
    headerDefault.appendChild(menuUserComponent());
  }

  /**
   * @description function show hide menu user when click
   * to icon avatar
   */
  bindShowMenuUser(): void {
    const avatarUser = selectDOMClass('.avatar-user-cover')!;
    const menuUserElement = selectDOMClass('.menu-user')!;
    const handler = () => {
      if (menuUserElement.classList.contains('hide')) {
        this.elementHelpers.removeClass(menuUserElement, 'hide');
      } else {
        this.elementHelpers.addClass(menuUserElement, 'hide');
      }
    };

    this.eventHelpers.addEvent(avatarUser, 'click', handler);
  }

  /**
   * @description function handle logout, when user click
   * it will move to login page
   */
  bindLogOut(): void {
    const btnLogout = selectDOMClass('.btn-logout')!;
    const handler = () => {
      navigatePage('index.html');
      sessionStorage.setItem(StorageKeys.PAGE_NUMBER, '0');
      this.localStorage.removeItems(StorageKeys.USER_ID);
    };

    this.eventHelpers.addEvent(btnLogout, 'click', handler);
  }

  /**
   * @description set email to menu user
   *
   * @param {function} findUser is function find user by id take from
   * localStorage
   */
  async showInformationUser(
    findUser: (id: string) => Promise<User[] | undefined>
  ): Promise<void> {
    const emailUser = selectDOMClass('.menu-user-email')!;
    if (this.localStorage.getItems(StorageKeys.USER_ID)) {
      const id = this.localStorage.getItems(StorageKeys.USER_ID) as string;
      const user = await findUser(id);
      if (user) {
        emailUser.textContent = user[0].email;
      }
    } else {
      emailUser.textContent = 'Unknown';
    }
  }

  /**
   * @description function change logo title according to each current tab
   *
   * @param {String} tab is according to each current tab
   */
  changeLogoByTab(tab: string): void {
    const headerMenu = selectDOMClass('.header-menu')!;
    const inputSearch = selectDOMClass('.form-search')!;
    const iconLogo = selectDOMClass('.icon-logo')!;

    iconLogo.remove();
    headerMenu.insertBefore(logoComponent(tab), inputSearch);
    this.bindNavigateHomePage();
  }

  /**
   * @description function close header bulk actions of the
   * icon close in header when selected notes
   */
  closeSelected(): void {
    const headerAfterSelect = selectDOMClass('.header-after-select')!;
    const btnClose = selectDOMClass('.count-and-close .icon-close-cover')!;
    const handler = () => {
      this.elementHelpers.removeSelected();
      this.elementHelpers.removeClass(headerAfterSelect, 'show');
    };

    this.eventHelpers.addEvent(btnClose, 'click', handler);
  }

  /**
   * @description event of logo and title logo in header, when
   * user click, it will go to home page
   */
  bindNavigateHomePage(): void {
    const logoName = selectDOMClass('.icon-logo h1')!;
    const logo = selectDOMClass('.logo')!;

    if (logo) {
      this.eventHelpers.navigateHomePage(logo);
    }
    this.eventHelpers.navigateHomePage(logoName);
  }

  /**
   * @description function check sessionStorage, if
   * in sessionStorage don't have key page_number. It
   * will set to session a key page_number with value is 0
   */
  setDefaultPageNumber(): void {
    if (!sessionStorage.getItem(StorageKeys.PAGE_NUMBER)) {
      sessionStorage.setItem(StorageKeys.PAGE_NUMBER, '0');
    }
  }
}
