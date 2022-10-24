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

    // function increase textarea
    this.view.bindInputBreakDown();

    // function show input form
    this.view.bindShowAndAddInput(this.addNote);

    // function delete list notes
    this.view.bindDeleteListNotes(this.deleteNote);
  };

  listEvents = () => {
    const listNotes = this.model.filterListNotes();

    // function render list notes
    this.view.renderListNotes(listNotes);

    // function show header
    this.view.bindShowHeader();

    // function show note form
    this.view.constructor.showNoteForm(this.findNote);

    // function delete
    this.view.constructor.bindDeleteNotes(this.deleteNote);
  };

  /**
   * @description function add note
   *
   * @param {String} title is title from input
   * @param {String} description is description from input
   */
  addNote = (title, description) => {
    this.model.addNote(title, description);
    this.listEvents();
  };

  /**
   * @description function delete note in model
   *
   * @param {String} index is index of note
   */
  deleteNote = (index) => {
    this.model.deleteNote(index);
    this.listEvents();
  };

  /**
   * @description function edit note
   *
   * @param {String} id is a id of note
   * @param {String} title is title of note
   * @param {String} description is description of note
   */
  editNote = (id, title, description) => {
    this.model.editNote(id, title, description);
    this.listEvents();
  };

  /**
   * @description function find note
   *
   * @param {String} id is a id of note
   */
  findNote = (id) => {
    const note = this.model.findNote(id);
    this.view.renderFormNote(note);
    this.view.constructor.inputBreakDownOverlay();
    this.view.btnCloseAndSave(this.editNote);
    this.view.closeOverlayAndSave(this.editNote);
    this.view.buttonDeleteForm(this.deleteNote);
  };
}
