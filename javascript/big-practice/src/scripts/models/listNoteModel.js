import NoteModel from './noteModel';
import data from '../data';

/**
 * @class listNoteModel
 * @description manage data of note list
 */
export default class ListNoteModel {
  constructor(noteModel) {
    this.items = data;
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
  addItem = (title, description) => {
    const itemsLength = this.items.length;
    const item = {
      id: itemsLength > 0 ? itemsLength : 0,
      itemTitle: title,
      itemDescription: description,
      isTrash: false,
    };
    const noteModel = new NoteModel(item);
    this.items.push(noteModel);

    return item;
  };
}
