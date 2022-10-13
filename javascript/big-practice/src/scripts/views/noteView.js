/**
 * @class noteView
 * @description manage view of a note
 */
export default class NoteView {
  /**
   * @description function create a note
   *
   * @param {Object} note is object of a note
   *
   * @returns {Object} noteElement is a element note
   */
  static renderNote = (note) => {
    const noteElement = document.createElement('div');
    noteElement.classList.add('note');
    noteElement.setAttribute('id', note.id);

    noteElement.innerHTML = `
      <div class="icon-check">
        <input type="checkbox" class="select-note">
      </div>
      <div class="note-content">
        <p class="note-title">${note.title}</p>
        <p class="note-description">${note.description}</p>
      </div>
      <div class="note-utilities">
        <div class="note-btn">
          <button class="btn btn-delete" type="button" id="${note.id}">Delete</button>
        </div>
      </div>`;
    return noteElement;
  };
}
