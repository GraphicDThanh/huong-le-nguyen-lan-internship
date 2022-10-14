import ListNoteView from './views/listNoteView';
import ListNoteModel from './models/listNoteModel';
import NoteController from './controllers/noteController';

const listNoteModel = new ListNoteModel();

const listNoteView = new ListNoteView();

const listNoteController = new NoteController(listNoteModel, listNoteView);
listNoteController.init();
