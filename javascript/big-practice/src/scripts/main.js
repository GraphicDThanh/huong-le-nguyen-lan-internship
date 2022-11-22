import ListNoteView from './views/listNoteView';
import NoteModel from './models/noteModel';
import NoteController from './controllers/noteController';
import AuthenController from './controllers/authenController';
import LoginView from './views/loginView';
import HeaderView from './views/headerView';
import MenuView from './views/menuView';
import HeaderController from './controllers/headerController';
import MenuController from './controllers/menuController';

const noteModel = new NoteModel();

const listNoteView = new ListNoteView();
const headerView = new HeaderView();
const menuView = new MenuView();
const loginView = new LoginView();

const headerController = new HeaderController(headerView);
const noteController = new NoteController(noteModel, listNoteView);
const authenController = new AuthenController(loginView);
const menuController = new MenuController(menuView, noteController, headerController);

(() => {
  const page = document.body.className;

  switch (page) {
    case 'index-page':
      authenController.init();
      break;
    case 'home-page':
      headerController.init();
      menuController.init();
      noteController.init();
      break;
    default:
      console.log('Oops! Have something went wrong');
      break;
  }
})();
