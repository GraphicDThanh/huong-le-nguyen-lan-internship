export default class AuthenticationController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    this.view.bindLogin((email, password) => {
      this.validateUserInfo(email, password);
    });
  }

  async validateUserInfo(email, password) {
    const isValid = await this.model.constructor.verifyCredential(email, password);
    this.view.handleInvalidUser(isValid);
  }
}
