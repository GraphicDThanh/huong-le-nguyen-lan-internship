import { getUserByUsername, getUsersById } from '../utils/fetchAPI';
import LocalStorage from '../utils/localStorage';
import STORAGE_KEYS from '../constants/storageKeys';
import { EMAIL, PASSWORD } from '../constants/message';

export default class LoginModel {
  /**
   * @description function check email and password is exists in data
   *
   * @param {String} email is email take from input email login
   * @param {String} password is password take from input password login
   *
   * @returns {String} message
   */
  static async checkUserByEmail(email, password) {
    const users = await getUserByUsername(email);
    let message;

    if (users.length) {
      if (users[0].password === password) {
        LocalStorage.setItems(STORAGE_KEYS.USER_ID, users[0].id);
      } else {
        message = PASSWORD.PASSWORD_INCORRECT;
      }
    } else {
      message = EMAIL.EMAIL_NOT_EXISTS;
    }

    return message;
  }

  /**
   * @description find user by id
   *
   * @returns {String} email or Unknown
   */
  static async findUsernameById() {
    if (LocalStorage.getItems(STORAGE_KEYS.USER_ID)) {
      const user = await getUsersById(LocalStorage.getItems(STORAGE_KEYS.USER_ID));
      return user.email;
    }

    return null;
  }
}
