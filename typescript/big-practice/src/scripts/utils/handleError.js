import { POPUP_MESSAGE } from '../constants/message';
import EventHelpers from '../helpers/eventHelpers';
import renderConfirmPopup from './confirmPopup';
import { selectDOMClass } from './querySelectDOM';
import ElementHelpers from '../helpers/elementHelpers';

const elementHelpers = new ElementHelpers();
/**
 * @description function hide error of field you want to hide by
 * adding a class have properties hide and remove class valid
 *
 * @param {Object} element of input you want to hide message
 * @param {Object} label is label of input
 */
const hideError = (element, label) => {
  const error = element.parentElement.querySelector('.message .message-error');
  const errorIcon = element.parentElement.querySelector('.message .error-icon');

  error.innerText = '';
  elementHelpers.addClass(errorIcon, 'hide');
  elementHelpers.removeClass(label, 'error');
  elementHelpers.removeClass(element, 'valid');
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
const showError = (element, message, label) => {
  const error = element.parentElement.querySelector('.message .message-error');
  const errorIcon = element.parentElement.querySelector('.message .error-icon');

  error.textContent = message;
  elementHelpers.removeClass(errorIcon, 'hide');
  elementHelpers.addClass(element, 'valid');
  elementHelpers.addClass(label, 'error');
};

/**
 * @description function render popup error message with message.
 * And bind event to popup, if user click close. It will disappear
 *
 * @param {String} errorMessage is message error
 */
const renderPopupError = (errorMessage) => {
  const overlayWrapper = selectDOMClass('.overlay-wrapper');
  const handler = () => {
    overlayWrapper.innerHTML = '';
  };
  overlayWrapper.appendChild(renderConfirmPopup(`${POPUP_MESSAGE.ERRORS_MSG}${errorMessage}`));

  const btnClose = selectDOMClass('.btn-close-popup');
  const eventHelpers = new EventHelpers();
  eventHelpers.addEvent(btnClose, 'click', handler);
};

export { hideError, showError, renderPopupError };
