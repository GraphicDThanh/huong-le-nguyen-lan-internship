const inputTest = document.querySelectorAll(".test");
const showAlert = () => {
  alert("pressed a key in input field");
}

const showUpperCase = (e) => {
  inputTest[1].value = inputTest[1].value.toUpperCase();
  console.log(e.key);
  console.log(e.code);
}

inputTest[0].addEventListener("keydown", showAlert);
inputTest[1].addEventListener("keyup", showUpperCase);
