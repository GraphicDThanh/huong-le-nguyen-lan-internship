import { POPUP_MESSAGE } from '../constants/message';
import renderConfirmPopup from './confirmPopup';
import { selectDOMClass } from './querySelectDOM';

/**
 * @description function hide error of field you want to hide by
 * adding a class have properties hide and remove class valid
 *
 * @param {Object} element of input you want to hide message
 */
const hideError = (element) => {
  const error = element.parentElement.querySelector('.message .message-error');
  const errorIcon = element.parentElement.querySelector('.message .error-icon');

  error.innerText = '';
  errorIcon.classList.add('hide');
  element.classList.remove('valid');
};

/**
 * @description function show error of field you want to
 * show and message error of this field by remove class
 * hide and add class valid
 *
 * @param {Object} element of input you want to show message
 * @param {String} message is message error of field
 */
const showError = (element, message) => {
  const error = element.parentElement.querySelector('.message .message-error');
  const errorIcon = element.parentElement.querySelector('.message .error-icon');

  error.textContent = message;
  errorIcon.classList.remove('hide');
  element.classList.add('valid');
};

/**
 * @description function render popup error message with message.
 * And bind event to popup, if user click close. It will disappear
 *
 * @param {String} errorMessage is message error
 */
const renderPopupError = (errorMessage) => {
  const overlayCover = selectDOMClass('.overlay-cover');
  overlayCover.appendChild(renderConfirmPopup(`${POPUP_MESSAGE.ERRORS_MSG}${errorMessage}`));

  const btnClose = selectDOMClass('.btn-close-popup');
  btnClose.addEventListener('click', () => {
    overlayCover.innerHTML = '';
  });
};

export { hideError, showError, renderPopupError };
