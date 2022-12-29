import avatar from '../../assets/images/avatar.png';

const menuUserComponent = () => {
  const menuUserElement = document.createElement('div');
  menuUserElement.classList.add('header-avatar');

  menuUserElement.innerHTML = `
    <div class="menu-user hide">
      <div class="menu-user-info">
        <figure class="avatar-user">
          <img src="${avatar}" alt="avatar" class="menu-avatar">
        </figure>
        <p class="menu-user-email"></p>
      </div>
      
      <div class="menu-user-actions">
        <button class="btn btn-logout">Sign out</button>
      </div>
    </div>

    <figure class="avatar-user-cover">
      <img class="avatar-user" src="${avatar}" alt="avatar">
    </figure>
  `;

  return menuUserElement;
};

export default menuUserComponent;
