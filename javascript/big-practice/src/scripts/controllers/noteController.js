/**
 * @class noteController
 * @description link model and view
 *
 * @param model
 * @param view
 */
export default class noteController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    this.renderAllNote();
    this.view.showInputForm();
    this.view.bindAddNewNote(this.onAddNote);
  }

  /**
   * @description render all the notes
   */
  renderAllNote = () => {
    this.view.renderListNote(this.model.notes);
  };

  /**
   * @description function add note
   *
   * @param {String} title is title from input
   * @param {String} description is description from input
   */
  onAddNote = (title, description) => {
    const note = this.model.addNote(title, description);
    this.view.renderANote(note);
  };
}
