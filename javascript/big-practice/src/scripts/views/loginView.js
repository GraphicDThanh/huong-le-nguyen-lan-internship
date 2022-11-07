import { selectDOMById, selectDOMClass } from '../utils/querySelectDOM';
import { EMAIL, PASSWORD } from '../constants/message';
import hideError from '../utils/hideError';

export default class LoginView {
  constructor() {
    this.loginForm = selectDOMById('login-form');
    this.btn = selectDOMClass('.btn');
    this.emailElement = selectDOMClass('.email');
    this.passwordElement = selectDOMClass('.password');

    this.rulesEmail = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    this.rulesPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{1,}$/g;
  }

  /**
   * @description function check valid and check user
   *
   * @param {function} handler is transmitted from model
   */
  bindLogin(handler) {
    this.btn.addEventListener('click', (e) => {
      e.preventDefault();
      this.validateForm(handler);
    });
  }

  /**
   * @description function check valid of email and password
   *
   * @param {function} handler is transmitted from model
   */
  validateForm(handler) {
    const email = selectDOMClass('.email').value;
    const password = selectDOMClass('.password').value;

    this.validEmail();
    this.validPassword();

    if (!this.emailElement.classList.contains('valid') && !this.passwordElement.classList.contains('valid')) {
      handler(email, password);
    }
  }

  /**
   * @description function check empty and valid of email
   */
  validEmail() {
    const email = selectDOMClass('.email').value;
    const infoEmail = {
      element: this.emailElement,
      value: email,
    };

    const isRules = LoginView.isRules(infoEmail, this.rulesEmail, EMAIL.EMAIL_VALID);
    const isEmpty = LoginView.isEmpty(infoEmail, EMAIL.EMAIL_EMPTY);
    if (!isRules && !isEmpty) {
      hideError(this.emailElement);
    }
  }

  /**
   * @description function check empty and valid of password
   */
  validPassword() {
    const password = selectDOMClass('.password').value;

    const infoPassword = {
      element: this.passwordElement,
      value: password,
    };

    const isRules = LoginView.isRules(
      infoPassword,
      this.rulesPassword,
      PASSWORD.PASSWORD_VALID,
    );
    const isLength = LoginView.isLength(infoPassword, PASSWORD.PASSWORD_LENGTH);
    const isEmpty = LoginView.isEmpty(infoPassword, PASSWORD.PASSWORD_EMPTY);
    if (!isRules && !isEmpty && !isLength) {
      hideError(this.passwordElement);
    }
  }

  /**
   * @description function check user is exists in data
   *
   * @param {*} message is error message of each field
   */
  isUser(message) {
    const errorEmail = this.emailElement.parentElement.querySelector('.message .message-error');
    const errorPassword = this.passwordElement.parentElement.querySelector('.message .message-error');
    const errorIconEmail = this.emailElement.parentElement.querySelector('.message .error-icon');
    const errorIconPassword = this.passwordElement.parentElement.querySelector('.message .error-icon');

    let isError;

    if (message === PASSWORD.PASSWORD_INCORRECT) {
      errorPassword.textContent = message;
      this.passwordElement.classList.add('valid');
      errorIconPassword.classList.remove('hide');

      isError = true;
    } else if (message === EMAIL.EMAIL_NOT_EXISTS) {
      errorEmail.textContent = message;
      this.emailElement.classList.add('valid');
      errorIconEmail.classList.remove('hide');

      isError = true;
    } else {
      isError = false;
    }

    if (!isError) {
      window.location.href = 'index.html';
    }
  }

  /**
   * @description function check empty of input
   *
   * @param {Object} pattern is
   * @param {String} message error
   *
   * @returns {Boolean} isError
   */
  static isEmpty(pattern, message) {
    const error = pattern.element.parentElement.querySelector('.message .message-error');
    const errorIcon = pattern.element.parentElement.querySelector('.message .error-icon');

    let isError = true;

    if (pattern.value === '') {
      error.innerText = message;
      pattern.element.classList.add('valid');
      errorIcon.classList.remove('hide');

      isError = true;
    } else {
      isError = false;
    }

    return isError;
  }

  /**
   * @description function check rules of input
   *
   * @param {Object} pattern are element and value
   * @param {String} rules is rules of each filed
   * @param {String} message error
   *
   * @returns {Boolean} isError
   */
  static isRules(pattern, rules, message) {
    const error = pattern.element.parentElement.querySelector('.message .message-error');
    const errorIcon = pattern.element.parentElement.querySelector('.message .error-icon');

    let isError = true;

    if (!pattern.value.match(rules)) {
      error.innerText = message;
      pattern.element.classList.add('valid');
      errorIcon.classList.remove('hide');

      isError = true;
    } else {
      isError = false;
    }

    return isError;
  }

  /**
   * @description function check length if length of input less than 8
   *
   * @param {Object} pattern are element and value
   * @param {String} message error
   *
   * @returns {Boolean} isError
   */
  static isLength(pattern, message) {
    const error = pattern.element.parentElement.querySelector('.message .message-error');
    let isError = true;

    if (pattern.value.length < 8) {
      error.innerText = message;
      pattern.element.classList.add('valid');

      isError = true;
    } else {
      isError = false;
    }

    return isError;
  }
}
