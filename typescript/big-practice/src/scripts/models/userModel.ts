import { v4 as uuidv4 } from 'uuid';
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
  async getUserByKey(key: string, value: string) {
    const users = await this.fetchAPI.getItemByKey(
      URL_API.USERS_URL,
      `?${key}=${value}`
    );

    return users;
  }

  /**
   * @description function
   *
   * @param userInfo is user's information take from input form
   *
   * @returns {Object} user
   */
  async addUser(userInfo: User) {
    const patternUser = {
      id: uuidv4(),
      email: userInfo.email,
      password: userInfo.password,
    };

    const user = await this.fetchAPI.postItem(patternUser, URL_API.USERS_URL);

    return user;
  }
}
