import { selectDOMById, selectDOMClass } from '../utils/querySelectDOM';
import { ERROR_MESSAGE } from '../constants/message';
import { hideError, showError } from '../utils/handleError';
import user from '../../../data/mockUser';
import LocalStorage from '../utils/localStorage';
import STORAGE_KEYS from '../constants/storageKeys';
import navigatePage from '../utils/navigatePage';

export default class LoginView {
  constructor() {
    this.loginForm = selectDOMById('login-form');
    this.emailElement = selectDOMClass('.email');
    this.passwordElement = selectDOMClass('.password');
    this.localStorage = new LocalStorage();
  }

  /**
   * @description function check valid email and password
   */
  bindLogin() {
    this.loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(this.loginForm);
      const email = formData.get('email');
      const password = formData.get('password');
      this.handleInvalidUser(password, email);
    });
  }

  /**
   * @description function check email and password are exists in data
   *
   * @param {String} password is value of input that user enters
   * @param {String} email is value of input that user enters
   */
  handleInvalidUser(password, email) {
    if (password === user.password) {
      hideError(this.passwordElement);
    } else {
      showError(this.passwordElement, ERROR_MESSAGE.PASSWORD_INCORRECT);
    }

    if (email === user.email) {
      hideError(this.emailElement);
    } else {
      showError(this.emailElement, ERROR_MESSAGE.EMAIL_NOT_EXISTS);
    }

    if (!this.emailElement.classList.contains('valid') && !this.passwordElement.classList.contains('valid')) {
      this.localStorage.setItems(STORAGE_KEYS.IS_LOGIN, true);
      navigatePage('home.html');
    }
  }
}
