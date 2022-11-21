import iconClose from '../../assets/icons/icon-close.svg';

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

      <div class="header-utilities">
        <button type="button" class="btn btn-delete-bulk-actions">Delete</button>
      </div>
    </div>
  `;

  return headerElement;
};

export default headerComponent;
