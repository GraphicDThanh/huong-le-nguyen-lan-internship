export default class MenuController {
  constructor(view, noteController, headerController) {
    this.view = view;
    this.noteController = noteController;
    this.headerController = headerController;
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    // Render menu component in the left site
    this.view.renderMenu();

    /**
     * Render to the corresponding interface when clicking to
     * change tab and it also change logo
     */
    this.view.bindChangePage(
      () => this.noteController.renderTabs(),
      (tab) => this.headerController.headerView.changeLogoByTab(tab),
      () => this.noteController.deleteListNotes(),
    );
  }
}
