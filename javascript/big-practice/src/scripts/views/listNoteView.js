import selectDOMClass from '../utils/selectDOMByClass';
import selectDOMClassAll from '../utils/selectAllDOMByClass';
import NoteView from './noteView';

/**
 * @class listNoteView
 * @description manage view of listNote
 */
export default class ListNoteView {
  constructor() {
    this.listNoteElement = selectDOMClass('.list-notes');

    // input form
    this.formElement = selectDOMClass('.form-add-note');
    this.formTitleElement = selectDOMClass('.form-title');
    this.formUtilitiesElement = selectDOMClass('.form-utilities');
    this.closeButtonElement = selectDOMClass('.form-add-note .btn-close');
    this.inputAddElement = selectDOMClass('.form-add-note .form-group-input .input-note');
    this.inputTitleElement = selectDOMClass('.note-title');

    this.headerAfterSelect = selectDOMClass('.header-after-select');
    this.deleteButtonElementsBulkActions = selectDOMClass('.btn-delete-bulk-actions');
  }

  /**
   * @description function render all notes
   *
   * @param {Array} listNote is a list of notes from data
   */
  renderListNotes(listNotes) {
    listNotes.forEach((note) => {
      if (!note.isTrash) {
        const noteItem = {
          id: note.id,
          title: note.title,
          description: note.description,
          isTrash: note.isTrash,
        };
        const noteView = new NoteView(noteItem);
        this.listNoteElement.appendChild(noteView.renderNote());
      }
    });
  }

  /**
   * @description function render after remove all elements
   *
   * @param {Array} notes is a list of notes
   */
  displayNotes(notes) {
    const listNotes = selectDOMClassAll('.note');
    listNotes.forEach((element) => {
      element.remove();
    });
    this.renderListNotes(notes);
  }

  /**
   * @description function increase the length of the textarea by the length of the text
   * @param {Object} e is a event
   */
  static inputBreakDown(e) {
    e.style.height = '1px';
    e.style.height = `${e.scrollHeight < '250' ? e.scrollHeight : '250'}px`;
  }

  /**
   * @description events of textarea to increase the length
   */
  bindInputBreakDown() {
    this.inputAddElement.addEventListener('input', () => {
      ListNoteView.inputBreakDown(this.inputAddElement);
    });

    this.inputTitleElement.addEventListener('input', () => {
      ListNoteView.inputBreakDown(this.inputTitleElement);
    });
  }

  /**
   * @description events show header bulk actions and count notes selected
   */
  bindShowHeader() {
    const checkSelected = selectDOMClassAll('.select-note');
    const checkIconCheck = selectDOMClassAll('.icon-check');

    checkIconCheck.forEach((element, index) => {
      element.addEventListener('click', (e) => {
        e.preventDefault();
        this.showHideHeader(checkSelected, index);
        ListNoteView.countNoteSelected(e);
      });
    });
  }

  /**
   * @description function show or hide header bulk actions
   *
   * @param {Object} checkSelected is a list of notes checked
   * @param {Number} index is index of note selected
   */
  showHideHeader(checkSelected, index) {
    const noteElement = selectDOMClassAll('.note');
    const noteItemSelected = checkSelected[index];

    noteItemSelected.checked = !noteItemSelected.checked;
    const listItemChecked = selectDOMClassAll('.select-note:checked');

    if (noteItemSelected.checked) {
      this.headerAfterSelect.style.transform = 'translateY(-100%)';
      noteElement[index].classList.add('selected');
    } else if (!listItemChecked.length) {
      this.headerAfterSelect.style.transform = 'translateY(-200%)';
    }

    if (!noteItemSelected.checked) {
      noteElement[index].classList.remove('selected');
    }
  }

  /**
   * @description function count notes selected
   */
  static countNoteSelected() {
    const checkSelected = selectDOMClassAll('.select-note:checked');
    const countSelected = selectDOMClass('.count-selected');
    countSelected.innerHTML = `${checkSelected.length} Selected`;
  }

  /**
   * @description function hide input form when click every where outside input form
   *
   * @param {Object} e is event of button
   * @param {function} handler is fis a function with 2 values are
   *  title and description
   */
  handleClickOut(e, handler) {
    const note = selectDOMClass('.form-input');
    if (e.target.contains(note)) {
      this.addNewNote(handler);
      this.inputAddElement.style.height = '1px';
      this.inputTitleElement.style.height = '1px';
    }
  }

  /**
   * @description function show input form
   */
  showInputForm() {
    this.inputAddElement.addEventListener('focus', () => {
      this.formUtilitiesElement.classList.remove('hide');
      this.formTitleElement.classList.remove('hide');
    });
  }

  /**
   * @description function add element note and hide input after adding
   *
   * @param {function} handler is a function with 2 values are
   *  title and description
   */
  addNewNote(handler) {
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
  }

  /**
   * @description function events to show or hide input form
   *
   * @param {*} handler is a function transmitted from from the model
   */
  bindShowAndAddInput(handler) {
    this.showInputForm();

    window.addEventListener('click', (e) => {
      this.handleClickOut(e, handler);
    });

    this.closeButtonElement.addEventListener('click', () => {
      this.addNewNote(handler);
    });
  }

  /**
   * @description function event delete note
   *
   * @param {function} handler is function transmitted from from the model
   */
  static bindDeleteNotes(handler) {
    const deleteButtonElements = selectDOMClassAll('.btn-delete');

    deleteButtonElements.forEach((btn) => {
      btn.addEventListener('click', (element) => {
        const noteId = element.target.getAttribute('id');
        const noteElement = selectDOMClassAll('.note');

        noteElement.forEach((note) => {
          if (note.id === noteId) {
            note.remove();
            handler(noteId);
          }
        });
      });
    });
  }

  bindDeleteListNotes(handler) {
    this.deleteButtonElementsBulkActions.addEventListener('click', () => {
      const noteSelected = selectDOMClassAll('.selected');

      noteSelected.forEach((note) => {
        note.remove();
        handler(note.id);
      });
    });
  }
}
