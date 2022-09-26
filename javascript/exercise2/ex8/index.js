const selectBox = document.querySelector('#colorSelect');
const button = document.querySelector('input');

const removeColor = () => {
  selectBox.remove(selectBox.selectedIndex);
};

button.addEventListener('click', removeColor);
