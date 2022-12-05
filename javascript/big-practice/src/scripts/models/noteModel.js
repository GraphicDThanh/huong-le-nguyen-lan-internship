import LocalStorage from '../utils/localStorage';
import STORAGE_KEYS from '../constants/storageKeys';
import {
  postData,
  deleteData,
  putData,
  getDataById,
  getDataByUserId,
} from '../utils/fetchAPI';

/**
 * @class listNoteModel
 * @description manage data of note list
 */
export default class NoteModel {
  constructor() {
    this.localStorage = new LocalStorage();

    if (!this.localStorage.getItems(STORAGE_KEYS.USERNAME)) {
      this.notes = this.localStorage.getItems(STORAGE_KEYS.LIST_NOTE)
      || this.localStorage.setItems(STORAGE_KEYS.LIST_NOTE, []);
    }
  }

  /**
   * @description function add note
   *
   * @param {String} title transmitted from the outside in
   * @param {String} description transmitted from the outside in
   *
   * @returns {Object} note
   */
  async addNote(title, description) {
    let note = {};
    const userId = this.localStorage.getItems(STORAGE_KEYS.USER_ID);
    const patternNote = {
      id: new Date().getTime().toString(),
      title,
      description,
      deleteAt: '',
    };

    if (userId) {
      const noteItem = {
        ...patternNote,
        ownerId: userId,
      };
      note = noteItem;

      await postData(noteItem);
    } else {
      const noteItem = {
        ...patternNote,
      };
      note = noteItem;

      this.notes.push(note);
      this.localStorage.setItems(STORAGE_KEYS.LIST_NOTE, this.notes);
    }

    return note;
  }

  /**
   * @description function filter list notes or trash notes
   *
   * @returns {Array} listNotes
   */
  async filterNotes(type) {
    let listNotes = [];
    const userId = this.localStorage.getItems(STORAGE_KEYS.USER_ID);

    // This condition filter that we can use this function for trashNotes and listNotes
    switch (type) {
      case 'listNotes':
        if (userId) {
          const notes = await getDataByUserId(userId);
          listNotes = notes.filter((note) => !note.deleteAt);
        } else {
          listNotes = this.notes.filter((note) => !note.deleteAt);
        }

        break;
      case 'trashNotes':
        if (userId) {
          const notes = await getDataByUserId(userId);
          listNotes = notes.filter((note) => note.deleteAt);
        } else {
          listNotes = this.notes.filter((note) => note.deleteAt);
        }

        break;
      default:
        console.log('Must enter a listNotes or trashNotes');
        break;
    }

    return listNotes;
  }

  /**
   * @description function move note to trash
   *
   * @param {String} id is index of note
   *
   * @return {Object} this.notes[noteIndex]
   */
  async deleteNote(id) {
    let noteItem = {};
    const date = new Date().toISOString().slice(0, 10);

    /**
     * This condition check if userId is available in localStorage.
     * It will change field of note in JSON
     * if userId is not available, it will change field in localStorage
     */
    if (!this.localStorage.getItems(STORAGE_KEYS.USER_ID)) {
      const noteIndex = this.notes.findIndex((note) => note.id === id);
      this.notes[noteIndex].deleteAt = date;

      this.localStorage.setItems(STORAGE_KEYS.LIST_NOTE, this.notes);
      noteItem = this.notes[noteIndex];
    } else {
      noteItem = await getDataById(id);
      noteItem.deleteAt = date;

      putData(id, noteItem);
    }

    return noteItem;
  }

  /**
   * @description function remove note in array
   *
   * @param {String} index is index of note
   *
   * @return {Object} note
   */
  async deleteNoteInTrash(id) {
    let noteItem = {};

    /**
     * This condition check if userId is available in localStorage.
     * It will delete note in JSON
     * if userId is not available, it will delete in localStorage
     */
    if (!this.localStorage.getItems(STORAGE_KEYS.USER_ID)) {
      const noteIndex = this.notes.findIndex((note) => note.id === id);

      noteItem = this.notes[noteIndex];
      this.notes.splice(noteIndex, 1);
      this.localStorage.setItems(STORAGE_KEYS.LIST_NOTE, this.notes);
    } else {
      noteItem = await getDataById(id);

      deleteData(id);
    }
    return noteItem;
  }

  /**
   * @description is a function find note
   *
   * @param {String} id is id of note
   *
   *  @returns {Object} this.notes[noteIndex]
   */
  async findNote(id) {
    let noteItem = {};

    /**
     * This condition check if userId is available in localStorage.
     * It will find note in JSON
     * if userId is not available, it will find array
     */
    if (!this.localStorage.getItems(STORAGE_KEYS.USER_ID)) {
      const noteIndex = this.notes.findIndex((note) => note.id === id);
      noteItem = this.notes[noteIndex];
    } else {
      noteItem = await getDataById(id);
    }

    return noteItem;
  }

  /**
   * @description function edit note
   *
   * @param {String} index is index of note
   * @param {String} title is title of note
   * @param {String} description is description of note
   *
   * @returns {Object} this.notes[noteIndex]
   */
  async editNote(id, title, description) {
    let noteItem = {};

    /**
     * This condition check if userId is available in localStorage.
     * It will update note in JSON
     * if userId is not available, it will update in localStorage
     */
    if (!this.localStorage.getItems(STORAGE_KEYS.USER_ID)) {
      const noteIndex = this.notes.findIndex((note) => note.id === id);
      this.notes[noteIndex].title = title;
      this.notes[noteIndex].description = description;

      this.localStorage.setItems(STORAGE_KEYS.LIST_NOTE, this.notes);
      noteItem = this.notes[noteIndex];
    } else {
      noteItem = await getDataById(id);
      noteItem.title = title;
      noteItem.description = description;

      putData(id, noteItem);
    }

    return noteItem;
  }
}
