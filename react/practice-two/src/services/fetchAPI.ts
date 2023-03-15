import URL_API from 'constants/apiUrl';
import { CustomError, generateError } from 'helpers/handleErrors';

/**
 * @description function get all items
 *
 * @param {String} url is endpoint
 *
 * @returns {Array} list item
 */
const getAllData = async <T>(url: string): Promise<T[] | CustomError> => {
  try {
    const response = await fetch(`${URL_API.BASE_URL}${url}`);
    const data: T[] = await response.json();
    const dataItem = generateError(response, data);

    return dataItem;
  } catch (error) {
    return error as CustomError;
  }
};

/**
 * @description function get item by id
 *
 * @param {String} url is endpoint
 * @param {String} id is id of item selected
 *
 * @returns {Object} item
 */
const getDataById = async <T>(url: string, id: string): Promise<T | CustomError> => {
  try {
    const response = await fetch(`${URL_API.BASE_URL}${url}/${id}`);
    const data: T = await response.json();
    const dataItem = generateError(response, data);

    return dataItem;
  } catch (error) {
    return error as CustomError;
  }
};

/**
 * @description function update item which is selected
 *
 * @param {String} id is id of note
 * @param {Object} item which is selected
 * @param {String} url is endpoint
 *
 * @return {Object} item
 */
const putItem = async <T>(id: string, dataItem: T, url: string): Promise<T | CustomError> => {
  try {
    const options = {
      method: 'PATCH',
      body: JSON.stringify(dataItem),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(`${URL_API.BASE_URL}${url}/${id}`, options);
    const data: T = await response.json();
    const item = generateError(response, data);

    return item;
  } catch (error) {
    return error as CustomError;
  }
};

/**
 * @description function delete item in api
 *
 * @param {String} id is id of note
 * @param {String} url is endpoint
 */
const deleteData = async <T>(url: string, id: string): Promise<T | CustomError> => {
  try {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(`${URL_API.BASE_URL}${url}/${id}`, options);
    const data: T = await response.json();
    const dataItem = generateError(response, data);

    return dataItem;
  } catch (error) {
    return error as CustomError;
  }
};

export { getAllData, getDataById, deleteData, putItem };
