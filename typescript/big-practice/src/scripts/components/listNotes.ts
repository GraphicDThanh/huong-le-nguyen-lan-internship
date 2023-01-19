import iconTrash from 'assets/icons/icon-in-trash.svg';
import iconLight from 'assets/icons/icon-light.svg';
import Menu from 'constants/menu';

interface Note {
  tab: number;
  message: string;
}

const listNotesWrapper = (note: Note): Element => {
  const wrapper = document.createElement('div');
  wrapper.setAttribute(
    'class',
    `${note.tab === Menu.TRASH_NOTES ? 'trash-wrapper' : 'list-cover'}`
  );
  wrapper.innerHTML = `
    <div class="list-notes">
    </div>
    <div class="list-notes-empty">
      <div class="list-notes-empty-content hide">
        <img src="${
          note.tab === Menu.TRASH_NOTES ? iconTrash : iconLight
        }" alt="icon ${note.tab === Menu.TRASH_NOTES ? 'trash' : 'light'}" />
        <p class="description">${note.message}</p>
      </div>
    </div>
  `;

  return wrapper;
};

export default listNotesWrapper;
