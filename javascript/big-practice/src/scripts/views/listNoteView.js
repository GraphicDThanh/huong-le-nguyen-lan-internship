import NoteView from './noteView';
import ElementHelpers from '../helpers/elementHelpers';
import EventHelpers from '../helpers/eventHelpers';
import { selectDOMClass, selectDOMClassAll, selectDOMById } from '../utils/querySelectDOM';
import STORAGE_KEYS from '../constants/storageKeys';
import renderConfirmPopup from '../utils/confirmPopup';
import { POPUP_MESSAGE } from '../constants/message';
import LocalStorage from '../utils/localStorage';

/**
 * @class listNoteView
 * @description manage view of listNote
 */
export default class ListNoteView {
  constructor() {
    this.elementHelpers = new ElementHelpers();
    this.eventHelpers = new EventHelpers();
    this.localStorage = new LocalStorage();

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

    this.listNotesEmpty = selectDOMClass('.list-notes-empty-content');
    this.listTrashEmpty = selectDOMClass('.trash-wrapper .list-notes-empty-content');

    this.menuUser = selectDOMClass('.menu-user');
    this.avatarUser = selectDOMClass('.avatar-user-cover');
    this.btnLogin = selectDOMClass('.btn-login');
    this.btnLogout = selectDOMClass('.btn-logout');
    this.emailUser = selectDOMClass('.menu-user-email');
  }

  /**
   * @description function show hide menu hidden
   */
  bindShowMenuUser() {
    this.avatarUser.addEventListener('click', () => {
      if (this.menuUser.classList.contains('hide')) {
        this.menuUser.classList.remove('hide');
      } else {
        this.menuUser.classList.add('hide');
      }

      if (localStorage.getItem(STORAGE_KEYS.USER_ID)) {
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
      window.location.href = 'login.html';
      sessionStorage.setItem(STORAGE_KEYS.PAGE_NUMBER, '0');
      this.localStorage.removeItems(STORAGE_KEYS.USER_ID);
    });
  }

  /**
   * @function function handle login
   */
  bindLogin() {
    this.btnLogin.addEventListener('click', () => {
      window.location.href = 'login.html';
      sessionStorage.setItem(STORAGE_KEYS.PAGE_NUMBER, '0');
    });
  }

  /**
   * @description set email to menu user
   *
   * @param {String} email is email of user take from data
   */
  showInformationUser(email) {
    if (email) {
      this.emailUser.textContent = email;
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
          console.log('page number is not found');
        }
      });
    });
  }

  /**
   * @description function check page which is opening
   *
   * @param {function} handlerTrash is function transmitted from model
   * @param {function} handlerNote is function transmitted from model
   */
  showHidePage(handlerTrash, handlerNote) {
    if (!sessionStorage.getItem(STORAGE_KEYS.PAGE_NUMBER)) {
      sessionStorage.setItem(STORAGE_KEYS.PAGE_NUMBER, '0');
    }

    if (sessionStorage.getItem(STORAGE_KEYS.PAGE_NUMBER) === '0') {
      this.elementHelpers.showHideElement(this.noteWrapper, this.trashWrapper);
      handlerNote();
    } else {
      this.elementHelpers.showHideElement(this.trashWrapper, this.noteWrapper);
      handlerTrash();
    }
  }

  /**
   * @description function show empty note if that note is empty
   *
   * @param {Array} list is a list of note or list of trash note
   * @param {String} type is a type if we need to use in listNotes or trashNotes
   */
  showHideEmpty(list, type) {
    switch (type) {
      case 'listNotes':
        if (!list.length) {
          this.elementHelpers.showHideElement(this.listNotesEmpty, this.listNoteElement);
        } else {
          this.elementHelpers.showHideElement(this.listNoteElement, this.listNotesEmpty);
        }

        break;
      case 'trashNotes':
        if (!list.length) {
          this.elementHelpers.showHideElement(this.listTrashEmpty, this.listTrashElement);
        } else {
          this.elementHelpers.showHideElement(this.listTrashElement, this.listTrashEmpty);
        }

        break;
      default:
        console.log('Enter listNotes or trashNotes');
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
    this.bindDeleteNote(noteElement, handleDeleteNote);
    this.bindShowNoteForm(noteElement, handleShowNoteForm);
    this.bindShowHeader(noteElement);
  }

  /**
   * @description function remove note in view
   *
   * @param {String} id is id of note
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
    this.listTrashElement.innerHTML = '';

    listNotes.forEach((note) => {
      const noteItem = {
        id: note.id,
        title: note.title,
        description: note.description,
        isTrash: note.isTrash,
      };

      const noteView = new NoteView(noteItem);
      const trashNote = noteView.renderNote();
      this.listTrashElement.appendChild(trashNote);
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

    this.confirmMessage.innerHTML = '';

    this.confirmMessage.appendChild(renderConfirmPopup(POPUP_MESSAGE.DELETE_NOTE, 'Delete', noteItem));
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

    this.noteOverlay.innerHTML = '';

    const noteView = new NoteView(noteItem);
    const noteElement = noteView.renderNoteForm();
    this.noteOverlay.appendChild(noteElement);

    this.bindSaveNoteForm(handleEditNote);
    this.inputBreakDownNoteForm();
    this.bindDeleteNoteForm(handleDeleteNote);
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
    const overlayConfirmMessage = selectDOMClass('.trash-overlay .overlay');
    overlayConfirmMessage.addEventListener('click', () => {
      this.confirmMessage.innerHTML = '';
    });

    const btnClose = selectDOMClass('.btn-close-popup');
    btnClose.addEventListener('click', (e) => {
      e.stopPropagation();
      this.confirmMessage.innerHTML = '';
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
      const listTrash = selectDOMClass('.trash-wrapper .list-notes');

      handler(index);

      this.confirmMessage.innerHTML = '';
      if (listTrash.childNodes.length === 1) {
        this.listTrashEmpty.classList.remove('hide');
      } else {
        this.listTrashEmpty.classList.add('hide');
      }
    });
  }

  /**
   * @description events of textarea to increase the length of input note
   */
  bindInputBreakDown() {
    this.elementHelpers.commonInputBreakDown(this.inputAddElement);
    this.elementHelpers.commonInputBreakDown(this.inputTitleElement);
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
      this.noteOverlay.innerHTML = '';
    });

    overlay.addEventListener('click', () => {
      const title = selectDOMClass('.note-form-overlay .note-title').value;
      const description = selectDOMClass('.note-form-overlay .note-description').value;

      editNote(formNoteId, title, description);
      this.noteOverlay.innerHTML = '';
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
      const listNotes = selectDOMClass('.list-notes');

      deleteNote(id);

      this.noteOverlay.innerHTML = '';
      if (listNotes.childNodes.length === 1) {
        this.listNotesEmpty.classList.remove('hide');
      }
    });
  }

  /**
   * @description function events to show input form
   */
  bindShowInput() {
    this.inputAddElement.addEventListener('focus', () => {
      this.formUtilitiesElement.classList.remove('hide');
      this.formTitleElement.classList.remove('hide');
    });
  }

  /**
   * @description function add new note and hide input form
   *
   * @param {function} handler is function transmitted from model
   */
  bindAddNote(handler) {
    this.formElement.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(this.formElement);
      const title = formData.get('title');
      const description = formData.get('description');

      this.formUtilitiesElement.classList.add('hide');
      this.formTitleElement.classList.add('hide');

      if (title || description) {
        handler(title, description);
        this.formElement.reset();
        this.listNotesEmpty.classList.add('hide');
      }
    });
  }

  /**
   * @description function event delete note
   *
   * @param {function} handler is function delete transmitted from from the model
   */
  bindDeleteNote(noteElement, handler) {
    const note = selectDOMById(`${noteElement.id}`);
    const deleteButtonElements = note.querySelectorAll('.note-wrapper .btn-delete');

    deleteButtonElements.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const noteId = e.target.getAttribute('data-id');
        const listNotes = selectDOMClass('.list-notes');

        if (listNotes.childNodes.length === 1) {
          this.listNotesEmpty.classList.remove('hide');
        }
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
      const listNotes = selectDOMClass('.list-notes');

      noteSelected.forEach((note) => {
        handler(note.id);
      });

      this.headerAfterSelect.style.transform = 'translateY(-200%)';

      if (listNotes.childNodes.length === 1) {
        this.listNotesEmpty.classList.remove('hide');
      }
    });
  }
}
