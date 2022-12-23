/**
 * @description function create confirm message with design message, type of button
 * and item
 *
 * @param {String} message is message of popup
 * @param {String} typeButton type of button
 * @param {Object} item is information of item is selected
 *
 * @returns {Object} confirmMessage
 */
const renderConfirmPopup = (message, typeButton, item) => {
  const confirmMessage = document.createElement('div');
  confirmMessage.setAttribute('class', 'overlay');

  confirmMessage.innerHTML = `
    <div class="confirm-message">
      <p>${message}</p>
      <div class="group-buttons">
        <button class="btn btn-close-popup" type="button" ${item ? `data-id="${item.id}"` : ''}>Close</button>
        ${typeButton ? `<button class="btn btn-submit-action" type="button" ${item ? `data-id="${item.id}"` : ''}>${typeButton}</button>` : ''} 
      </div>
    </div>
    `;
  return confirmMessage;
};

export default renderConfirmPopup;
