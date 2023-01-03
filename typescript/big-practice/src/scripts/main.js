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
import SignUpController from './controllers/signUpController';
import UserModel from './models/userModel';
import SignUpView from './views/signUpView';

const noteModel = new NoteModel();

const listNoteView = new ListNoteView();
const headerView = new HeaderView();
const menuView = new MenuView();
const loginView = new LoginView();
const signUpView = new SignUpView();
const userModel = new UserModel();

const noteController = new NoteController(noteModel, listNoteView);
const headerController = new HeaderController(headerView);
const authenController = new AuthenController(loginView, userModel);
const menuController = new MenuController(
  menuView,
  noteController,
  headerController
);
const signUpController = new SignUpController(signUpView, userModel);

(() => {
  const localStorage = new LocalStorage();

  if (!localStorage.getItems(STORAGE_KEYS.IS_LOGIN)) {
    authenController.init();
    signUpController.init();
  } else {
    headerController.init();
    menuController.init();
    noteController.init();
  }
})();
