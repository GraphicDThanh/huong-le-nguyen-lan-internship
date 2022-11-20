/**
 * @description function create confirm message
 *
 * @param {String} message of popup
 * @param {String} typeButton type of button
 * @param {Object} note get when click on the note you want to choose
 *
 * @returns {Object} confirmMessage
 */
const renderConfirmPopup = (message, typeButton, note) => {
  const confirmMessage = document.createElement('div');
  confirmMessage.setAttribute('class', 'overlay');

  confirmMessage.innerHTML = `
    <div class="confirm-message">
      <p>${message}</p>
      <div class="group-buttons">
        <button class="btn btn-close-popup" type="button" data-id="${note ? note.id : ''}">Close</button>
        ${typeButton ? `<button class="btn btn-submit-action" type="button" data-id="${note.id}">${typeButton}</button>` : ''} 
      </div>
    </div>
    `;
  return confirmMessage;
};

export default renderConfirmPopup;
