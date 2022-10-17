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
  };
}
