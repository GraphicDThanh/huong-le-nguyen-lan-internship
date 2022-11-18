import STORAGE_KEYS from '../constants/storageKeys';
import iconLogo from '../../assets/icons/google-keep.svg';

const logo = (tab) => {
  const logoElement = document.createElement('div');
  logoElement.classList.add('header-menu');

  logoElement.innerHTML = `
    <div class="icon-logo">
      ${sessionStorage.getItem(STORAGE_KEYS.PAGE_NUMBER) === '0'
    ? `<figure class="icon-logo-cover">
          <img class="logo" src="${iconLogo}" alt="icon logo">
        </figure>` : ''} 
      <span>${tab}</span>
    </div>
  `;

  return logoElement;
};

export default logo;
