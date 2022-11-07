import NoteModel from './noteModel';
import LocalStorage from '../utils/localStorage';
import STORAGE_KEYS from '../constants/storageKeys';
import {
  getData,
  postData,
  deleteData,
  putData,
  getDataTrash,
  getDataById,
} from '../utils/fetchAPI';

/**
 * @class listNoteModel
 * @description manage data of note list
 */
export default class ListNoteModel {
  constructor(noteModel) {
    if (!LocalStorage.getItems(STORAGE_KEYS.USERNAME)) {
      this.notes = LocalStorage.getItems(STORAGE_KEYS.LIST_NOTE)
      || LocalStorage.setItems(STORAGE_KEYS.LIST_NOTE, []);
    }
    this.noteModel = noteModel;
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
    let note;
    const username = LocalStorage.getItems(STORAGE_KEYS.USER_ID);
    const patternNote = {
      id: new Date().getTime().toString(),
      title,
      description,
      isTrash: false,
    };

    if (username) {
      const noteItem = {
        ...patternNote,
        ownerId: username,
      };
      note = noteItem;

      await postData(noteItem);
    } else {
      const noteItem = {
        ...patternNote,
      };
      note = new NoteModel(noteItem);
      this.notes.push(note);
      LocalStorage.setItems(STORAGE_KEYS.LIST_NOTE, this.notes);
    }

    return note;
  }

  /**
   * @description function filter list notes or trash notes
   *
   * @returns {Array} listNotes
   */
  async filterNotes(type) {
    let listNotes;
    const username = LocalStorage.getItems(STORAGE_KEYS.USER_ID);

    // This condition filter that we can use this function for trashNotes and listNotes
    switch (type) {
      case 'listNotes':
        if (username) {
          listNotes = await getData(username);
        } else {
          listNotes = this.notes.filter((note) => !note.isTrash);
        }

        break;
      case 'trashNotes':
        if (username) {
          listNotes = await getDataTrash(username);
        } else {
          listNotes = this.notes.filter((note) => note.isTrash);
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
    let noteItem;

    /**
     * This condition check if username is available in localStorage.
     * It will change field of note in JSON
     * if username is not available, it will change field in localStorage
     */
    if (!LocalStorage.getItems(STORAGE_KEYS.USER_ID)) {
      const noteIndex = this.notes.findIndex((note) => note.id === id);
      this.notes[noteIndex].isTrash = true;

      LocalStorage.setItems(STORAGE_KEYS.LIST_NOTE, this.notes);

      noteItem = this.notes[noteIndex];
    } else {
      noteItem = await getDataById(id);
      noteItem.isTrash = true;

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
    let noteItem;

    /**
     * This condition check if username is available in localStorage.
     * It will delete note in JSON
     * if username is not available, it will delete in localStorage
     */
    if (!LocalStorage.getItems(STORAGE_KEYS.USER_ID)) {
      const noteIndex = this.notes.findIndex((note) => note.id === id);

      noteItem = this.notes[noteIndex];
      this.notes.splice(noteIndex, 1);
      LocalStorage.setItems(STORAGE_KEYS.LIST_NOTE, this.notes);
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
    let noteItem;

    /**
     * This condition check if username is available in localStorage.
     * It will find note in JSON
     * if username is not available, it will find array
     */
    if (!LocalStorage.getItems(STORAGE_KEYS.USER_ID)) {
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
    let noteItem;

    /**
     * This condition check if username is available in localStorage.
     * It will update note in JSON
     * if username is not available, it will update in localStorage
     */
    if (!LocalStorage.getItems(STORAGE_KEYS.USER_ID)) {
      const noteIndex = this.notes.findIndex((note) => note.id === id);
      this.notes[noteIndex].title = title;
      this.notes[noteIndex].description = description;

      LocalStorage.setItems(STORAGE_KEYS.LIST_NOTE, this.notes);
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
