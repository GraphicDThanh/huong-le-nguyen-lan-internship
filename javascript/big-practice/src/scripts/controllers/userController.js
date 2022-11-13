import UserModel from '../models/userModel';

export default class UserController {
  constructor(view) {
    this.view = view;
    this.userModel = new UserModel();
  }

  init() {
    this.view.bindLogin(this.validateDataUser.bind(this));
  }

  async validateDataUser(email, password) {
    try {
      const isValid = await this.userModel.verifyCredential(email, password);
      this.view.handleInvalidUser(isValid);
    } catch (error) {
      console.log(error);
    }
  }
}
