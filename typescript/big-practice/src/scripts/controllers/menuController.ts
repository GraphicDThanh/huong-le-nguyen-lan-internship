import Menu from 'constants/menu';
import MenuView from 'views/menuView';
import HeaderController from './headerController';
import NoteController from './noteController';

export default class MenuController {
  menuView: MenuView;

  noteController: NoteController;

  headerController: HeaderController;

  constructor(
    menuView: MenuView,
    noteController: NoteController,
    headerController: HeaderController
  ) {
    this.menuView = menuView;
    this.noteController = noteController;
    this.headerController = headerController;
  }

  init(): void {
    this.bindEvents();
  }

  bindEvents(): void {
    // Render menu component in the left site
    this.menuView.renderMenu();

    /**
     * Render to the corresponding interface when clicking to
     * change tab and it also change logo
     */
    this.menuView.bindChangePage(
      () => this.noteController.renderTabs(),
      (indexPage) => {
        if (indexPage === '0') {
          this.noteController.view.currentPage = Menu.LIST_NOTES;
        } else {
          this.noteController.view.currentPage = Menu.TRASH_NOTES;
        }
      },
      (tab) => this.headerController.headerView.changeLogoByTab(tab)
    );
  }
}
