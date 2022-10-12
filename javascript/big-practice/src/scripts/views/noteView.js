/**
 * @class noteView
 * @description manage view of a note
 */
export default class noteView {
  constructor() {
    this.noteElement = null;
    this.formElement = null;
  }

  /**
   * @description function create a note
   *
   * @param {Object} note is object of a note
   *
   * @returns {Object} noteElement is a element note
   */
  renderNote = (note) => {
    this.noteElement = document.createElement('div');
    this.noteElement.classList.add('note');
    this.noteElement.setAttribute('id', note.id);

    this.noteElement.innerHTML = `
      <div class="icon-check">
        <input type="checkbox" class="select-note">
      </div>
      <div class="note-content">
        <p class="note-title">${note.title}</p>
        <p class="note-description">${note.description}</p>
      </div>
      <div class="note-utilities">
        <div class="note-btn">
          <button class="btn btm-delete" type="button" id="${note.id}">Delete</button>
        </div>
      </div>`;
    return this.noteElement;
  };
}
