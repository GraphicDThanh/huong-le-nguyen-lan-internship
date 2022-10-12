/**
 * @class noteView
 * @description manage view of a note
 */
export default class NoteView {
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
  renderItem = (item) => {
    this.noteElement = document.createElement('div');
    this.noteElement.classList.add('note');
    this.noteElement.setAttribute('id', item.id);

    this.noteElement.innerHTML = `
      <div class="icon-check">
        <input type="checkbox" class="select-note">
      </div>
      <div class="note-content">
        <p class="note-title">${item.title}</p>
        <p class="note-description">${item.description}</p>
      </div>
      <div class="note-utilities">
        <div class="note-btn">
          <button class="btn btm-delete" type="button" id="${item.id}">Delete</button>
        </div>
      </div>`;
    return this.noteElement;
  };
}
