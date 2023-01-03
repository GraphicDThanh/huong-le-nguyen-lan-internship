import URL_API from '../constants/apiUrl';
import User from '../types/user';
import FetchAPI from '../utils/fetchAPI';

export default class UserModel {
  fetchAPI: FetchAPI<User>;

  constructor() {
    this.fetchAPI = new FetchAPI();
  }

  async getAllUsers() {
    const users = await this.fetchAPI.getAllItems(URL_API.USERS_URL);

    return users;
  }

  async addUser(userInformation: User) {
    const user = await this.fetchAPI.postItem(
      userInformation,
      URL_API.USERS_URL
    );

    return user;
  }
}
