import { getUser } from '../utils/fetchAPI';
import STORAGE_KEYS from '../constants/storageKeys';
import LocalStorage from '../utils/localStorage';

export default class UserModel {
  constructor() {
    this.localStorage = new LocalStorage();
  }

  /**
   * @description find user by id
   *
   * @returns {String} email or Unknown
   */
  async findUsernameById() {
    if (this.localStorage.getItems(STORAGE_KEYS.USER_ID)) {
      try {
        const user = await getUser(this.localStorage.getItems(STORAGE_KEYS.USER_ID), 'id');
        return user[0].email;
      } catch (e) {
        const error = e;
        throw error;
      }
    }

    return null;
  }
}
