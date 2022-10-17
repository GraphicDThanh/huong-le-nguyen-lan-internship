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
  addNoteModel(title, description) {
    const notesLength = this.notes.length;

    const noteItem = {
      id: notesLength > 0 ? notesLength : 0,
      title,
      description,
      isTrash: false,
    };

    const note = new NoteModel(noteItem);
    this.notes.push(note);

    return this.notes;
  }

  /**
   * @description function delete note in data
   * @param {String} index is index of note
   */
  deleteNoteModel(index) {
    const noteIndex = this.notes.findIndex((element) => element.id === Number(index));
    this.notes[noteIndex].isTrash = true;
  }
}
