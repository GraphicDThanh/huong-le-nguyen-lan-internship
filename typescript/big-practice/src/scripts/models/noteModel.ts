import { v4 as uuidv4 } from 'uuid';
import FetchAPI from '../utils/fetchAPI';
import URL_API from '../constants/apiUrl';
import Note from '../types/note';
import NOTE from '../constants/note';

/**
 * @class listNoteModel
 * @description manage data of note list
 */
export default class NoteModel {
  fetchAPI: FetchAPI<Note>;

  listNotes: Note[];

  constructor() {
    this.fetchAPI = new FetchAPI();
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
      id: uuidv4(),
      title: note.title,
      description: note.description,
      deletedAt: '',
    };
    const noteItem = await this.fetchAPI.postItem(
      patternNote,
      URL_API.NOTES_URL
    );

    if (noteItem) {
      this.listNotes.push(noteItem);
    }

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
  async filterNotes(tab: string): Promise<Note[]> {
    const allNotes = await this.fetchAPI.getAllItems(URL_API.NOTES_URL);

    if (Array.isArray(allNotes)) {
      // This condition filter that we can use this function for trashNotes and listNotes
      switch (tab) {
        case NOTE.LIST_NOTES: {
          this.listNotes = allNotes.filter((note) => !note.deletedAt);
          break;
        }
        case NOTE.TRASH_NOTES: {
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
    const date = new Date().toISOString().slice(0, 10);
    const noteItem = this.findNote(id);

    noteItem.deletedAt = date;
    await this.fetchAPI.putItem(id, noteItem, URL_API.NOTES_URL);
    this.listNotes = this.listNotes.filter((note) => note.id !== id);

    return noteItem;
  }

  /**
   * @description function remove note with id of note is selected
   *
   * @param {String} id is id of note is selected
   */
  async deleteNoteInTrash(id: string): Promise<void> {
    await this.fetchAPI.deleteItem(id, URL_API.NOTES_URL);
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
    const noteItem = await this.fetchAPI.putItem(
      note.id,
      note,
      URL_API.NOTES_URL
    );

    return noteItem;
  }
}
