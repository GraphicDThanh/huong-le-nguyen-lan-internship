/**
 * @class listNoteView
 * @description manage view of listNote
 */
export default class ListNoteView {
  constructor(noteView) {
    this.noteView = noteView;
    this.listNoteElement = document.querySelector('.list-notes');

    // input form
    this.formElement = document.querySelector('.form-add-note');
    this.formTitleElement = document.querySelector('.form-title');
    this.formUtilitiesElement = document.querySelector('.form-utilities');
    this.closeButtonElement = document.querySelector('.form-add-note .btn-close');
    this.inputAddElement = document.querySelector('.form-add-note .form-group-input .input-note');
  }

  /**
   * @description function render all notes
   *
   * @param {Array} listNote is a list of notes from data
   */
  renderListItems = (listItems) => {
    listItems.forEach((element) => {
      const item = {
        id: element.id,
        title: element.noteTitle,
        description: element.noteDescription,
        isTrash: element.isTrash,
      };
      this.listNoteElement.appendChild(this.noteView.renderItem(item));
    });
  };

  /**
   * @description function render a note
   *
   * @param {Object} note is a data of a note
   */
  renderItem = (listItems) => {
    const item = {
      id: listItems.id,
      title: listItems.itemTitle,
      description: listItems.itemDescription,
      isTrash: listItems.isTrash,
    };
    this.listNoteElement.appendChild(this.noteView.renderItem(item));
  };

  /**
   * @description function show input form
   */
  showInputForm = () => {
    this.inputAddElement.addEventListener('focus', () => {
      this.formUtilitiesElement.style.display = 'block';
      this.formTitleElement.style.display = 'block';
    });
  };

  /**
   * @description function add a new note and turn off input form
   *
   * @param {function} handle is a function transmission in
   * two String values is title and description of input form
   */
  bindAddNewItem = (handle) => {
    this.closeButtonElement.addEventListener('click', () => {
      this.titleValue = document.querySelector('.note-title').value;
      this.descriptionValue = document.querySelector('.note-description').value;

      if ((this.titleValue === '') && (this.descriptionValue === '')) {
        this.formUtilitiesElement.style.display = 'none';
        this.formTitleElement.style.display = 'none';
      } else {
        handle(this.titleValue, this.descriptionValue);
        this.formElement.reset();
      }
    });
  };
}
