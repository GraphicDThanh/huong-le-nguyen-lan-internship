import STORAGE_KEYS from '../constants/storageKeys';

export default class LocalStorage {
  /**
   * @description function set items to localStorage
   * @param {Array} listNotes
   */
  static setItems(listNotes) {
    localStorage.setItem(STORAGE_KEYS, JSON.stringify(listNotes));
  }

  /**
   * @description function get items from localStorage
   * @returns {Array} listNotes
   */
  static getItems() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS));
  }
}
