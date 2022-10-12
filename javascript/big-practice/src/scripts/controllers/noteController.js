/**
 * @class noteController
 * @description link model and view
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
    this.renderAllNote();
    this.view.showInputForm();
    this.view.bindAddNewItem(this.addNote);
  }

  /**
   * @description render all the notes
   */
  renderAllNote = () => {
    this.view.renderListItems(this.model.items);
  };

  /**
   * @description function add note
   *
   * @param {String} title is title from input
   * @param {String} description is description from input
   */
  addNote = (title, description) => {
    const note = this.model.addItem(title, description);
    this.view.renderItem(note);
  };
}
