import URL_API from '../constants/apiUrl';
import LoadingPage from './loadingPage';

const fetchAPI = {
  baseURL: `${URL_API.BASE_URL}`,
  loadingPage: new LoadingPage(),

  /**
   * @description function get all notes
   *
   * @returns {Object} notes
   */
  async getAllNotes(url) {
    try {
      this.loadingPage.addLoading();
      this.loadingPage.setTimeoutLoading();
      const response = await fetch(`${this.baseURL}${url}`);
      const notes = await response.json();
      return notes;
    } catch (e) {
      const error = e;
      throw error;
    }
  },

  /**
   * @description function add new note to api
   *
   * @param {Object} note is a note
   */
  async postNote(note, url) {
    try {
      const options = {
        method: 'POST',
        body: JSON.stringify(note),
        headers: {
          'Content-Type': 'application/json',
        },
      };
      this.loadingPage.addLoading();
      const noteItem = await fetch(`${this.baseURL}${url}`, options);
      this.loadingPage.removeLoading();

      return noteItem.json();
    } catch (e) {
      const error = e;
      throw error;
    }
  },

  /**
   * @description function delete note in api
   *
   * @param {String} id is id of note
   */
  async deleteNote(id, url) {
    try {
      const options = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      this.loadingPage.addLoading();
      await fetch(`${this.baseURL}${url}/${id}`, options);
      this.loadingPage.removeLoading();
    } catch (e) {
      const error = e;
      throw error;
    }
  },

  /**
   * @description function update note with id
   *
   * @param {String} id is id of note
   * @param {Object} note is note
   */
  async putNote(id, note, url) {
    try {
      const options = {
        method: 'PATCH',
        body: JSON.stringify(note),
        headers: {
          'Content-Type': 'application/json',
        },
      };
      this.loadingPage.addLoading();
      const noteItem = await fetch(`${this.baseURL}${url}/${id}`, options);
      this.loadingPage.removeLoading();

      return noteItem.json();
    } catch (e) {
      const error = e;
      throw error;
    }
  },
};

export default fetchAPI;
