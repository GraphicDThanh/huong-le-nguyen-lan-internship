import URL_API from '../constants/apiUrl';

const fetchAPI = {
  baseURL: `${URL_API.BASE_URL}`,

  /**
   * @description function get all notes
   *
   * @param {String} url is endpoint
   *
   * @returns {Object} notes
   */
  async getAllNotes(url) {
    try {
      const response = await fetch(`${this.baseURL}${url}`);
      const notes = await response.json();

      return notes;
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  /**
   * @description function find notes by key
   *
   * @param {String} url is resource
   * @param {String} key is endpoint of url
   *
   * @returns {Object} notes
   */
  async getByKey(url, key) {
    try {
      const response = await fetch(`${this.baseURL}${url}${key}`);
      const notes = await response.json();

      return notes;
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  /**
   * @description function add new note to api
   *
   * @param {Object} note is a note
   * @param {String} url is endpoint
   *
   * @return {Object} noteItem is returned after calling api
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
      const noteItem = await fetch(`${this.baseURL}${url}`, options);

      return noteItem.json();
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  /**
   * @description function delete note in api
   *
   * @param {String} id is id of note
   * @param {String} url is endpoint
   */
  async deleteNote(id, url) {
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
  },

  /**
   * @description function update note with id
   *
   * @param {String} id is id of note
   * @param {Object} note is note
   * @param {String} url is endpoint
   *
   * @return {Object} noteItem is returned after calling api
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
      const noteItem = await fetch(`${this.baseURL}${url}/${id}`, options);

      return noteItem.json();
    } catch (error) {
      console.log(error);
      return error;
    }
  },
};

export default fetchAPI;
