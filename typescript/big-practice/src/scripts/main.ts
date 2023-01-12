import ListNoteView from './views/listNoteView';
import NoteModel from './models/noteModel';
import NoteController from './controllers/noteController';
import UserModel from './models/userModel';
import AuthenticationView from './views/authenticationView';
import UserController from './controllers/userController';
import LocalStorage from './utils/localStorage';
import STORAGE_KEYS from './constants/storageKeys';
import HeaderView from './views/headerView';
import MenuView from './views/menuView';
import HeaderController from './controllers/headerController';
import MenuController from './controllers/menuController';

const noteModel = new NoteModel();

const listNoteView = new ListNoteView();
const headerView = new HeaderView();
const menuView = new MenuView();
const userModel = new UserModel();
const authenticationView = new AuthenticationView();

const noteController = new NoteController(noteModel, listNoteView);
const userController = new UserController(authenticationView, userModel);
const headerController = new HeaderController(headerView, userController);
const menuController = new MenuController(
  menuView,
  noteController,
  headerController
);

(() => {
  const localStorage = new LocalStorage();

  if (!localStorage.getItems(STORAGE_KEYS.USER_ID)) {
    userController.init();
  } else {
    headerController.init();
    menuController.init();
    noteController.init();
  }
})();
