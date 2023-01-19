import FetchAPI from 'utils/fetchAPI';
import UrlAPI from 'constants/apiUrl';
import Note from 'interfaces/note';
import Menu from 'constants/menu';
import LocalStorage from 'utils/localStorage';
import StorageKeys from 'constants/storageKeys';

/**
 * @class listNoteModel
 * @description manage data of note list
 */
export default class NoteModel {
  fetchAPI: FetchAPI<Note>;

  localStorage: LocalStorage<string>;

  listNotes: Note[];

  constructor() {
    this.fetchAPI = new FetchAPI();
    this.localStorage = new LocalStorage();
    this.listNotes = [];
  }

  /**
   * @description function add note
   *
   * @param {Object} note is information of note
   *
   * @returns {Object} noteItem
   */
  async addNote(note: Note): Promise<Note | undefined> {
    const patternNote = {
      id: crypto.randomUUID(),
      title: note.title,
      description: note.description,
      createdAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
      deletedAt: '',
      userId: this.localStorage.getItems(StorageKeys.USER_ID),
    };
    const noteItem = await this.fetchAPI.postItem(
      patternNote,
      UrlAPI.NOTES_URL
    );

    this.listNotes.push(noteItem!);

    return noteItem;
  }

  /**
   * @description function filter list notes or trash notes with
   * tab is listNotes or trashNote. that we can use this function
   * to two tabs is notes and trash
   *
   * @param {String} tab is listNotes or trashNote to distinguishing
   * function use for
   *
   * @returns {Array} listNotes after filter
   */
  async filterNotes(tab: number): Promise<Note[]> {
    const allNotes = await this.fetchAPI.getItemByKey(
      UrlAPI.NOTES_URL,
      `?userId=${this.localStorage.getItems(StorageKeys.USER_ID)}`
    );

    if (Array.isArray(allNotes)) {
      // This condition filter that we can use this function for trashNotes and listNotes
      switch (tab) {
        case Menu.LIST_NOTES: {
          this.listNotes = allNotes.filter((note) => !note.deletedAt);
          break;
        }
        case Menu.TRASH_NOTES: {
          this.listNotes = allNotes.filter((note) => note.deletedAt);
          break;
        }
        default:
          console.log('Must enter a listNotes or trashNotes');
          break;
      }
    }

    return this.listNotes;
  }

  /**
   * @description function change value of field deletedAt that mean
   * it will move to trash if field deletedAt have value because default
   * value of deletedAt is null
   *
   * @param {String} id is id of note is selected
   *
   * @return {Object} noteItem
   */
  async deleteNote(id: string): Promise<Note> {
    const date = new Date().toLocaleString();
    const noteItem = this.findNote(id);

    noteItem.deletedAt = date;
    await this.fetchAPI.putItem(id, noteItem, UrlAPI.NOTES_URL);
    this.listNotes = this.listNotes.filter((note) => note.id !== id);

    return noteItem;
  }

  /**
   * @description function remove note with id of note is selected
   *
   * @param {String} id is id of note is selected
   */
  async deleteNoteInTrash(id: string): Promise<void> {
    await this.fetchAPI.deleteItem(id, UrlAPI.NOTES_URL);
    this.listNotes = this.listNotes.filter((note) => note.id !== id);
  }

  /**
   * @description is a function find note with id of note is selected
   *
   * @param {String} id is id of note is selected
   *
   *  @returns {Object} noteItem
   */
  findNote(id: string): Note {
    const noteItem = this.listNotes.find((note) => note.id === id) as Note;

    return noteItem;
  }

  /**
   * @description function edit note with information of note is selected
   *
   * @param {Object} note is information of note is selected
   *
   * @returns {Object} noteItem
   */
  async editNote(note: Note): Promise<Note | undefined> {
    let noteItem = this.findNote(note.id);
    noteItem.title = note.title;
    noteItem.description = note.description;
    noteItem.updatedAt = new Date().toLocaleString();

    noteItem = (await this.fetchAPI.putItem(
      note.id,
      noteItem,
      UrlAPI.NOTES_URL
    )) as Note;

    return noteItem;
  }
}
