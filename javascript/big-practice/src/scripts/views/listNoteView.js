import NoteView from './noteView';
import ElementHelpers from '../helpers/elementHelpers';
import EventHelpers from '../helpers/eventHelpers';
import { selectDOMClass, selectDOMClassAll, selectDOMById } from '../utils/querySelectDOM';
import STORAGE_KEYS from '../constants/storageKeys';
import renderConfirmPopup from '../utils/confirmPopup';
import { POPUP_MESSAGE } from '../constants/message';
import LocalStorage from '../utils/localStorage';
import formTemplate from '../templates/formTemplate';
import noteTemplate from '../templates/noteTemplate';
import navigatePage from '../utils/navigatePage';
import HeaderView from './headerView';
import { renderPopupError } from '../utils/handleError';

/**
 * @class listNoteView
 * @description manage view of listNote
 */
export default class ListNoteView {
  constructor() {
    this.elementHelpers = new ElementHelpers();
    this.eventHelpers = new EventHelpers();
    this.localStorage = new LocalStorage();
    this.headerView = new HeaderView();

    this.headerAfterSelect = selectDOMClass('.header-after-select');
    this.sectionWrapper = selectDOMClass('.section-wrapper');
    this.overlayWrapper = selectDOMClass('.overlay-wrapper');
  }

  /**
   * @description navigate page to index page if isLogin from
   * localStorage is null
   */
  navigatePageWithLoginStatus() {
    if (!this.localStorage.getItems(STORAGE_KEYS.IS_LOGIN)) {
      navigatePage('index.html');
    }
  }

  /**
   * @description function render tab note or tab trash based on user click
   *
   * @param {function} handlers includes functions
   * renderTabNotes, renderTabTrash, addNote, deleteNote
   * @param {function} handlerNote is function transmitted from model
   */
  renderTabs(handlers) {
    const {
      renderTabNotes,
      renderTabTrash,
      addNote,
      deleteNote,
    } = handlers;

    const trashNotes = {
      type: 'trashNotes',
      message: 'No notes in Trash',
    };

    const listNotes = {
      type: 'listNotes',
      message: 'Notes you add appear here',
    };

    if (sessionStorage.getItem(STORAGE_KEYS.PAGE_NUMBER) === '0') {
      this.sectionWrapper.innerHTML = '';
      this.sectionWrapper.appendChild(formTemplate());

      const formElement = selectDOMClass('.note-wrapper');
      formElement.appendChild(noteTemplate(listNotes));

      renderTabNotes();
      this.bindInputBreakDown();
      this.bindShowInput();
      this.bindAddNote(addNote);
      this.bindDeleteListNotes(deleteNote);
    } else {
      this.sectionWrapper.innerHTML = '';
      this.sectionWrapper.appendChild(noteTemplate(trashNotes));

      renderTabTrash();
    }
  }

  /**
   * @description function show empty note if the list is empty
   * with the type of listNotes or trashNotes
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
          this.elementHelpers.showHideElements(listNotesEmpty, listNoteElement, 'hide');
        } else {
          this.elementHelpers.showHideElements(listNoteElement, listNotesEmpty, 'hide');
        }

        break;
      case 'trashNotes':
        if (!list.length) {
          this.elementHelpers.showHideElements(listTrashEmpty, listTrashElement, 'hide');
        } else {
          this.elementHelpers.showHideElements(listTrashElement, listTrashEmpty, 'hide');
        }

        break;
      default:
        renderPopupError('Please enter listNotes or trashNotes');
        break;
    }
  }

  /**
   * @description function render all notes and bind events for each
   * note just created
   *
   * @param {Array} listNote is a list of notes from data
   * @param {Object} handlers is a list function events
   */
  renderListNotes(listNotes, handlers) {
    const listNoteElement = selectDOMClass('.note-wrapper .list-notes');
    listNoteElement.innerHTML = '';

    listNotes.forEach((note) => {
      this.renderNote(note, handlers);
    });
  }

  /**
   * @description function render a note and bind events for a note just created
   *
   * @param {Object} note is information of note
   * @param {function} handleDeleteNote is a function transmitted from model
   * @param {function} handleShowNoteForm is a function transmitted from model
   */
  renderNote(note, handlers) {
    const listNoteElement = selectDOMClass('.note-wrapper .list-notes');
    const noteItem = {
      id: note.id,
      title: note.title,
      description: note.description,
      isTrash: note.isTrash,
    };
    const noteView = new NoteView(noteItem);
    const noteElement = noteView.renderNote('listNotes');
    const { handleDeleteNote, handleShowNoteForm } = handlers;

    listNoteElement.appendChild(noteElement);
    this.bindDeleteNote(noteElement, handleDeleteNote);
    this.bindShowNoteForm(noteElement, handleShowNoteForm);
    this.bindSelectedNote(noteElement);
  }

  /**
   * @description function remove note element in view
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
   * @description function edit note with information of note is selected
   *
   * @param {Object} noteItem is information of note take from model returned
   */
  editNote(noteItem) {
    const note = selectDOMById(noteItem.id);
    if (note) {
      const titleElement = note.querySelector('.note-title');
      const descriptionElement = note.querySelector('.note-description');
      const emptyNoteElement = note.querySelector('.note-content .note-empty');

      if (!noteItem.title && !noteItem.description) {
        this.elementHelpers.removeClass(emptyNoteElement, 'hide');
        titleElement.textContent = '';
        descriptionElement.textContent = '';
      } else {
        this.elementHelpers.addClass(emptyNoteElement, 'hide');
        titleElement.textContent = noteItem.title;
        descriptionElement.textContent = noteItem.description;
      }
    }
  }

  /**
   * @description function render trash page and bind events for
   * each note in trash
   *
   * @param {Array} listNotes is a list of trash notes from data
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
      const trashNote = noteView.renderNote('trashNotes');
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
    this.overlayWrapper.innerHTML = '';

    this.overlayWrapper.appendChild(renderConfirmPopup(POPUP_MESSAGE.DELETE_NOTE, 'Delete', note));
  }

  /**
   * @description render form note with information of note is selected
   * and bind events for form note
   *
   * @param {Object} note is information of note get from data
   * @param {Object} handlers is a list of functions events
   */
  renderFormNote(note, handlers) {
    const noteItem = {
      id: note.id,
      title: note.title,
      description: note.description,
      isTrash: note.isTrash,
    };

    const { handleEditNote, handleDeleteNote } = handlers;

    this.overlayWrapper.innerHTML = '';

    const noteView = new NoteView(noteItem);
    const noteElement = noteView.renderNoteForm();
    this.overlayWrapper.appendChild(noteElement);

    this.bindSaveNoteForm(handleEditNote);
    this.inputBreakDownNoteForm();
    this.bindDeleteNoteForm(handleDeleteNote);
  }

  /**
   * @description function open confirm popup when click button delete
   * of note in trash
   *
   * @param {function} handler is function transmitted
   * @param {Object} note is trash note element is selected
   */
  bindShowPopup(note, handler) {
    const btnDeletes = note.querySelector('.trash-wrapper .btn-delete');

    btnDeletes.addEventListener('click', (e) => {
      const index = e.target.getAttribute('data-id');
      handler(index);
    });
  }

  /**
   * @description function close confirm popup
   *
   * @param {function} handler is function transmitted
   */
  bindClosePopup() {
    const overlayConfirmMessage = selectDOMClass('.overlay-wrapper');
    overlayConfirmMessage.addEventListener('click', () => {
      this.overlayWrapper.innerHTML = '';
    });

    const btnClose = selectDOMClass('.btn-close-popup');
    btnClose.addEventListener('click', (e) => {
      e.stopPropagation();
      this.overlayWrapper.innerHTML = '';
    });
  }

  /**
   * @description events show header bulk actions and count notes selected
   *
   * @param {Object} noteElement is note element
   */
  bindSelectedNote(noteElement) {
    const note = selectDOMById(`${noteElement.id}`);
    const listIconCheck = note.querySelector('.icon-check');
    const countNotesSelected = selectDOMClass('.count-selected');
    const headerAfterSelect = selectDOMClass('.header-after-select');

    listIconCheck.addEventListener('click', (e) => {
      e.preventDefault();
      const selectedElement = e.target.parentElement.classList.contains('selected');

      if (!selectedElement) {
        this.elementHelpers.addClass(e.target.parentElement, 'selected');
        this.elementHelpers.countAndShowSelected(countNotesSelected);
        this.elementHelpers.translateYElement(headerAfterSelect, '-100');
      } else {
        this.elementHelpers.removeClass(e.target.parentElement, 'selected');

        this.elementHelpers.countAndShowSelected(countNotesSelected);
      }

      const listSelected = selectDOMClassAll('.selected');
      if (listSelected.length < 1) {
        this.elementHelpers.translateYElement(headerAfterSelect, '-200');
      }
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
      this.overlayWrapper.innerHTML = '';
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
   * @description function show note form of note is selected
   *
   * @param {function} findNote is function transmitted from model
   * @param {Object} noteElement is note element is selected
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
   * @description function close and save form note when click button close or
   * click out of the form
   *
   * @param {function} editNote is function transmitted from model
   */
  bindSaveNoteForm(editNote) {
    const closeBtn = selectDOMClass('.note-form-overlay .btn-close');
    const overlay = selectDOMClass('.overlay');
    const formElement = selectDOMClass('.note-form-overlay');
    const noteItem = {
      id: formElement.id,
    };

    this.eventHelpers.stopEvents(closeBtn);
    this.eventHelpers.stopEvents(formElement);

    formElement.addEventListener('submit', (e) => {
      e.stopPropagation();
      e.preventDefault();

      const formData = new FormData(formElement);
      const note = {
        ...noteItem,
        title: formData.get('title'),
        description: formData.get('description'),
      };

      editNote(note);
      this.overlayWrapper.innerHTML = '';
    });

    overlay.addEventListener('click', () => {
      const note = {
        ...noteItem,
        title: selectDOMClass('.note-form-overlay .note-title').value,
        description: selectDOMClass('.note-form-overlay .note-description').value,
      };

      editNote(note);
      this.overlayWrapper.innerHTML = '';
    });
  }

  /**
   * @description function delete note of button in note form
   *
   * @param {function} deleteNote is function transmitted from model
   */
  bindDeleteNoteForm(deleteNote) {
    const buttonDelete = selectDOMClass('.note-form-overlay .btn-delete-form');
    buttonDelete.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = e.target.getAttribute('data-id');

      deleteNote(id);
      this.overlayWrapper.innerHTML = '';
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
      this.elementHelpers.removeClass(formUtilitiesElement, 'hide');
      this.elementHelpers.removeClass(formTitleElement, 'hide');
    });
  }

  /**
   * @description function add new note and hide input form
   *
   * @param {function} handler is function transmitted from model
   */
  bindAddNote(handler) {
    const formElement = selectDOMClass('.form-add-note');

    formElement.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(formElement);
      const note = {
        title: formData.get('title'),
        description: formData.get('description'),
      };

      this.addNote(note, handler, formElement);
    });

    document.addEventListener('click', (e) => {
      const title = selectDOMClass('.note-title').value;
      const description = selectDOMClass('.note-description').value;

      if (!e.target.closest('.form-add-note') && (title || description)) {
        const note = {
          title,
          description,
        };

        this.addNote(note, handler, formElement);
      }
    });
  }

  addNote(note, handler, formElement) {
    const formTitleElement = selectDOMClass('.form-title');
    const formUtilitiesElement = selectDOMClass('.form-utilities');
    const listNotesEmpty = selectDOMClass('.list-notes-empty-content');

    this.elementHelpers.addClass(formUtilitiesElement, 'hide');
    this.elementHelpers.addClass(formTitleElement, 'hide');

    if (note.title || note.description) {
      handler(note);
      formElement.reset();
      this.elementHelpers.addClass(listNotesEmpty, 'hide');
    }
  }

  /**
   * @description function delete note of each note
   *
   * @param {function} handler is function delete transmitted from from the model
   * @param {Object} noteElement is note element
   */
  bindDeleteNote(noteElement, handler) {
    const note = selectDOMById(`${noteElement.id}`);
    const iconDeleteElement = note.querySelectorAll('.note-btn .icon-delete');

    iconDeleteElement.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const noteId = e.target.getAttribute('data-id');

        handler(noteId);
      });
    });
  }

  /**
   * @description function delete of button in header by selected notes
   *
   * @param {function} handler is function delete transmitted from from the model
   */
  bindDeleteListNotes(handler) {
    const btnDeleteBulkActions = selectDOMClass('.btn-delete-bulk-actions');
    const headerAfterSelect = selectDOMClass('.header-after-select');

    btnDeleteBulkActions.addEventListener('click', () => {
      const noteSelected = selectDOMClassAll('.selected');

      noteSelected.forEach((note) => {
        handler(note.id);
      });

      this.elementHelpers.translateYElement(headerAfterSelect, '-200');
    });
  }
}
