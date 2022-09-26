const button = document.querySelector('input');
const selectColor = document.getElementById('mySelect');
const selectLength = selectColor.length;

let selectItem = 'length : ';
const getOptions = () => {
  selectItem += selectLength;
  for (let i = 0; i < selectLength; i += 1) {
    selectItem += `\n ${selectColor.options[i].text}`;
  }
  alert(selectItem);
};

button.addEventListener('click', getOptions);
