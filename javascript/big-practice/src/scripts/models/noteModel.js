/**
 * @class noteModel
 * @description manage data of a note
 */
export default class noteModel {
  constructor(note) {
    const {
      id,
      noteTitle,
      noteDescription,
      isTrash,
    } = note;

    this.id = id;
    this.noteTitle = noteTitle;
    this.noteDescription = noteDescription;
    this.isTrash = isTrash;
  }
}
