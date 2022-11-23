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
   * @param {Object} note is information of note
   *
   * @returns {Object} noteItem
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
   * @description function filter list notes or trash notes with
   * type is listNotes or trashNote. that we can use this function
   * to two tabs is notes and trash
   *
   * @param {String} type is listNotes or trashNote to distinguishing
   * function use for
   *
   * @returns {Array} listNotes after filter
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
   * @description function change value of field deletedAt that mean
   * it will move to trash if field deletedAt have value because default
   * value of deletedAt is null
   *
   * @param {String} id is id of note is selected
   *
   * @return {Object} noteItem
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
   * @description function remove note with id of note is selected
   *
   * @param {String} id is id of note is selected
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
   * @description is a function find note with id of note is selected
   *
   * @param {String} id is id of note is selected
   *
   *  @returns {Object} noteItem
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
   * @description function edit note with information of note is selected
   *
   * @param {Object} note is information of note is selected
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

  /**
   * @description function find note if the note contains characters
   * that match the entered characters
   *
   * @param {String} inputValue is value of input entered
   *
   * @returns {Array} listFound after filter if note includes
   */
  searchNote(inputValue) {
    let list = [];

    if (inputValue.length) {
      this.listNotes.forEach((note) => {
        if (note.title.includes(inputValue) || note.description.includes(inputValue)) {
          list.push(note);
        }
      });
    } else {
      list = [];
    }

    return list;
  }
}
