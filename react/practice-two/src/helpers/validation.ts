import { MESSAGE } from 'constants/message';

/**
 * @description function validation with data of all input
 *
 * @param {Object} data is data of all input after enter value
 * @param {Array} fieldsNumber enter name of fields which we want to check in number
 *
 * @returns {Object} return object with message error
 */
const validation = <T>(data: T, fieldsNumber = ['']): T => {
  let errorsMessage = {};
  for (const [key, value] of Object.entries(data as { [key: string]: string })) {
    // Check which fields are the fields to check number
    if (fieldsNumber.includes(key)) {
      // Check value is number or not
      if (isNaN(Number(value))) {
        errorsMessage = { ...errorsMessage, [key]: MESSAGE.NOT_A_NUMBER };
        // Check value greater than 0
      } else if (Number(value) < 1) {
        errorsMessage = { ...errorsMessage, [key]: MESSAGE.GREATER_THAN_ZERO };
      } else {
        errorsMessage = { ...errorsMessage };
      }
    }

    // Check value is empty or not
    if (!value) {
      errorsMessage = { ...errorsMessage, [key]: MESSAGE.EMPTY_FIELD };
    }
  }

  return errorsMessage as T;
};

export { validation };
