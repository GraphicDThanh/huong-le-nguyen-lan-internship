export default class LocalStorage {
  /**
   * @description function set items to localStorage
   *
   * @param {String} key
   * @param {Array} value
   */
  static setItems(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * @description function get items from localStorage
   *
   * @param {String} key
   * @returns {Array}
   */
  static getItems(key) {
    return JSON.parse(localStorage.getItem(key));
  }
}
