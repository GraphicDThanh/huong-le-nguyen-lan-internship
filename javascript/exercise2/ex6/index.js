const button = document.querySelector('.button');

const changeContent = () => {
  const rowValue = +document.querySelector('.row').value;
  const columnValue = +document.querySelector('.column').value;
  const content = document.querySelector('.content').value;
  const list = document.querySelector('#myTable').rows[rowValue - 1];

  list.querySelectorAll('td')[columnValue - 1].innerHTML = content;
};

button.addEventListener('click', changeContent);
