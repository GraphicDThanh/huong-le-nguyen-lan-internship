import { DataProduct } from 'components/Table/Products/ProductRow';
import { MESSAGE_ERRORS } from '@constants';

const checkEmpty = (value: string) => {
  switch (true) {
    // case empty
    case value === '':
      return MESSAGE_ERRORS.EMPTY_FIELD;
    default:
      return '';
  }
};

const checkNumber = (value: string) => {
  switch (true) {
    // case empty
    case value === '':
      return MESSAGE_ERRORS.EMPTY_FIELD;
    // case error if value not number
    case isNaN(Number(value)):
      return MESSAGE_ERRORS.NOT_A_NUMBER;
    // case error if value less than 0
    case Number(value) < 0:
      return MESSAGE_ERRORS.GREATER_THAN_ZERO;
    default:
      return '';
  }
};

const validation = (value: DataProduct) => {
  let isValid = true;
  const result = {
    productName: '',
    productImage: '',
    brandImage: '',
    quantity: '',
    brandName: '',
    price: '',
  };

  result.productName = checkEmpty(value.productName);
  result.brandName = checkEmpty(String(value.brandName));
  result.quantity = checkNumber(String(value.quantity));
  result.price = checkNumber(String(value.price));

  if (result.brandName || result.price || result.productName || result.quantity) {
    isValid = false;
  } else {
    isValid = true;
  }
  return { isValid, result };
};

/**
 * @description function validation with data of all input
 *
 * @param {Object} data is data of all input after enter value
 * @param {Array} fieldsNumber enter name of fields which we want to check in number
 *
 * @returns {Object} return object with message error
 */
const validations = <T>(data: T, fieldsNumber = ['']): T => {
  let errorsMessage = {};
  for (const [key, value] of Object.entries(data as { [key: string]: string })) {
    // Check which fields are the fields to check number
    if (fieldsNumber.includes(key)) {
      // // Check value is number or not
      // if (isNaN(Number(value))) {
      //   errorsMessage = { ...errorsMessage, [key]: MESSAGE_ERRORS.NOT_A_NUMBER };
      //   // Check value greater than 0
      // } else if (Number(value) < 1) {
      //   errorsMessage = { ...errorsMessage, [key]: MESSAGE_ERRORS.GREATER_THAN_ZERO };
      // } else {
      //   errorsMessage = { ...errorsMessage };
      // }
      errorsMessage = { ...errorsMessage, [key]: checkNumber(String(value)) };
    }

    // // Check value is empty or not
    // if (!value) {
    //   errorsMessage = { ...errorsMessage, [key]: MESSAGE_ERRORS.EMPTY_FIELD };
    // }
  }

  return errorsMessage as T;
};

export { validation };
