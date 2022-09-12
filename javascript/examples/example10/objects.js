function ObjectCar(brand, model) {
  this.brand = brand;
  this.model = model;
  this.getDetails = () => {
    return this.brand + " " + this.model;
  }
}

var myCar = new ObjectCar("Ford", "Fiesta");
console.log(myCar.getDetails());

// Reference types
const car = {
  color: "blue"
}

const anotherCar = car;
anotherCar.color = "yellow";
console.log(car.color);

// Primitive types
let age = 36;
let myAge = age;
console.log("My Age: " + myAge);
console.log("Age: " + age);
