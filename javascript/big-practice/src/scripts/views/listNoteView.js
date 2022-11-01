import NoteView from './noteView';
import ElementHelpers from '../helper/elementHelpers';
import EventHelpers from '../helper/eventHelpers';
import { selectDOMClass, selectDOMClassAll, selectDOMId } from '../utils/querySelectDOM';
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

  /**
   * @description function render all notes
   *
   * @param {Array} listNote is a list of notes from data
   * @param {Object} handlers is a list function events
   */
  renderListNotes(listNotes, handlers) {
    this.listNoteElement.innerHTML = '';

    const { handleDeleteNote, handleShowNoteForm } = handlers;

    listNotes.forEach((note) => {
      this.renderNote(note, handleDeleteNote, handleShowNoteForm);
    });
  }

  /**
   * @description function render a note
   *
   * @param {Object} note is a note
   * @param {function} handleDeleteNote is a function transmitted from model
   * @param {function} handleShowNoteForm is a function transmitted from model
   */
  renderNote(note, handleDeleteNote, handleShowNoteForm) {
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
  }

  /**
   * @description function remove note in view
   *
   * @param {String} id is id of note
   */
  static removeNote(id) {
    const listNotes = selectDOMClassAll('.note');
    listNotes.forEach((note) => {
      if (note.id === id) {
        note.remove();
      }
    });
  }

  /**
   * @description function edit note
   *
   * @param {String} id is id of note
   * @param {String} title is title of note
   * @param {String} description is description of note
   */
  static editNote(id, title, description) {
    const listNotes = selectDOMClassAll('.note');
    listNotes.forEach((note) => {
      if (note.id === id) {
        const titleElement = note.querySelector('.note-title');
        const descriptionElement = note.querySelector('.note-description');

        titleElement.textContent = title;
        descriptionElement.textContent = description;
      }
    });
  }

  /**
   * @description function render trash page
   *
   * @param {Array} listNotes is a list of notes from data
   * @param {function} handler is a function transmitted from model
   */
  renderListTrashNotes(listNotes, handler) {
    this.listTrashElement.innerHTML = '';

    listNotes.forEach((note) => {
      this.renderTrashNote(note, handler);
    });
  }

  /**
   * @description function render a trash note
   *
   * @param {Object} note is a note
   * @param {function} handler is a function transmitted from model
   */
  renderTrashNote(note, handler) {
    const noteItem = {
      id: note.id,
      title: note.title,
      description: note.description,
      isTrash: note.isTrash,
    };

    const noteView = new NoteView(noteItem);
    const trashNote = noteView.renderNote();
    this.listTrashElement.appendChild(trashNote);
    ListNoteView.bindDeleteNoteInTrash(trashNote, handler);
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
   *
   * @param {Object} note is a note
   * @param {Object} handlers is a list of function
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
   * @param {Object} trashNote is trash note element
   */
  static bindDeleteNoteInTrash(trashNote, handler) {
    const btnDeletes = trashNote.querySelector('.trash-wrapper .btn-delete');

    btnDeletes.addEventListener('click', (e) => {
      const index = e.target.getAttribute('data-id');
      handler(index);
    });
  }

  /**
   * @description function close confirm message and delete
   *
   * @param {function} handler is function transmitted
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
   *
   * @param {Object} noteElement is note element
   */
  bindShowHeader(noteElement) {
    const note = selectDOMId(`${noteElement.id}`);
    const listIconCheck = note.querySelector('.icon-check');
    const countNotesSelected = selectDOMClass('.count-selected');

    listIconCheck.addEventListener('click', (e) => {
      e.preventDefault();
      const selectedElement = e.target.parentElement.classList.contains('selected');
      if (!selectedElement) {
        this.headerAfterSelect.style.transform = 'translateY(-100%)';
        e.target.parentElement.classList.add('selected');
        const listSelected = selectDOMClassAll('.selected');

        countNotesSelected.innerHTML = `${listSelected.length} Selected`;
      } else {
        e.target.parentElement.classList.remove('selected');

        const listSelected = selectDOMClassAll('.selected');
        countNotesSelected.innerHTML = `${listSelected.length} Selected`;
      }

      const listSelected = selectDOMClassAll('.selected');
      if (listSelected.length < 1) {
        this.headerAfterSelect.style.transform = 'translateY(-200%)';
      }
    });
  }

  /**
   * @description function show form of each note
   *
   * @param {function} findNote is function transmitted from model
   * @param {Object} noteElement is note element
   */
  static showNoteForm(noteElement, findNote) {
    const noteItem = selectDOMId(`${noteElement.id}`);
    const listNotes = noteItem.querySelector('.note-content');

    listNotes.addEventListener('click', (e) => {
      e.stopPropagation();
      findNote(listNotes.getAttribute('data-id'));

      const title = selectDOMClass('.note-form-overlay .note-title');
      const description = selectDOMClass('.note-form-overlay .note-description');

      EventHelpers.stopEvents(title);
      EventHelpers.stopEvents(description);
    });
  }

  /**
   * @description function edit note
   *
   * @param {function} editNote is function transmitted from model
   */
  editNoteForm(editNote) {
    const formNoteId = selectDOMClass('.note-form-overlay').id;
    const titleCurrent = selectDOMClass('.note-form-overlay .note-title').value;
    const descriptionCurrent = selectDOMClass('.note-form-overlay .note-description').value;

    editNote(formNoteId, titleCurrent, descriptionCurrent);
    this.noteOverlay.innerHTML = '';
  }

  /**
   * @description function close and save form note when click button close
   *
   * @param {function} editNote is function transmitted from model
   */
  saveNoteForm(editNote) {
    const closeBtn = selectDOMClass('.note-form-overlay .btn-close');
    const overlay = selectDOMClass('.overlay');

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
    const note = selectDOMId(`${noteElement.id}`);
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
   *
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
