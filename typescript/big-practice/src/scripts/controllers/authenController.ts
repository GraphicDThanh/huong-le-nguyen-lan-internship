import LoginView from '../views/loginView';

export default class AuthenController {
  view: LoginView;

  constructor(view: LoginView) {
    this.view = view;
  }

  init() {
    this.view.bindLogin();
    this.view.bindShowHideInputError();
  }
}
