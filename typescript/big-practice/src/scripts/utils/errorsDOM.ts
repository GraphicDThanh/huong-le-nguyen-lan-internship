import { PopupMessage } from 'constants/message';
import EventHelpers from 'helpers/eventHelpers';
import renderConfirmPopup from 'components/confirmPopup';
import { querySelector } from './querySelectDOM';
import ElementHelpers from 'helpers/elementHelpers';

const elementHelpers = new ElementHelpers();
/**
 * @description function hide error of field you want to hide by
 * adding a class have properties hide and remove class valid
 *
 * @param {Element} element of input you want to hide message
 * @param {Element} label is label of input
 */
const hideError = (element: Element, label: Element): void => {
  const error = element.parentElement?.querySelector<Element>(
    '.message .message-error'
  );
  const errorIcon = element.parentElement?.querySelector<Element>(
    '.message .error-icon'
  );

  if (error && errorIcon) {
    (error as HTMLElement).innerText = '';
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
 * @param {Element} element of input you want to show message
 * @param {String} message is message error of field
 * @param {Element} label is label of input
 */
const showError = (element: Element, message: string, label: Element): void => {
  const error = element.parentElement!.querySelector(
    '.message .message-error'
  )!;
  const errorIcon = element.parentElement!.querySelector<Element>(
    '.message .error-icon'
  )!;

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
const renderPopupError = (errorMessage: string): void => {
  const overlayWrapper = querySelector('.overlay-wrapper')!;
  const eventHelpers = new EventHelpers();

  const handler = () => {
    overlayWrapper.innerHTML = '';
  };
  overlayWrapper.appendChild(
    renderConfirmPopup(`${PopupMessage.ERRORS_MSG}${errorMessage}`)
  );

  const btnClose = querySelector('.btn-close-popup')!;
  eventHelpers.addEvent(btnClose, 'click', handler);
};

export { hideError, showError, renderPopupError };
