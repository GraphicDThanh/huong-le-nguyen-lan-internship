export default class MenuController {
  constructor(menuView, noteController, headerController) {
    this.menuView = menuView;
    this.noteController = noteController;
    this.headerController = headerController;
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    // Render menu component in the left site
    this.menuView.renderMenu();

    /**
     * Render to the corresponding interface when clicking to
     * change tab and it also change logo
     */
    this.menuView.bindChangePage(
      () => this.noteController.renderTabs(),
      (tab) => this.headerController.headerView.changeLogoByTab(tab)
    );
  }
}
