import { API_MESSAGE } from '../constants/message';
import URL_API from '../constants/apiUrl';

const notesURL = `${URL_API.BASE_URL}${URL_API.NOTES_URL}`;
const usersURL = `${URL_API.BASE_URL}${URL_API.USERS_URL}`;

/**
 * @description function get list user or get user by key
 *
 * @param {String} email get from input login
 *
 * @returns {Object} user
 */
export const getUser = async (key, param) => {
  try {
    const response = await fetch(key && param ? `${usersURL}?&${param}=${key}` : `${usersURL}`);
    const users = await response.json();

    return users;
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
    const response = await fetch(`${notesURL}/${id}`);
    const notes = await response.json();
    return notes;
  } catch (e) {
    const error = e;
    throw error;
  }
};

/**
 * @description function get data by user id
 * @param {String} id is user id
 *
 * @returns {Array} notes
 */
export const getDataByUserId = async (id) => {
  try {
    const response = await fetch(`${notesURL}?&ownerId=${id}`);
    const notes = await response.json();
    return notes;
  } catch (e) {
    const error = e;
    throw error;
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
  } catch (e) {
    const error = e;
    throw error;
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
  } catch (e) {
    const error = e;
    throw error;
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
  } catch (e) {
    const error = e;
    throw error;
  }
};
