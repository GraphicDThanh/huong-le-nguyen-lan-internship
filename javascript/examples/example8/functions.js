function getData() {
  console.log("get data");
}

function getData(color) {
  console.log(color);
}

function getData(color, brand) {
  if (typeof brand !== "undefined") {
    console.log(brand);
  }
  console.log(color);
}

function getName() {
  return "hi";
}

function getList() {
  return ["Flavio", 37];
}

getData("black");
getData("yellow", "audi");
let result = getName();
console.log(result);
let [name, age] = getList();

const getDatas = () => {
  const doSomeThing = () => {
    doSomeThing();
    return "test";
  }
}
