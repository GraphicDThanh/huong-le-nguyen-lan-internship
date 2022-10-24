import NoteModel from './noteModel';
import data from '../data';

/**
 * @class listNoteModel
 * @description manage data of note list
 */
export default class ListNoteModel {
  constructor(noteModel) {
    this.notes = data;
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
    localStorage.setItem('listNotes', JSON.stringify(this.notes));
  }

  /**
   * @description function filter list notes with isTrash = false
   *
   * @returns {Array} listNotes
   */
  filterListNotes() {
    const listNotes = this.notes.filter((note) => !note.isTrash);

    return listNotes;
  }

  /**
   * @description function delete note in data
   * @param {String} index is index of note
   */
  deleteNote(index) {
    const noteIndex = this.notes.findIndex((note) => note.id === Number(index));
    this.notes[noteIndex].isTrash = true;

    localStorage.setItem('listNotes', JSON.stringify(this.notes));
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

    localStorage.setItem('listNotes', JSON.stringify(this.notes));
    return this.notes;
  }
}
