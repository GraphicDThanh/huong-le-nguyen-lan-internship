class Animal {
  constructor(legs) {
    this.legs = legs;
  }

  walk() {
    console.log('walking on ' + this.legs + ' legs');
  }
}

class Bird extends Animal {
  constructor(legs) {
    super(legs);
  }

  fly() {
    console.log('flying');
  }
}


let bird = new Bird(2);

bird.walk();
bird.fly();

class Person {
	hello() {
		return "Hello, I'm a person";
  }
}

class Programmer extends Person {
  hello() {
    return super.hello() + " and I'm also a programmer";
  }
}

const flavio = new Programmer();
const hello = flavio.hello();
console.log(hello);

// Using super in classes:
class Rectangle {
  constructor(height, width) {
    this.name = 'Rectangle';
    this.height = height;
    this.width = width;
  }

  sayName() {
    console.log(`Hi, I am a ${this.name}.`);
  }

  get area() {
    return this.height * this.width;
  }

  set area(value) {
    this._area = value;
  }
}

class Square extends Rectangle {
  constructor(length, width) {
    super(length, width);
    this.name = 'Square';
  }
}

const square = new Square(20, 10);
console.log(square.name);
console.log(square.area);

// Super-calling static methods
class Rectangles {
  static logNbSides() {
    return 'I have 4 sides';
  }
}

class Squares extends Rectangles {
  static logDescription() {
    return `${super.logNbSides()} which are all equal`;
  }
}

const sqr = Squares.logDescription();
console.log(sqr);
