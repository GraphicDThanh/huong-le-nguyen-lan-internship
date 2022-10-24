import STORAGE_KEYS from '../constants/storageKeys';

export default class LocalStorage {
  static setItems(listNotes) {
    localStorage.setItem(STORAGE_KEYS, JSON.stringify(listNotes));
  }

  static getItems() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS));
  }
}
