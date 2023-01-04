import { ERROR_MESSAGE } from '../constants/message';
import EventHelpers from '../helpers/eventHelpers';
import User from '../types/user';
import { hideError, showError } from '../utils/errorsDOM';
import navigatePage from '../utils/navigatePage';
import { selectDOMById, selectDOMClass } from '../utils/querySelectDOM';

export default class SignUpView {
  signUpForm: HTMLFormElement | null;

  signUp: HTMLElement | null;

  emailElement: HTMLElement | null;

  passwordElement: HTMLElement | null;

  confirmPasswordElement: HTMLElement | null;

  labelEmail: HTMLElement | null;

  labelConfirmPassword: HTMLElement | null;

  labelPassword: HTMLElement | null;

  eventHelpers: EventHelpers;

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
  }

  /**
   * @description function move to login page
   */
  bindChangeLoginPage() {
    const handler = (e: Event) => {
      e.preventDefault();
      navigatePage('index.html');
    };

    this.eventHelpers.addEvent(this.signUp, 'click', handler);
  }

  bindSignUp(users: User[], createAccount: (user: User) => void) {
    const handler = (e: Event) => {
      e.preventDefault();

      if (this.signUpForm) {
        const formData = new FormData(this.signUpForm);
        const user = {
          email: formData.get('email'),
          password: formData.get('password'),
        } as User;
        const confirmPassword = formData.get('confirm-password') as string;

        this.handleInvalid(user, users, confirmPassword, createAccount);
      }
    };

    this.eventHelpers.addEvent(this.signUpForm, 'submit', handler);
  }

  handleInvalid(
    user: User,
    users: User[],
    confirmPassword: string,
    createAccount: (user: User) => void
  ) {
    users.forEach((account) => {
      if (user.email !== account.email) {
        hideError(this.emailElement, this.labelEmail);

        if (user.password === confirmPassword) {
          hideError(this.confirmPasswordElement, this.labelConfirmPassword);
          createAccount(user);
        } else {
          showError(
            this.confirmPasswordElement,
            ERROR_MESSAGE.PASSWORD_NOT_MATCH,
            this.labelConfirmPassword
          );
        }
      } else {
        showError(
          this.emailElement,
          ERROR_MESSAGE.EMAIL_ALREADY_EXISTS,
          this.labelEmail
        );
        hideError(this.confirmPasswordElement, this.labelConfirmPassword);
      }
    });
  }
}
