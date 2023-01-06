import HeaderView from '../views/headerView';
import UserController from './userController';

export default class HeaderController {
  headerView: HeaderView;

  userController: UserController;

  constructor(headerView: HeaderView, userController: UserController) {
    this.headerView = headerView;
    this.userController = userController;
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    // Render header component
    this.headerView.renderHeader();

    // function close header when click the close button in header
    this.headerView.closeSelected();

    // function show hide menu hidden
    this.headerView.bindShowMenuUser();

    // function logout user
    this.headerView.bindLogOut();

    // function set username to menu user
    this.headerView.showInformationUser(async (id: string) => {
      const email = await this.userController.model.getUserByKey('id', id);

      return email;
    });
  }
}
