import ListNoteView from './views/listNoteView';
import NoteModel from './models/noteModel';
import NoteController from './controllers/noteController';
import UserController from './controllers/userController';
import LoginView from './views/loginView';

const listNoteModel = new NoteModel();

const listNoteView = new ListNoteView();

const loginView = new LoginView();

const listNoteController = new NoteController(listNoteModel, listNoteView);
const userController = new UserController(loginView);

(() => {
  const page = document.body.className;

  if (page === 'login-page') {
    userController.init();
  } else {
    listNoteController.init();
  }
})();
