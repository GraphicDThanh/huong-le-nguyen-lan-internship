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
    this.view.constructor.bindDeleteNotes(this.deleteNote);
    this.view.bindInputBreakDown();
    this.view.bindShowHeader();
    this.view.bindDeleteListNotes(this.deleteNote);
    this.view.bindShowAndAddInput(this.addNote);
  }

  /**
   * @description render all the notes
   */
  renderAllNotes = () => {
    this.view.renderListNotes(this.model.notes);
  };

  /**
   * @description function add note
   *
   * @param {String} title is title from input
   * @param {String} description is description from input
   */
  addNote = (title, description) => {
    const note = this.model.addNoteModel(title, description);
    this.view.displayNotes(note);
    this.view.bindShowHeader();
    this.view.constructor.bindDeleteNotes(this.deleteNote);
  };

  /**
   * @description function delete note in model
   *
   * @param {String} index is index of note
   */
  deleteNote = (index) => {
    this.model.deleteNoteModel(index);
  };
}
