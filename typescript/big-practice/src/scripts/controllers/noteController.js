import { renderPopupError } from '../utils/handleError';
import LoadingPage from '../utils/loadingPage';

/**
 * @class noteController
 * @description Controller is an intermediary for views and models
 *
 * @param model
 * @param view
 */
export default class NoteController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.loadingPage = new LoadingPage();
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    // Navigate page to index page if isLogin from localStorage is false
    this.view.navigatePageWithLoginStatus();

    this.deleteListNotes();
  }

  deleteListNotes() {
    this.view.bindDeleteListNotes(
      (noteId) => this.deleteNote(noteId),
      (noteSelected) => this.deleteNotesTrash(noteSelected),
    );
  }

  renderTabs() {
    const handlers = {
      renderTabNotes: () => this.renderTabNote(),
      renderTabTrash: () => this.renderTabTrash(),
      addNote: (note) => this.addNote(note),
    };

    this.view.renderTabs(handlers);
  }

  async renderTabTrash() {
    try {
      this.loadingPage.addLoading();
      const listTrash = await this.model.filterNotes('trashNotes');
      // function render trash notes
      this.view.renderListTrashNotes(listTrash, (noteId) => this.handleConfirmPopup(noteId));

      // function show Empty Note if note is empty
      this.view.showHideEmpty(listTrash, 'trashNotes');
      this.loadingPage.setTimeoutLoading();
    } catch (error) {
      renderPopupError(error.message);
    }
  }

  async renderTabNote() {
    try {
      this.loadingPage.addLoading();
      const handlers = {
        handleDeleteNote: (noteId) => this.deleteNote(noteId),
        handleShowNoteForm: (id) => this.handleNoteForm(id),
      };
      const listNotes = await this.model.filterNotes('listNotes');

      // function render list notes
      this.view.renderListNotes(listNotes, handlers);

      // function show Empty Note if note is empty
      this.view.showHideEmpty(listNotes, 'listNotes');
      this.loadingPage.setTimeoutLoading();
    } catch (error) {
      renderPopupError(error.message);
    }
  }

  /**
   * @description handle event of confirm popup in Trash tab
   * with id of note
   *
   * @param {String} noteId is id of note is selected
   */
  async handleConfirmPopup(noteId) {
    try {
      this.loadingPage.addLoading();
      const note = await this.model.findNote(noteId);

      // function render confirm message
      this.view.renderConfirmMessage(note);

      // function close popup
      this.view.bindClosePopup();

      // function delete note in tab trash
      this.view.bindDeleteNoteInTrash(async (id) => {
        this.loadingPage.addLoading();
        await this.model.deleteNoteInTrash(id);

        this.view.removeNoteElement(id);
        this.view.showHideEmpty(this.model.listNotes, 'trashNotes');
        this.loadingPage.removeLoading();
      });
    } catch (error) {
      renderPopupError(error.message);
    }
  }

  /**
   * @description function add note with param is a note
   *
   * @param {Object} note is a information of note
   */
  async addNote(note) {
    try {
      this.loadingPage.addLoading();
      const noteItem = await this.model.addNote(note);

      const handlers = {
        handleDeleteNote: (noteId) => this.deleteNote(noteId),
        handleShowNoteForm: (id) => this.handleNoteForm(id),
      };

      this.view.renderNote(noteItem, handlers);
      this.loadingPage.removeLoading();
    } catch (error) {
      renderPopupError(error.message);
    }
  }

  /**
   * @description function delete note in tab note with id of note selected
   * and check if that note is empty or not. If it is empty, show text empty
   *
   * @param {String} noteId is id of note is selected
   */
  async deleteNote(noteId) {
    try {
      this.loadingPage.addLoading();
      const noteItem = await this.model.deleteNote(noteId);

      this.view.removeNoteElement(noteItem.id);
      this.view.showHideEmpty(this.model.listNotes, 'listNotes');
      this.loadingPage.removeLoading();
    } catch (error) {
      renderPopupError(error.message);
    }
  }

  /**
   * @description function edit note with information of note is selected
   *
   * @param {Object} note is information of note
   */
  async editNote(note) {
    try {
      this.loadingPage.addLoading();
      const noteItem = await this.model.editNote(note);

      this.view.editNote(noteItem);
      this.loadingPage.removeLoading();
    } catch (error) {
      renderPopupError(error.message);
    }
  }

  /**
   * @description function show information of note form by finding note with id
   * and bind events related to note
   *
   * @param {String} id is a id of note
   */
  async handleNoteForm(id) {
    try {
      this.loadingPage.addLoading();
      const noteItem = await this.model.findNote(id);

      const handlers = {
        handleEditNote: (note) => this.editNote(note),
        handleDeleteNote: (noteId) => this.deleteNote(noteId),
      };

      // function render form note
      this.view.renderFormNote(noteItem, handlers);
    } catch (error) {
      renderPopupError(error.message);
    }
  }

  /**
   * @description function search note by value of input
   * and if no note matches. It will show message
   *
   * @param {String} inputValue is value of input
   */
  async searchNote(inputValue) {
    try {
      const handlers = {
        handleDeleteNote: (noteId) => this.deleteNote(noteId),
        handleShowNoteForm: (id) => this.handleNoteForm(id),
      };
      const list = await this.model.searchNote(inputValue);

      this.view.renderListNotes(list, handlers);
      this.view.searchNotFound(list.length);
    } catch (error) {
      renderPopupError(error.message);
    }
  }

  /**
   * @description function delete note in trash with list notes
   * selected
   *
   * @param {Array} noteSelected is list notes selected
   */
  deleteNotesTrash(noteSelected) {
    try {
      this.view.renderConfirmMessage();

      // function close popup
      this.view.bindClosePopup();

      // function delete all the notes selected
      this.view.bindDeleteNoteInTrash(() => {
        noteSelected.forEach(async (note) => {
          await this.model.deleteNoteInTrash(note.id);

          this.view.removeNoteElement(note.id);
          this.view.showHideEmpty(this.model.listNotes, 'trashNotes');
        });
      });
    } catch (error) {
      renderPopupError(error.message);
    }
  }
}
