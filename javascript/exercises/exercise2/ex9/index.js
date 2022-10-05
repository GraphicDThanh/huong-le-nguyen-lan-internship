const button = document.querySelector('input');

const getOptions = () => {
  const selectColor = document.getElementById('mySelect');
  const lengthOfSelection = selectColor.length;
  let selectItem = 'length : ';

  selectItem += lengthOfSelection;
  for (let i = 0; i < lengthOfSelection; i += 1) {
    selectItem += `\n ${selectColor.options[i].text}`;
  }
  alert(selectItem);
};

button.addEventListener('click', getOptions);
