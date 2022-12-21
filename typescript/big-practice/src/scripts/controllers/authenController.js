export default class AuthenController {
  constructor(view) {
    this.view = view;
  }

  init() {
    this.view.bindLogin();
    this.view.bindShowHideInputError();
  }
}
