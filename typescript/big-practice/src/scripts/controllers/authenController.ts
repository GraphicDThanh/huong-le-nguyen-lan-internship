import LoginView from '../views/loginView';

export default class AuthenController {
  view: LoginView;

  constructor(view: LoginView) {
    this.view = view;
  }

  init(): void {
    this.view.bindLogin();
    this.view.bindShowHideInputError();
    this.view.bindCreateAccount();
  }
}
