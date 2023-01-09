import UserModel from '../models/userModel';
import User from '../interfaces/user';
import AuthenticationView from '../views/authenticationView';

export default class UserController {
  authenticationView: AuthenticationView;

  model: UserModel;

  constructor(authenticationView: AuthenticationView, model: UserModel) {
    this.authenticationView = authenticationView;
    this.model = model;
  }

  init(): void {
    this.authenticationView.renderForm();
    this.authenticationView.bindChangePage();
    this.authenticationView.bindShowHideInputError();
    this.createNewAccount();
  }

  async createNewAccount(): Promise<void> {
    this.authenticationView.bindSubmitForm(
      async (email: string) => {
        const user = (await this.model.getUserByKey('email', email)) as User[];

        return user;
      },
      (user: User) => {
        this.model.addUser(user);
      }
    );
  }
}
