import selectDOMClass from '../utils/selectDOMByClass';

/**
 * @class noteView
 * @description manage view of a note
 */
export default class NoteView {
  constructor(noteItem) {
    this.noteItem = noteItem;
    this.listNoteElement = selectDOMClass('.list-notes');
  }

  /**
   * @description function create a note
   *
   * @param {Object} note is object of a note
   *
   * @returns {Object} noteElement is a element note
   */
  renderNote = () => {
    const noteElement = document.createElement('div');
    noteElement.classList.add('note');
    noteElement.setAttribute('id', this.id);

    noteElement.innerHTML = `
      <label class="icon-check">
        <input type="checkbox" hidden class="select-note" id="${this.noteItem.id}">
      </label>
      <div class="note-content">
        <p class="note-title">${this.noteItem.title}</p>
        <p class="note-description">${this.noteItem.description}</p>
      </div>
      <div class="note-utilities">
        <div class="note-btn">
          <button class="btn btn-delete" type="button" id="${this.noteItem.id}">Delete</button>
        </div>
      </div>`;
    this.listNoteElement.appendChild(noteElement);
  };
}
