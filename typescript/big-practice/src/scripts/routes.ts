import HeaderController from './controllers/headerController';
import MenuController from './controllers/menuController';
import NoteController from './controllers/noteController';
import UserController from './controllers/userController';
import LocalStorage from './utils/localStorage';
import StorageKeys from './constants/storageKeys';

export default class Router {
  headerController: HeaderController;

  menuController: MenuController;

  noteController: NoteController;

  userController: UserController;

  localStorage: LocalStorage<string>;

  constructor(
    headerController: HeaderController,
    menuController: MenuController,
    noteController: NoteController,
    userController: UserController
  ) {
    this.headerController = headerController;
    this.menuController = menuController;
    this.noteController = noteController;
    this.userController = userController;
    this.localStorage = new LocalStorage();
  }

  authentication(callback: () => void) {
    if (this.localStorage.getItems(StorageKeys.USER_ID)) {
      callback();
    } else {
      this.navigate('/');
    }
  }

  router = [
    {
      path: '/',
      name: 'login',
      handler: (): void => {
        this.load('login', () => {
          this.userController.init();
        });
      },
    },
    {
      path: '/signup',
      name: 'signup',
      handler: (): void => {
        this.load('signup', () => {
          this.userController.init();
        });
      },
    },
    {
      path: '/home',
      name: 'home',
      handler: () => {
        this.authentication(() => {
          this.load('home', () => {
            this.headerController.init();
            this.menuController.init();
            this.noteController.init();
          });
        });
      },
    },
  ];

  navigate(path: string): void {
    const router = this.router.find((i) => i.path === path);

    if (!router) {
      this.navigate('/');

      return;
    }
    router.handler?.();
  }

  load(path: string, callback: () => void) {
    window.history.replaceState({}, document.title, path);
    callback();
  }
}
