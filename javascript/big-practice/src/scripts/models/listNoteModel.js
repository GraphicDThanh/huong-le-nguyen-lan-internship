import NoteModel from './noteModel';

/**
 * @class listNoteModel
 * @description manage data of note list
 */
export default class listNoteModel {
  constructor(noteModel) {
    this.notes = [
      {
        id: 0,
        noteTitle: 'id perspiciatis nemo natus exercitationem ipsam ducimus, nam aspernatur! Nobis placeat qui obcaecati commodi.',
        noteDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga incidunt autem praesentium necessitatibus corporis laudantium alias, ',
        isTrash: false,
      },
      {
        id: 1,
        noteTitle: 'Lorem ipsum dolor sit',
        noteDescription: 'adipisicing elit. Fuga incidunt autem praesentium necessitatibus corporis',
        isTrash: false,
      },
      {
        id: 2,
        noteTitle: 'natus exercitationem ipsam ducimus, nam aspernatur!',
        noteDescription: 'nam aspernatur! Nobis placeat qui obcaecati commodi.',
        isTrash: false,
      },
    ];
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
  addNote = (title, description) => {
    const note = {
      id: this.notes.length > 0 ? this.notes.length : 0,
      noteTitle: title,
      noteDescription: description,
      isTrash: false,
    };
    const noteModel = new NoteModel(note);
    this.notes.push(noteModel);

    return note;
  };
}
