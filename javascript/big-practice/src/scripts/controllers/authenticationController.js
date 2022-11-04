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
    const message = this.model.constructor.checkUser(email, password);
    this.view.isUser(await message);
  }
}
