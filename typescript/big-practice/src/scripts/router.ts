import HeaderController from './controllers/headerController';
import MenuController from './controllers/menuController';
import NoteController from './controllers/noteController';
import UserController from './controllers/userController';
import LocalStorage from './utils/localStorage';
import StorageKeys from './constants/storageKeys';
import navigatePage from './utils/navigatePage';

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

  /**
   * @description function check if the user is logged in or not
   *
   * @param {function} callback function of router
   */
  authentication(callback: () => void) {
    const value = this.localStorage.getItems(StorageKeys.USER_ID);
    if (value && value.length === 36) {
      callback();
    } else {
      this.localStorage.removeItems(StorageKeys.USER_ID);
      navigatePage('/');
    }
  }

  router = [
    {
      path: '/',
      name: 'login',
      handler: (): void => {
        this.load('/', () => {
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
      path: '/home.html',
      name: 'home',
      handler: () => {
        this.authentication(() => {
          this.load('home.html', () => {
            this.headerController.init();
            this.menuController.init();
            this.noteController.init();
          });
        });
      },
    },
  ];

  /**
   * @description function navigate page with path get from url
   *
   * @param {string} path is path get from url
   */
  navigate(path: string): void {
    const router = this.router.find((i) => i.path === path);

    if (!router) {
      this.navigate('/');
    }
    router!.handler();
  }

  /**
   * @description function change path
   *
   * @param {string} path is path of page
   * @param {function} callback function of router
   */
  load(path: string, callback: () => void) {
    window.history.replaceState({}, document.title, path);
    callback();
  }
}
