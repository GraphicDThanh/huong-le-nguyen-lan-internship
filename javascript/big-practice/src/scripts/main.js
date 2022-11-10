import ListNoteView from './views/listNoteView';
import NoteModel from './models/noteModel';
import NoteController from './controllers/noteController';
import AuthenticationController from './controllers/authenticationController';
import AuthenticationModel from './models/authenticationModel';
import LoginView from './views/loginView';

const listNoteModel = new NoteModel();

const listNoteView = new ListNoteView();

const authenticationModel = new AuthenticationModel();

const loginView = new LoginView();

const listNoteController = new NoteController(listNoteModel, listNoteView);
const authenticationController = new AuthenticationController(authenticationModel, loginView);

(() => {
  const page = document.body.className;

  if (page === 'login-page') {
    authenticationController.init();
  } else {
    listNoteController.init();
  }
})();
