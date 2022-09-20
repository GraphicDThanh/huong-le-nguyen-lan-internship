const change = () => {
  const p = document.querySelector("p");
  p.innerText = "changed !";
}

const button = document.querySelector("button");
button.addEventListener("click", change);

const demo = document.querySelector(".demo");
const changeText = () => {
  demo.innerHTML += "click ! </br>";
}

const overButton = () => {
  demo.innerHTML += "over button ! </br>";
}

const outButton = () => {
  demo.innerHTML += "out button ! </br>";
}

const button2 = document.querySelector(".btn");
button2.addEventListener("click", changeText);
button2.addEventListener("mouseover", overButton);
button2.addEventListener("mouseout", outButton);
