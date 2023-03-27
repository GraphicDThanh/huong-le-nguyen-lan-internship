import { MESSAGE_ERRORS } from '@constants';

/**
 * @description function check empty or not
 *
 * @param {string} value of input
 *
 * @returns {string} a message error or empty string
 */
const checkEmpty = (value: string): string => {
  switch (true) {
    // case empty
    case !value:
      return MESSAGE_ERRORS.EMPTY_FIELD;
    default:
      return '';
  }
};

/**
 * @description function check value is number or not
 *
 * @param {String} value of input
 *
 * @returns {string} a message error or empty string
 */
const checkNumber = (value: string): string => {
  switch (true) {
    // case empty
    case !value:
      return MESSAGE_ERRORS.EMPTY_FIELD;
    // case error if value not number
    case isNaN(Number(value)):
      return MESSAGE_ERRORS.NOT_A_NUMBER;
    // case error if value less than 0
    case Number(value) < 1:
      return MESSAGE_ERRORS.GREATER_THAN_ZERO;
    default:
      return '';
  }
};

/**
 * @description function validation with data of all input
 *
 * @param {Object} data is data of all input after enter value
 * @param {Array} fieldsNumber enter name of fields which we want to check in number
 *
 * @returns {Object} return object with message error
 */
const validation = <T extends object>(data: T, fieldsNumber = ['']): T => {
  let errorsMessage = {};
  for (const [key, value] of Object.entries(data)) {
    // Check which fields want to check as number
    if (fieldsNumber.includes(key)) {
      errorsMessage = { ...errorsMessage, [key]: checkNumber(String(value)) };
    }
    // Check value is empty or not
    else {
      errorsMessage = { ...errorsMessage, [key]: checkEmpty(value) };
    }
  }

  return errorsMessage as T;
};

export default validation;
