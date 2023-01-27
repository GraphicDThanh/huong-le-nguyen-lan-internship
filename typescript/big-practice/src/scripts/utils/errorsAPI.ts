import StatusCode from 'constants/statusCode';
import CustomError from './customError';

/**
 * @description function custom error based on status code from
 * response and item if this status is success
 *
 * @param {Object} response is response received after call api
 * @param {Object} items is data received after call api
 * @returns
 */
const generateError = <T>(response: Response, items: T): T => {
  switch (response.status) {
    case StatusCode.OK:
    case StatusCode.CREATED:
      return items;
    case StatusCode.BAD_REQUEST:
      throw Object.assign(
        new CustomError(`${response.status} Bad Request`, response.status)
      );
    case StatusCode.UNAUTHORIZED:
      throw Object.assign(
        new CustomError(`${response.status} Unauthorized`, response.status)
      );
    case StatusCode.FORBIDDEN:
      throw Object.assign(
        new CustomError(`${response.status} Forbidden`, response.status)
      );
    case StatusCode.NOT_FOUND:
      throw Object.assign(
        new CustomError(`${response.status} Page Not Found`, response.status)
      );
    case StatusCode.INTERNAL_SERVER_ERROR:
      throw Object.assign(
        new CustomError(
          `${response.status} Internal Server Error`,
          response.status
        )
      );
    case StatusCode.SERVER_UNAVAILABLE:
      throw Object.assign(
        new CustomError(
          `${response.status} Service Unavailable`,
          response.status
        )
      );
    default:
      throw Object.assign(
        new CustomError(`${response.status} Fail to fetch`, response.status)
      );
  }
};

/**
 * @description check error transmitted is class CustomError or not
 *
 * @param {Object} error is custom error message
 */
const checkCustomError = (error: unknown) => {
  if (error instanceof CustomError) {
    throw Object.assign(error);
  } else {
    throw new Error('Fail to fetch');
  }
};

export { generateError, checkCustomError };
