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
    const listNotes = this.model.filterListNotes();

    // function render list notes
    this.view.renderListNotes(listNotes);

    // function increase textarea
    this.view.bindInputBreakDown();

    // function show header
    this.view.bindShowHeader();

    // function show input form
    this.view.bindShowAndAddInput(this.addNote);

    // function show note form
    this.view.showNoteForm(this.findNote);

    // function delete
    this.view.constructor.bindDeleteNotes(this.deleteNote);

    // function edit
    this.view.editNote(this.editNote);

    // function delete list notes
    this.view.bindDeleteListNotes(this.deleteNote);
  };

  /**
   * @description function add note
   *
   * @param {String} title is title from input
   * @param {String} description is description from input
   */
  addNote = (title, description) => {
    this.model.addNote(title, description);
    this.renderAllNotes();
  };

  /**
   * @description function delete note in model
   *
   * @param {String} index is index of note
   */
  deleteNote = (index) => {
    this.model.deleteNote(index);
    this.renderAllNotes();
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
    this.renderAllNotes();
  };

  /**
   * @description function find note
   *
   * @param {String} id is a id of note
   */
  findNote = (id) => {
    const note = this.model.findNote(id);
    this.view.renderFormNote(note);
    this.view.buttonDeleteForm(this.deleteNote);
  };
}
