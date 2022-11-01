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
    const listTrash = await this.model.filterTrashNotes();

    // function render list notes
    this.view.renderListNotes(listNotes, handlers);

    // function render trash notes
    this.view.renderListTrashNotes(listTrash, this.removeTrash);
  };

  removeTrash = async (index) => {
    const note = await this.model.findNote(index);
    // function render confirm message
    this.view.renderConfirmMessage(note);

    // function close and remove trash
    this.view.closeConfirmMessage(async (id) => {
      const noteItem = await this.model.deleteNoteInTrash(id);
      this.view.constructor.removeNote(noteItem.id);
    });
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

    this.view.constructor.removeNote(note.id);
    this.view.renderTrashNote(note, this.removeTrash);
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
