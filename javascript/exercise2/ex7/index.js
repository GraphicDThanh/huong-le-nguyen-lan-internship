const button = document.querySelector('.button');

const createTable = () => {
  const content = document.querySelector('.content').value;
  const row = +document.querySelector('.row').value;
  const column = +document.querySelector('.column').value;

  for (let i = 0; i < row; i += 1) {
    const table = document.querySelector('#myTable').insertRow(0);
    for (let index = 0; index < column; index += 1) {
      const cell = table.insertCell(index);
      cell.innerHTML = content;
    }
  }
};

button.addEventListener('click', createTable);
