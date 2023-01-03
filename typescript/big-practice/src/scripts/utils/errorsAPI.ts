import STATUS_CODE from '../constants/statusCode';
import CustomError from './customError';

/**
 * @description function custom error based on status code from
 * response and item if this status is success
 *
 * @param {Object} response is response received after call api
 * @param {Object} items is data received after call api
 * @returns
 */
const generateError = <T>(response: Response, items: T) => {
  switch (response.status) {
    case STATUS_CODE.OK:
    case STATUS_CODE.CREATED:
      return items;
    case STATUS_CODE.BAD_REQUEST:
      throw Object.assign(
        new CustomError(`${response.status} Bad Request`, response.status)
      );
    case STATUS_CODE.UNAUTHORIZED:
      throw Object.assign(
        new CustomError(`${response.status} Unauthorized`, response.status)
      );
    case STATUS_CODE.FORBIDDEN:
      throw Object.assign(
        new CustomError(`${response.status} Forbidden`, response.status)
      );
    case STATUS_CODE.NOT_FOUND:
      throw Object.assign(
        new CustomError(`${response.status} Page Not Found`, response.status)
      );
    case STATUS_CODE.INTERNAL_SERVER_ERROR:
      throw Object.assign(
        new CustomError(
          `${response.status} Internal Server Error`,
          response.status
        )
      );
    case STATUS_CODE.SERVER_UNAVAILABLE:
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
 *
 * @param error
 */
const checkCustomError = (error: unknown) => {
  console.log(typeof error);

  if (error instanceof CustomError) {
    throw Object.assign(error);
  } else {
    throw new Error('Fail to fetch');
  }
};

export { generateError, checkCustomError };
