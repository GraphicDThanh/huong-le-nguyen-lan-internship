export default class HeaderController {
  constructor(headerView, noteController) {
    this.headerView = headerView;
    this.noteController = noteController;
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

    // function clear search and render tab note
    this.headerView.clearSearch(() => this.noteController.renderTabs());
  }
}
