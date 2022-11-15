import {
  postData,
  deleteData,
  putData,
  getDataById,
  getAllData,
} from '../utils/fetchAPI';

/**
 * @class listNoteModel
 * @description manage data of note list
 */
export default class NoteModel {
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

      await postData(noteItem);
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
    let listNotes = [];
    const notes = await getAllData();

    // This condition filter that we can use this function for trashNotes and listNotes
    switch (type) {
      case 'listNotes': {
        listNotes = notes.filter((note) => !note.deleteAt);
        console.log(listNotes.length);
        break;
      }
      case 'trashNotes': {
        listNotes = notes.filter((note) => note.deleteAt);
        console.log(listNotes.length);
        break;
      }
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
    try {
      const date = new Date().toISOString().slice(0, 10);
      const noteItem = await getDataById(id);

      noteItem.deleteAt = date;
      putData(id, noteItem);
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
      const noteItem = await getDataById(id);
      deleteData(id);

      return noteItem;
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
  async findNote(id) {
    try {
      const noteItem = await getDataById(id);

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
      const noteItem = await getDataById(id);
      noteItem.title = title;
      noteItem.description = description;

      putData(id, noteItem);

      return noteItem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
