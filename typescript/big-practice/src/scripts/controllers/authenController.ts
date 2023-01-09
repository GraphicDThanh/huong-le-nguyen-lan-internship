export default class AuthenController {
  constructor(view) {
    this.view = view;
  }

  init(): void {
    this.view.bindLogin();
    this.view.bindShowHideInputError();
  }
}
