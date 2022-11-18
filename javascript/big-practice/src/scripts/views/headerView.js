import { selectDOMClass } from '../utils/querySelectDOM';
import iconClose from '../../assets/icons/icon-close.svg';
import logo from '../components/logo';
import inputSearch from '../components/inputSearch';
import menuUser from '../components/menuUser';
import changeHref from '../utils/navigatePage';
import STORAGE_KEYS from '../constants/storageKeys';
import user from '../constants/mockUser';

export default class HeaderView {
  constructor() {
    this.mainWrapper = selectDOMClass('.main-wrapper');
    this.homePage = selectDOMClass('.home-page');
  }

  headerPattern() {
    const headerElement = document.createElement('header');
    headerElement.classList.add('header-wrapper');

    headerElement.innerHTML = `
      <div class="header-default">
      </div>

      <div class="header-after-select">
        <div class="count-and-close">
          <figure class="icon-close-cover">
            <img class="icon-close" src="${iconClose}" alt="icon close">
          </figure>
          <p class="count-selected">0 Selected</p>
        </div>

        <div class="header-utilities">
          <button type="button" class="btn btn-delete-bulk-actions">Delete</button>
        </div>
      </div>
    `;

    return headerElement;
  }

  renderHeader() {
    this.homePage.insertBefore(this.headerPattern(), this.mainWrapper);
    const headerDefault = selectDOMClass('.header-default');
    headerDefault.appendChild(logo('Keep'));

    const headerMenu = selectDOMClass('.header-menu');
    headerMenu.appendChild(inputSearch());

    headerDefault.appendChild(menuUser());
  }

  /**
   * @description function show hide menu user
   */
  bindShowMenuUser() {
    const avatarUser = selectDOMClass('.avatar-user-cover');
    const menuUserElement = selectDOMClass('.menu-user');

    avatarUser.addEventListener('click', () => {
      if (menuUserElement.classList.contains('hide')) {
        this.elementHelpers.showElement(menuUserElement);
      } else {
        this.elementHelpers.hideElement(menuUserElement);
      }
    });
  }

  /**
   * @description function handle logout
   */
  bindLogOut() {
    this.btnLogout.addEventListener('click', () => {
      changeHref('index.html');
      sessionStorage.setItem(STORAGE_KEYS.PAGE_NUMBER, '0');
      this.localStorage.removeItems(STORAGE_KEYS.IS_USER_LOGGED_IN);
    });
  }

  /**
   * @description set email to menu user
   */
  showInformationUser() {
    if (this.localStorage.getItems(STORAGE_KEYS.IS_LOGIN)) {
      this.emailUser.textContent = user.email;
    } else {
      this.emailUser.textContent = 'Unknown';
    }
  }
}
