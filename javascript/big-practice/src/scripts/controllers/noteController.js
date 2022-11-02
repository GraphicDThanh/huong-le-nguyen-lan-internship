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
    this.view.changePage(this.renderTabTrash, this.renderTabNote);

    // function increase textarea
    this.view.bindInputBreakDown();

    // function show input form
    this.view.bindShowInput(this.addNote);

    // function delete list notes
    this.view.bindDeleteListNotes(this.deleteNote);
  };

  renderTabTrash = async () => {
    const listTrash = await this.model.filterNotes('trashNotes');

    // function render trash notes
    this.view.renderListTrashNotes(listTrash, this.handleConfirmPopup);
  };

  renderTabNote = async () => {
    const handlers = {
      handleDeleteNote: this.deleteNote,
      handleShowNoteForm: this.findNote,
    };

    const listNotes = await this.model.filterNotes('listNotes');

    // function render list notes
    this.view.renderListNotes(listNotes, handlers);
  };

  handleConfirmPopup = (index) => {
    const note = this.model.findNote(index);
    // function render confirm message
    this.view.renderConfirmMessage(note);

    // function close and remove trash
    this.view.bindClosePopup();

    this.view.binDeleteTrashInPopup((id) => {
      const noteItem = this.model.deleteNoteInTrash(id);
      this.view.constructor.removeNoteElement(noteItem.id);
    });
  };

  /**
   * @description function add note
   *
   * @param {String} title is title from input
   * @param {String} description is description from input
   */
  addNote = (title, description) => {
    const note = this.model.addNote(title, description);

    this.view.renderNote(note, this.deleteNote, this.findNote);
  };

  /**
   * @description function delete note in model
   *
   * @param {String} index is index of note
   */
  deleteNote = (index) => {
    const note = this.model.deleteNote(index);

    this.view.constructor.removeNoteElement(note.id);
  };

  /**
   * @description function edit note
   *
   * @param {String} id is a id of note
   * @param {String} title is title of note
   * @param {String} description is description of note
   */
  editNote = (id, title, description) => {
    const note = this.model.editNote(id, title, description);

    this.view.constructor.editNote(note.id, note.title, note.description);
  };

  /**
   * @description function find note
   *
   * @param {String} id is a id of note
   */
  findNote = (id) => {
    const note = this.model.findNote(id);

    const handlers = {
      handleEditNote: this.editNote,
      handleDeleteNote: this.deleteNote,
    };

    // function render form note
    this.view.renderFormNote(note, handlers);
  };
}
