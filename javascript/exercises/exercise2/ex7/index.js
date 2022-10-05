function createTable() {
  const content = document.querySelector('.content').value;
  const row = +document.querySelector('.row').value;
  const column = +document.querySelector('.column').value;

  if (row === 0 && column === 0) {
    document.querySelector('.error').innerHTML = 'row and column do not empty';
  } else if (row < 1 && column < 1) {
    document.querySelector('.error').innerHTML = 'row and column do not less then 1';
  } else {
    for (let i = 0; i < row; i += 1) {
      const table = document.querySelector('#myTable').insertRow(0);
      for (let index = 0; index < column; index += 1) {
        const cell = table.insertCell(index);
        cell.innerHTML = content;
      }
    }
  }
}
