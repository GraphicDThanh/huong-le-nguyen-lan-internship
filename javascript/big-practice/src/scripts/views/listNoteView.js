import NoteView from './noteView';
import ElementHelpers from '../helper/elementHelpers';
import EventHelpers from '../helper/eventHelpers';
import { selectDOMClass, selectDOMClassAll } from '../utils/querySelectDOM';
import STORAGE_KEYS from '../constants/storageKeys';

/**
 * @class listNoteView
 * @description manage view of listNote
 */
export default class ListNoteView {
  constructor() {
    this.listNoteElement = selectDOMClass('.note-wrapper .list-notes');
    this.listTrashElement = selectDOMClass('.trash-wrapper .list-notes');

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

    this.menu = selectDOMClassAll('.nav li');
    this.noteWrapper = selectDOMClass('.note-wrapper');
    this.trashWrapper = selectDOMClass('.trash-wrapper');

    this.confirmMessage = selectDOMClass('.trash-overlay');
  }

  /**
   * @description function change note page or trash page
   *
   * @param {function} handler is function transmitted from model
   */
  changePage() {
    this.showHidePage();
    this.menu[sessionStorage.getItem(STORAGE_KEYS.PAGE_NUMBER)].classList.add('menu-color');

    this.menu.forEach((element) => {
      element.addEventListener('click', (e) => {
        if (e.target.hasAttribute('data-id')) {
          this.menu[sessionStorage.getItem(STORAGE_KEYS.PAGE_NUMBER)].classList.remove('menu-color');

          sessionStorage.setItem(STORAGE_KEYS.PAGE_NUMBER, e.target.getAttribute('data-id'));
          this.menu[sessionStorage.getItem(STORAGE_KEYS.PAGE_NUMBER)].classList.add('menu-color');

          this.showHidePage();
        }
      });
    });
  }

  /**
   * @description function check page which is opening
   */
  showHidePage() {
    if (!sessionStorage.getItem(STORAGE_KEYS.PAGE_NUMBER)) {
      sessionStorage.setItem(STORAGE_KEYS.PAGE_NUMBER, '0');
    }

    if (sessionStorage.getItem(STORAGE_KEYS.PAGE_NUMBER) === '0') {
      this.trashWrapper.classList.add('hide');
      this.noteWrapper.classList.remove('hide');
    } else {
      this.trashWrapper.classList.remove('hide');
      this.noteWrapper.classList.add('hide');
    }
  }

  renderNote(note, handlers) {
    const { handleDeleteNote, handleShowNoteForm } = handlers;

    const noteItem = {
      id: note.id,
      title: note.title,
      description: note.description,
      isTrash: note.isTrash,
    };
    const noteView = new NoteView(noteItem);
    const noteElement = noteView.renderNote();

    this.listNoteElement.appendChild(noteView.renderNote());
    ListNoteView.bindDeleteNotes(noteElement, handleDeleteNote);
    ListNoteView.showNoteForm(noteElement, handleShowNoteForm);
  }

  static removeNote(id) {
    const listNotes = selectDOMClassAll('.note');
    listNotes.forEach((note) => {
      if (note.id === id) {
        note.remove();
      }
    });
  }

  /**
   * @description function render all notes
   *
   * @param {Array} listNote is a list of notes from data
   */
  renderListNotes(listNotes, handlers) {
    this.listNoteElement.innerHTML = '';

    const { handleDeleteNote, handleShowNoteForm } = handlers;

    listNotes.forEach((note) => {
      const noteItem = {
        id: note.id,
        title: note.title,
        description: note.description,
        isTrash: note.isTrash,
      };
      const noteView = new NoteView(noteItem);
      const noteElement = noteView.renderNote();

      this.listNoteElement.appendChild(noteView.renderNote());
      ListNoteView.bindDeleteNotes(noteElement, handleDeleteNote);
      ListNoteView.showNoteForm(noteElement, handleShowNoteForm);
      this.bindShowHeader(noteElement);
    });
  }

  /**
   * @description function render trash page
   *
   * @param {Array} listNotes is a list of notes from data
   */
  renderTrashNote(listNotes) {
    this.listTrashElement.innerHTML = '';

    listNotes.forEach((note) => {
      const noteItem = {
        id: note.id,
        title: note.title,
        description: note.description,
        isTrash: note.isTrash,
      };
      const noteView = new NoteView(noteItem);
      this.listTrashElement.appendChild(noteView.renderNote());
    });
  }

  /**
   * @description function render confirm message
   *
   * @param {Object} note is a note
   */
  renderConfirmMessage(note) {
    const noteItem = {
      id: note.id,
      title: note.title,
      description: note.description,
      isTrash: note.isTrash,
    };

    this.confirmMessage.innerHTML = '';

    const noteView = new NoteView(noteItem);
    this.confirmMessage.appendChild(noteView.renderConfirmDelete());
  }

  /**
   * @description render form note of each note
   * @param {Object} note is a note
   */
  renderFormNote(note, handlers) {
    const noteItem = {
      id: note.id,
      title: note.title,
      description: note.description,
      isTrash: note.isTrash,
    };

    const { handleEditNote, handleDeleteNote } = handlers;

    this.noteOverlay.innerHTML = '';

    const noteView = new NoteView(noteItem);
    const noteElement = noteView.renderNoteForm();
    this.noteOverlay.appendChild(noteElement);

    this.saveNoteForm(handleEditNote);
    ListNoteView.inputBreakDownNoteForm();
    this.deleteNoteForm(handleDeleteNote);
  }

  /**
   * @description function open confirm message
   *
   * @param {function} handler is function transmitted
   */
  static bindDeleteNotInTrash(handler) {
    const btnDeletes = selectDOMClassAll('.trash-wrapper .btn-delete');
    btnDeletes.forEach((button) => {
      button.addEventListener('click', (e) => {
        const index = e.target.getAttribute('data-id');
        handler(index);
      });
    });
  }

  /**
   * @description function close confirm message and delete
   *
   * @param {funciton} handler is function transmitted
   */
  closeConfirmMessage(handler) {
    const overlayConfirmMessage = selectDOMClass('.trash-overlay .overlay');
    overlayConfirmMessage.addEventListener('click', () => {
      this.confirmMessage.innerHTML = '';
    });

    const btnClose = selectDOMClass('.btn-close-trash');
    btnClose.addEventListener('click', (e) => {
      e.stopPropagation();
      this.confirmMessage.innerHTML = '';
    });

    const deleteTrash = selectDOMClass('.btn-delete-trash');
    deleteTrash.addEventListener('click', (e) => {
      e.stopPropagation();
      const index = e.target.getAttribute('data-id');
      handler(index);
      this.confirmMessage.innerHTML = '';
    });
  }

  /**
   * @description events of textarea to increase the length of input note
   */
  bindInputBreakDown() {
    ElementHelpers.commonInputBreakDown(this.inputAddElement);
    ElementHelpers.commonInputBreakDown(this.inputTitleElement);
  }

  /**
   * @description function input break down of form note
   */
  static inputBreakDownNoteForm() {
    const title = selectDOMClass('.note-form-overlay .note-title');
    const description = selectDOMClass('.note-form-overlay .note-description');

    ElementHelpers.commonInputBreakDown(title);
    ElementHelpers.commonInputBreakDown(description);
  }

  /**
   * @description events show header bulk actions and count notes selected
   */
  bindShowHeader(noteElement) {
    const note = document.getElementById(`${noteElement.id}`);
    const listIconCheck = note.querySelector('.icon-check');

    listIconCheck.addEventListener('click', (e) => {
      e.preventDefault();
      const selectedElement = e.target.parentElement.classList.contains('selected');
      // const listCheckbox = selectDOMClassAll('.select-note');
      if (!selectedElement) {
        this.headerAfterSelect.style.transform = 'translateY(-100%)';
        e.target.parentElement.classList.add('selected');
        const selected = selectDOMClassAll('.selected');

        const countNotesSelected = selectDOMClass('.count-selected');
        // const text = countNotesSelected.textContent.trim();
        // const splitString = text.split(' ');
        // const numberNotes = Number(splitString[0]) + 1;
        countNotesSelected.innerHTML = `${selected.length} Selected`;
      } else {
        // this.headerAfterSelect.style.transform = 'translateY(-200%)';
        e.target.parentElement.classList.remove('selected');

        const countNotesSelected = selectDOMClass('.count-selected');
        const selected = selectDOMClassAll('.selected');
        countNotesSelected.innerHTML = `${selected.length} Selected`;
      }
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
   * @description function show form of each note
   *
   * @param {function} findNote is function transmitted from model
   */
  static showNoteForm(noteElement, findNote) {
    const noteItem = document.getElementById(`${noteElement.id}`);
    const listNotes = noteItem.querySelectorAll('.note-content');

    listNotes.forEach((note) => {
      note.addEventListener('click', (e) => {
        e.stopPropagation();
        findNote(note.getAttribute('data-id'));

        const title = selectDOMClass('.note-form-overlay .note-title');
        const description = selectDOMClass('.note-form-overlay .note-description');

        EventHelpers.stopEvents(title);
        EventHelpers.stopEvents(description);
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
  saveNoteForm(editNote) {
    const closeBtn = selectDOMClass('.note-form-overlay .btn-close');
    const overlay = document.querySelector('.overlay');

    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();

      this.editNoteForm(editNote);
    });

    overlay.addEventListener('click', () => {
      this.editNoteForm(editNote);
    });
  }

  /**
   * @description is function of button delete of note form
   *
   * @param {function} deleteNote is function transmitted from model
   */
  deleteNoteForm(deleteNote) {
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
   * @description function show input form
   */
  showInputForm() {
    this.inputAddElement.addEventListener('focus', () => {
      this.formUtilitiesElement.classList.remove('hide');
      this.formTitleElement.classList.remove('hide');
    });
  }

  /**
   * @description function events to show or hide input form
   *
   * @param {*} handler is a function add transmitted from from the model
   */
  bindShowInput(handler) {
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
  static bindDeleteNotes(noteElement, handler) {
    const note = document.getElementById(`${noteElement.id}`);
    const deleteButtonElements = note.querySelectorAll('.note-wrapper .btn-delete');

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
