import { selectDOMClass, selectDOMById, selectDOMClassAll } from '../utils/querySelectDOM';
import iconClose from '../../assets/icons/icon-close.svg';
import logoComponent from '../components/logoComponent';
import inputSearchComponent from '../components/inputSearchComponent';
import menuUserComponent from '../components/menuUserComponent';
import navigatePage from '../utils/navigatePage';
import STORAGE_KEYS from '../constants/storageKeys';
import user from '../constants/mockUser';
import LocalStorage from '../utils/localStorage';
import ElementHelpers from '../helpers/elementHelpers';

export default class HeaderView {
  constructor() {
    this.mainWrapper = selectDOMClass('.main-wrapper');
    this.homePage = selectDOMClass('.home-page');
    this.localStorage = new LocalStorage();
    this.elementHelpers = new ElementHelpers();
  }

  headerPattern() {
    const headerElement = document.createElement('header');
    headerElement.classList.add('header-wrapper');

    headerElement.innerHTML = `
      <div class="header-default">
        <div class="header-menu">
        </div>
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
    const headerMenu = selectDOMClass('.header-menu');

    headerMenu.appendChild(logoComponent('Keep'));
    headerMenu.appendChild(inputSearchComponent());
    headerDefault.appendChild(menuUserComponent());
  }

  /**
   * @description function show hide menu user
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
   * @description function handle logout
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

  changeLogoByTab(tab) {
    const headerMenu = selectDOMClass('.header-menu');
    const inputSearch = selectDOMClass('.form-search');
    const iconLogo = selectDOMClass('.icon-logo');

    iconLogo.remove();
    headerMenu.insertBefore(logoComponent(tab), inputSearch);
  }

  /**
   * @description events show header bulk actions and count notes selected
   *
   * @param {Object} noteElement is note element
   */
  bindShowHeader(noteElement) {
    const note = selectDOMById(`${noteElement.id}`);
    const listIconCheck = note.querySelector('.icon-check');
    const countNotesSelected = selectDOMClass('.count-selected');
    const headerAfterSelect = selectDOMClass('.header-after-select');

    listIconCheck.addEventListener('click', (e) => {
      e.preventDefault();
      const selectedElement = e.target.parentElement.classList.contains('selected');

      if (!selectedElement) {
        this.elementHelpers.addClass(e.target.parentElement, 'selected');
        this.elementHelpers.countAndShowSelected(countNotesSelected);
        this.elementHelpers.translateYElement(headerAfterSelect, '-100');
      } else {
        this.elementHelpers.removeClass(e.target.parentElement, 'selected');

        this.elementHelpers.countAndShowSelected(countNotesSelected);
      }

      const listSelected = selectDOMClassAll('.selected');
      if (listSelected.length < 1) {
        this.elementHelpers.translateYElement(headerAfterSelect, '-200');
      }
    });
  }

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
}
