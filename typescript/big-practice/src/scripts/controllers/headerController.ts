import HeaderView from '../views/headerView';

export default class HeaderController {
  headerView: HeaderView;

  constructor(headerView: HeaderView) {
    this.headerView = headerView;
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
    this.headerView.showInformationUser();
  }
}
