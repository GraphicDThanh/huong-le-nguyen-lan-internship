export default class HeaderController {
  constructor(headerView, menuView, listNoteController) {
    this.headerView = headerView;
    this.menuView = menuView;
    this.noteController = listNoteController;
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    // Render menu component in the left site
    this.menuView.renderMenu();

    // Render header component
    this.headerView.renderHeader();

    this.menuView.bindChangePage(
      () => this.noteController.renderTabs(),
      (tab) => this.headerView.changeLogoByTab(tab),
    );

    // function close header when click the close button in header
    this.headerView.closeSelected();

    // // function show hide menu hidden
    this.headerView.bindShowMenuUser();

    // // function logout user
    this.headerView.bindLogOut();

    // // function set username to menu user
    this.headerView.showInformationUser();
  }
}
