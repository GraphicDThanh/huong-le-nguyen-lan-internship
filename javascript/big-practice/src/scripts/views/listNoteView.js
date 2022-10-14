import selectDOMClass from '../utils/selectDOMByClass';
import NoteView from './noteView';

/**
 * @class listNoteView
 * @description manage view of listNote
 */
export default class ListNoteView {
  constructor() {
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
  static renderListNotes = (listNotes) => {
    listNotes.forEach((note) => {
      if (!note.isTrash) {
        const noteItem = {
          id: note.id,
          title: note.title,
          description: note.description,
          isTrash: note.isTrash,
        };
        const noteView = new NoteView(noteItem);
        noteView.renderNote();
      }
    });
  };

  static deleteAllNotes = (notes) => {
    const listNotes = document.querySelectorAll('.note');
    listNotes.forEach((element) => {
      element.remove();
    });
    ListNoteView.renderListNotes(notes);
  };

  /**
   * @description function add element note and hide input after adding
   *
   * @param {function} handler is a function with 2 values are
   *  title and description
   */
  addNewNote = (handler) => {
    const titleValue = selectDOMClass('.note-title').value;
    const descriptionValue = selectDOMClass('.note-description').value;

    if (!titleValue && !descriptionValue) {
      this.formUtilitiesElement.classList.add('hide');
      this.formTitleElement.classList.add('hide');
    } else {
      handler(titleValue, descriptionValue);
      this.formElement.reset();
      this.formUtilitiesElement.classList.add('hide');
      this.formTitleElement.classList.add('hide');
    }
  };

  /**
   * @description function hide input form when click every where outside input form
   *
   * @param {Object} e is event of button
   * @param {function} handler is fis a function with 2 values are
   *  title and description
   */
  handleClickOut = (e, handler) => {
    const note = document.querySelector('.form-input');
    if (e.target.contains(note)) {
      this.addNewNote(handler);
    }
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
   * @description function events to show or hide input form
   *
   * @param {*} handler is a function transmitted from from the model
   */
  bindShowAndAddInput = (handler) => {
    this.showInputForm();

    window.addEventListener('click', (e) => {
      this.handleClickOut(e, handler);
    });

    this.closeButtonElement.addEventListener('click', () => {
      this.addNewNote(handler);
    });
  };
}
