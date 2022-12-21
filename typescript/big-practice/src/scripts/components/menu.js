import iconNotes from '../../assets/icons/icon-notes.svg';
import iconBell from '../../assets/icons/icon-bell.svg';
import iconPen from '../../assets/icons/icon-pen.svg';
import iconArchive from '../../assets/icons/icon-archive.svg';
import iconTrash from '../../assets/icons/icon-trash.svg';

const menuComponent = () => {
  const menuElement = document.createElement('aside');
  menuElement.classList.add('menu-aside');

  menuElement.innerHTML = `
    <nav class="nav-wrapper">
      <ul class="nav">
        <li class="nav-item" data-id="0">
          <a href="javascript:void(0)" class="nav-link" data-id="0">
            <img src="${iconNotes}" alt="icon notes"> 
            <span>Notes</span>
          </a>
        </li>
        <li class="nav-item disable">
          <a href="javascript:void(0)" class="nav-link">
            <img src="${iconBell}" alt="icon bell">
            <span>Reminders</span>
          </a>
        </li>
        <li class="nav-item disable">
          <a href="javascript:void(0)" class="nav-link">
            <img src="${iconPen}" alt="icon pen">
            <span>Edit labels</span>
          </a>
        </li>
        <li class="nav-item disable">
          <a href="javascript:void(0)" class="nav-link">
            <img src="${iconArchive}" alt="icon archive">
            <span>Archive</span>
          </a>
        </li>
        <li class="nav-item" data-id="4">
          <a href="javascript:void(0)" class="nav-link" data-id="4">
            <img src="${iconTrash}" alt="icon trash">
            <span>Trash</span>
          </a>
        </li>
      </ul>
    </nav>
  `;

  return menuElement;
};

export default menuComponent;
