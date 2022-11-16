import NoteView from './noteView';
import ElementHelpers from '../helpers/elementHelpers';
import EventHelpers from '../helpers/eventHelpers';
import { selectDOMClass, selectDOMClassAll, selectDOMById } from '../utils/querySelectDOM';
import STORAGE_KEYS from '../constants/storageKeys';
import renderConfirmPopup from '../utils/confirmPopup';
import { POPUP_MESSAGE } from '../constants/message';
import LocalStorage from '../utils/localStorage';
import notes from '../templates/notes';
import noteTrash from '../templates/noteTrash';
import user from '../constants/mockUser';

/**
 * @class listNoteView
 * @description manage view of listNote
 */
export default class ListNoteView {
  constructor() {
    this.elementHelpers = new ElementHelpers();
    this.eventHelpers = new EventHelpers();
    this.localStorage = new LocalStorage();

    this.headerAfterSelect = selectDOMClass('.header-after-select');
    this.btnDeleteBulkActions = selectDOMClass('.btn-delete-bulk-actions');

    this.sectionWrapper = selectDOMClass('.section-wrapper');
    this.overlayCover = selectDOMClass('.overlay-cover');

    this.menu = selectDOMClassAll('.nav li');

    this.menuUser = selectDOMClass('.menu-user');
    this.avatarUser = selectDOMClass('.avatar-user-cover');
    this.btnLogin = selectDOMClass('.btn-login');
    this.btnLogout = selectDOMClass('.btn-logout');
    this.emailUser = selectDOMClass('.menu-user-email');
  }

  /**
   * @description if user still note logged in, it will move to login page
   */
  checkUserLoggedIn() {
    if (!this.localStorage.getItems(STORAGE_KEYS.IS_USER_LOGGED_IN)) {
      window.location.href = 'index.html';
    }
  }

  /**
   * @description function show hide menu user
   */
  bindShowMenuUser() {
    this.avatarUser.addEventListener('click', () => {
      if (this.menuUser.classList.contains('hide')) {
        this.menuUser.classList.remove('hide');
      } else {
        this.menuUser.classList.add('hide');
      }

      if (this.localStorage.getItems(STORAGE_KEYS.IS_USER_LOGGED_IN)) {
        this.elementHelpers.showHideElement(this.btnLogout, this.btnLogin);
      } else {
        this.elementHelpers.showHideElement(this.btnLogin, this.btnLogout);
      }
    });
  }

  /**
   * @description function handle logout
   */
  bindLogOut() {
    this.btnLogout.addEventListener('click', () => {
      window.location.href = 'index.html';
      sessionStorage.setItem(STORAGE_KEYS.PAGE_NUMBER, '0');
      this.localStorage.removeItems(STORAGE_KEYS.IS_USER_LOGGED_IN);
    });
  }

  /**
   * @description handle login
   */
  bindLogin() {
    this.btnLogin.addEventListener('click', () => {
      window.location.href = 'index.html';
      sessionStorage.setItem(STORAGE_KEYS.PAGE_NUMBER, '0');
    });
  }

  /**
   * @description set email to menu user
   */
  showInformationUser() {
    if (STORAGE_KEYS.IS_USER_LOGGED_IN) {
      this.emailUser.textContent = user.email;
    } else {
      this.emailUser.textContent = 'Unknown';
    }
  }

  /**
   * @description function change note page or trash page
   *
   * @param {function} handlerTrash is function transmitted from model
   * @param {function} handlerNote is function transmitted from model
   */
  bindChangePage(handlerTrash, handlerNote) {
    this.showHidePage(handlerTrash, handlerNote);
    this.menu[sessionStorage.getItem(STORAGE_KEYS.PAGE_NUMBER)].classList.add('menu-color');

    this.menu.forEach((element) => {
      element.addEventListener('click', (e) => {
        if (e.target.hasAttribute('data-id')) {
          this.menu[sessionStorage.getItem(STORAGE_KEYS.PAGE_NUMBER)].classList.remove('menu-color');

          sessionStorage.setItem(STORAGE_KEYS.PAGE_NUMBER, e.target.getAttribute('data-id'));
          this.menu[sessionStorage.getItem(STORAGE_KEYS.PAGE_NUMBER)].classList.add('menu-color');

          this.showHidePage(handlerTrash, handlerNote);
        } else {
          this.renderPopupError('Page number is not found');
        }
      });
    });
  }

  /**
   * @description function render tab note or tab trash based on user click
   *
   * @param {function} handlers includes functions
   * renderTabNotes, renderTabTrash, addNote, deleteNote
   *
   * @param {function} handlerNote is function transmitted from model
   */
  showHidePage(handlers) {
    const {
      renderTabNotes,
      renderTabTrash,
      addNote,
      deleteNote,
    } = handlers;

    if (!sessionStorage.getItem(STORAGE_KEYS.PAGE_NUMBER)) {
      sessionStorage.setItem(STORAGE_KEYS.PAGE_NUMBER, '0');
    }

    if (sessionStorage.getItem(STORAGE_KEYS.PAGE_NUMBER) === '0') {
      this.sectionWrapper.innerHTML = '';
      this.sectionWrapper.appendChild(notes());

      renderTabNotes();
      this.bindInputBreakDown();
      this.bindShowInput();
      this.bindAddNote(addNote);
      this.bindDeleteListNotes(deleteNote);
    } else {
      this.sectionWrapper.innerHTML = '';
      this.sectionWrapper.appendChild(noteTrash());

      renderTabTrash();
    }
  }

  /**
   * @description function show empty note if that note is empty
   *
   * @param {Array} list is a list of note or list of trash note
   * @param {String} type is a type if we need to use in listNotes or trashNotes
   */
  showHideEmpty(list, type) {
    const listNotesEmpty = selectDOMClass('.list-notes-empty-content');
    const listNoteElement = selectDOMClass('.note-wrapper .list-notes');
    const listTrashElement = selectDOMClass('.trash-wrapper .list-notes');
    const listTrashEmpty = selectDOMClass('.trash-wrapper .list-notes-empty-content');

    switch (type) {
      case 'listNotes':
        if (!list.length) {
          this.elementHelpers.showHideElement(listNotesEmpty, listNoteElement);
        } else {
          this.elementHelpers.showHideElement(listNoteElement, listNotesEmpty);
        }

        break;
      case 'trashNotes':
        if (!list.length) {
          this.elementHelpers.showHideElement(listTrashEmpty, listTrashElement);
        } else {
          this.elementHelpers.showHideElement(listTrashElement, listTrashEmpty);
        }

        break;
      default:
        this.renderPopupError('Please enter listNotes or trashNotes');
        break;
    }
  }

  /**
   * @description function render all notes
   *
   * @param {Array} listNote is a list of notes from data
   * @param {Object} handlers is a list function events
   */
  renderListNotes(listNotes, handlers) {
    const listNoteElement = selectDOMClass('.note-wrapper .list-notes');
    listNoteElement.innerHTML = '';

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
    const listNoteElement = selectDOMClass('.note-wrapper .list-notes');
    const noteItem = {
      id: note.id,
      title: note.title,
      description: note.description,
      isTrash: note.isTrash,
    };
    const noteView = new NoteView(noteItem);
    const noteElement = noteView.renderNote();

    listNoteElement.appendChild(noteView.renderNote());
    this.bindDeleteNote(noteElement, handleDeleteNote);
    this.bindShowNoteForm(noteElement, handleShowNoteForm);
    this.bindShowHeader(noteElement);
  }

  /**
   * @description function remove note in view
   *
   * @param {String} id is id of note
   * @param {String} type enter listNotes or trashNotes
   */
  removeNoteElement(id) {
    const note = selectDOMById(id);

    if (note) {
      note.remove();
    }
  }

  /**
   * @description function edit note
   *
   * @param {String} id is id of note
   * @param {String} title is title of note
   * @param {String} description is description of note
   */
  editNote(id, title, description) {
    const note = selectDOMById(id);
    if (note) {
      const titleElement = note.querySelector('.note-title');
      const descriptionElement = note.querySelector('.note-description');
      const emptyNoteElement = note.querySelector('.note-content .note-empty');

      if (!title && !description) {
        emptyNoteElement.classList.remove('hide');
        titleElement.textContent = '';
        descriptionElement.textContent = '';
      } else {
        emptyNoteElement.classList.add('hide');
        titleElement.textContent = title;
        descriptionElement.textContent = description;
      }
    }
  }

  /**
   * @description function render trash page
   *
   * @param {Array} listNotes is a list of notes from data
   * @param {function} handler is a function transmitted from model
   */
  renderListTrashNotes(listNotes, handler) {
    const listTrashElement = selectDOMClass('.trash-wrapper .list-notes');
    listTrashElement.innerHTML = '';

    listNotes.forEach((note) => {
      const noteItem = {
        id: note.id,
        title: note.title,
        description: note.description,
        isTrash: note.isTrash,
      };

      const noteView = new NoteView(noteItem);
      const trashNote = noteView.renderNote();
      listTrashElement.appendChild(trashNote);
      this.bindShowPopup(trashNote, handler);
    });
  }

  /**
   * @description function render confirm message
   *
   * @param {Object} note is a note take from data
   */
  renderConfirmMessage(note) {
    const noteItem = {
      id: note.id,
      title: note.title,
      description: note.description,
      isTrash: note.isTrash,
    };

    this.overlayCover.innerHTML = '';

    this.overlayCover.appendChild(renderConfirmPopup(POPUP_MESSAGE.DELETE_NOTE, 'Delete', noteItem));
  }

  /**
   * @description render form note of each note
   *
   * @param {Object} note is a note take from data
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

    this.overlayCover.innerHTML = '';

    const noteView = new NoteView(noteItem);
    const noteElement = noteView.renderNoteForm();
    this.overlayCover.appendChild(noteElement);

    this.bindSaveNoteForm(handleEditNote);
    this.inputBreakDownNoteForm();
    this.bindDeleteNoteForm(handleDeleteNote);
  }

  /**
   * @description function render popup error message
   *
   * @param {String} errorMessage is message error
   */
  renderPopupError(errorMessage) {
    this.overlayCover.appendChild(renderConfirmPopup(`${POPUP_MESSAGE.ERRORS_MSG}${errorMessage}`));

    const btnClose = selectDOMClass('.btn-close-popup');
    btnClose.addEventListener('click', () => {
      this.overlayCover.innerHTML = '';
    });
  }

  /**
   * @description function open confirm message
   *
   * @param {function} handler is function transmitted
   * @param {Object} trashNote is trash note element
   */
  bindShowPopup(trashNote, handler) {
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
  bindClosePopup() {
    const overlayConfirmMessage = selectDOMClass('.overlay-cover');
    overlayConfirmMessage.addEventListener('click', () => {
      this.overlayCover.innerHTML = '';
    });

    const btnClose = selectDOMClass('.btn-close-popup');
    btnClose.addEventListener('click', (e) => {
      e.stopPropagation();
      this.overlayCover.innerHTML = '';
    });
  }

  /**
   * @description function delete note forever
   *
   * @param {function} handler is function transmitted from model
   */
  bindDeleteNoteInTrash(handler) {
    const deleteTrash = selectDOMClass('.btn-submit-action');

    deleteTrash.addEventListener('click', (e) => {
      e.stopPropagation();
      const index = e.target.getAttribute('data-id');

      handler(index);
      this.overlayCover.innerHTML = '';
    });
  }

  /**
   * @description events of textarea to increase the length of input note
   */
  bindInputBreakDown() {
    const inputAddElement = selectDOMClass('.form-add-note .form-group-input .input-note');
    const inputTitleElement = selectDOMClass('.note-title');

    this.elementHelpers.commonInputBreakDown(inputAddElement);
    this.elementHelpers.commonInputBreakDown(inputTitleElement);
  }

  /**
   * @description function input break down of form note
   */
  inputBreakDownNoteForm() {
    const title = selectDOMClass('.note-form-overlay .note-title');
    const description = selectDOMClass('.note-form-overlay .note-description');

    this.elementHelpers.commonInputBreakDown(title);
    this.elementHelpers.commonInputBreakDown(description);
  }

  /**
   * @description events show header bulk actions and count notes selected
   *
   * @param {Object} noteElement is note element
   */
  bindShowHeader(noteElement) {
    const note = selectDOMById(`${noteElement.id}`);
    const listIconCheck = note.querySelector('.icon-check');
    const countNotesSelected = selectDOMClass('.count-selected');

    listIconCheck.addEventListener('click', (e) => {
      e.preventDefault();
      const selectedElement = e.target.parentElement.classList.contains('selected');

      if (!selectedElement) {
        e.target.parentElement.classList.add('selected');
        this.elementHelpers.countAndShowSelected(countNotesSelected);
        this.headerAfterSelect.style.transform = 'translateY(-100%)';
      } else {
        e.target.parentElement.classList.remove('selected');
        this.elementHelpers.countAndShowSelected(countNotesSelected);
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
  bindShowNoteForm(noteElement, findNote) {
    const noteItem = selectDOMById(`${noteElement.id}`);
    const listNotes = noteItem.querySelector('.note-content');

    listNotes.addEventListener('click', async (e) => {
      e.stopPropagation();
      await findNote(listNotes.getAttribute('data-id'));

      const title = selectDOMClass('.note-form-overlay .note-title');
      const description = selectDOMClass('.note-form-overlay .note-description');

      this.elementHelpers.showInputBreakDown(title);
      this.elementHelpers.showInputBreakDown(description);
      this.eventHelpers.stopEvents(title);
      this.eventHelpers.stopEvents(description);
    });
  }

  /**
   * @description function close and save form note when click button close
   *
   * @param {function} editNote is function transmitted from model
   */
  bindSaveNoteForm(editNote) {
    const closeBtn = selectDOMClass('.note-form-overlay .btn-close');
    const overlay = selectDOMClass('.overlay');
    const formElement = selectDOMClass('.note-form-overlay');
    const formNoteId = formElement.id;

    this.eventHelpers.stopEvents(closeBtn);
    this.eventHelpers.stopEvents(formElement);

    formElement.addEventListener('submit', (e) => {
      e.stopPropagation();
      e.preventDefault();

      const formData = new FormData(formElement);
      const title = formData.get('title');
      const description = formData.get('description');

      editNote(formNoteId, title, description);
      this.overlayCover.innerHTML = '';
    });

    overlay.addEventListener('click', () => {
      const title = selectDOMClass('.note-form-overlay .note-title').value;
      const description = selectDOMClass('.note-form-overlay .note-description').value;

      editNote(formNoteId, title, description);
      this.overlayCover.innerHTML = '';
    });
  }

  /**
   * @description is function of button delete of note form
   *
   * @param {function} deleteNote is function transmitted from model
   */
  bindDeleteNoteForm(deleteNote) {
    const buttonDelete = selectDOMClass('.note-form-overlay .btn-delete-form');
    buttonDelete.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = e.target.getAttribute('data-id');

      deleteNote(id);
      this.overlayCover.innerHTML = '';
    });
  }

  /**
   * @description function events to show input form
   */
  bindShowInput() {
    const formTitleElement = selectDOMClass('.form-title');
    const formUtilitiesElement = selectDOMClass('.form-utilities');

    const inputAddElement = selectDOMClass('.form-add-note .form-group-input .input-note');
    inputAddElement.addEventListener('focus', () => {
      formUtilitiesElement.classList.remove('hide');
      formTitleElement.classList.remove('hide');
    });
  }

  /**
   * @description function add new note and hide input form
   *
   * @param {function} handler is function transmitted from model
   */
  bindAddNote(handler) {
    const formElement = selectDOMClass('.form-add-note');
    const formTitleElement = selectDOMClass('.form-title');
    const formUtilitiesElement = selectDOMClass('.form-utilities');
    const listNotesEmpty = selectDOMClass('.list-notes-empty-content');

    formElement.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(formElement);
      const title = formData.get('title');
      const description = formData.get('description');

      formUtilitiesElement.classList.add('hide');
      formTitleElement.classList.add('hide');

      if (title || description) {
        handler(title, description);
        formElement.reset();
        listNotesEmpty.classList.add('hide');
      }
    });
  }

  /**
   * @description function event delete note
   *
   * @param {function} handler is function delete transmitted from from the model
   * @param {Object} noteElement is note element
   */
  bindDeleteNote(noteElement, handler) {
    const note = selectDOMById(`${noteElement.id}`);
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
