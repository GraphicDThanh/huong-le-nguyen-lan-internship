export default class InputSearchController {
  constructor(inputSearchView, noteController) {
    this.inputSearchView = inputSearchView;
    this.noteController = noteController;
  }

  init() {
    this.bindEvents();
  }

  bindEvents() {
    // function clear search and render tab note
    this.inputSearchView.clearSearch(() => this.noteController.renderTabs());

    // function search note by value of input
    this.inputSearchView.bindSearchNotes(
      (inputValue) => this.noteController.searchNote(inputValue),
    );

    // function show hide icon close in input search
    this.inputSearchView.handleInputSearch();
  }
}
