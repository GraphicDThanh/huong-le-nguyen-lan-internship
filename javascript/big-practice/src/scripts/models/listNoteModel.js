import NoteModel from './noteModel';
import LocalStorage from '../utils/localStorage';
import STORAGE_KEYS from '../constants/storageKeys';
import {
  getData, postData, deleteData, putData, getDataTrash, getDataById,
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

    if (LocalStorage.getItems(STORAGE_KEYS.USERNAME)) {
      const noteItem = {
        id: new Date().getTime().toString(),
        title,
        description,
        isTrash: false,
        owner: LocalStorage.getItems(STORAGE_KEYS.USERNAME),
      };
      note = noteItem;

      await postData(noteItem);
    }

    if (!LocalStorage.getItems(STORAGE_KEYS.USERNAME)) {
      const noteItem = {
        id: new Date().getTime().toString(),
        title,
        description,
        isTrash: false,
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

    if (type === 'listNotes') {
      if (LocalStorage.getItems(STORAGE_KEYS.USERNAME)) {
        listNotes = await getData('user01');
      } else {
        listNotes = this.notes.filter((note) => !note.isTrash);
      }
    }

    if (type === 'trashNotes') {
      if (LocalStorage.getItems(STORAGE_KEYS.USERNAME)) {
        listNotes = await getDataTrash('user01');
      } else {
        listNotes = this.notes.filter((note) => note.isTrash);
      }
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

    if (!LocalStorage.getItems(STORAGE_KEYS.USERNAME)) {
      const noteIndex = this.notes.findIndex((note) => note.id === id);
      this.notes[noteIndex].isTrash = true;

      LocalStorage.setItems(STORAGE_KEYS.LIST_NOTE, this.notes);

      noteItem = this.notes[noteIndex];
    } else {
      const note = await getDataById(id);
      note.isTrash = true;

      putData(id, note);
      noteItem = note;
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

    if (!LocalStorage.getItems(STORAGE_KEYS.USERNAME)) {
      const noteIndex = this.notes.findIndex((note) => note.id === id);

      noteItem = this.notes[noteIndex];
      this.notes.splice(noteIndex, 1);
      LocalStorage.setItems(STORAGE_KEYS.LIST_NOTE, this.notes);
    } else {
      const note = await getDataById(id);

      deleteData(id);
      noteItem = note;
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

    if (!LocalStorage.getItems(STORAGE_KEYS.USERNAME)) {
      const noteIndex = this.notes.findIndex((note) => note.id === id);
      noteItem = this.notes[noteIndex];
    } else {
      const note = await getDataById(id);
      noteItem = note;
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

    if (!LocalStorage.getItems(STORAGE_KEYS.USERNAME)) {
      const noteIndex = this.notes.findIndex((note) => note.id === id);
      this.notes[noteIndex].title = title;
      this.notes[noteIndex].description = description;

      LocalStorage.setItems(STORAGE_KEYS.LIST_NOTE, this.notes);
      noteItem = this.notes[noteIndex];
    } else {
      const note = await getDataById(id);
      note.title = title;
      note.description = description;

      putData(id, note);
      noteItem = note;
    }

    return noteItem;
  }
}
