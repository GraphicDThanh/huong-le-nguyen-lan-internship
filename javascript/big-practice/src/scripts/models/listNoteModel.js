import NoteModel from './noteModel';
import LocalStorage from '../utils/localStorage';
import STORAGE_KEYS from '../constants/storageKeys';
import { getData, postData, deleteData, putData, getDataTrash } from '../utils/fetchAPI';

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
  addNote(title, description) {
    const notesLength = this.notes.length;

    const noteItem = {
      id: notesLength > 0 ? notesLength : 0,
      title,
      description,
      isTrash: false,
    };

    const note = new NoteModel(noteItem);
    this.notes.push(note);
    LocalStorage.setItems(STORAGE_KEYS.LIST_NOTE, this.notes);
  }

  /**
   * @description function filter list notes with isTrash = false
   *
   * @returns {Array} listNotes
   */
  async filterListNotes() {
    let listNotes;

    if (LocalStorage.getItems(STORAGE_KEYS.USERNAME)) {
      listNotes = await getData('user01');
    } else {
      listNotes = this.notes.filter((note) => !note.isTrash);
    }

    return listNotes;
  }

  /**
   * @description function filter list trash
   *
   * @returns {Array} listNotes
   */
  async filterTrashNotes() {
    let listNotes;

    if (LocalStorage.getItems(STORAGE_KEYS.USERNAME)) {
      listNotes = await getDataTrash('user01');
    } else {
      listNotes = this.notes.filter((note) => note.isTrash);
    }

    return listNotes;
  }

  /**
   * @description function move note to trash
   * @param {String} index is index of note
   */
  deleteNote(index) {
    const noteIndex = this.notes.findIndex((note) => note.id === Number(index));
    this.notes[noteIndex].isTrash = true;

    LocalStorage.setItems(STORAGE_KEYS.LIST_NOTE, this.notes);
  }

  /**
   * @description function remove note in array
   *
   * @param {String} index is index of note
   */
  deleteNoteInTrash(index) {
    const noteIndex = this.notes.findIndex((note) => note.id === Number(index));
    this.notes.splice(noteIndex, 1);
    LocalStorage.setItems(STORAGE_KEYS.LIST_NOTE, this.notes);
  }

  /**
   * @description is a function find note
   *
   * @param {String} index is index of note
   *
   *  @returns {Object} this.notes[noteIndex]
   */
  findNote(index) {
    const noteIndex = this.notes.findIndex((note) => note.id === Number(index));
    console.log(index);
    console.log(noteIndex);
    console.log(this.notes[noteIndex]);

    return this.notes[noteIndex];
  }

  /**
   * @description function edit note
   *
   * @param {String} index is index of note
   * @param {String} title is title of note
   * @param {String} description is description of note
   *
   * @returns {Array} this.notes
   */
  editNote(index, title, description) {
    const noteIndex = this.notes.findIndex((note) => note.id === Number(index));
    this.notes[noteIndex].title = title;
    this.notes[noteIndex].description = description;

    LocalStorage.setItems(STORAGE_KEYS.LIST_NOTE, this.notes);
  }
}
