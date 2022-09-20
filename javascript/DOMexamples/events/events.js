const changeText = () => {
  const p = document.querySelector("p");
  p.innerText = "I changed because of an inline event handler.";
}

const changeText2 = () => {
  const p = document.querySelector("p");
  p.innerText = "I changed because of an event handler property.";
}
const button = document.querySelectorAll("button");
button[1].onclick = changeText2;
