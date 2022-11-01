import NoteModel from './noteModel';
import LocalStorage from '../utils/localStorage';
import STORAGE_KEYS from '../constants/storageKeys';

/**
 * @class listNoteModel
 * @description manage data of note list
 */
export default class ListNoteModel {
  constructor(noteModel) {
    this.notes = LocalStorage.getItems(STORAGE_KEYS.LIST_NOTE)
      || LocalStorage.setItems(STORAGE_KEYS.LIST_NOTE, []);
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
    const noteItem = {
      id: new Date().getTime().toString(),
      title,
      description,
      isTrash: false,
    };

    const note = new NoteModel(noteItem);
    this.notes.push(note);
    LocalStorage.setItems(STORAGE_KEYS.LIST_NOTE, this.notes);

    return note;
  }

  /**
   * @description function filter list notes or trash notes
   *
   * @returns {Array} listNotes
   */
  filterNotes(type) {
    let listNotes;

    if (type === 'listNotes') {
      listNotes = this.notes.filter((note) => !note.isTrash);
    }

    if (type === 'trashNotes') {
      listNotes = this.notes.filter((note) => note.isTrash);
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
  deleteNote(id) {
    const noteIndex = this.notes.findIndex((note) => note.id === id);
    this.notes[noteIndex].isTrash = true;
    LocalStorage.setItems(STORAGE_KEYS.LIST_NOTE, this.notes);

    return this.notes[noteIndex];
  }

  /**
   * @description function remove note in array
   *
   * @param {String} index is index of note
   *
   * @return {Object} note
   */
  deleteNoteInTrash(id) {
    const noteIndex = this.notes.findIndex((note) => note.id === id);
    const note = this.notes[noteIndex];
    this.notes.splice(noteIndex, 1);
    LocalStorage.setItems(STORAGE_KEYS.LIST_NOTE, this.notes);

    return note;
  }

  /**
   * @description is a function find note
   *
   * @param {String} index is index of note
   *
   *  @returns {Object} this.notes[noteIndex]
   */
  findNote(id) {
    const noteIndex = this.notes.findIndex((note) => note.id === id);

    return this.notes[noteIndex];
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
  editNote(id, title, description) {
    const noteIndex = this.notes.findIndex((note) => note.id === id);
    this.notes[noteIndex].title = title;
    this.notes[noteIndex].description = description;

    LocalStorage.setItems(STORAGE_KEYS.LIST_NOTE, this.notes);

    return this.notes[noteIndex];
  }
}
