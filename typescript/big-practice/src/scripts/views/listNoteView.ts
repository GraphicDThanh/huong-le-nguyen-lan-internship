/* eslint-disable @typescript-eslint/no-non-null-assertion */
import NoteView from './noteView';
import ElementHelpers from 'helpers/elementHelpers';
import EventHelpers from 'helpers/eventHelpers';
import { querySelector, getElementById } from 'utils/querySelectDOM';
import StorageKeys from 'constants/storageKeys';
import renderConfirmPopup from 'components/confirmPopup';
import { PopupMessage } from 'constants/message';
import LocalStorage from 'utils/localStorage';
import formAddNote from 'components/formAddNote';
import listNotesWrapper from 'components/listNotes';
import navigatePage from 'utils/navigatePage';
import HeaderView from './headerView';
import { renderPopupError } from 'utils/errorsDOM';
import Note from 'interfaces/note';
import Menu from 'constants/menu';

/**
 * @class listNoteView
 * @description manage view of listNote
 */
export default class ListNoteView {
  elementHelpers: ElementHelpers;

  eventHelpers: EventHelpers;

  localStorage: LocalStorage<string>;

  currentPage: number;

  headerView: HeaderView;

  sectionWrapper: Element;

  overlayWrapper: Element;

  constructor(currentPage: number) {
    this.elementHelpers = new ElementHelpers();
    this.eventHelpers = new EventHelpers();
    this.localStorage = new LocalStorage();
    this.headerView = new HeaderView();
    this.currentPage = currentPage;

    this.sectionWrapper = querySelector('.section-wrapper')!;
    this.overlayWrapper = querySelector('.overlay-wrapper')!;
  }

  /**
   * @description navigate page to index page if isLogin from
   * localStorage is null
   */
  navigatePageWithLoginStatus(): void {
    if (!this.localStorage.getItems(StorageKeys.USER_ID)) {
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
  }): void {
    const { renderTabNotes, renderTabTrash, addNote } = handlers;
    const trashNotes = {
      tab: this.currentPage,
      message: 'No notes in Trash',
    };

    const listNotes = {
      tab: this.currentPage,
      message: 'Notes you add appear here',
    };

    if (this.currentPage === Menu.LIST_NOTES) {
      this.sectionWrapper.innerHTML = '';
      this.sectionWrapper.appendChild(formAddNote());

      const formElement = querySelector('.note-wrapper')!;
      formElement.appendChild(listNotesWrapper(listNotes));

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

  /**
   * @description function show empty note if the list is empty
   * with the tab of listNotes or trashNotes
   *
   * @param {Array} list is a list of note or list of trash note
   */
  showHideEmpty(list: Note[]): void {
    const listNotesEmpty = querySelector('.list-notes-empty-content');
    const listNoteElement = querySelector('.note-wrapper .list-notes');
    const listTrashElement = querySelector('.trash-wrapper .list-notes');
    const listTrashEmpty = querySelector(
      '.trash-wrapper .list-notes-empty-content'
    );

    switch (this.currentPage) {
      case Menu.LIST_NOTES:
        if (listNotesEmpty && listNoteElement) {
          this.commonEmptyList(list, listNotesEmpty, listNoteElement);
        }
        break;
      case Menu.TRASH_NOTES:
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
   * @param {Element} listEmpty is element has message empty list
   * @param {Element} listElement is element has list of note or trash
   */
  commonEmptyList(
    list: Note[],
    listEmpty: Element,
    listElement: Element
  ): void {
    if (!list.length) {
      this.elementHelpers.removeClass(listEmpty, 'hide');
      this.elementHelpers.addClass(listElement, 'hide');
    } else {
      this.elementHelpers.removeClass(listElement, 'hide');
      this.elementHelpers.addClass(listEmpty, 'hide');
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
  ): void {
    const listNoteElement = querySelector('.list-notes')!;
    listNoteElement.innerHTML = '';

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
  ): void {
    const listNoteElement = querySelector('.list-notes');
    const noteItem = {
      id: note.id,
      title: note.title,
      description: note.description,
      deletedAt: note.deletedAt,
    };
    const noteView = new NoteView(noteItem);
    const noteElement = noteView.renderNote(this.currentPage);
    const { handleDeleteNote, handleShowNoteForm } = handlers;

    if (listNoteElement) {
      listNoteElement.appendChild(noteElement);
    }
    this.bindDeleteNote(noteElement, handleDeleteNote);
    this.bindShowNoteForm(noteElement, handleShowNoteForm);
  }

  /**
   * @description function remove note element in view
   *
   * @param {String} id is id of note
   */
  removeNoteElement(id: string): void {
    const note = getElementById(id)!;

    note.remove();
  }

  /**
   * @description function edit note with information of note is selected
   *
   * @param {Object} noteItem is information of note take from model returned
   */
  editNote(noteItem: Note): void {
    const note = getElementById(noteItem.id)!;
    const titleElement = note.querySelector('.note-title')!;
    const descriptionElement = note.querySelector('.note-description')!;
    const emptyNoteElement = note.querySelector(
      '.note-content .note-empty'
    ) as Element;

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

  /**
   * @description function render trash page and bind events for
   * each note in trash
   *
   * @param {Array} listNotes is a list of trash notes from data
   * @param {function} handler is a function transmitted from model
   */
  renderListTrashNotes(
    listNotes: Note[],
    handler: (noteId: string) => void
  ): void {
    const listTrashElement = querySelector('.list-notes')!;
    listTrashElement.innerHTML = '';

    listNotes.forEach((note) => {
      const noteItem = {
        id: note.id,
        title: note.title,
        description: note.description,
        deletedAt: note.deletedAt,
      };

      const noteView = new NoteView(noteItem);
      const trashNote = noteView.renderNote(this.currentPage);
      listTrashElement.appendChild(trashNote);
      this.bindShowPopup(trashNote, handler);
    });
  }

  /**
   * @description function render confirm message
   *
   * @param {Object} note is a note take from data
   */
  renderConfirmMessage(note: Note): void {
    this.overlayWrapper.innerHTML = '';

    if (note) {
      this.overlayWrapper.appendChild(
        renderConfirmPopup(PopupMessage.DELETE_NOTE, 'Delete', note)
      );
    } else {
      this.overlayWrapper.appendChild(
        renderConfirmPopup(PopupMessage.DELETE_NOTE, 'Delete')
      );
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
  ): void {
    const noteItem = {
      id: note.id,
      title: note.title,
      description: note.description,
      deletedAt: note.deletedAt,
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
   * @param {Object} note is trash note element is selected
   * @param {function} handlePopup is function transmitted
   */
  bindShowPopup(note: Element, handlePopup: (index: string) => void): void {
    const btnDeletes = note.querySelector('.btn-delete') as Element;
    const headerAfterSelect = querySelector('.header-after-select')!;
    const handler = (e: Event) => {
      const index = this.elementHelpers.getAttributeElement(
        e.target!,
        'data-id'
      ) as string;
      handlePopup(index);
      this.elementHelpers.removeSelected();
      this.elementHelpers.removeClass(headerAfterSelect, 'show');
    };

    this.eventHelpers.addEvent(btnDeletes, 'click', handler);
  }

  /**
   * @description function close confirm popup
   */
  bindClosePopup(): void {
    const overlayConfirmMessage = querySelector('.overlay-wrapper')!;
    const btnClose = querySelector('.btn-close-popup')!;

    const handler = (e: Event) => {
      e.stopPropagation();
      this.elementHelpers.removeSelected();
      this.overlayWrapper.innerHTML = '';
    };

    this.eventHelpers.addEvent(overlayConfirmMessage, 'click', handler);
    this.eventHelpers.addEvent(btnClose, 'click', handler);
  }

  /**
   * @description function delete note forever
   *
   * @param {function} deleteNoteTrash is function transmitted from model
   */
  bindDeleteNoteInTrash(deleteNoteTrash: (id: string) => void): void {
    const deleteTrash = querySelector('.btn-submit-action')!;
    const handler = (e: Event) => {
      e.stopPropagation();
      const id = this.elementHelpers.getAttributeElement(e.target!, 'data-id')!;

      deleteNoteTrash(id);
      this.overlayWrapper.innerHTML = '';
    };

    this.eventHelpers.addEvent(deleteTrash, 'click', handler);
  }

  /**
   * @description events of textarea to increase the length of input note
   */
  bindInputBreakDown(): void {
    const inputAddElement = querySelector(
      '.form-add-note .form-group-input .input-note'
    )!;
    const inputTitleElement = querySelector('.note-title')!;

    this.elementHelpers.commonInputBreakDown(inputAddElement);
    this.elementHelpers.commonInputBreakDown(inputTitleElement);
  }

  /**
   * @description function input break down of form note
   */
  inputBreakDownNoteForm(): void {
    const title = querySelector('.note-form-overlay .note-title')!;
    const description = querySelector('.note-form-overlay .note-description')!;

    this.elementHelpers.commonInputBreakDown(title);
    this.elementHelpers.commonInputBreakDown(description);
  }

  /**
   * @description function show note form of note is selected
   *
   * @param {Element} noteElement is note element is selected
   * @param {function} findNote is function transmitted from model
   */
  bindShowNoteForm(noteElement: Element, findNote: (id: string) => void): void {
    const noteItem = getElementById(`${noteElement.id}`)!;
    const handler = async (e: Event) => {
      e.stopPropagation();
      const id = this.elementHelpers.getAttributeElement(
        noteItem,
        'id'
      ) as string;
      await findNote(id);

      const title = querySelector('.note-form-overlay .note-title')!;
      const description = querySelector(
        '.note-form-overlay .note-description'
      )!;

      this.elementHelpers.showInputBreakDown(title);
      this.elementHelpers.showInputBreakDown(description);
      this.eventHelpers.stopEvents(title);
      this.eventHelpers.stopEvents(description);
    };

    this.eventHelpers.addEvent(noteItem, 'click', handler);
  }

  /**
   * @description function close and save form note when click button close or
   * click out of the form
   *
   * @param {function} editNote is function transmitted from model
   */
  bindSaveNoteForm(editNote: (note: Note) => void): void {
    const closeBtn = querySelector('.note-form-overlay .btn-close')!;
    const overlay = querySelector('.overlay')!;
    const formElement = querySelector('.note-form-overlay') as HTMLFormElement;
    const title = (formElement.querySelector('.note-title') as HTMLInputElement)
      .value;
    const description = (
      formElement.querySelector('.note-description') as HTMLInputElement
    ).value;
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

      if (description !== note.description || title !== note.title) {
        editNote(note);
        this.overlayWrapper.innerHTML = '';
      } else {
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
  bindDeleteNoteForm(deleteNote: (id: string) => void): void {
    const buttonDelete = querySelector('.note-form-overlay .btn-delete-form')!;
    const handler = (e: Event) => {
      e.stopPropagation();
      const id = this.elementHelpers.getAttributeElement(e.target!, 'data-id')!;

      deleteNote(id);
      this.overlayWrapper.innerHTML = '';
    };

    this.eventHelpers.addEvent(buttonDelete, 'click', handler);
  }

  /**
   * @description function events to show input form
   */
  bindShowInput(): void {
    const formTitleElement = querySelector('.form-title')!;
    const formUtilitiesElement = querySelector('.form-utilities')!;
    const inputAddElement = querySelector(
      '.form-add-note .form-group-input .input-note'
    )!;
    const handler = () => {
      this.elementHelpers.removeClass(formUtilitiesElement, 'hide');
      this.elementHelpers.removeClass(formTitleElement, 'hide');
    };

    this.eventHelpers.addEvent(inputAddElement, 'focus', handler);
  }

  /**
   * @description function add new note and hide input form
   *
   * @param {function} addNote is function transmitted from model
   */
  bindAddNote(addNote: (note: Note) => void): void {
    const formElement = querySelector('.form-add-note') as HTMLFormElement;
    const homePage = querySelector('.home-page')!;

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

      if (!(e.target as Element)?.closest('.form-add-note')) {
        this.addNote(note, addNote, formElement);
      }
    };

    this.eventHelpers.addEvent(formElement, 'submit', handleForm);
    this.eventHelpers.addEvent(homePage, 'click', handleClickOut);
  }

  /**
   * @description function add note if title and description
   * have value. And after add, form will clear
   *
   * @param {Object} note is note information
   * @param {function} addNote function transmitted from controller
   * @param {Element} formElement form add note to clear input
   */
  addNote(
    note: Note,
    addNote: (note: Note) => void,
    formElement: HTMLFormElement
  ): void {
    const formTitleElement = querySelector('.form-title')!;
    const formUtilitiesElement = querySelector('.form-utilities');
    const listNotesEmpty = querySelector('.list-notes-empty-content')!;
    const inputAddElement = querySelector(
      '.form-add-note .form-group-input .input-note'
    )!;
    const inputTitleElement = querySelector('.note-title')!;

    if (formUtilitiesElement && formTitleElement) {
      this.elementHelpers.addClass(formUtilitiesElement, 'hide');
      this.elementHelpers.addClass(formTitleElement, 'hide');
    }

    if (note.title || note.description) {
      addNote(note);
      formElement.reset();
      (inputAddElement as HTMLElement).style.height = '1px';
      (inputTitleElement as HTMLElement).style.height = '1px';

      this.elementHelpers.commonInputBreakDown(formTitleElement);
      this.elementHelpers.addClass(listNotesEmpty, 'hide');
    }
  }

  /**
   * @description function delete note of each note
   *
   * @param {Element} noteElement is note element
   * @param {function} deleteNote is function delete transmitted from from the model
   */
  bindDeleteNote(noteElement: Element, deleteNote: (id: string) => void): void {
    const note = getElementById(`${noteElement.id}`)!;
    const headerAfterSelect = querySelector('.header-after-select')!;

    const handler = (e: Event) => {
      e.stopPropagation();
      const noteId = this.elementHelpers.getAttributeElement(
        e.target!,
        'data-id'
      )!;

      deleteNote(noteId);
      this.elementHelpers.removeSelected();
      this.elementHelpers.removeClass(headerAfterSelect, 'show');
    };

    const iconDeleteElement: NodeListOf<Element> = note.querySelectorAll(
      '.note-btn .icon-delete'
    );
    iconDeleteElement.forEach((btn) => {
      this.eventHelpers.addEvent(btn, 'click', handler);
    });
  }
}
