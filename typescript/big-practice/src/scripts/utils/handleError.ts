import { POPUP_MESSAGE } from '../constants/message';
import EventHelpers from '../helpers/eventHelpers';
import renderConfirmPopup from './confirmPopup';
import { selectDOMClass } from './querySelectDOM';
import ElementHelpers from '../helpers/elementHelpers';
import STATUS_CODE from '../constants/statusCode';
import CustomError from './customError';

const elementHelpers = new ElementHelpers();
/**
 * @description function hide error of field you want to hide by
 * adding a class have properties hide and remove class valid
 *
 * @param {Object} element of input you want to hide message
 * @param {Object} label is label of input
 */
const hideError = (element: HTMLElement, label: HTMLElement) => {
  const error = element.parentElement?.querySelector<HTMLElement>(
    '.message .message-error'
  );
  const errorIcon = element.parentElement?.querySelector<HTMLElement>(
    '.message .error-icon'
  );

  if (error && errorIcon) {
    error.innerText = '';
    elementHelpers.addClass(errorIcon, 'hide');
    elementHelpers.removeClass(label, 'error');
    elementHelpers.removeClass(element, 'valid');
  }
};

/**
 * @description function show error of field you want to
 * show and message error of this field by remove class
 * hide and add class valid
 *
 * @param {Object} element of input you want to show message
 * @param {String} message is message error of field
 * @param {Object} label is label of input
 */
const showError = (
  element: HTMLElement,
  message: string,
  label: HTMLElement
) => {
  const error = element.parentElement?.querySelector('.message .message-error');
  const errorIcon = element.parentElement?.querySelector<HTMLElement>(
    '.message .error-icon'
  );

  if (error && errorIcon) {
    error.textContent = message;
    elementHelpers.removeClass(errorIcon, 'hide');
    elementHelpers.addClass(element, 'valid');
    elementHelpers.addClass(label, 'error');
  }
};

/**
 * @description function render popup error message with message.
 * And bind event to popup, if user click close. It will disappear
 *
 * @param {String} errorMessage is message error
 */
const renderPopupError = (errorMessage: string) => {
  const overlayWrapper = selectDOMClass('.overlay-wrapper');
  const eventHelpers = new EventHelpers();

  if (overlayWrapper) {
    const handler = () => {
      overlayWrapper.innerHTML = '';
    };
    overlayWrapper.appendChild(
      renderConfirmPopup(`${POPUP_MESSAGE.ERRORS_MSG}${errorMessage}`)
    );

    const btnClose = selectDOMClass('.btn-close-popup');
    eventHelpers.addEvent(btnClose, 'click', handler);
  }
};

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

const checkCustomError = (error: unknown) => {
  if (error instanceof CustomError) {
    throw Object.assign(error);
  } else {
    throw new Error('Fail to fetch');
  }
};

export {
  hideError,
  showError,
  renderPopupError,
  generateError,
  checkCustomError,
};
