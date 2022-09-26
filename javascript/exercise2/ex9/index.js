const button = document.querySelector('input');

const getOptions = () => {
  const selectColor = document.getElementById('mySelect');
  const selectLength = selectColor.length;
  let selectItem = 'length : ';

  selectItem += selectLength;
  for (let i = 0; i < selectLength; i += 1) {
    selectItem += `\n ${selectColor.options[i].text}`;
  }
  alert(selectItem);
};

button.addEventListener('click', getOptions);
