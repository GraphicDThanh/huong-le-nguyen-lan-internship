export default class LocalStorage {
  /**
   * @description function set items to localStorage
   * @param {Array}
   */
  static setItems(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * @description function get items from localStorage
   * @returns {Array} listNotes
   */
  static getItems(key) {
    return JSON.parse(localStorage.getItem(key));
  }
}
