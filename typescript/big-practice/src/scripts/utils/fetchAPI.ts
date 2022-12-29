import URL_API from '../constants/apiUrl';
import { checkCustomError, statusError } from './handleError';

export default class FetchAPI<T> {
  baseURL: string;

  constructor() {
    this.baseURL = `${URL_API.BASE_URL}`;
  }

  /**
   * @description function get all notes
   *
   * @param {String} url is endpoint
   *
   * @returns {Object} notes
   */
  async getAllItems(url: string): Promise<T[]> {
    try {
      const response = await fetch(`${this.baseURL}${url}`);
      const items: T[] = await response.json();
      const listItems = statusError(response, items);

      return listItems;
    } catch (error) {
      checkCustomError(error);

      throw new Error('Fail to fetch');
    }
  }

  /**
   * @description function find notes by key
   *
   * @param {String} url is resource
   * @param {String} key is endpoint of url
   *
   * @returns {Object} notes
   */
  async getItemByKey(url: string, key: string): Promise<T[]> {
    try {
      const response = await fetch(`${this.baseURL}${url}${key}`);
      const items: T[] = await response.json();
      const listItems = statusError(response, items);

      return listItems;
    } catch (error) {
      checkCustomError(error);

      throw new Error('Fail to fetch');
    }
  }

  /**
   * @description function add new note to api
   *
   * @param {Object} note is a note
   * @param {String} url is endpoint
   *
   * @return {Object} noteItem is returned after calling api
   */
  async postItem(note: T, url: string): Promise<T> {
    try {
      const options = {
        method: 'POST',
        body: JSON.stringify(note),
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await fetch(`${this.baseURL}${url}`, options);
      const items: T = await response.json();
      const item = statusError(response, items);

      return item;
    } catch (error) {
      checkCustomError(error);

      throw new Error('Fail to fetch');
    }
  }

  /**
   * @description function delete note in api
   *
   * @param {String} id is id of note
   * @param {String} url is endpoint
   */
  async deleteItem(id: string, url: string): Promise<T> {
    try {
      const options = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await fetch(`${this.baseURL}${url}/${id}`, options);
      const items: T = await response.json();
      const item = statusError(response, items);

      return item;
    } catch (error) {
      checkCustomError(error);

      throw new Error('Fail to fetch');
    }
  }

  /**
   * @description function update note with id
   *
   * @param {String} id is id of note
   * @param {Object} note is note
   * @param {String} url is endpoint
   *
   * @return {Object} noteItem is returned after calling api
   */
  async putItem(id: string, note: T, url: string): Promise<T> {
    try {
      const options = {
        method: 'PATCH',
        body: JSON.stringify(note),
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await fetch(`${this.baseURL}${url}/${id}`, options);
      const items: T = await response.json();
      const item = statusError(response, items);

      return item;
    } catch (error) {
      checkCustomError(error);

      throw new Error('Fail to fetch');
    }
  }
}
