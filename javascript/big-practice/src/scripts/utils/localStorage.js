export default class LocalStorage {
  /**
   * @description function set items to localStorage
   *
   * @param {String} key is name of key in localStorage
   * @param {Array} value
   */
  setItems(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * @description function get items from localStorage
   *
   * @param {String} key is name of key in localStorage
   *
   * @returns {Array}
   */
  getItems(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  /**
   * @description function remove key in localStorage
   *
   * @param {String} key is name of key in localStorage
   */
  removeItems(key) {
    localStorage.removeItem(key);
  }
}
