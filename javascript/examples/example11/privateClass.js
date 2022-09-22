// Private Fields
class Circle {
  #radius;

  constructor(value) {
    this.#radius = value;
  }

  get area() {
    return Math.PI * Math.pow(this.#radius, 2);
  }
}

let shades = new Circle(10);
console.log(shades.area); //314.1592653589793

//Using getter and setter to access private fields
class Circle2 {
  #radius = 0;

  constructor(radius) {
    this.radius = radius;
  }

  get area() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  set radius(value) {
    if (typeof value === 'number' && value > 0) {
      this.#radius = value;
    } else {
      throw 'The radius must be a positive number';
    }
  }

  get radius() {
    return this.#radius;
  }
}

let circle = new Circle2(2);
console.log(circle.area);

// Private fields and subclasses
class Cylinder extends Circle {
  #height;
  constructor(radius, height) {
    super(radius);
    this.#height = height;

    // cannot access the #radius of the Circle class here
  }
}

//The in operator: check private fields exist
class Circle3 {
  #radius = 0;
  static #count = 0;

  constructor(radius) {
    this.radius = radius;
    Circle3.#count++;
  }
  
  get area() {
    return Math.PI * Math.pow(this.radius, 2);
  }

  set radius(value) {
    if (typeof value === 'number' && value > 0) {
      this.#radius = value;
    } else {
      throw 'The radius must be a positive number';
    }
  }

  get radius() {
    return this.#radius;
  }

  static hasRadius(circle) {
    return #radius in circle;
  }

  static getCount() {
    return Circle3.#count;
  }
}

let newCircle = new Circle3(10);

console.log(Circle3.hasRadius(newCircle));

//Static private fields
let circles = [new Circle(10), new Circle3(20), new Circle3(30)];

console.log(Circle3.getCount());
