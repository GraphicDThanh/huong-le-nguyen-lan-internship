import ListNoteView from './views/listNoteView';
import ListNoteModel from './models/listNoteModel';
import NoteController from './controllers/noteController';
import AuthenticationController from './controllers/authenticationController';
import LoginModel from './models/loginModel';
import LoginView from './views/loginView';

const listNoteModel = new ListNoteModel();

const listNoteView = new ListNoteView();

const loginModel = new LoginModel();

const loginView = new LoginView();

const listNoteController = new NoteController(listNoteModel, listNoteView);
const authenticationController = new AuthenticationController(loginModel, loginView);

(() => {
  const page = document.body.className;

  if (page === 'loginPage') {
    authenticationController.init();
  } else {
    listNoteController.init();
  }
})();
