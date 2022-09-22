const inputText = document.querySelector(".text");
const statusCheckbox = document.querySelector(".status");
const selectBox = document.querySelector("select");

const result = (e) => {
  let result = e.target.value;
  console.log(result);
}

const resultPress = (e) => {
  let result = e.target.value;
  if (e.code === "Enter") {
    console.log(result);
  }
}

const statusResult = (e) => {
  console.log(e.target.checked);
}

const selectResult = (e) => {
  console.log(e.target.value);
}
inputText.addEventListener("blur", result);
inputText.addEventListener("keypress", resultPress);
statusCheckbox.addEventListener("change", statusResult);
selectBox.addEventListener("change", selectResult);
