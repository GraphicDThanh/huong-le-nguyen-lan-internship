const demoId = document.querySelector("#demo-id"); 
demoId.textContent = "Demo ID text updated.";

const demoClass = document.querySelectorAll(".demo-class");
demoClass.forEach(element => {
  element.textContent = "All demo classes updated.";
});

console.log(demoClass[0].textContent);

const img = document.querySelector("img");
console.log(img.hasAttribute("src"));
console.log(img.getAttribute("src"));
img.removeAttribute("src");
img.setAttribute("src", "https://js-tutorials.nyc3.digitaloceanspaces.com/octopus.png");
