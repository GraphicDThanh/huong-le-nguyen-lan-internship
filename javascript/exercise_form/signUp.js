const email = document.querySelector('.email');
const username = document.querySelector('.username');
const password = document.querySelector('.password');
const confirmPassword = document.querySelector('.confirm-password');
const signUpForm = document.getElementById('sign-up-form');
let isErrors = false;

function checkErrors(element) {
  const error = element.parentElement.querySelector('.message');

  if (isErrors) {
    element.classList.add('valid');
    error.style.display = 'block';
  } else {
    element.classList.remove('valid');
    error.style.display = 'none';
  }
}

const checkEmail = () => {
  const rules = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const error = email.parentElement.querySelector('.message');
  const emailValue = email.value;

  // check empty
  if (emailValue.length === 0) {
    error.innerText = 'Email is empty';
    isErrors = true;
  // check email
  } else if (!emailValue.match(rules)) {
    error.innerText = 'Email is not valid !';
    isErrors = true;
  } else {
    isErrors = false;
  }

  checkErrors(email);

  return isErrors;
};

const checkUsername = () => {
  const rules = /\W/g;
  const usernameValue = username.value;
  const error = username.parentElement.querySelector('.message');

  // check empty
  if (usernameValue.length === 0) {
    error.innerText = 'Username is empty';
    isErrors = true;
  // check username contain special characters
  } else if (usernameValue.match(rules)) {
    error.innerText = 'Username do not contain special characters';
    isErrors = true;
  // check length < 25
  } else if (usernameValue.length > 25) {
    error.innerText = 'Username maximum is 25 characters';
    isErrors = true;
  } else {
    isErrors = false;
  }

  checkErrors(username);

  return isErrors;
};

const checkPassword = () => {
  const rules = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{1,}$/g;
  const passwordValue = password.value;
  const error = password.parentElement.querySelector('.message');

  // check empty
  if (passwordValue.length === 0) {
    error.innerText = 'Password is empty';
    isErrors = true;
  // check password contain letters and at least one digit
  } else if (!passwordValue.match(rules)) {
    error.innerText = 'Password must contain letters and at least one digit';
    isErrors = true;
  // check length > 8
  } else if (passwordValue.length < 8) {
    error.innerText = 'Password minimum is 8 characters ';
    isErrors = true;
  } else {
    isErrors = false;
  }

  checkErrors(password);

  return isErrors;
};

const checkConfirmPassword = () => {
  const confirmPasswordValue = confirmPassword.value;
  const error = confirmPassword.parentElement.querySelector('.message');

  // check empty
  if (confirmPasswordValue.length === 0) {
    error.innerText = 'Confirm password is empty';
    isErrors = true;
  // check password and confirm password match
  } else if (confirmPasswordValue !== password.value) {
    error.innerText = 'Confirm password and password do not match';
    isErrors = true;
  } else {
    isErrors = false;
  }

  checkErrors(confirmPassword);

  return isErrors;
};

function submitForm(e) {
  // This event is used to avoid the page reload of the submit event
  e.preventDefault();
  const details = document.querySelector('.details');

  checkEmail();
  checkUsername();
  checkPassword();
  checkConfirmPassword();

  if (!checkEmail() && !checkUsername() && !checkPassword() && !checkConfirmPassword()) {
    details.innerHTML = `Email: ${email.value} </br> Username: ${username.value} </br> Password: ${password.value} </br> Confirm Password: ${confirmPassword.value}`;
  } else {
    details.innerText = 'Invalid Data Entered';
  }
}

email.addEventListener('blur', checkEmail);
username.addEventListener('blur', checkUsername);
password.addEventListener('blur', checkPassword);
confirmPassword.addEventListener('blur', checkConfirmPassword);
signUpForm.addEventListener('submit', submitForm);
