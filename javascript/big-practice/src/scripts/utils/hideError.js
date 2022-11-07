/**
 * @description function hide error
 *
 * @param {Object} element of input
 */
const hideError = (element) => {
  const error = element.parentElement.querySelector('.message .message-error');
  const errorIcon = element.parentElement.querySelector('.message .error-icon');

  error.innerText = '';
  errorIcon.classList.add('hide');
  element.classList.remove('valid');
};

export default hideError;
