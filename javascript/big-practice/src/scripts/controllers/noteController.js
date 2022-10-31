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
    this.renderAllNotes();
  }

  renderAllNotes = () => {
    this.listEvents();

    // function change page
    this.view.changePage();

    // function increase textarea
    this.view.bindInputBreakDown();

    // function show input form
    this.view.bindShowInput(this.addNote);

    // function delete list notes
    this.view.bindDeleteListNotes(this.deleteNote);
  };

  listEvents = async () => {
    const handlers = {
      handleDeleteNote: this.deleteNote,
      handleShowNoteForm: this.findNote,
    };

    const listNotes = await this.model.filterListNotes();
    const listTrash = this.model.filterTrashNotes();

    // function render list notes
    this.view.renderListNotes(listNotes, handlers);

    // function render trash notes
    this.view.renderTrashNote(listTrash);

    // function show header
    // this.view.bindShowHeader();

    this.view.constructor.bindDeleteNotInTrash(this.removeTrash);
  };

  removeTrash = (index) => {
    const note = this.model.findNote(index);
    // function render confirm message
    this.view.renderConfirmMessage(note);

    // function close and remove trash
    this.view.closeConfirmMessage((id) => {
      this.model.deleteNoteInTrash(id);

      this.view.renderTrashNote(this.model.filterTrashNotes());
      this.listEvents();
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

    const handlers = {
      handleDeleteNote: this.deleteNote,
      handleShowNoteForm: this.findNote,
    };

    this.view.renderNote(note, handlers);
  };

  /**
   * @description function delete note in model
   *
   * @param {String} index is index of note
   */
  deleteNote = (index) => {
    const note = this.model.deleteNote(index);
    this.view.constructor.removeNote(note.id);
    this.view.renderTrashNote(this.model.filterTrashNotes());
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
    const handlers = {
      handleDeleteNote: this.deleteNote,
      handleShowNoteForm: this.findNote,
    };

    this.view.constructor.removeNote(note.id);
    this.view.renderNote(note, handlers);
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
