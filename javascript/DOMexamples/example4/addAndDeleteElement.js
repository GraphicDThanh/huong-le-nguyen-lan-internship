const testElement = document.createElement("h1");
testElement.innerText = "This is h1";
document.body.appendChild(testElement);

const list = document.getElementById("myList");
function removeItem() {
  list.removeChild(list.firstElementChild);
}

function removeAll() {
  // if list still have child -> return true 
  // and keep execute until list don't have child anymore
  while (list.hasChildNodes()) {
    list.removeChild(list.firstChild);
  }
}

function replaceItem() {
  const element = list.children[0];
  const newNode = document.createTextNode("Water");
  element.replaceChild(newNode, element.firstChild);
}

document.write("Hello World!");
