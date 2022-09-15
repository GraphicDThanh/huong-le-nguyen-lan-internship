class StaticMethod {
  static createDate() {
    console.log("Today in static method");
  }
}

StaticMethod.createDate();

class Animal {
  name;
  color;

  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  static animalRun(name, color) {
    let animal = name + " and " + color;
    console.log("Animal is: " + animal);
  }
}

let newAnimal = Animal.animalRun("cat", "yellow");

// Private Method
class PrivateMethod {
  #createDate() {
    console.log("Today in private method");
  }

  newCreateDate() {
    return this.#createDate();
  }
}

const newDate = new PrivateMethod();
newDate.newCreateDate();

class Person {
  firstName;
  lastName;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  #firstOfName() {
    return this.firstName;
  }

  #lastOfName() {
    return this.lastName;
  }

  fullName() {
    let full = this.#lastOfName() + " " +this.#firstOfName()
    return full;
  }
}

const human = new Person("Huong", "Le");
console.log(human.fullName());