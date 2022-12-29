import iconTrash from '../../assets/icons/icon-in-trash.svg';
import iconLight from '../../assets/icons/icon-light.svg';

const listNotesWrapper = (note) => {
  const wrapper = document.createElement('div');
  wrapper.setAttribute('class', `${note.tab === 'trashNotes' ? 'trash-wrapper' : 'list-cover'}`);
  wrapper.innerHTML = `
    <div class="list-notes">
    </div>
    <div class="list-notes-empty">
      <div class="list-notes-empty-content hide">
        <img src="${note.tab === 'trashNotes' ? iconTrash : iconLight}" alt="icon ${note.tab === 'trashNotes' ? 'trash' : 'light'}" />
        <p class="description">${note.message}</p>
      </div>
    </div>
  `;

  return wrapper;
};

export default listNotesWrapper;
