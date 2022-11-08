import { selectDOMById, selectDOMClass } from '../utils/querySelectDOM';
import { ERROR_MESSAGE } from '../constants/message';
import { hideError, showError } from '../utils/handleError';

export default class LoginView {
  constructor() {
    this.loginForm = selectDOMById('login-form');
    this.emailElement = selectDOMClass('.email');
    this.passwordElement = selectDOMClass('.password');
  }

  /**
   * @description function check valid and check user
   *
   * @param {function} handler is transmitted from model
   */
  bindLogin(handler) {
    this.loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const formData = new FormData(this.loginForm);
      const email = formData.get('email');
      const password = formData.get('password');

      handler(email, password);
    });
  }

  /**
   * @description function check email and password are exists in data
   *
   * @param {*} message is error message of each field
   */
  checkUser(isErrors) {
    if (!isErrors.isPassword) {
      showError(this.passwordElement, ERROR_MESSAGE.PASSWORD_INCORRECT);
    } else {
      hideError(this.passwordElement);
    }

    if (!isErrors.isEmail) {
      showError(this.emailElement, ERROR_MESSAGE.EMAIL_NOT_EXISTS);
    } else {
      hideError(this.emailElement);
    }

    if (!this.emailElement.classList.contains('valid') && !this.passwordElement.classList.contains('valid')) {
      window.location.href = 'index.html';
    }
  }
}
