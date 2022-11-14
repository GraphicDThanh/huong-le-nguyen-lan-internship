import { selectDOMById, selectDOMClass } from '../utils/querySelectDOM';
import { ERROR_MESSAGE } from '../constants/message';
import { hideError, showError } from '../utils/handleError';
import user from '../constants/mockUser';
import LocalStorage from '../utils/localStorage';
import STORAGE_KEYS from '../constants/storageKeys';

export default class LoginView {
  constructor() {
    this.loginForm = selectDOMById('login-form');
    this.emailElement = selectDOMClass('.email');
    this.passwordElement = selectDOMClass('.password');
    this.localStorage = new LocalStorage();
  }

  /**
   * @description function check valid and check user
   *
   * @param {function} handler is transmitted from model
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
   * @param {Object} isValid include isEmail and isPassword
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
      this.localStorage.setItems(STORAGE_KEYS.IS_USER_LOGGED_IN, true);
      window.location.href = 'home.html';
    }
  }
}
