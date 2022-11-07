export default class AuthenticationController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    this.view.bindLogin((email, password) => {
      this.checkUser(email, password);
    });
  }

  async checkUser(email, password) {
    const message = await this.model.constructor.checkUserByEmail(email, password);
    this.view.checkUser(message);
  }
}
