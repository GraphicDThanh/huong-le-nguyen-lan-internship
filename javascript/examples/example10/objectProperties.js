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

// Delete a property
const student = {
  id: 1,
  name: "Huong",
  mark: 10
}

delete student.id;
console.log("Delete a property");
console.log(student);
