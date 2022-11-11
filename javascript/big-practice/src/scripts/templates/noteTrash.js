import iconTrash from '../../assets/icons/icon-in-trash.svg';

const noteTrash = () => {
  const trashWrapper = document.createElement('div');
  trashWrapper.setAttribute('class', 'trash-wrapper');

  trashWrapper.innerHTML = `
    <div class="list-cover">
      <div class="list-notes">
      </div>
      <div class="list-notes-empty">
        <div class="list-notes-empty-content hide">
          <img src="${iconTrash}" alt="icon trash">
          <p class="description">No notes in Trash</p>
        </div>
      </div>
    </div>
  `;

  return trashWrapper;
};

export default noteTrash;
