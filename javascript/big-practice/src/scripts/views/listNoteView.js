import selectDOMClass from '../utils/selectDOMByClass';

/**
 * @class listNoteView
 * @description manage view of listNote
 */
export default class ListNoteView {
  constructor(noteView) {
    this.noteView = noteView;
    this.listNoteElement = selectDOMClass('.list-notes');

    // input form
    this.formElement = selectDOMClass('.form-add-note');
    this.formTitleElement = selectDOMClass('.form-title');
    this.formUtilitiesElement = selectDOMClass('.form-utilities');
    this.closeButtonElement = selectDOMClass('.form-add-note .btn-close');
    this.inputAddElement = selectDOMClass('.form-add-note .form-group-input .input-note');
  }

  /**
   * @description function render all notes
   *
   * @param {Array} listNote is a list of notes from data
   */
  renderListNotes = (listNotes) => {
    listNotes.forEach((note) => {
      const noteItem = {
        id: note.id,
        title: note.title,
        description: note.description,
        isTrash: note.isTrash,
      };
      this.listNoteElement.appendChild(this.noteView.constructor.renderNote(noteItem));
    });
  };

  /**
   * @description function render a note
   *
   * @param {Object} note is a data of a note
   */
  renderNote = (note) => {
    const noteItem = {
      id: note.id,
      title: note.title,
      description: note.description,
      isTrash: note.isTrash,
    };
    this.listNoteElement.appendChild(this.noteView.constructor.renderNote(noteItem));
  };

  /**
   * @description function show input form
   */
  showInputForm = () => {
    this.inputAddElement.addEventListener('focus', () => {
      this.formUtilitiesElement.classList.remove('hide');
      this.formTitleElement.classList.remove('hide');
    });
  };

  /**
   * @description function add a new note and turn off input form
   *
   * @param {function} handle is a function transmission in
   * two String values is title and description of input form
   */
  bindAddNewNote = (handle) => {
    this.closeButtonElement.addEventListener('click', () => {
      this.titleValue = selectDOMClass('.note-title').value;
      this.descriptionValue = selectDOMClass('.note-description').value;

      if ((this.titleValue === '') && (this.descriptionValue === '')) {
        this.formUtilitiesElement.classList.add('hide');
        this.formTitleElement.classList.add('hide');
      } else {
        handle(this.titleValue, this.descriptionValue);
        this.formElement.reset();
      }
    });
  };
}
