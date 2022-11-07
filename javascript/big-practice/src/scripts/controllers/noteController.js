import AuthenticationModel from '../models/authenticationModel';

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

  bindEvents = () => {
    // function change page
    this.view.bindChangePage(this.renderTabTrash, this.renderTabNote);

    // function increase textarea
    this.view.bindInputBreakDown();

    // function show input form
    this.view.bindShowInput(this.addNote);

    // function delete list notes
    this.view.bindDeleteListNotes(this.deleteNote);

    // function show hide menu hidden
    this.view.bindShowMenuUser();

    // function logout user
    this.view.bindLogOut();

    // function change to login page
    this.view.bindLogin();

    // function set username to menu user
    this.getUser();
  };

  renderTabTrash = async () => {
    const listTrash = await this.model.filterNotes('trashNotes');

    // function render trash notes
    this.view.renderListTrashNotes(listTrash, this.handleConfirmPopup);

    // function show Empty Note if note is empty
    this.view.showHideEmpty(listTrash, 'trashNotes');
  };

  renderTabNote = async () => {
    const handlers = {
      handleDeleteNote: this.deleteNote,
      handleShowNoteForm: this.findNote,
    };

    const listNotes = await this.model.filterNotes('listNotes');

    // function render list notes
    this.view.renderListNotes(listNotes, handlers);

    // function show Empty Note if note is empty
    this.view.showHideEmpty(listNotes, 'listNotes');
  };

  handleConfirmPopup = async (index) => {
    const note = await this.model.findNote(index);
    // function render confirm message
    this.view.renderConfirmMessage(note);

    // function close popup
    this.view.bindClosePopup();

    // function delete trash forever
    this.view.bindDeleteNoteInTrash(async (id) => {
      const noteItem = await this.model.deleteNoteInTrash(id);
      this.view.constructor.removeNoteElement(noteItem.id);
    });
  };

  getUser = async () => {
    const email = await AuthenticationModel.findUsernameById();
    this.view.showInformationUser(email);
  };

  /**
   * @description function add note
   *
   * @param {String} title is title from input
   * @param {String} description is description from input
   */
  addNote = async (title, description) => {
    const note = await this.model.addNote(title, description);

    this.view.renderNote(note, this.deleteNote, this.findNote);
  };

  /**
   * @description function delete note in model
   *
   * @param {String} index is index of note
   */
  deleteNote = async (index) => {
    const note = await this.model.deleteNote(index);

    this.view.constructor.removeNoteElement(note.id);
  };

  /**
   * @description function edit note
   *
   * @param {String} id is a id of note
   * @param {String} title is title of note
   * @param {String} description is description of note
   */
  editNote = async (id, title, description) => {
    const note = await this.model.editNote(id, title, description);

    this.view.constructor.editNote(note.id, note.title, note.description);
  };

  /**
   * @description function find note
   *
   * @param {String} id is a id of note
   */
  findNote = async (id) => {
    const note = await this.model.findNote(id);

    const handlers = {
      handleEditNote: this.editNote,
      handleDeleteNote: this.deleteNote,
    };

    // function render form note
    this.view.renderFormNote(note, handlers);
  };
}
