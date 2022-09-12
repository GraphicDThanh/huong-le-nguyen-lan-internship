const car = {
  color: "blue",
  "the color": "yellow"
}

console.log(car["the color"]);
console.log(car.color);
console.log(car.brand);

const myCar = {
  brand: {
    name: "Ford"
  },
  color: "yellow"
}
console.log("Nested Objects");
console.log(myCar.brand.name);
console.log(myCar.color);
console.log(myCar["brand"]["name"]);

