import formElement from '../components/form';
import { ERROR_MESSAGE } from '../constants/message';
import PAGE from '../constants/page';
import ElementHelpers from '../helpers/elementHelpers';
import EventHelpers from '../helpers/eventHelpers';
import User from '../interfaces/user';
import { hideError, showError } from '../utils/errorsDOM';
import { selectDOMClass } from '../utils/querySelectDOM';

interface CheckAuthentication {
  isEmail: boolean;
  isPassword: boolean;
}

export default class AuthenticationView {
  eventHelpers: EventHelpers;

  elementHelpers: ElementHelpers;

  constructor() {
    this.eventHelpers = new EventHelpers();
    this.elementHelpers = new ElementHelpers();
  }

  /**
   * @description function render form login or sign up
   */
  renderForm(): void {
    const page = selectDOMClass('.index-page .container');
    page?.appendChild(formElement());
  }

  /**
   * @description function change to sign up page
   */
  bindChangePage(): void {
    const createAccount = selectDOMClass(
      '#login-form .btn-create-account-form'
    );
    const signUp = selectDOMClass('#sign-up-form .btn-login-form');

    this.eventHelpers.changePage(signUp, 'index.html');
    this.eventHelpers.changePage(createAccount, 'signUp');
  }

  /**
   * @description function handle event submit of form
   * with two function transmitted from controller
   *
   * @param handlers is list function events
   */
  bindSubmitForm(handlers: {
    handleValidSignUp: (user: User, confirmPassword: string) => void;
    handleValidLogin: (user: User) => void;
  }): void {
    const { handleValidSignUp, handleValidLogin } = handlers;
    const formWrapper = selectDOMClass('.form-wrapper') as HTMLFormElement;
    const confirmPasswordElement = selectDOMClass('.confirm-password')!;
    const emailElement = selectDOMClass('.email')!;
    const passwordElement = selectDOMClass('.password')!;

    const handler = async (e: Event) => {
      e.preventDefault();

      const formData = new FormData(formWrapper);
      const confirmPassword = formData.get('confirm-password') as string;
      const user = {
        email: formData.get('email'),
        password: formData.get('password'),
      } as User;

      if (confirmPasswordElement) {
        handleValidSignUp(user, confirmPassword);
        confirmPasswordElement.blur();
      } else {
        handleValidLogin(user);
      }

      passwordElement.blur();
      emailElement.blur();
    };

    this.eventHelpers.addEvent(formWrapper, 'submit', handler);
  }

  /**
   * @description function show hide error message of field
   *
   * @param {Object} checkValid is object have isEmail and isPassword.
   * If isEmail or isPassword is true that mean it will have error
   *
   * @param {String} page to distinguish between login page and sign up page
   */
  showHideError(checkValid: CheckAuthentication, page: string): void {
    const emailElement = selectDOMClass('.email')!;
    const labelEmail = selectDOMClass('.label-email')!;
    const passwordElement = selectDOMClass('.password')!;
    const labelPassword = selectDOMClass('.label-password')!;
    const confirmPasswordElement = selectDOMClass('.confirm-password')!;
    const labelConfirmPassword = selectDOMClass('.label-confirm-password')!;

    if (page === PAGE.SIGN_UP) {
      this.conditionValidField(
        checkValid.isEmail,
        emailElement,
        labelEmail,
        ERROR_MESSAGE.EMAIL_ALREADY_EXISTS
      );
      this.conditionValidField(
        checkValid.isPassword,
        confirmPasswordElement,
        labelConfirmPassword,
        ERROR_MESSAGE.PASSWORD_NOT_MATCH
      );
    } else {
      this.conditionValidField(
        checkValid.isEmail,
        emailElement,
        labelEmail,
        ERROR_MESSAGE.EMAIL_NOT_EXISTS
      );
      this.conditionValidField(
        checkValid.isPassword,
        passwordElement,
        labelPassword,
        ERROR_MESSAGE.PASSWORD_INCORRECT
      );
    }
  }

  /**
   * @description condition show hide error. If param is true, it will
   * show error, and when param is false it will hide error
   *
   * @param {Boolean} isValid is transmitted from controller to know
   * field have error or not
   * @param {Object} element is element of field
   * @param {Object} label is label of field
   * @param {String} message is message error
   */
  conditionValidField(
    isValid: boolean,
    element: HTMLElement,
    label: HTMLElement,
    message: string
  ): void {
    if (isValid) {
      showError(element, message, label);
    } else {
      hideError(element, label);
    }
  }

  /**
   * @description bind events show hide label error for input
   */
  bindShowHideInputError(): void {
    const confirmPassword = selectDOMClass('.confirm-password');
    const emailElement = selectDOMClass('.email')!;
    const passwordElement = selectDOMClass('.password')!;

    this.elementHelpers.showHideInputError(emailElement);
    this.elementHelpers.showHideInputError(passwordElement);
    if (confirmPassword) {
      this.elementHelpers.showHideInputError(confirmPassword);
    }
  }
}
