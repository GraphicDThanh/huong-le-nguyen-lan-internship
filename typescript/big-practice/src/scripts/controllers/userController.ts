import UserModel from 'models/userModel';
import User from 'interfaces/user';
import AuthenticationView from 'views/authenticationView';
import Page from 'constants/page';
import navigatePage from 'utils/navigatePage';
import StorageKeys from 'constants/storageKeys';
import LocalStorage from 'utils/localStorage';

export default class UserController {
  authenticationView: AuthenticationView;

  model: UserModel;

  localStorage: LocalStorage<string>;

  constructor(authenticationView: AuthenticationView, model: UserModel) {
    this.authenticationView = authenticationView;
    this.model = model;
    this.localStorage = new LocalStorage();
  }

  init(): void {
    this.authenticationView.renderForm();
    this.authenticationView.bindChangePage();
    this.authenticationView.bindShowHideInputError();
    this.createNewAccount();
  }

  async createNewAccount(): Promise<void> {
    const handlers = {
      handleValidSignUp: (user: User, confirmPassword: string) =>
        this.handleSignUp(user, confirmPassword),
      handleValidLogin: (user: User) => this.handleLogin(user),
    };

    this.authenticationView.bindSubmitForm(handlers);
  }

  /**
   * @description function handle form sign up
   * @param {Object} user is information of input user enter
   * @param confirmPassword is confirm password of input user enter
   */
  async handleSignUp(user: User, confirmPassword: string): Promise<void> {
    const checkValid = await this.model.checkValid(
      user,
      Page.SIGN_UP,
      confirmPassword
    );
    this.authenticationView.showHideError(checkValid, Page.SIGN_UP);

    if (!checkValid.isEmail && !checkValid.isPassword) {
      this.model.addUser(user);
      navigatePage('/');
    }
  }

  /**
   * @description function handle form login
   *
   * @param {Object} user is information of input user enter
   */
  async handleLogin(user: User): Promise<void> {
    const checkValid = await this.model.checkValid(user, Page.LOGIN);
    this.authenticationView.showHideError(checkValid, Page.LOGIN);

    const users = (await this.model.getUserByKey(
      'email',
      user.email
    )) as User[];

    if (!checkValid.isEmail && !checkValid.isPassword) {
      this.localStorage.setItems(StorageKeys.USER_ID, users[0].id);
      navigatePage('home.html');
    }
  }
}
