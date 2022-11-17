import {
  postNote,
  deleteNote,
  putNote,
  getAllNotes,
} from '../utils/fetchAPI';

/**
 * @class listNoteModel
 * @description manage data of note list
 */
export default class NoteModel {
  constructor() {
    this.listNotes = [];
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
    try {
      const noteItem = {
        id: new Date().getTime().toString(),
        title,
        description,
        deleteAt: '',
      };

      const note = await postNote(noteItem);
      this.listNotes.push(note);

      return note;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  /**
   * @description function filter list notes or trash notes
   *
   * @returns {Array} listNotes
   */
  async filterNotes(type) {
    const notes = await getAllNotes();

    // This condition filter that we can use this function for trashNotes and listNotes
    switch (type) {
      case 'listNotes': {
        this.listNotes = notes.filter((note) => !note.deleteAt);
        break;
      }
      case 'trashNotes': {
        this.listNotes = notes.filter((note) => note.deleteAt);
        break;
      }
      default:
        console.log('Must enter a listNotes or trashNotes');
        break;
    }

    return this.listNotes;
  }

  /**
   * @description function move note to trash
   *
   * @param {String} id is index of note
   *
   * @return {Object} this.notes[noteIndex]
   */
  async deleteNote(id) {
    try {
      const date = new Date().toISOString().slice(0, 10);
      const noteItem = this.listNotes.find((note) => note.id === id);

      noteItem.deleteAt = date;
      await putNote(id, noteItem);
      this.listNotes = this.listNotes.filter((note) => note.id !== id);

      return noteItem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  /**
   * @description function remove note in array
   *
   * @param {String} index is index of note
   *
   * @return {Object} note
   */
  async deleteNoteInTrash(id) {
    try {
      await deleteNote(id);
      this.listNotes = this.listNotes.filter((note) => note.id !== id);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  /**
   * @description is a function find note
   *
   * @param {String} id is id of note
   *
   *  @returns {Object} this.notes[noteIndex]
   */
  findNote(id) {
    try {
      const noteItem = this.listNotes.find((note) => note.id === id);

      return noteItem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  /**
   * @description function edit note
   *
   * @param {String} index is index of note
   * @param {String} title is title of note
   * @param {String} description is description of note
   *
   * @returns {Object} noteItem
   */
  async editNote(id, title, description) {
    try {
      const noteItem = this.listNotes.find((note) => note.id === id);

      noteItem.title = title;
      noteItem.description = description;
      const note = await putNote(id, noteItem);

      return note;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
