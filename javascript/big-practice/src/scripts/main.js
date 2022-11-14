import ListNoteView from './views/listNoteView';
import NoteModel from './models/noteModel';
import NoteController from './controllers/noteController';
import AuthenController from './controllers/authenController';
import LoginView from './views/loginView';

const listNoteModel = new NoteModel();

const listNoteView = new ListNoteView();

const loginView = new LoginView();

const listNoteController = new NoteController(listNoteModel, listNoteView);
const authenController = new AuthenController(loginView);

(() => {
  const page = document.body.className;

  switch (page) {
    case 'index-page':
      authenController.init();
      break;
    case 'home-page':
      listNoteController.init();
      break;
    default:
      console.log('Oops! Have something went wrong');
      break;
  }
})();
