import ListNoteView from './views/listNoteView';
import NoteModel from './models/noteModel';
import NoteController from './controllers/noteController';
import UserModel from './models/userModel';
import AuthenticationView from './views/authenticationView';
import UserController from './controllers/userController';
import LocalStorage from './utils/localStorage';
import StorageKeys from './constants/storageKeys';
import HeaderView from './views/headerView';
import MenuView from './views/menuView';
import HeaderController from './controllers/headerController';
import MenuController from './controllers/menuController';
import Menu from './constants/menu';
import navigatePage from './utils/navigatePage';

let currentPage;
const noteModel = new NoteModel();
if (sessionStorage.getItem(StorageKeys.PAGE_NUMBER) === '1') {
  currentPage = Menu.TRASH_NOTES;
} else {
  currentPage = Menu.LIST_NOTES;
}

const listNoteView = new ListNoteView(currentPage);
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

  document.addEventListener('DOMContentLoaded', () => {
    const value = localStorage.getItems(StorageKeys.USER_ID) as string;
    if (!value) {
      userController.init();
    } else if (value.length != 36) {
      navigatePage('index.html');
      localStorage.removeItems(StorageKeys.USER_ID);
    } else {
      headerController.init();
      menuController.init();
      noteController.init();
    }
  });
})();
