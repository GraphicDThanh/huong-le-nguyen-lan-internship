import NoteView from './noteView';
import ElementHelpers from '../helper/elementHelpers';
import EventsHelpers from '../helper/eventsHelpers';
import { selectDOMClass, selectDOMClassAll } from '../utils/querySelectDOM';
/**
 * @class listNoteView
 * @description manage view of listNote
 */
export default class ListNoteView {
  constructor() {
    this.listNoteElement = selectDOMClass('.list-notes');

    this.formElement = selectDOMClass('.form-add-note');
    this.formTitleElement = selectDOMClass('.form-title');
    this.formUtilitiesElement = selectDOMClass('.form-utilities');
    this.closeButtonElement = selectDOMClass('.form-add-note .btn-close');
    this.inputAddElement = selectDOMClass('.form-add-note .form-group-input .input-note');
    this.inputTitleElement = selectDOMClass('.note-title');
    this.inputDescriptionElement = selectDOMClass('.note-description');

    this.headerAfterSelect = selectDOMClass('.header-after-select');
    this.btnDeleteBulkActions = selectDOMClass('.btn-delete-bulk-actions');

    this.sectionWrapper = selectDOMClass('.section-wrapper');
    this.noteOverlay = selectDOMClass('.note-overlay');
  }

  /**
   * @description function render all notes
   *
   * @param {Array} listNote is a list of notes from data
   */
  renderListNotes(listNotes) {
    this.listNoteElement.innerHTML = '';

    listNotes.forEach((note) => {
      const noteItem = {
        id: note.id,
        title: note.title,
        description: note.description,
        isTrash: note.isTrash,
      };
      const noteView = new NoteView(noteItem);
      this.listNoteElement.appendChild(noteView.renderNote());
    });
  }

  /**
   * @description render form note of each note
   * @param {Object} note is a note
   */
  renderFormNote(note) {
    const noteItem = {
      id: note.id,
      title: note.title,
      description: note.description,
      isTrash: note.isTrash,
    };

    this.noteOverlay.innerHTML = '';

    const noteView = new NoteView(noteItem);
    this.noteOverlay.appendChild(noteView.renderNoteForm());
  }

  /**
   * @description events of textarea to increase the length of input note
   */
  bindInputBreakDown() {
    ElementHelpers.commonInputBreakDown(this.inputAddElement);
    ElementHelpers.commonInputBreakDown(this.inputTitleElement);
  }

  /**
   * @description function input break down of form note of form note
   */
  static inputBreakDownOverlay() {
    const title = selectDOMClass('.note-form-overlay .note-title');
    const description = selectDOMClass('.note-form-overlay .note-description');

    ElementHelpers.commonInputBreakDown(title);
    ElementHelpers.commonInputBreakDown(description);
  }

  /**
   * @description events show header bulk actions and count notes selected
   */
  bindShowHeader() {
    const listCheckbox = selectDOMClassAll('.select-note');
    const listIconCheck = selectDOMClassAll('.icon-check');

    listIconCheck.forEach((element, index) => {
      element.addEventListener('click', (e) => {
        e.preventDefault();
        this.showHideHeader(listCheckbox, index);
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
    } else {
      noteElement[index].classList.remove('selected');
    }

    if (!listItemChecked.length) {
      this.headerAfterSelect.style.transform = 'translateY(-200%)';
    }
  }

  /**
   * @description function count notes selected
   */
  static countNoteSelected() {
    const noteSelected = selectDOMClassAll('.select-note:checked');
    const countNotesSelected = selectDOMClass('.count-selected');
    countNotesSelected.innerHTML = `${noteSelected.length} Selected`;
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
   * @description function show form of each note
   *
   * @param {function} findNote is function transmitted from model
   */
  static showNoteForm(findNote) {
    const listNotes = selectDOMClassAll('.note-content');

    listNotes.forEach((note) => {
      note.addEventListener('click', (e) => {
        e.stopPropagation();
        findNote(note.getAttribute('data-id'));

        const title = selectDOMClass('.note-form-overlay .note-title');
        const description = selectDOMClass('.note-form-overlay .note-description');

        EventsHelpers.stopEvents(title);
        EventsHelpers.stopEvents(description);
      });
    });
  }

  /**
   * @description function edit note
   * @param {function} editNote is function transmitted from model
   */
  editNoteForm(editNote) {
    const formNoteId = selectDOMClass('.note-form-overlay').id;
    const title = selectDOMClass('.note-form-overlay .note-title').value;
    const description = selectDOMClass('.note-form-overlay .note-description').value;

    editNote(formNoteId, title, description);
    this.noteOverlay.innerHTML = '';
  }

  /**
   * @description function close and save form note when click button close
   * @param {function} editNote is function transmitted from model
   */
  btnCloseAndSave(editNote) {
    const closeBtn = selectDOMClass('.note-form-overlay .btn-close');
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();

      this.editNoteForm(editNote);
    });
  }

  /**
   * @description function close and save form note when click overlay
   * @param {function} editNote is function transmitted from model
   */
  closeOverlayAndSave(editNote) {
    const overlay = document.querySelector('.overlay');
    overlay.addEventListener('click', () => {
      this.editNoteForm(editNote);
    });
  }

  /**
   * @description is function of button delete of note form
   *
   * @param {function} deleteNote is function transmitted from model
   */
  buttonDeleteForm(deleteNote) {
    const buttonDelete = selectDOMClass('.note-form-overlay .btn-delete-form');
    buttonDelete.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = e.target.getAttribute('data-id');
      deleteNote(id);
      this.noteOverlay.innerHTML = '';
    });
  }

  /**
   * @description function add element note and hide input after adding
   *
   * @param {function} handler is a function with 2 values are
   *  title and description
   */
  addNewNote(handler) {
    const title = selectDOMClass('.note-title').value;
    const description = selectDOMClass('.note-description').value;

    this.formUtilitiesElement.classList.add('hide');
    this.formTitleElement.classList.add('hide');

    if (title || description) {
      handler(title, description);
      this.formElement.reset();
    }
  }

  /**
   * @description function events to show or hide input form
   *
   * @param {*} handler is a function add transmitted from from the model
   */
  bindShowAndAddInput(handler) {
    this.showInputForm();

    this.closeButtonElement.addEventListener('click', () => {
      this.addNewNote(handler);
    });
  }

  /**
   * @description function event delete note
   *
   * @param {function} handler is function delete transmitted from from the model
   */
  static bindDeleteNotes(handler) {
    const deleteButtonElements = selectDOMClassAll('.btn-delete');
    deleteButtonElements.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const noteId = e.target.getAttribute('data-id');
        handler(noteId);
      });
    });
  }

  /**
   * @description function delete selected notes
   * @param {function} handler is function delete transmitted from from the model
   */
  bindDeleteListNotes(handler) {
    this.btnDeleteBulkActions.addEventListener('click', () => {
      const noteSelected = selectDOMClassAll('.selected');
      noteSelected.forEach((note) => {
        handler(note.id);
      });

      this.headerAfterSelect.style.transform = 'translateY(-200%)';
    });
  }
}
