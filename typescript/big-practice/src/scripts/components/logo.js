import STORAGE_KEYS from '../constants/storageKeys';
import iconLogo from '../../assets/icons/google-keep.svg';

const logoComponent = (tab) => {
  const logoElement = document.createElement('div');
  logoElement.classList.add('icon-logo');

  logoElement.innerHTML = `
    <figure class="icon-logo-cover">
      ${sessionStorage.getItem(STORAGE_KEYS.PAGE_NUMBER) === '0'
    ? `<img class="logo" src="${iconLogo}" alt="icon logo">` : ''} 
    </figure>
    <h1>${tab}</h1>
  `;

  return logoElement;
};

export default logoComponent;
