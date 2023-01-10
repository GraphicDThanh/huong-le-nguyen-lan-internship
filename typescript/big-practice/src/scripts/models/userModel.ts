import URL_API from '../constants/apiUrl';
import User from '../interfaces/user';
import FetchAPI from '../utils/fetchAPI';

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
      URL_API.USERS_URL,
      `?${key}=${value}`
    );

    return users;
  }

  /**
   * @description function add new user with information
   * user enter from input
   *
   * @param userInformation is user's information take from input form
   *
   * @returns {Object} user
   */
  async addUser(userInformation: User): Promise<User | undefined> {
    const user = await this.fetchAPI.postItem(
      userInformation,
      URL_API.USERS_URL
    );

    return user;
  }
}
