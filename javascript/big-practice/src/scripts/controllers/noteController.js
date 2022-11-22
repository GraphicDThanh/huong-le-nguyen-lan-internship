/**
 * @class noteController
 * @description Controller is an intermediary for views and models
 *
 * @param model
 * @param view
 */
export default class NoteController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    // Navigate page to index page if isLogin from localStorage is false
    this.view.navigatePageWithLoginStatus();
  }

  renderTabs() {
    const handlers = {
      renderTabNotes: () => this.renderTabNote(),
      renderTabTrash: () => this.renderTabTrash(),
      addNote: (note) => this.addNote(note),
      deleteNote: (noteId) => this.deleteNote(noteId),
    };

    this.view.renderTabs(handlers);
  }

  async renderTabTrash() {
    try {
      const listTrash = await this.model.filterNotes('trashNotes');
      // function render trash notes
      this.view.renderListTrashNotes(listTrash, (noteId) => this.handleConfirmPopup(noteId));

      // function show Empty Note if note is empty
      this.view.showHideEmpty(listTrash, 'trashNotes');
    } catch (error) {
      this.view.renderPopupError(error.message);
    }
  }

  async renderTabNote() {
    try {
      const handlers = {
        handleDeleteNote: (noteId) => this.deleteNote(noteId),
        handleShowNoteForm: (id) => this.findNote(id),
      };

      const listNotes = await this.model.filterNotes('listNotes');

      // function render list notes
      this.view.renderListNotes(listNotes, handlers);

      // function show Empty Note if note is empty
      this.view.showHideEmpty(listNotes, 'listNotes');
    } catch (error) {
      this.view.renderPopupError(error.message);
    }
  }

  async handleConfirmPopup(noteId) {
    try {
      const note = await this.model.findNote(noteId);
      // function render confirm message
      this.view.renderConfirmMessage(note);

      // function close popup
      this.view.bindClosePopup();

      // function delete trash forever
      this.view.bindDeleteNoteInTrash(async (id) => {
        await this.model.deleteNoteInTrash(id);

        this.view.removeNoteElement(id);
        this.view.showHideEmpty(this.model.listNotes, 'trashNotes');
      });
    } catch (error) {
      this.view.renderPopupError(error.message);
    }
  }

  /**
   * @description function add note
   *
   * @param {String} title is title from input
   * @param {String} description is description from input
   */
  async addNote(note) {
    try {
      const noteItem = await this.model.addNote(note);
      const handlers = {
        handleDeleteNote: (noteId) => this.deleteNote(noteId),
        handleShowNoteForm: (id) => this.findNote(id),
      };

      this.view.renderNote(noteItem, handlers);
    } catch (error) {
      this.view.renderPopupError(error.message);
    }
  }

  /**
   * @description function delete note in model
   *
   * @param {String} noteId is id of note
   */
  async deleteNote(noteId) {
    try {
      const noteItem = await this.model.deleteNote(noteId);

      this.view.removeNoteElement(noteItem.id);
      this.view.showHideEmpty(this.model.listNotes, 'listNotes');
    } catch (error) {
      this.view.renderPopupError(error.message);
    }
  }

  /**
   * @description function edit note
   *
   * @param {String} id is a id of note
   * @param {String} title is title of note
   * @param {String} description is description of note
   */
  async editNote(note) {
    try {
      const noteItem = await this.model.editNote(note);

      this.view.editNote(noteItem);
    } catch (error) {
      this.view.renderPopupError(error.message);
    }
  }

  /**
   * @description function find note
   *
   * @param {String} id is a id of note
   */
  async findNote(id) {
    try {
      const noteItem = await this.model.findNote(id);
      const handlers = {
        handleEditNote: (note) => this.editNote(note),
        handleDeleteNote: (noteId) => this.deleteNote(noteId),
      };

      // function render form note
      this.view.renderFormNote(noteItem, handlers);
    } catch (error) {
      this.view.renderPopupError(error.message);
    }
  }
}
