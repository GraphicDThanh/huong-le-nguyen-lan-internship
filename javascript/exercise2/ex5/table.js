const button = document.querySelector('input');

const insertRows = () => {
  const list = document.querySelector('#sampleTable').insertRow(0);
  const list1 = list.insertCell(0);
  const list2 = list.insertCell(0);
  list1.innerHTML = 'New Cell';
  list2.innerHTML = 'New Cell';
};

button.addEventListener('click', insertRows);
