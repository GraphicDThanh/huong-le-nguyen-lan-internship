export default class LocalStorage<T> {
  /**
   * @description function set items to localStorage
   *
   * @param {String} key is name of key in localStorage
   * @param {Array} value
   */
  setItems(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * @description function get items from localStorage
   *
   * @param {String} key is name of key in localStorage
   *
   * @returns {Array}
   */
  getItems(key: string): T | undefined {
    const value = localStorage.getItem(key);

    if (value) {
      return JSON.parse(value);
    }

    return undefined;
  }

  /**
   * @description function remove key in localStorage
   *
   * @param {String} key is name of key in localStorage
   */
  removeItems(key: string): void {
    localStorage.removeItem(key);
  }
}
