// Constants
import { URL_API } from '@constants';

// Helpers
import { CustomErrors, customErrors } from '@helpers';

/**
 * @description function get all statuses
 *
 * @returns {Array} list statuses
 */
const getStatuses = async <T>(): Promise<T[] | CustomErrors> => {
  try {
    const response = await fetch(`${URL_API.BASE_URL}${URL_API.STATUSES}`);
    const status: T[] = await response.json();
    const listStatuses = customErrors(response, status);

    return listStatuses;
  } catch (error) {
    return error as CustomErrors;
  }
};

export { getStatuses };
