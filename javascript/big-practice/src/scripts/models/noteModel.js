/**
 * @class noteModel
 * @description manage data of a note
 */
export default class NoteModel {
  constructor(note) {
    const {
      id,
      title,
      description,
      isTrash,
    } = note;

    this.id = id;
    this.title = title;
    this.description = description;
    this.isTrash = isTrash;
  }
}
