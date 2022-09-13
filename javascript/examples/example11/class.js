const Person = {
  name: 'Flavio'
}

console.log(Person.name);

class Student {
  name;
}

const flavio = new Student();
flavio.name = "Huong";

console.log(flavio.name);

// function declaration
function Apple (type) {
  this.type = type;
  this.color = "red";
  this.getInfo = () => {
    return this.color + ' ' + this.type + ' apple';
  };
}

var apple = new Apple('macintosh');
apple.color = "reddish";

console.log("function declaration: ");
console.log(apple.getInfo());

// function expression
let Animal = function(name, color) {
  this.name = name;
  this.color = color;

  this.getName = () => {
    return this.name;
  }
  this.getColor = () => {
    return this.color;
  }
}

let cat = new Animal("Cat", "yellow");

console.log("function expression: ");
console.log(cat.getColor());
console.log(cat.getName());

//Class 
class Human {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

let John = new Human();
John.name = "John";

console.log(John);
console.log(John.getName());
