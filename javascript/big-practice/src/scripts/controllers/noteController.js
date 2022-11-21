import { renderPopupError } from '../utils/handleError';

/**
 * @class noteController
 * @description Controller is an intermediary for views and models
 *
 * @param model
 * @param view
 */
export default class NoteController {
  constructor(model, view, headerView, menuView) {
    this.model = model;
    this.view = view;
    this.headerView = headerView;
    this.menuView = menuView;
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    // Navigate page to index page if isLogin from localStorage is false
    this.view.navigatePageWithLoginStatus();

    // Render menu component in the left site
    this.menuView.renderMenu();

    // Render header component
    this.headerView.renderHeader();

    const handlers = {
      renderTabNotes: () => this.renderTabNote(),
      renderTabTrash: () => this.renderTabTrash(),
      addNote: (note) => this.addNote(note),
      deleteNote: (noteId) => this.deleteNote(noteId),
    };

    /**
     * function change tab. When the user clicks on the tab,
     * it will render the corresponding tab-based interface. And
     * it also change logo title
     */
    this.menuView.bindChangePage(
      () => this.view.renderTabs(handlers),
      (tab) => this.headerView.changeLogoByTab(tab),
    );

    // function close header when click the close button in header
    this.headerView.closeSelected();

    // function show hide menu user in the header
    this.headerView.bindShowMenuUser();

    // function logout user
    this.headerView.bindLogOut();

    // function set username to menu user
    this.headerView.showInformationUser();
  }

  async renderTabTrash() {
    try {
      const listTrash = await this.model.filterNotes('trashNotes');
      // function render trash notes
      this.view.renderListTrashNotes(listTrash, (noteId) => this.handleConfirmPopup(noteId));

      // function show Empty Note if note is empty
      this.view.showHideEmpty(listTrash, 'trashNotes');
    } catch (error) {
      renderPopupError(error.message);
    }
  }

  async renderTabNote() {
    try {
      const handlers = {
        handleDeleteNote: (noteId) => this.deleteNote(noteId),
        handleShowNoteForm: (id) => this.handleNoteForm(id),
      };
      const listNotes = await this.model.filterNotes('listNotes');

      // function render list notes
      this.view.renderListNotes(listNotes, handlers);

      // function show Empty Note if note is empty
      this.view.showHideEmpty(listNotes, 'listNotes');
    } catch (error) {
      renderPopupError(error.message);
    }
  }

  /**
   * @description handle event of confirm popup in Trash tab
   * with id of note
   *
   * @param {String} noteId is id of note is selected
   */
  async handleConfirmPopup(noteId) {
    try {
      const note = await this.model.findNote(noteId);

      // function render confirm message
      this.view.renderConfirmMessage(note);

      // function close popup
      this.view.bindClosePopup();

      // function delete note in tab trash
      this.view.bindDeleteNoteInTrash(async (id) => {
        await this.model.deleteNoteInTrash(id);

        this.view.removeNoteElement(id);
        this.view.showHideEmpty(this.model.listNotes, 'trashNotes');
      });
    } catch (error) {
      renderPopupError(error.message);
    }
  }

  /**
   * @description function add note with param is a note
   *
   * @param {Object} note is a information of note
   */
  async addNote(note) {
    try {
      const noteItem = await this.model.addNote(note);
      this.view.renderNote(
        noteItem,
        (noteId) => this.deleteNote(noteId),
        (id) => this.handleNoteForm(id),
      );
    } catch (error) {
      renderPopupError(error.message);
    }
  }

  /**
   * @description function delete note in tab note with id of note selected
   * and check if that note is empty or not. If it is empty, show text empty
   *
   * @param {String} noteId is id of note is selected
   */
  async deleteNote(noteId) {
    try {
      const noteItem = await this.model.deleteNote(noteId);

      this.view.removeNoteElement(noteItem.id);
      this.view.showHideEmpty(this.model.listNotes, 'listNotes');
    } catch (error) {
      renderPopupError(error.message);
    }
  }

  /**
   * @description function edit note with information of note is selected
   *
   * @param {Object} note is information of note
   */
  async editNote(note) {
    try {
      const noteItem = await this.model.editNote(note);

      this.view.editNote(noteItem);
    } catch (error) {
      renderPopupError(error.message);
    }
  }

  /**
   * @description function show information of note form by finding note with id
   * and bind events related to note
   *
   * @param {String} id is a id of note
   */
  async handleNoteForm(id) {
    try {
      const noteItem = await this.model.findNote(id);

      const handlers = {
        handleEditNote: (note) => this.editNote(note),
        handleDeleteNote: (noteId) => this.deleteNote(noteId),
      };

      // function render form note
      this.view.renderFormNote(noteItem, handlers);
    } catch (error) {
      renderPopupError(error.message);
    }
  }
}
