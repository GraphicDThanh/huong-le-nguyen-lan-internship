import { querySelector } from 'utils/querySelectDOM';
import logoComponent from 'components/logo';
import inputSearchComponent from 'components/inputSearch';
import menuUserComponent from 'components/menuUser';
import navigatePage from 'utils/navigatePage';
import StorageKeys from 'constants/storageKeys';
import LocalStorage from 'utils/localStorage';
import ElementHelpers from 'helpers/elementHelpers';
import { headerComponent, buttonBulkActionsComponent } from 'components/header';
import EventHelpers from 'helpers/eventHelpers';
import User from 'interfaces/user';

export default class HeaderView {
  mainWrapper: Element;

  homePage: Element;

  localStorage: LocalStorage<string>;

  elementHelpers: ElementHelpers;

  eventHelpers: EventHelpers;

  constructor() {
    this.mainWrapper = querySelector('.main-wrapper')!;
    this.homePage = querySelector('.home-page')!;
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
    const headerDefault = querySelector('.header-default')!;
    const headerMenu = querySelector('.header-menu')!;
    const headerSelected = querySelector('.header-after-select')!;
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
    const avatarUser = querySelector('.avatar-user-cover')!;
    const menuUserElement = querySelector('.menu-user')!;
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
    const btnLogout = querySelector('.btn-logout')!;
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
    const emailUser = querySelector('.menu-user-email')!;
    if (this.localStorage.getItems(StorageKeys.USER_ID)) {
      const id = this.localStorage.getItems(StorageKeys.USER_ID) as string;
      const user = await findUser(id);
      if (!user?.length) {
        navigatePage('/');
        this.localStorage.removeItems(StorageKeys.USER_ID);
      } else {
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
    const headerMenu = querySelector('.header-menu')!;
    const inputSearch = querySelector('.form-search')!;
    const iconLogo = querySelector('.icon-logo')!;

    iconLogo.remove();
    headerMenu.insertBefore(logoComponent(tab), inputSearch);
    this.bindNavigateHomePage();
  }

  /**
   * @description function close header bulk actions of the
   * icon close in header when selected notes
   */
  closeSelected(): void {
    const headerAfterSelect = querySelector('.header-after-select')!;
    const btnClose = querySelector('.count-and-close .icon-close-cover')!;
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
    const logoName = querySelector('.icon-logo h1')!;
    const logo = querySelector('.logo')!;

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
