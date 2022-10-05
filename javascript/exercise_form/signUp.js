const email = document.querySelector('.email');
const username = document.querySelector('.username');
const password = document.querySelector('.password');
const confirmPassword = document.querySelector('.confirm-password');
const signUpForm = document.getElementById('sign-up-form');
let isError = false;

/**
 * @description Show and hide error
 *
 * @param {Object} element of input
 * @param {Boolean} isValid is value of isError
 */
function isShowHideErrors(element, isValid) {
  const error = element.parentElement.querySelector('.message');

  if (isValid) {
    element.classList.add('valid');
    error.style.display = 'block';
  } else {
    element.classList.remove('valid');
    error.style.display = 'none';
  }

  return isValid;
}

/**
 * @description check empty input
 *
 * @param {String} value is value of input
 * @param {Object} element of input
 * @param {String} errorMessageEmpty is error message
 *
 * @return {Boolean} isError
 */
function isValidEmpty(value, element, errorMessageEmpty) {
  const error = element.parentElement.querySelector('.message');

  if (value === '') {
    error.innerText = errorMessageEmpty;
    return true;
  }

  return false;
}

/**
 * @description check value match with rules
 *
 * @param {Object} elementRules is object keep value of input,
 * element input, rules and error message
 *
 * @return {Boolean} isError
 */
function isValidRules(elementRules) {
  const error = elementRules.element.parentElement.querySelector('.message');

  if (!elementRules.value.match(elementRules.rule)) {
    error.innerText = elementRules.message;
    return true;
  }

  return false;
}

/**
 * @description check error of email
 *
 * @return {Boolean} isError
 */
const isValidEmail = () => {
  const rules = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const emailValue = email.value;

  const emailRules = {
    value: emailValue,
    element: email,
    rule: rules,
    message: 'Email is valid',
  };
  const isRules = isValidRules(emailRules);
  const isEmpty = isValidEmpty(emailValue, email, 'Email is empty');

  // check emptpy
  if (isEmpty) {
    isError = true;
    return isShowHideErrors(email, isError);
  }

  // check email
  if (isRules) {
    isError = true;
    return isShowHideErrors(email, isError);
  }

  isError = false;
  isShowHideErrors(email, isError);
  return isError;
};

/**
 * @description check error of username
 *
 * @return {Boolean} isError
 */
const isValidUsername = () => {
  const rules = /[!@#$%^&*()_+\-=\\[\]{};':"\\|,.<>\\/?]+/g;
  const usernameValue = username.value;
  const error = username.parentElement.querySelector('.message');
  const isEmpty = isValidEmpty(usernameValue, username, 'Username is empty');

  // check empty
  if (isEmpty) {
    isError = true;
    return isShowHideErrors(username, isError);
  }

  // check username contain special characters
  if (usernameValue.match(rules)) {
    error.innerText = 'Username do not contain special characters';
    isError = true;
    return isShowHideErrors(username, isError);
  }

  // check length must be less than 25 characters
  if (usernameValue.length > 25) {
    error.innerText = 'Username maximum is 25 characters';
    isError = true;
    return isShowHideErrors(username, isError);
  }

  isError = false;
  isShowHideErrors(username, isError);

  return isError;
};

/**
 * @description check error of password
 *
 * @return {Boolean} isError
 */
const isValidPassword = () => {
  const rules = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{1,}$/g;
  const passwordValue = password.value;
  const error = password.parentElement.querySelector('.message');

  const passwordRules = {
    value: passwordValue,
    element: password,
    rule: rules,
    message: 'Password must contain letters and at least one digit',
  };
  const isRules = isValidRules(passwordRules);
  const isEmpty = isValidEmpty(passwordValue, password, 'Password is empty');

  // check empty
  if (isEmpty) {
    isError = true;
    return isShowHideErrors(password, isError);
  }

  // check password contain letters and at least one digit
  if (isRules) {
    isError = true;
    return isShowHideErrors(password, isError);
  }

  // check password length must be more than 8 characters
  if (passwordValue.length < 8) {
    error.innerText = 'Password minimum is 8 characters ';
    isError = true;
    return isShowHideErrors(password, isError);
  }

  isError = false;
  isShowHideErrors(password, isError);

  return isError;
};

/**
 * @description check confirm password matches with password
 *
 * @return {Boolean} isError
 */
const isValidConfirmPassword = () => {
  const confirmPasswordValue = confirmPassword.value;
  const error = confirmPassword.parentElement.querySelector('.message');
  const isEmpty = isValidEmpty(confirmPasswordValue, confirmPassword, 'Confirm password is empty');

  // check empty
  if (isEmpty) {
    isError = true;
    return isShowHideErrors(confirmPassword, isError);
  }

  // check password and confirm password match
  if (confirmPasswordValue !== password.value) {
    error.innerText = 'Confirm password and password do not match';
    isError = true;
    return isShowHideErrors(confirmPassword, isError);
  }

  isError = false;
  isShowHideErrors(confirmPassword, isError);

  return isError;
};

/**
 * @description function of form submit
 *
 * @param {Object} e is a submit event
 */
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
