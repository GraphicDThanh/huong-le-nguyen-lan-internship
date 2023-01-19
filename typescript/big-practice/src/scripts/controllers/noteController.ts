import Menu from 'constants/menu';
import NoteModel from 'models/noteModel';
import Note from 'interfaces/note';
import { renderPopupError } from 'utils/errorsDOM';
import LoadingPage from 'utils/loadingPage';
import ListNoteView from 'views/listNoteView';

/**
 * @class noteController
 * @description Controller is an intermediary for views and models
 *
 * @param model
 * @param view
 */
export default class NoteController {
  model: NoteModel;

  view: ListNoteView;

  loadingPage: LoadingPage;

  constructor(model: NoteModel, view: ListNoteView) {
    this.model = model;
    this.view = view;
    this.loadingPage = new LoadingPage();
  }

  init(): void {
    this.bindEvents();
  }

  bindEvents(): void {
    // Navigate page to index page if isLogin from localStorage is false
    this.view.navigatePageWithLoginStatus();
  }

  renderTabs(): void {
    const handlers = {
      renderTabNotes: () => this.renderTab(),
      renderTabTrash: () => this.renderTab(),
      addNote: (note: Note) => this.addNote(note),
    };

    this.view.renderTabs(handlers);
  }

  /**
   * @description function render tab note or tab trash
   * when currentPage = 'trashNotes' it will render tab trash
   * if the tab is different from trashNotes i will render tab Note
   *
   * @param {String} tab is param to distinguish these two listNotes and trashNotes
   */
  async renderTab(): Promise<void> {
    try {
      this.loadingPage.addLoading();

      if (this.view.currentPage === Menu.TRASH_NOTES) {
        const listTrash: Note[] = await this.model.filterNotes(
          this.view.currentPage
        );
        // function render trash notes
        this.view.renderListTrashNotes(listTrash, (noteId: string) =>
          this.handleConfirmPopup(noteId)
        );

        // function show Empty Note if note is empty
        this.view.showHideEmpty(listTrash);
      } else {
        const handlers = {
          handleDeleteNote: (id: string) => this.deleteNote(id),
          handleShowNoteForm: (id: string) => this.handleNoteForm(id),
        };
        const listNotes: Note[] = await this.model.filterNotes(
          this.view.currentPage
        );

        // function render list notes
        this.view.renderListNotes(listNotes, handlers);

        // function show Empty Note if note is empty
        this.view.showHideEmpty(listNotes);
      }

      this.loadingPage.setTimeoutLoading(800);
    } catch (error) {
      if (error instanceof Error) {
        renderPopupError(error.message);
      }
    }
  }

  /**
   * @description handle event of confirm popup in Trash tab
   * with id of note
   *
   * @param {String} noteId is id of note is selected
   */
  async handleConfirmPopup(noteId: string): Promise<void> {
    try {
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
        this.view.showHideEmpty(this.model.listNotes);
        this.loadingPage.addLoading();
        this.loadingPage.setTimeoutLoading(300);
      });
    } catch (error) {
      if (error instanceof Error) {
        renderPopupError(error.message);
      }
    }
  }

  /**
   * @description function add note with param is a note
   *
   * @param {Object} note is a information of note
   */
  async addNote(note: Note): Promise<void> {
    try {
      this.loadingPage.addLoading();
      const noteItem = (await this.model.addNote(note)) as Note;

      const handlers = {
        handleDeleteNote: (id: string) => this.deleteNote(id),
        handleShowNoteForm: (id: string) => this.handleNoteForm(id),
      };

      this.view.renderNote(noteItem, handlers);
      this.loadingPage.setTimeoutLoading(300);
    } catch (error) {
      if (error instanceof Error) {
        renderPopupError(error.message);
      }
    }
  }

  /**
   * @description function delete note in tab note with id of note selected
   * and check if that note is empty or not. If it is empty, show text empty
   *
   * @param {String} noteId is id of note is selected
   */
  async deleteNote(noteId: string): Promise<void> {
    try {
      const noteItem = await this.model.deleteNote(noteId);

      this.view.removeNoteElement(noteItem.id);
      this.view.showHideEmpty(this.model.listNotes);
      this.loadingPage.addLoading();
      this.loadingPage.setTimeoutLoading(300);
    } catch (error) {
      if (error instanceof Error) {
        renderPopupError(error.message);
      }
    }
  }

  /**
   * @description function edit note with information of note is selected
   *
   * @param {Object} note is information of note
   */
  async editNote(note: Note): Promise<void> {
    try {
      const noteItem = (await this.model.editNote(note)) as Note;

      this.view.editNote(noteItem);
      this.loadingPage.addLoading();
      this.loadingPage.setTimeoutLoading(300);
    } catch (error) {
      if (error instanceof Error) {
        renderPopupError(error.message);
      }
    }
  }

  /**
   * @description function show information of note form by finding note with id
   * and bind events related to note
   *
   * @param {String} id is a id of note
   */
  async handleNoteForm(id: string): Promise<void> {
    try {
      this.loadingPage.addLoading();
      const noteItem = await this.model.findNote(id);

      const handlers = {
        handleEditNote: (note: Note) => this.editNote(note),
        handleDeleteNote: (noteId: string) => this.deleteNote(noteId),
      };

      // function render form note
      this.view.renderFormNote(noteItem, handlers);
    } catch (error) {
      if (error instanceof Error) {
        renderPopupError(error.message);
      }
    }
  }
}
