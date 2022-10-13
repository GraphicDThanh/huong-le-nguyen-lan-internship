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
  addNoteModel = (noteTitle, noteDescription) => {
    const notesLength = this.notes.length;

    const note = {
      id: notesLength > 0 ? notesLength : 0,
      title: noteTitle,
      description: noteDescription,
      isTrash: false,
    };

    const noteModel = new NoteModel(note);
    this.notes.push(noteModel);

    return note;
  };
}
