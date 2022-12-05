import ListNoteView from './views/listNoteView';
import NoteModel from './models/noteModel';
import NoteController from './controllers/noteController';
import AuthenController from './controllers/authenController';
import LoginView from './views/loginView';
import STORAGE_KEYS from './constants/storageKeys';
import LocalStorage from './utils/localStorage';
import HeaderView from './views/headerView';
import MenuView from './views/menuView';
import HeaderController from './controllers/headerController';
import MenuController from './controllers/menuController';
import InputSearchController from './controllers/inputSearchController';
import InputSearchView from './views/inputSearchView';

const noteModel = new NoteModel();

const listNoteView = new ListNoteView();
const headerView = new HeaderView();
const menuView = new MenuView();
const loginView = new LoginView();
const inputSearchView = new InputSearchView();

const noteController = new NoteController(noteModel, listNoteView);
const inputSearchController = new InputSearchController(inputSearchView, noteController);
const headerController = new HeaderController(headerView);
const authenController = new AuthenController(loginView);
const menuController = new MenuController(menuView, noteController, headerController);

(() => {
  const localStorage = new LocalStorage();

  if (!localStorage.getItems(STORAGE_KEYS.IS_LOGIN)) {
    authenController.init();
  } else {
    headerController.init();
    inputSearchController.init();
    menuController.init();
    noteController.init();
  }
})();
