import formElement from '../components/form';
import { ERROR_MESSAGE } from '../constants/message';
import STORAGE_KEYS from '../constants/storageKeys';
import EventHelpers from '../helpers/eventHelpers';
import User from '../interfaces/user';
import { hideError, showError } from '../utils/errorsDOM';
import LocalStorage from '../utils/localStorage';
import navigatePage from '../utils/navigatePage';
import { selectDOMById, selectDOMClass } from '../utils/querySelectDOM';

export default class AuthenticationView {
  signUpForm: HTMLFormElement | null;

  signUp: HTMLElement | null;

  emailElement: HTMLElement | null;

  passwordElement: HTMLElement | null;

  confirmPasswordElement: HTMLElement | null;

  labelEmail: HTMLElement | null;

  labelConfirmPassword: HTMLElement | null;

  labelPassword: HTMLElement | null;

  eventHelpers: EventHelpers;

  localStorage: LocalStorage<string>;

  constructor() {
    this.signUpForm = selectDOMById('sign-up-form') as HTMLFormElement;
    this.signUp = selectDOMClass('.btn-login-form');
    this.emailElement = selectDOMClass('.email');
    this.passwordElement = selectDOMClass('.password');
    this.confirmPasswordElement = selectDOMClass('.confirm-password');
    this.labelEmail = selectDOMClass('.label-email');
    this.labelPassword = selectDOMClass('.label-password');
    this.labelConfirmPassword = selectDOMClass('.label-confirm-password');

    this.eventHelpers = new EventHelpers();
    this.localStorage = new LocalStorage();
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
   * @description function bind event submit for form
   *
   * @param findUser is function find user transmitted from controller
   * @param createAccount is function create new user transmitted from controller
   */
  bindSubmitForm(
    findUser: (email: string) => Promise<User[]>,
    createAccount: (user: User) => void
  ): void {
    const formWrapper = selectDOMClass('.form-wrapper') as HTMLFormElement;
    const confirmPasswordElement = selectDOMClass('.confirm-password');
    const emailElement = selectDOMClass('.email');
    const passwordElement = selectDOMClass('.password');

    const handler = async (e: Event) => {
      e.preventDefault();

      if (passwordElement && emailElement) {
        const formData = new FormData(formWrapper);
        const confirmPassword = formData.get('confirm-password') as string;
        const user = {
          email: formData.get('email'),
          password: formData.get('password'),
        } as User;
        const users = await findUser(user.email);

        if (confirmPassword && confirmPasswordElement) {
          this.handleValidSignUp(users, user, confirmPassword, createAccount);
          confirmPasswordElement.blur();
        } else {
          this.handleValidLogin(users, user);
        }

        passwordElement.blur();
        emailElement.blur();
      }
    };

    this.eventHelpers.addEvent(formWrapper, 'submit', handler);
  }

  /**
   * @description function handle valid sign up form. If email doesn't exist,
   * It will add more user in data
   *
   * @param users is list users from data
   * @param user is information of user input
   * @param confirmPassword is password confirm of input
   * @param createAccount function create new account transmitted from controller
   */
  handleValidSignUp(
    users: User[],
    user: User,
    confirmPassword: string,
    createAccount: (user: User) => void
  ): void {
    const confirmPasswordElement = selectDOMClass('.confirm-password');
    const emailElement = selectDOMClass('.email');
    const labelEmail = selectDOMClass('.label-email');
    const labelConfirmPassword = selectDOMClass('.label-confirm-password');

    if (!users.length) {
      hideError(emailElement, labelEmail);
    } else {
      showError(emailElement, ERROR_MESSAGE.EMAIL_ALREADY_EXISTS, labelEmail);
      // hideError(confirmPasswordElement, labelConfirmPassword);
    }

    if (user.password === confirmPassword) {
      hideError(confirmPasswordElement, labelConfirmPassword);
      createAccount(user);
      navigatePage('index.html');
    } else {
      showError(
        confirmPasswordElement,
        ERROR_MESSAGE.PASSWORD_NOT_MATCH,
        labelConfirmPassword
      );
    }
  }

  /**
   * @description function handle valid login form, if email/ password match with
   * any email/ password in data. It will move to home page
   *
   * @param users is list users from data
   * @param user is information of user input
   */
  handleValidLogin(users: User[], user: User): void {
    const emailElement = selectDOMClass('.email');
    const labelEmail = selectDOMClass('.label-email');
    const passwordElement = selectDOMClass('.password');
    const labelPassword = selectDOMClass('.label-password');

    if (users.length && user.email === users[0].email) {
      hideError(emailElement, labelEmail);
    } else {
      showError(emailElement, ERROR_MESSAGE.EMAIL_NOT_EXISTS, labelEmail);
      // hideError(passwordElement, labelPassword);
    }

    if (user.password === users[0].password) {
      hideError(passwordElement, labelPassword);
      this.localStorage.setItems(STORAGE_KEYS.USER_ID, users[0].id);
      navigatePage('home.html');
    } else {
      showError(
        passwordElement,
        ERROR_MESSAGE.PASSWORD_INCORRECT,
        labelPassword
      );
    }
  }

  conditionCheckField(
    user: User,
    data: string,
    element: HTMLElement,
    label: HTMLElement
  ) {
    if (user.password === data) {
      hideError(element, label);
    } else {
      showError(element, ERROR_MESSAGE.PASSWORD_INCORRECT, label);
    }
  }

  /**
   * @description bind events show hide label error for input
   */
  bindShowHideInputError(): void {
    const confirmPassword = selectDOMClass('.confirm-password');
    const emailElement = selectDOMClass('.email');
    const passwordElement = selectDOMClass('.password');

    this.showHideInputError(emailElement);
    this.showHideInputError(passwordElement);
    if (confirmPassword) {
      this.showHideInputError(confirmPassword);
    }
  }

  /**
   * @description when having errors, this function will
   * keep outline of input red color, and avoid defined properties CSS
   * focus of input
   *
   * @param {Object} element is input your want to show hide error of label
   */
  showHideInputError(el: HTMLElement | null): void {
    const element = el;

    if (element) {
      const handler = () => {
        const message =
          element.parentNode?.querySelector('.message-error')?.textContent;

        if (message) {
          element.style.outlineColor = 'var(--danger-color)';
        } else {
          element.style.outlineColor = 'var(--info-color)';
        }
      };

      this.eventHelpers.addEvent(element, 'focus', handler);
    }
  }
}
