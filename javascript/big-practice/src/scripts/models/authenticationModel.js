import { getUser } from '../utils/fetchAPI';
import STORAGE_KEYS from '../constants/storageKeys';
import LocalStorage from '../utils/localStorage';

export default class AuthenticationModel {
  constructor() {
    this.localStorage = new LocalStorage();
  }

  /**
   * @description function get user by email. Check email is available or not
   * and if user is available it will check password is correct or not
   *
   * @param {String} email is email take from input email login
   * @param {String} password is password take from input password login
   *
   * @returns {Boolean, Boolean} isEmail, isPassword
   */
  async verifyCredential(email, password) {
    const users = await getUser(email, 'email');
    let isEmail = false;
    let isPassword = false;

    if (users.length) {
      if (users[0].password === password) {
        this.localStorage.setItems(STORAGE_KEYS.USER_ID, users[0].id);
        isPassword = true;
      }

      isEmail = true;
    }

    return { isEmail, isPassword };
  }
}
