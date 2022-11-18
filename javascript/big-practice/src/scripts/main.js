import ListNoteView from './views/listNoteView';
import NoteModel from './models/noteModel';
import NoteController from './controllers/noteController';
import AuthenController from './controllers/authenController';
import LoginView from './views/loginView';
import STORAGE_KEYS from './constants/storageKeys';
import LocalStorage from './utils/localStorage';

const listNoteModel = new NoteModel();

const listNoteView = new ListNoteView();

const loginView = new LoginView();

const listNoteController = new NoteController(listNoteModel, listNoteView);
const authenController = new AuthenController(loginView);

(() => {
  const localStorage = new LocalStorage();

  if (!localStorage.getItems(STORAGE_KEYS.IS_USER_LOGGED_IN)) {
    authenController.init();
  } else {
    listNoteController.init();
  }
})();
