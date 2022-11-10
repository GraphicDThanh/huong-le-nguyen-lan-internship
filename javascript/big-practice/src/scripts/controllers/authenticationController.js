export default class AuthenticationController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    this.view.bindLogin(this.validateUserInfo.bind(this));
  }

  async validateUserInfo(email, password) {
    const isValid = await this.model.verifyCredential(email, password);
    this.view.handleInvalidUser(isValid);
  }
}
