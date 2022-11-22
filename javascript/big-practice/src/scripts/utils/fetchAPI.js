import URL_API from '../constants/apiUrl';

const fetchAPI = {
  baseURL: `${URL_API.BASE_URL}`,

  /**
   * @description function get all notes
   *
   * @returns {Object} notes
   */
  async getAllNotes() {
    try {
      const response = await fetch(`${this.baseURL}${URL_API.NOTES_URL}`);
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
  async postNote(note) {
    try {
      const options = {
        method: 'POST',
        body: JSON.stringify(note),
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const noteItem = await fetch(`${this.baseURL}${URL_API.NOTES_URL}`, options);

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
  async deleteNote(id) {
    try {
      const options = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      };

      await fetch(`${this.baseURL}${URL_API.NOTES_URL}/${id}`, options);
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
  async putNote(id, note) {
    try {
      const options = {
        method: 'PATCH',
        body: JSON.stringify(note),
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const noteItem = await fetch(`${this.baseURL}${URL_API.NOTES_URL}/${id}`, options);

      return noteItem.json();
    } catch (e) {
      const error = e;
      throw error;
    }
  },
};

export default fetchAPI;
