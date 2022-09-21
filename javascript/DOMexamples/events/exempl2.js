const demo = document.querySelector(".demo");
const a = "KeyA";
const w = "KeyW";
const s = "KeyS";
const d = "KeyD";

const press = (e) => {
  switch (e.code) {
    case a:
      demo.innerHTML = "Left";
      break;
    case w:
      demo.innerHTML = "Up";
      break;
    case s:
      demo.innerHTML = "Down";
      break;
    case d:
      demo.innerHTML = "Right";
      break;
  }
}

document.addEventListener("keydown", press);
