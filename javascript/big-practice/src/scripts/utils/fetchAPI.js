import { API_MESSAGE } from '../constants/message';

const URL = 'http://localhost:3000/notes';

/**
 * @description function get list notes with id of user
 *
 * @param {String} user is owner of note
 *
 * @returns {Object} notes
 */
export const getData = async (user) => {
  try {
    const response = await fetch(`${URL}?&owner=${user}&isTrash=false`);
    const notes = await response.json();
    return notes;
  } catch (error) {
    const message = `${API_MESSAGE.GET} ${error}`;
    throw message;
  }
};

/**
 * @description function get list trash notes with id of user
 * @param {String} user is owner of note
 *
 * @returns {Object} notes
 */
export const getDataTrash = async (user) => {
  try {
    const response = await fetch(`${URL}?&owner=${user}&isTrash=true`);
    const notes = await response.json();
    return notes;
  } catch (error) {
    const message = `${API_MESSAGE.GET} ${error}`;
    throw message;
  }
};

/**
 * @description function get note with id of note
 *
 * @param {String} id of note
 *
 * @returns {Object} notes
 */
export const getDataById = async (id) => {
  try {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(`${URL}/${id}`, options);
    const notes = await response.json();
    return notes;
  } catch (error) {
    const message = `${API_MESSAGE.GET} ${error}`;
    throw message;
  }
};

/**
 * @description function add new note to api
 *
 * @param {Object} note is a note
 */
export const postData = async (note) => {
  try {
    const options = {
      method: 'POST',
      body: JSON.stringify(note),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    await fetch(URL, options);
  } catch (error) {
    const message = `${API_MESSAGE.POST} ${error}`;
    throw message;
  }
};

/**
 * @description function delete note in api
 *
 * @param {String} id is id of note
 */
export const deleteData = async (id) => {
  try {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    await fetch(`${URL}/${id}`, options);
  } catch (error) {
    const message = `${API_MESSAGE.DELETE} ${error}`;
    throw message;
  }
};

/**
 * @description function update note with id
 *
 * @param {String} id is id of note
 * @param {Object} note is note
 */
export const putData = async (id, note) => {
  try {
    const options = {
      method: 'PATCH',
      body: JSON.stringify(note),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    await fetch(`${URL}/${id}`, options);
  } catch (error) {
    const message = `${API_MESSAGE.PATCH} ${error}`;
    throw message;
  }
};
