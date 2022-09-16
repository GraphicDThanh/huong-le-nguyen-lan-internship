// static properties
class Article {
  static publisher = "Lan Huong";

  constructor(publisher) {
    this.publisher = publisher;
  }

  change(new_value) {
    this.constructor.publisher = new_value;
  }

  static move() {
    console.log(this.publisher);
  }

  show() {
    console.log(this.constructor.publisher);
  }
}


console.log(Article.publisher);
// not need to initialize because its a static method
Article.move();
// show is a public method so we need to initialize
let newArticle = new Article();
newArticle.show();


class Person {
  static name;
  static age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  } 

  static old(name, age) {
    if (age > 30) {
      console.log(name + " is too old");
    } else {
      console.log(name + " still young");
    }
  } 

  walk() {
    if (this.age > 40) {
      console.log(this.name + " need to walk");
    } else {
      console.log(this.name + " not need to walk");
    }
  }
}

Person.old("Lam", 10);
let lam = new Person("Lam", 50);
console.log(lam.name);
lam.walk();

// private properties
class Circle {
  #radius = 0;

  constructor(radius) {
    this.#radius = radius;
  }

  get area() {
    return Math.PI * Math.pow(this.#radius, 2);
  }

  setRadius(value) {
    if (typeof value === 'number' && value > 0) {
      return this.#radius = value;
    } else {
      throw 'The radius must be a positive number';
    }
  }

  getRadius() {
    return this.#radius;
  }
}

let circle = new Circle(10);
console.log("radius " + circle.radius);
console.log(circle);
console.log("circle: " + circle.area);
circle.setRadius(30);
console.log(circle.getRadius());

class Something {
  #property;

  constructor(property){
    this.#property = property;
  }

  publicMethod() {
    return this.#privateMethod();
  }

  #privateMethod() {
    console.log(this.#property);
    return 'hello world';
  }

  getPrivateMessage() {
    return this.#property;
  }
}

let sth = new Something("Hello");
console.log(sth.property);
console.log(sth.getPrivateMessage());
sth.publicMethod();

class Animal {
  #name;
  #legs;
  #noise;

  constructor(name, legs, noise) {
    this.#name = name;
    this.#legs = legs;
    this.#noise = noise;
  }

  #speak() {
    return console.log(`${this.#name} says ${this.#noise}`);
  }

  #walk() {
    return console.log(`${this.#name} walks on ${this.#legs} legs`);
  }

  actions() {
    let action = this.#speak() + this.#walk();
    return action;
  }

  set eats(food) {
    this.food = food;
  }

  get dinner() {
    return `${this.#name} eats ${this.food} for dinner`;
  }
}

const rex = new Animal("Rex", 4, "woof");
console.log(rex);
rex.eats = "ants";
console.log(rex.dinner);
rex.actions();
