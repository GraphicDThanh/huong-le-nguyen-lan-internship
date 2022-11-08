import { getUserByUsername, getUserById } from '../utils/fetchAPI';
import LocalStorage from '../utils/localStorage';
import STORAGE_KEYS from '../constants/storageKeys';

export default class AuthenticationModel {
  /**
   * @description function check email and password is exists in data
   *
   * @param {String} email is email take from input email login
   * @param {String} password is password take from input password login
   *
   * @returns {String} message
   */
  static async checkUserByEmail(email, password) {
    const user = await getUserByUsername(email);
    let isEmail;
    let isPassword;

    if (user.length) {
      if (user[0].password === password) {
        LocalStorage.setItems(STORAGE_KEYS.USER_ID, user[0].id);
        isPassword = true;
      } else {
        isPassword = false;
      }

      isEmail = true;
    } else {
      isEmail = false;
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
