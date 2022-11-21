import fetchAPI from '../utils/fetchAPI';
import URL_API from '../constants/apiUrl';

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
  async addNote(note) {
    try {
      const patternNote = {
        id: new Date().getTime().toString(),
        title: note.title,
        description: note.description,
        deleteAt: '',
      };

      const noteItem = await fetchAPI.postNote(patternNote, URL_API.NOTES_URL);
      this.listNotes.push(noteItem);

      return noteItem;
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
    const notes = await fetchAPI.getAllNotes(URL_API.NOTES_URL);

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
      const noteItem = this.findNote(id);

      noteItem.deleteAt = date;
      await fetchAPI.putNote(id, noteItem, URL_API.NOTES_URL);
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
      await fetchAPI.deleteNote(id, URL_API.NOTES_URL);
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
  async editNote(note) {
    try {
      let noteItem = this.findNote(note.id);
      noteItem.title = note.title;
      noteItem.description = note.description;

      noteItem = await fetchAPI.putNote(note.id, noteItem, URL_API.NOTES_URL);

      return noteItem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
