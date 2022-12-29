import iconSearch from '../../assets/icons/icon-search.svg';
import iconClose from '../../assets/icons/icon-close.svg';

const inputSearchComponent = () => {
  const inputSearchElement = document.createElement('form');
  inputSearchElement.classList.add('form-search');

  inputSearchElement.innerHTML = `
    <figure class="icon-search-cover">
      <img class="icon-search" src="${iconSearch}" alt="icon search">
    </figure>
    
    <input type="text" name="search" class="search" placeholder="Search" autocomplete="off">

    <figure class="icon-close-cover">
      <img class="icon-close" src="${iconClose}" alt="icon close">
    </figure>
  `;

  return inputSearchElement;
};

export default inputSearchComponent;
