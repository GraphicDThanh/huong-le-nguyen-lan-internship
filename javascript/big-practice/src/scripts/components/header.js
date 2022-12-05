import iconClose from '../../assets/icons/icon-close.svg';
import STORAGE_KEYS from '../constants/storageKeys';
import iconTrash from '../../assets/icons/icon-trash-blue.svg';

const buttonBulkActionsComponent = () => {
  const headerBulkActions = document.createElement('div');
  headerBulkActions.classList.add('header-utilities');

  headerBulkActions.innerHTML = `
    ${sessionStorage.getItem(STORAGE_KEYS.PAGE_NUMBER) === '0'
    ? `<figure class="item-utilities btn-delete-bulk-actions">
            <img src="${iconTrash}" alt="icon trash">
          </figure>`
    : '<button type="button" class="btn btn-delete-bulk-actions">Delete</button>'}
  `;

  return headerBulkActions;
};

const headerComponent = () => {
  const headerElement = document.createElement('header');
  headerElement.classList.add('header-wrapper');

  headerElement.innerHTML = `
    <div class="header-default">
      <div class="header-menu">
      </div>
    </div>

    <div class="header-after-select">
      <div class="count-and-close">
        <figure class="icon-close-cover">
          <img class="icon-close" src="${iconClose}" alt="icon close">
        </figure>
        <p class="count-selected">0 Selected</p>
      </div>
    </div>
  `;

  return headerElement;
};

export { headerComponent, buttonBulkActionsComponent };
