// Constants
import { URL_API } from '@constants';

// Helpers
import { CustomErrors, customErrors } from '@helpers';

/**
 * @description function get all types
 *
 * @returns {Array} list item
 */
const getTypes = async <T>(): Promise<T[] | CustomErrors> => {
  try {
    const response = await fetch(`${URL_API.BASE_URL}${URL_API.TYPES}`);
    const types: T[] = await response.json();
    const listTypes = customErrors(response, types);

    return listTypes;
  } catch (error) {
    return error as CustomErrors;
  }
};

export { getTypes };
