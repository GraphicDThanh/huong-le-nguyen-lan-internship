import UserModel from '../models/userModel';
import SignUpView from '../views/signUpView';

export default class SignUpController {
  view: SignUpView;

  model: UserModel;

  constructor(view: SignUpView, model: UserModel) {
    this.view = view;
    this.model = model;
  }

  init() {
    this.view.bindChangeLoginPage();
    this.view.bindSignUp();
  }
}
