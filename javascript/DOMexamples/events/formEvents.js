// submit
const inputData = () => {
  const name = document.querySelector(".name").value;
  alert(name);
}
const form = document.querySelector("form");
form.addEventListener("submit", inputData);

// focus
const inputForm = document.querySelector(".name");
const inputColor = () => {
  inputForm.style.backgroundColor = "yellow";
}
inputForm.addEventListener("focus", inputColor);

// blur
const blurForm = () => {
  inputForm.value = inputForm.value.toUpperCase();
}
inputForm.addEventListener("blur", blurForm);
