import iconPin from '../../assets/icons/icon-pin.svg';
import iconColorBoard from '../../assets/icons/icon-color-board.svg';

/**
 * @class noteView
 * @description manage view of a note
 */
export default class NoteView {
  constructor(noteItem) {
    this.noteItem = noteItem;
  }

  /**
   * @description function create a note
   *
   * @param {Object} note is object of a note
   *
   * @returns {Object} noteElement is a element note
   */
  renderNote() {
    const noteElement = document.createElement('div');
    noteElement.classList.add('note');
    noteElement.setAttribute('id', this.noteItem.id);

    noteElement.innerHTML = `
      <label class="icon-check">
        <input type="checkbox" hidden class="select-note" data-id="${this.noteItem.id}">
      </label>
        <div class="note-content" data-id="${this.noteItem.id}">
          <p class="note-title">${this.noteItem.title}</p>
          <p class="note-description">${this.noteItem.description}</p>
        </div>
        <div class="note-utilities">
          <div class="note-btn">
            <button class="btn btn-delete" type="button" data-id="${this.noteItem.id}">Delete</button>
          </div>
        </div>`;
    return noteElement;
  }
}
