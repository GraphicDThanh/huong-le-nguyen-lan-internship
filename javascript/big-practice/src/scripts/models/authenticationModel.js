import { getUserByUsername, getUserById } from '../utils/fetchAPI';
import LocalStorage from '../utils/localStorage';
import STORAGE_KEYS from '../constants/storageKeys';

export default class AuthenticationModel {
  /**
   * @description function get user by email. Check email is available or not
   * and if user is available it will check password is correct or not
   *
   * @param {String} email is email take from input email login
   * @param {String} password is password take from input password login
   *
   * @returns {Boolean, Boolean} isEmail, isPassword
   */
  static async verifyCredential(email, password) {
    const user = await getUserByUsername(email);
    let isEmail = false;
    let isPassword = false;

    if (user.length) {
      if (user[0].password === password) {
        LocalStorage.setItems(STORAGE_KEYS.USER_ID, user[0].id);
        isPassword = true;
      }

      isEmail = true;
    }

    return { isEmail, isPassword };
  }

  /**
   * @description find user by id
   *
   * @returns {String} email or Unknown
   */
  static async findUsernameById() {
    if (LocalStorage.getItems(STORAGE_KEYS.USER_ID)) {
      const user = await getUserById(LocalStorage.getItems(STORAGE_KEYS.USER_ID));
      return user.email;
    }

    return null;
  }
}
