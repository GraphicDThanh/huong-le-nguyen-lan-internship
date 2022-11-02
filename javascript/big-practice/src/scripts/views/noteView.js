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
   * @returns {Object} noteElement is a element note
   */
  renderNote() {
    const noteElement = document.createElement('div');
    noteElement.classList.add('note');
    const note = this.noteItem;
    noteElement.setAttribute('id', note.id);

    noteElement.innerHTML = `
      <label class="icon-check" data-id="${note.id}">
        <input type="checkbox" hidden class="select-note" data-id="${note.id}">
      </label>
        <div class="note-content" data-id="${note.id}">
          <p class="note-title">${note.title}</p>
          <p class="note-description">${note.description}</p>
        </div>
        <div class="note-utilities">
          <div class="note-btn">
            <button class="btn btn-delete" type="button" data-id="${note.id}">Delete</button>
          </div>
        </div>`;
    return noteElement;
  }

  /**
   * @description function create a note form
   * @returns {Object} formElement
   */
  renderNoteForm() {
    const formElement = document.createElement('div');
    formElement.setAttribute('class', 'overlay');
    const note = this.noteItem;

    formElement.innerHTML = `
      <form class="form-note note-form-overlay" id="${note.id}">
        <div class="form-title">
          <div class="form-group">
            <textarea class="input-note note-title" rows="1" placeholder="Title">${note.title}</textarea>
            <figure class="icon-pin-cover">
              <img src="${iconPin}" alt="icon pin">
            </figure>
          </div>
        </div>
        <div class="form-group">
          <textarea class="input-note note-description" rows="1" placeholder="Take a note...">${note.description}</textarea>
        </div>
        <div class="form-utilities">
          <div class="form-group">
            <div class="item-utilities">
              <img src="${iconColorBoard}" alt="icon color board">
            </div>
            <div class="form-buttons">
              <button class="btn btn-delete-form" type="button" data-id="${note.id}">Delete</button>
              <button class="btn btn-close" type="button" data-id="${note.id}">Close</button>
            </div>
          </div>
        </div>
      </form>`;
    return formElement;
  }
}
