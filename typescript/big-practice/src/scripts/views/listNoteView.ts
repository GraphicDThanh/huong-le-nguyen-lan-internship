import NoteView from './noteView';
import ElementHelpers from '../helpers/elementHelpers';
import EventHelpers from '../helpers/eventHelpers';
import {
  selectDOMClass,
  selectDOMClassAll,
  selectDOMById,
} from '../utils/querySelectDOM';
import STORAGE_KEYS from '../constants/storageKeys';
import renderConfirmPopup from '../utils/confirmPopup';
import { POPUP_MESSAGE } from '../constants/message';
import LocalStorage from '../utils/localStorage';
import formAddNote from '../components/formAddNote';
import listNotesWrapper from '../components/listNotes';
import navigatePage from '../utils/navigatePage';
import HeaderView from './headerView';
import { renderPopupError } from '../utils/errorsDOM';
import Note from '../types/note';

/**
 * @class listNoteView
 * @description manage view of listNote
 */
export default class ListNoteView {
  elementHelpers: ElementHelpers;

  eventHelpers: EventHelpers;

  localStorage: LocalStorage<boolean>;

  headerView: HeaderView;

  headerAfterSelect: HTMLElement | null;

  sectionWrapper: HTMLElement | null;

  overlayWrapper: HTMLElement | null;

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
   */
  renderTabs(handlers: {
    renderTabNotes: () => void;
    renderTabTrash: () => void;
    addNote: (note: Note) => void;
  }) {
    const { renderTabNotes, renderTabTrash, addNote } = handlers;

    const trashNotes = {
      tab: 'trashNotes',
      message: 'No notes in Trash',
    };

    const listNotes = {
      tab: 'listNotes',
      message: 'Notes you add appear here',
    };

    if (this.sectionWrapper) {
      if (sessionStorage.getItem(STORAGE_KEYS.PAGE_NUMBER) === '0') {
        this.sectionWrapper.innerHTML = '';
        this.sectionWrapper.appendChild(formAddNote());

        const formElement = selectDOMClass('.note-wrapper');
        if (formElement) {
          formElement.appendChild(listNotesWrapper(listNotes));
        }

        renderTabNotes();
        this.bindInputBreakDown();
        this.bindShowInput();
        this.bindAddNote(addNote);
      } else {
        this.sectionWrapper.innerHTML = '';
        this.sectionWrapper.appendChild(listNotesWrapper(trashNotes));

        renderTabTrash();
      }
    }
  }

  /**
   * @description function show empty note if the list is empty
   * with the tab of listNotes or trashNotes
   *
   * @param {Array} list is a list of note or list of trash note
   * @param {String} type is a tab if we need to use in listNotes or trashNotes
   */
  showHideEmpty(list: Note[], tab: string) {
    const listNotesEmpty = selectDOMClass('.list-notes-empty-content');
    const listNoteElement = selectDOMClass('.note-wrapper .list-notes');
    const listTrashElement = selectDOMClass('.trash-wrapper .list-notes');
    const listTrashEmpty = selectDOMClass(
      '.trash-wrapper .list-notes-empty-content'
    );

    switch (tab) {
      case 'listNotes':
        if (listNotesEmpty && listNoteElement) {
          this.commonEmptyList(list, listNotesEmpty, listNoteElement);
        }
        break;
      case 'trashNotes':
        if (listTrashEmpty && listTrashElement) {
          this.commonEmptyList(list, listTrashEmpty, listTrashElement);
        }
        break;
      default:
        renderPopupError('Please enter listNotes or trashNotes');
        break;
    }
  }

  /**
   * @description common condition of show hide empty list, it will
   * check list empty or not to show or hide message
   *
   * @param {Array} list is list of note or list of note trash
   * @param {Object} listEmpty is element has message empty list
   * @param {Object} listElement is element has list of note or trash
   */
  commonEmptyList(
    list: Note[],
    listEmpty: HTMLElement,
    listElement: HTMLElement
  ) {
    if (!list.length) {
      this.elementHelpers.showHideElements(listEmpty, listElement, 'hide');
    } else {
      this.elementHelpers.showHideElements(listElement, listEmpty, 'hide');
    }
  }

  /**
   * @description function render all notes and bind events for each
   * note just created
   *
   * @param {Array} listNote is a list of notes from data
   * @param {Object} handlers is a list function events
   */
  renderListNotes(
    listNotes: Note[],
    handlers: {
      handleDeleteNote: (id: string) => void;
      handleShowNoteForm: (id: string) => void;
    }
  ) {
    const listNoteElement = selectDOMClass('.list-notes');
    if (listNoteElement) {
      listNoteElement.innerHTML = '';
    }

    listNotes.forEach((note) => {
      this.renderNote(note, handlers);
    });
  }

  /**
   * @description function render a note and bind events for a note just created
   *
   * @param {Object} note is information of note
   * @param {function} handlers is a function transmitted from model
   */

  renderNote(
    note: Note,
    handlers: {
      handleDeleteNote: (id: string) => void;
      handleShowNoteForm: (id: string) => void;
    }
  ) {
    const listNoteElement = selectDOMClass('.list-notes');
    const noteItem = {
      id: note.id,
      title: note.title,
      description: note.description,
      deletedAt: note.deletedAt,
    };
    const noteView = new NoteView(noteItem);
    const noteElement = noteView.renderNote('listNotes');
    const { handleDeleteNote, handleShowNoteForm } = handlers;

    if (listNoteElement) {
      listNoteElement.appendChild(noteElement);
    }
    this.bindDeleteNote(noteElement, handleDeleteNote);
    this.bindShowNoteForm(noteElement, handleShowNoteForm);
    this.bindSelectedNote(noteElement);
  }

  /**
   * @description function remove note element in view
   *
   * @param {String} id is id of note
   */
  removeNoteElement(id: string) {
    const note = selectDOMById(id);

    if (note && id) {
      note.remove();
    }
  }

  /**
   * @description function edit note with information of note is selected
   *
   * @param {Object} noteItem is information of note take from model returned
   */
  editNote(noteItem: Note) {
    const note = selectDOMById(noteItem.id);
    if (note) {
      const titleElement = note.querySelector('.note-title');
      const descriptionElement = note.querySelector('.note-description');
      const emptyNoteElement = note.querySelector(
        '.note-content .note-empty'
      ) as HTMLElement;

      if (titleElement && descriptionElement) {
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
  }

  /**
   * @description function render trash page and bind events for
   * each note in trash
   *
   * @param {Array} listNotes is a list of trash notes from data
   * @param {function} handler is a function transmitted from model
   */
  renderListTrashNotes(listNotes: Note[], handler: (noteId: string) => void) {
    const listTrashElement = selectDOMClass('.list-notes');
    if (listTrashElement) {
      listTrashElement.innerHTML = '';

      listNotes.forEach((note) => {
        const noteItem = {
          id: note.id,
          title: note.title,
          description: note.description,
          deletedAt: note.deletedAt,
        };

        const noteView = new NoteView(noteItem);
        const trashNote = noteView.renderNote('trashNotes');
        listTrashElement.appendChild(trashNote);
        this.bindShowPopup(trashNote, handler);
        this.bindSelectedNote(trashNote);
      });
    }
  }

  /**
   * @description function render confirm message
   *
   * @param {Object} note is a note take from data
   */
  renderConfirmMessage(note?: Note) {
    if (this.overlayWrapper) {
      this.overlayWrapper.innerHTML = '';

      if (note) {
        this.overlayWrapper.appendChild(
          renderConfirmPopup(POPUP_MESSAGE.DELETE_NOTE, 'Delete', note)
        );
      } else {
        this.overlayWrapper.appendChild(
          renderConfirmPopup(POPUP_MESSAGE.DELETE_NOTE, 'Delete')
        );
      }
    }
  }

  /**
   * @description render form note with information of note is selected
   * and bind events for form note
   *
   * @param {Object} note is information of note get from data
   * @param {Object} handlers is a list of functions events
   */
  renderFormNote(
    note: Note,
    handlers: {
      handleEditNote: (note: Note) => void;
      handleDeleteNote: (noteId: string) => void;
    }
  ) {
    const noteItem = {
      id: note.id,
      title: note.title,
      description: note.description,
      deletedAt: note.deletedAt,
    };

    const { handleEditNote, handleDeleteNote } = handlers;

    if (this.overlayWrapper) {
      this.overlayWrapper.innerHTML = '';

      const noteView = new NoteView(noteItem);
      const noteElement = noteView.renderNoteForm();
      this.overlayWrapper.appendChild(noteElement);

      this.bindSaveNoteForm(handleEditNote);
      this.inputBreakDownNoteForm();
      this.bindDeleteNoteForm(handleDeleteNote);
    }
  }

  /**
   * @description function open confirm popup when click button delete
   * of note in trash
   *
   * @param {Object} note is trash note element is selected
   * @param {function} handlePopup is function transmitted
   */
  bindShowPopup(note: HTMLElement, handlePopup: (index: string) => void) {
    const btnDeletes = note.querySelector(
      '.trash-wrapper .btn-delete'
    ) as HTMLElement;
    const headerAfterSelect = selectDOMClass('.header-after-select');

    const handler = (e: Event) => {
      const index = (e.target as HTMLElement).getAttribute('data-id');
      if (index) {
        handlePopup(index);
        this.elementHelpers.removeSelected();
        this.elementHelpers.translateYElement(headerAfterSelect, '-200');
      }
    };

    this.eventHelpers.addEvent(btnDeletes, 'click', handler);
  }

  /**
   * @description function close confirm popup
   */
  bindClosePopup() {
    const overlayConfirmMessage = selectDOMClass('.overlay-wrapper');
    const btnClose = selectDOMClass('.btn-close-popup');

    const handler = (e: Event) => {
      e.stopPropagation();
      this.elementHelpers.removeSelected();
      if (this.overlayWrapper) {
        this.overlayWrapper.innerHTML = '';
      }
    };

    this.eventHelpers.addEvent(overlayConfirmMessage, 'click', handler);
    this.eventHelpers.addEvent(btnClose, 'click', handler);
  }

  /**
   * @description events show header bulk actions and count notes selected
   *
   * @param {Object} noteElement is note element
   */
  bindSelectedNote(noteElement: HTMLElement) {
    const note = selectDOMById(`${noteElement.id}`);

    if (note) {
      const listIconCheck = note.querySelector('.icon-check') as HTMLElement;
      const countNotesSelected = selectDOMClass('.count-selected');
      const headerAfterSelect = selectDOMClass('.header-after-select');
      const handler = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
        const selectedElement = (
          e.target as HTMLElement
        ).parentElement?.classList.contains('selected');

        /**
         * condition if note doesn't have class selected it will add class
         * and count note, it also turn on the header bulk actions
         */
        if (!selectedElement) {
          this.elementHelpers.addClass(
            (e.target as HTMLElement).parentElement,
            'selected'
          );
          this.elementHelpers.countAndShowSelected(countNotesSelected);
          this.elementHelpers.translateYElement(headerAfterSelect, '-100');
        } else {
          this.elementHelpers.removeClass(
            (e.target as HTMLElement).parentElement,
            'selected'
          );
          this.elementHelpers.countAndShowSelected(countNotesSelected);
        }

        /**
         * condition if list don't have any note have class selected. It will
         * close header bulk actions
         */
        const listSelected = selectDOMClassAll('.selected');
        if (listSelected && listSelected.length < 1) {
          this.elementHelpers.translateYElement(headerAfterSelect, '-200');
        }
      };

      this.eventHelpers.addEvent(listIconCheck, 'click', handler);
    }
  }

  /**
   * @description function delete note forever
   *
   * @param {function} deleteNoteTrash is function transmitted from model
   */
  bindDeleteNoteInTrash(deleteNoteTrash: (id?: string) => void) {
    const deleteTrash = selectDOMClass('.btn-submit-action');
    const handler = (e: Event) => {
      e.stopPropagation();
      const id = (e.target as HTMLElement).getAttribute('data-id');

      if (this.overlayWrapper) {
        if (id) {
          deleteNoteTrash(id);
          this.overlayWrapper.innerHTML = '';
        } else {
          deleteNoteTrash();
          this.overlayWrapper.innerHTML = '';
        }
      }
    };

    this.eventHelpers.addEvent(deleteTrash, 'click', handler);
  }

  /**
   * @description events of textarea to increase the length of input note
   */
  bindInputBreakDown() {
    const inputAddElement = selectDOMClass(
      '.form-add-note .form-group-input .input-note'
    );
    const inputTitleElement = selectDOMClass('.note-title');

    if (inputAddElement && inputTitleElement) {
      this.elementHelpers.commonInputBreakDown(inputAddElement);
      this.elementHelpers.commonInputBreakDown(inputTitleElement);
    }
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
   * @param {Object} noteElement is note element is selected
   * @param {function} findNote is function transmitted from model
   */
  bindShowNoteForm(noteElement: HTMLElement, findNote: (id: string) => void) {
    const noteItem = selectDOMById(`${noteElement.id}`);
    const countNotesSelected = selectDOMClass('.count-selected');

    const handler = async (e: Event) => {
      const selected = selectDOMClassAll('.selected');

      if (noteItem) {
        if (selected && selected.length) {
          const note = selectDOMById(
            (e.target as HTMLElement).parentElement?.getAttribute(
              'data-id'
            ) as string
          );

          this.elementHelpers.addClass(note, 'selected');
          this.elementHelpers.countAndShowSelected(countNotesSelected);
        } else {
          e.stopPropagation();
          const id = noteItem.getAttribute('id');
          if (id) {
            await findNote(id);
          }

          const title = selectDOMClass('.note-form-overlay .note-title');
          const description = selectDOMClass(
            '.note-form-overlay .note-description'
          );

          this.elementHelpers.showInputBreakDown(title);
          this.elementHelpers.showInputBreakDown(description);
          this.eventHelpers.stopEvents(title);
          this.eventHelpers.stopEvents(description);
        }
      }
    };

    this.eventHelpers.addEvent(noteItem, 'click', handler);
  }

  /**
   * @description function close and save form note when click button close or
   * click out of the form
   *
   * @param {function} editNote is function transmitted from model
   */
  bindSaveNoteForm(editNote: (note: Note) => void) {
    const closeBtn = selectDOMClass('.note-form-overlay .btn-close');
    const overlay = selectDOMClass('.overlay');
    const formElement = selectDOMClass('.note-form-overlay') as HTMLFormElement;
    const noteItem = {
      id: formElement.id,
    };

    const handler = (e: Event) => {
      e.stopPropagation();
      e.preventDefault();

      const formData = new FormData(formElement);
      const note = {
        ...noteItem,
        title: formData.get('title'),
        description: formData.get('description'),
      } as Note;

      editNote(note);
      if (this.overlayWrapper) {
        this.overlayWrapper.innerHTML = '';
      }
    };

    this.eventHelpers.stopEvents(closeBtn);
    this.eventHelpers.stopEvents(formElement);
    this.eventHelpers.addEvent(formElement, 'submit', handler);
    this.eventHelpers.addEvent(overlay, 'click', handler);
  }

  /**
   * @description function delete note of button in note form
   *
   * @param {function} deleteNote is function transmitted from model
   */
  bindDeleteNoteForm(deleteNote: (id: string) => void) {
    const buttonDelete = selectDOMClass('.note-form-overlay .btn-delete-form');
    const handler = (e: Event) => {
      e.stopPropagation();
      const id = (e.target as HTMLElement).getAttribute('data-id');
      if (id && this.overlayWrapper) {
        deleteNote(id);
        this.overlayWrapper.innerHTML = '';
      }
    };

    if (buttonDelete) {
      this.eventHelpers.addEvent(buttonDelete, 'click', handler);
    }
  }

  /**
   * @description function events to show input form
   */
  bindShowInput() {
    const formTitleElement = selectDOMClass('.form-title');
    const formUtilitiesElement = selectDOMClass('.form-utilities');
    const inputAddElement = selectDOMClass(
      '.form-add-note .form-group-input .input-note'
    );
    const handler = () => {
      if (formUtilitiesElement && formTitleElement) {
        this.elementHelpers.removeClass(formUtilitiesElement, 'hide');
        this.elementHelpers.removeClass(formTitleElement, 'hide');
      }
    };

    if (inputAddElement) {
      this.eventHelpers.addEvent(inputAddElement, 'focus', handler);
    }
  }

  /**
   * @description function add new note and hide input form
   *
   * @param {function} addNote is function transmitted from model
   */
  bindAddNote(addNote: (note: Note) => void) {
    const formElement = selectDOMClass('.form-add-note') as HTMLFormElement;
    const homePage = selectDOMClass('.home-page');

    const handler = () => {
      const formData = new FormData(formElement);
      const note = {
        title: formData.get('title'),
        description: formData.get('description'),
      } as Note;

      return note;
    };

    const handleForm = (e: Event) => {
      e.preventDefault();
      const note = handler();
      this.addNote(note, addNote, formElement);
    };

    const handleClickOut = (e: Event) => {
      const note = handler();

      if (!(e.target as HTMLElement)?.closest('.form-add-note')) {
        this.addNote(note, addNote, formElement);
      }
    };

    if (homePage) {
      this.eventHelpers.addEvent(formElement, 'submit', handleForm);
      this.eventHelpers.addEvent(homePage, 'click', handleClickOut);
    }
  }

  /**
   * @description function add note if title and description
   * have value. And after add, form will clear
   *
   * @param {Object} note is note information
   * @param {function} addNote function transmitted from controller
   * @param {Object} formElement form add note to clear input
   */
  addNote(
    note: Note,
    addNote: (note: Note) => void,
    formElement: HTMLFormElement
  ) {
    const formTitleElement = selectDOMClass('.form-title');
    const formUtilitiesElement = selectDOMClass('.form-utilities');
    const listNotesEmpty = selectDOMClass('.list-notes-empty-content');
    const inputAddElement = selectDOMClass(
      '.form-add-note .form-group-input .input-note'
    );
    const inputTitleElement = selectDOMClass('.note-title');

    if (formUtilitiesElement && formTitleElement) {
      this.elementHelpers.addClass(formUtilitiesElement, 'hide');
      this.elementHelpers.addClass(formTitleElement, 'hide');
    }

    if (
      (note.title || note.description) &&
      inputAddElement &&
      inputTitleElement
    ) {
      addNote(note);
      formElement.reset();
      inputAddElement.style.height = '1px';
      inputTitleElement.style.height = '1px';

      if (formTitleElement && listNotesEmpty) {
        this.elementHelpers.commonInputBreakDown(formTitleElement);
        this.elementHelpers.addClass(listNotesEmpty, 'hide');
      }
    }
  }

  /**
   * @description function delete note of each note
   *
   * @param {Object} noteElement is note element
   * @param {function} deleteNote is function delete transmitted from from the model
   */
  bindDeleteNote(noteElement: HTMLElement, deleteNote: (id: string) => void) {
    const note = selectDOMById(`${noteElement.id}`);
    const headerAfterSelect = selectDOMClass('.header-after-select');

    const handler = (e: Event) => {
      e.stopPropagation();
      const noteId = (e.target as HTMLElement).getAttribute('data-id');

      if (noteId && headerAfterSelect) {
        deleteNote(noteId);
        this.elementHelpers.removeSelected();
        this.elementHelpers.translateYElement(headerAfterSelect, '-200');
      }
    };
    if (note) {
      const iconDeleteElement: NodeListOf<HTMLElement> = note.querySelectorAll(
        '.note-btn .icon-delete'
      );
      iconDeleteElement.forEach((btn) => {
        this.eventHelpers.addEvent(btn, 'click', handler);
      });
    }
  }
}
