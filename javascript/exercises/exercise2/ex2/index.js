const form = document.querySelector('#form1');
const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');

const getFormValue = (e) => {
  // This event is used to avoid the page reload of the submit event
  e.preventDefault();
  console.log(firstName.value);
  console.log(lastName.value);
};
form.addEventListener('submit', getFormValue);
