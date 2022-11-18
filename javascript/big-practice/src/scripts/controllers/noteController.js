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
    // function check if user still not logged in, it will move to login page
    this.view.checkUserLoggedIn();

    const handlers = {
      renderTabNotes: () => this.renderTabNote(),
      renderTabTrash: () => this.renderTabTrash(),
      addNote: (title, description) => this.addNote(title, description),
      deleteNote: (noteId) => this.deleteNote(noteId),
    };

    // function change page
    this.view.bindChangePage(handlers);

    // function show hide menu hidden
    this.view.bindShowMenuUser();

    // function logout user
    this.view.bindLogOut();

    // function set username to menu user
    this.view.showInformationUser();
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
  async addNote(title, description) {
    try {
      const note = await this.model.addNote(title, description);
      this.view.renderNote(note, (noteId) => this.deleteNote(noteId), (id) => this.findNote(id));
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
  async editNote(id, title, description) {
    try {
      const note = await this.model.editNote(id, title, description);

      this.view.editNote(note.id, note.title, note.description);
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
      const note = await this.model.findNote(id);

      const handlers = {
        handleEditNote: (noteId, title, description) => this.editNote(noteId, title, description),
        handleDeleteNote: (noteId) => this.deleteNote(noteId),
      };

      // function render form note
      this.view.renderFormNote(note, handlers);
    } catch (error) {
      this.view.renderPopupError(error.message);
    }
  }
}
