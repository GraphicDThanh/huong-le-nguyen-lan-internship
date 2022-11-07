import { API_MESSAGE } from '../constants/message';
import URL_API from '../constants/apiUrl';

const notesURL = `${URL_API.URL}${URL_API.NOTES_URL}`;
const usersURL = `${URL_API.URL}${URL_API.USERS_URL}`;

/**
 * @description function get list notes with email of user
 *
 * @param {String} email get from input login
 *
 * @returns {Object} user
 */
export const getUserByUsername = async (email) => {
  try {
    const response = await fetch(`${usersURL}?&email=${email}`);
    const users = await response.json();

    return users;
  } catch (error) {
    const message = `${API_MESSAGE.GET} ${error}`;
    throw message;
  }
};

/**
 * @description function get list notes with email of user
 *
 * @param {String} id is id user get from local
 *
 * @returns {Object} user
 */
export const getUserById = async (id) => {
  try {
    const response = await fetch(`${usersURL}/${id}`);
    const users = await response.json();

    return users;
  } catch (error) {
    const message = `${API_MESSAGE.GET} ${error}`;
    throw message;
  }
};

/**
 * @description function get list notes with id of user
 *
 * @param {String} id is owner's id of note
 *
 * @returns {Object} notes
 */
export const getData = async (id) => {
  try {
    const response = await fetch(`${notesURL}?&ownerId=${id}&isTrash=false`);
    const notes = await response.json();
    return notes;
  } catch (error) {
    const message = `${API_MESSAGE.GET} ${error}`;
    throw message;
  }
};

/**
 * @description function get list trash notes with id of user
 * @param {String} id is owner's id of note
 *
 * @returns {Object} notes
 */
export const getDataTrash = async (id) => {
  try {
    const response = await fetch(`${notesURL}?&ownerId=${id}&isTrash=true`);
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

    const response = await fetch(`${notesURL}/${id}`, options);
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

    await fetch(notesURL, options);
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

    await fetch(`${notesURL}/${id}`, options);
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

    await fetch(`${notesURL}/${id}`, options);
  } catch (error) {
    const message = `${API_MESSAGE.PATCH} ${error}`;
    throw message;
  }
};
