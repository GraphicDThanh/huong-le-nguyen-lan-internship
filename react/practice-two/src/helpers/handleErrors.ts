import { STATUS_CODE } from 'constants/statusCode';

type CustomError = {
  messageError: string;
  status: number;
};

/**
 * @description custom errors with messageError and status
 *
 * @param {String} messageError is messageError custom
 * @param {Number} status is status code after send request
 *
 * @returns {Object} return a object with new messageError and status
 */
const customError = (messageError: string, status: number): CustomError => {
  return {
    messageError,
    status,
  };
};

/**
 * @description function custom error based on status code from
 * response and item if this status is success
 *
 * @param {Object} response is response received after call api
 * @param {Object} items is data received after call api
 *
 * @returns {Object}
 */
const generateError = <T>(response: Response, items: T): T => {
  switch (response.status) {
    case STATUS_CODE.OK:
    case STATUS_CODE.CREATED:
      return items;
    case STATUS_CODE.BAD_REQUEST:
      throw customError(`${response.status} Bad Request`, response.status);
    case STATUS_CODE.UNAUTHORIZED:
      throw customError(`${response.status} Unauthorized`, response.status);
    case STATUS_CODE.FORBIDDEN:
      throw customError(`${response.status} Forbidden`, response.status);
    case STATUS_CODE.NOT_FOUND:
      throw customError(`${response.status} Page Not Found`, response.status);
    case STATUS_CODE.INTERNAL_SERVER_ERROR:
      throw customError(`${response.status} Internal Server Error`, response.status);
    case STATUS_CODE.SERVER_UNAVAILABLE:
      throw customError(`${response.status} Service Unavailable`, response.status);
    default:
      throw customError(`${response.status} Fail to fetch`, response.status);
  }
};

export { customError, generateError };
export type { CustomError };
