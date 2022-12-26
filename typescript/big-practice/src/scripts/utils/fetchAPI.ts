import URL_API from '../constants/apiUrl';

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
  async getAllNotes(url: string): Promise<unknown | T[]> {
    try {
      const response = await fetch(`${this.baseURL}${url}`);
      const notes: T[] = await response.json();

      return notes;
    } catch (error) {
      console.log(error);
      return error;
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
  async getByKey(url: string, key: string): Promise<unknown | T[]> {
    try {
      const response = await fetch(`${this.baseURL}${url}${key}`);
      const notes: T[] = await response.json();

      return notes;
    } catch (error) {
      console.log(error);
      return error;
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
  async postNote(note: T, url: string): Promise<unknown | T> {
    try {
      const options = {
        method: 'POST',
        body: JSON.stringify(note),
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const noteItem = await fetch(`${this.baseURL}${url}`, options);
      const notes: Promise<T> = noteItem.json();

      return await notes;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  /**
   * @description function delete note in api
   *
   * @param {String} id is id of note
   * @param {String} url is endpoint
   */
  async deleteNote(id: string, url: string): Promise<unknown | T> {
    try {
      const options = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const noteItem = await fetch(`${this.baseURL}${url}/${id}`, options);

      return noteItem;
    } catch (error) {
      console.log(error);
      return error;
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
  async putNote(id: string, note: T, url: string): Promise<unknown | T> {
    try {
      const options = {
        method: 'PATCH',
        body: JSON.stringify(note),
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const noteItem = await fetch(`${this.baseURL}${url}/${id}`, options);

      return await noteItem.json();
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}
