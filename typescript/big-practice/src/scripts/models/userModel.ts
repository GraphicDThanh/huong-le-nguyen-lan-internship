import UrlAPI from 'constants/apiUrl';
import Page from 'constants/page';
import User from 'interfaces/user';
import FetchAPI from 'utils/fetchAPI';

interface CheckAuthentication {
  isEmail: boolean;
  isPassword: boolean;
}

export default class UserModel {
  fetchAPI: FetchAPI<User>;

  constructor() {
    this.fetchAPI = new FetchAPI();
  }

  /**
   * @description function get user by key with value take
   * from input
   *
   * @param key is field want to find
   * @param value is value of field want to find
   *
   * @returns {Array} users
   */
  async getUserByKey(key: string, value: string): Promise<User[] | undefined> {
    const users = await this.fetchAPI.getItemByKey(
      UrlAPI.USERS_URL,
      `?${key}=${value}`
    );

    return users;
  }

  /**
   * @description function check if email and password match email and password in data
   *
   * @param user is information of input user enter
   * @param page to distinguish between login page and sign up page
   * @param confirmPassword is confirm password of input user enter
   *
   * @returns {Boolean} userValid
   */
  async checkValid(
    user: User,
    page: number,
    confirmPassword?: string
  ): Promise<CheckAuthentication> {
    const users = (await this.getUserByKey('email', user.email)) as User[];
    const userValid: CheckAuthentication = {
      isEmail: false,
      isPassword: false,
    };

    switch (page) {
      case Page.SIGN_UP:
        if (users.length && user.email === users[0].email) {
          userValid.isEmail = true;

          return userValid;
        }

        if (user.password !== confirmPassword) {
          userValid.isPassword = true;

          return userValid;
        }
        break;
      case Page.LOGIN:
        if (!users.length) {
          userValid.isEmail = true;
          userValid.isPassword = true;

          return userValid;
        }

        if (users.length && user.password !== users[0].password) {
          userValid.isPassword = true;

          return userValid;
        }
        break;
      default:
        break;
    }

    return userValid;
  }

  /**
   * @description function add new user with information
   * user enter from input
   *
   * @param userInfo is user's information take from input form
   *
   * @returns {Object} user
   */
  async addUser(userInfo: User): Promise<User | undefined> {
    const patternUser = {
      id: crypto.randomUUID(),
      email: userInfo.email,
      password: userInfo.password,
    };

    const user = await this.fetchAPI.postItem(patternUser, UrlAPI.USERS_URL);

    return user;
  }
}
