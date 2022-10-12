/**
 * @class noteModel
 * @description manage data of a note
 */
export default class NoteModel {
  constructor(item) {
    const {
      id,
      itemTitle,
      itemDescription,
      isTrash,
    } = item;

    this.id = id;
    this.itemTitle = itemTitle;
    this.itemDescription = itemDescription;
    this.isTrash = isTrash;
  }
}
