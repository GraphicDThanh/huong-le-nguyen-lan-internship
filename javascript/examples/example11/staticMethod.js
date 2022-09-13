//Normal 
function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

Person.createAnonymous = function (gender) {
  return gender == "male" ? "John Doe" : "Doe";
};

let anonymous = Person.createAnonymous("male");
let user = new Person("Huong");

console.log(user.getName());
console.log(anonymous);

// static methods in ES6
class Persons {
	constructor(name) {
		this.name = name;
	}

	getName() {
		return this.name;
	}

	static createAnonymous(gender) {
		let name = gender == "male" ? "John Doe" : "Doe";
		return new Persons(name);
	}
}

let anoy = Persons.createAnonymous("female");
console.log(anoy);
let users = new Persons("Huong");
console.log(users.getName());

