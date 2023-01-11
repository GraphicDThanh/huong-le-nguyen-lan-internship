import { selectDOMById, selectDOMClass } from '../utils/querySelectDOM';
import { ERROR_MESSAGE } from '../constants/message';
import { hideError, showError } from '../utils/errorsDOM';
import userData from '../../../data/mockUser';
import LocalStorage from '../utils/localStorage';
import STORAGE_KEYS from '../constants/storageKeys';
import navigatePage from '../utils/navigatePage';
import ElementHelpers from '../helpers/elementHelpers';
import EventHelpers from '../helpers/eventHelpers';
import User from '../interfaces/user';

interface PatternElement {
  value: string;
  data: string;
  element: HTMLElement;
  label: HTMLElement;
  message: string;
}

export default class LoginView {
  loginForm: HTMLFormElement;

  emailElement: HTMLElement;

  passwordElement: HTMLElement;

  labelEmail: HTMLElement;

  labelPassword: HTMLElement;

  localStorage: LocalStorage<boolean>;

  elementHelpers: ElementHelpers;

  eventHelpers: EventHelpers;

  constructor() {
    this.localStorage = new LocalStorage();
    this.elementHelpers = new ElementHelpers();
    this.eventHelpers = new EventHelpers();

    this.loginForm = selectDOMById('login-form') as HTMLFormElement;
    this.emailElement = selectDOMClass('.email')!;
    this.passwordElement = selectDOMClass('.password')!;
    this.labelEmail = selectDOMClass('.label-email')!;
    this.labelPassword = selectDOMClass('.label-password')!;
  }

  /**
   * @description function check valid email and password
   */
  bindLogin() {
    const handler = (e: Event) => {
      e.preventDefault();

      const formData = new FormData(this.loginForm);
      const user = {
        email: formData.get('email'),
        password: formData.get('password'),
      } as User;

      this.handleInvalidUser(user);

      this.passwordElement.blur();
      this.emailElement.blur();
    };

    this.eventHelpers.addEvent(this.loginForm, 'submit', handler);
  }

  /**
   * @description function check email and password are exists in data
   *
   * @param {String} password is value of input that user enters
   * @param {String} email is value of input that user enters
   */
  handleInvalidUser(user: User) {
    const emailField = {
      value: user.email,
      data: userData.email,
      element: this.emailElement,
      label: this.labelEmail,
      message: ERROR_MESSAGE.EMAIL_NOT_EXISTS,
    };

    const passwordField = {
      value: user.password,
      data: userData.password,
      element: this.passwordElement,
      label: this.labelPassword,
      message: ERROR_MESSAGE.PASSWORD_INCORRECT,
    };

    this.conditionCheckField(emailField);
    this.conditionCheckField(passwordField);

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

  /**
   * @description condition to show hide error
   *
   * @param {Object} field is pattern of input login or sign up
   */
  conditionCheckField(patternElement: PatternElement) {
    if (patternElement.value === patternElement.data) {
      hideError(patternElement.element, patternElement.label);
    } else {
      showError(
        patternElement.element,
        patternElement.message,
        patternElement.label
      );
    }
  }

  /**
   * @description bind events show hide label error for input
   */
  bindShowHideInputError() {
    this.elementHelpers.showHideInputError(this.emailElement);
    this.elementHelpers.showHideInputError(this.passwordElement);
  }
}
