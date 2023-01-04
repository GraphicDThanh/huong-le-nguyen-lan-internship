import { selectDOMById, selectDOMClass } from '../utils/querySelectDOM';
import { ERROR_MESSAGE } from '../constants/message';
import { hideError, showError } from '../utils/errorsDOM';
import userData from '../../../data/mockUser';
import LocalStorage from '../utils/localStorage';
import STORAGE_KEYS from '../constants/storageKeys';
import navigatePage from '../utils/navigatePage';
import ElementHelpers from '../helpers/elementHelpers';
import EventHelpers from '../helpers/eventHelpers';
import User from '../types/user';

export default class LoginView {
  loginForm: HTMLFormElement | null;

  emailElement: HTMLElement | null;

  passwordElement: HTMLElement | null;

  labelEmail: HTMLElement | null;

  labelPassword: HTMLElement | null;

  createAccount: HTMLElement | null;

  localStorage: LocalStorage<boolean>;

  elementHelpers: ElementHelpers;

  eventHelpers: EventHelpers;

  constructor() {
    this.loginForm = selectDOMById('login-form') as HTMLFormElement;
    this.emailElement = selectDOMClass('.email');
    this.passwordElement = selectDOMClass('.password');
    this.labelEmail = selectDOMClass('.label-email');
    this.labelPassword = selectDOMClass('.label-password');
    this.createAccount = selectDOMClass('.btn-create-account-form');

    this.localStorage = new LocalStorage();
    this.elementHelpers = new ElementHelpers();
    this.eventHelpers = new EventHelpers();
  }

  /**
   * @description function check valid email and password
   */
  bindLogin() {
    const handler = (e: Event) => {
      e.preventDefault();

      if (this.loginForm && this.passwordElement && this.emailElement) {
        const formData = new FormData(this.loginForm);
        const user = {
          email: formData.get('email'),
          password: formData.get('password'),
        } as User;

        this.handleInvalidUser(user);
        this.passwordElement.blur();
        this.emailElement.blur();
      }
    };

    this.eventHelpers.addEvent(this.loginForm, 'submit', handler);
  }

  /**
   * @description function change to sign up page
   */
  bindCreateAccount() {
    const handler = () => {
      navigatePage('signUp.html');
    };

    this.eventHelpers.addEvent(this.createAccount, 'click', handler);
  }

  /**
   * @description function check email and password are exists in data
   *
   * @param {String} password is value of input that user enters
   * @param {String} email is value of input that user enters
   */
  handleInvalidUser(user: User) {
    if (this.emailElement && this.passwordElement) {
      if (user.email === userData.email) {
        hideError(this.emailElement, this.labelEmail);

        if (user.password === userData.password) {
          hideError(this.passwordElement, this.labelPassword);
        } else {
          showError(
            this.passwordElement,
            ERROR_MESSAGE.PASSWORD_INCORRECT,
            this.labelPassword
          );
        }
      } else {
        showError(
          this.emailElement,
          ERROR_MESSAGE.EMAIL_NOT_EXISTS,
          this.labelEmail
        );
        hideError(this.passwordElement, this.labelPassword);
      }

      /**
       * Condition if input email and password don't have valid class,
       * then it will go to home page
       */
      if (
        !this.emailElement.classList.contains('valid') &&
        !this.passwordElement.classList.contains('valid')
      ) {
        this.localStorage.setItems(STORAGE_KEYS.IS_LOGIN, true);
        navigatePage('home.html');
      }
    }
  }

  /**
   * @description bind events show hide label error for input
   */
  bindShowHideInputError() {
    this.showHideInputError(this.emailElement);
    this.showHideInputError(this.passwordElement);
  }

  /**
   * @description when having errors, this function will
   * keep outline of input red color, and avoid defined properties CSS
   * focus of input
   *
   * @param {Object} element is input your want to show hide error of label
   */
  showHideInputError(element: HTMLElement | null) {
    if (element) {
      const handler = () => {
        if (element.parentNode) {
          const message =
            element.parentNode.querySelector('.message-error')?.textContent;
          const ev = element;

          if (message) {
            ev.style.outlineColor = 'var(--danger-color)';
          } else {
            ev.style.outlineColor = 'var(--info-color)';
          }
        }
      };

      this.eventHelpers.addEvent(element, 'focus', handler);
    }
  }
}
