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

// check empty
function checkEmpty(value, element, errorMessageEmpty) {
  const error = element.parentElement.querySelector('.message');

  if (value === '') {
    error.innerText = errorMessageEmpty;
    isErrors = true;
  }
}

// check value match with rules
function checkRules(value, element, rules, errorMessageRules) {
  const error = element.parentElement.querySelector('.message');

  if (!value.match(rules)) {
    error.innerText = errorMessageRules;
    isErrors = true;
  } else {
    isErrors = false;
  }
}

const isValidEmail = () => {
  const rules = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const emailValue = email.value;

  checkRules(emailValue, email, rules, 'Email is valid');
  checkEmpty(emailValue, email, 'Email is empty');
  checkErrors(email);

  return isErrors;
};

const isValidUsername = () => {
  const rules = /[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?]+/g;
  const usernameValue = username.value;
  const error = username.parentElement.querySelector('.message');

  // check username contain special characters
  if (usernameValue.match(rules)) {
    error.innerText = 'Username do not contain special characters';
    isErrors = true;
  // check length < 25
  } else if (usernameValue.length > 25) {
    error.innerText = 'Username maximum is 25 characters';
    isErrors = true;
  } else {
    isErrors = false;
  }
  // check empty
  checkEmpty(usernameValue, username, 'Username is empty');
  checkErrors(username);

  return isErrors;
};

const isValidPassword = () => {
  const rules = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{1,}$/g;
  const passwordValue = password.value;
  const error = password.parentElement.querySelector('.message');

  // check length > 8
  if (passwordValue.length < 8) {
    error.innerText = 'Password minimum is 8 characters ';
    isErrors = true;
  }
  // check password contain letters and at least one digit
  checkRules(passwordValue, password, rules, 'Password must contain letters and at least one digit');
  // check empty
  checkEmpty(passwordValue, password, 'Password is empty');
  checkErrors(password);

  return isErrors;
};

const isValidConfirmPassword = () => {
  const confirmPasswordValue = confirmPassword.value;
  const error = confirmPassword.parentElement.querySelector('.message');

  // check password and confirm password match
  if (confirmPasswordValue !== password.value) {
    error.innerText = 'Confirm password and password do not match';
    isErrors = true;
  }
  // check empty
  checkEmpty(confirmPasswordValue, confirmPassword, 'Confirm password is empty');
  checkErrors(confirmPassword);

  return isErrors;
};

function submitForm(e) {
  // This event is used to avoid the page reload of the submit event
  e.preventDefault();
  const details = document.querySelector('.details');

  isValidEmail();
  isValidUsername();
  isValidPassword();
  isValidConfirmPassword();

  if (!isValidEmail() && !isValidUsername() && !isValidPassword() && !isValidConfirmPassword()) {
    details.innerHTML = `Email: ${email.value} </br> Username: ${username.value} </br> Password: ${password.value} </br> Confirm Password: ${confirmPassword.value}`;
  } else {
    details.innerText = 'Invalid Data Entered';
  }
}

email.addEventListener('blur', isValidEmail);
username.addEventListener('blur', isValidUsername);
password.addEventListener('blur', isValidPassword);
confirmPassword.addEventListener('blur', isValidConfirmPassword);
signUpForm.addEventListener('submit', submitForm);
