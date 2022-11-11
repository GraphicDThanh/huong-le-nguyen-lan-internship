import UserModel from '../models/userModel';

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
    this.userModel = new UserModel();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    // function change page
    this.view.bindChangePage(this.renderTabTrash.bind(this), this.renderTabNote.bind(this));

    // function increase textarea
    this.view.bindInputBreakDown();

    // function show input form
    this.view.bindShowInput();

    // function add new note
    this.view.bindAddNote(this.addNote.bind(this));

    // function delete list notes
    this.view.bindDeleteListNotes(this.deleteNote.bind(this));

    // function show hide menu hidden
    this.view.bindShowMenuUser();

    // function logout user
    this.view.bindLogOut();

    // function change to login page
    this.view.bindLogin();

    // function set username to menu user
    this.getUser();
  }

  async renderTabTrash() {
    try {
      const listTrash = await this.model.filterNotes('trashNotes');
      // function render trash notes
      this.view.renderListTrashNotes(listTrash, this.handleConfirmPopup.bind(this));

      // function show Empty Note if note is empty
      this.view.showHideEmpty(listTrash, 'trashNotes');
    } catch (error) {
      this.view.renderPopupError(error.message);
    }
  }

  async renderTabNote() {
    try {
      const handlers = {
        handleDeleteNote: this.deleteNote.bind(this),
        handleShowNoteForm: this.findNote.bind(this),
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

  async handleConfirmPopup(index) {
    try {
      const note = await this.model.findNote(index);
      // function render confirm message
      this.view.renderConfirmMessage(note);

      // function close popup
      this.view.bindClosePopup();

      // function delete trash forever
      this.view.bindDeleteNoteInTrash(async (id) => {
        const noteItem = await this.model.deleteNoteInTrash(id);
        this.view.removeNoteElement(noteItem.id);
      });
    } catch (error) {
      this.view.renderPopupError(error.message);
    }
  }

  async getUser() {
    try {
      const id = await this.userModel.findUsernameById();
      this.view.showInformationUser(id);
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
      this.view.renderNote(note, this.deleteNote.bind(this), this.findNote.bind(this));
    } catch (error) {
      this.view.renderPopupError(error.message);
    }
  }

  /**
   * @description function delete note in model
   *
   * @param {String} index is index of note
   */
  async deleteNote(index) {
    try {
      const note = await this.model.deleteNote(index);

      this.view.removeNoteElement(note.id);
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
        handleEditNote: this.editNote.bind(this),
        handleDeleteNote: this.deleteNote.bind(this),
      };

      // function render form note
      this.view.renderFormNote(note, handlers);
    } catch (error) {
      this.view.renderPopupError(error.message);
    }
  }
}
