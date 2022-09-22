let student = {
  firstName: 'John',
  lastName: 'Doe'
};

let { firstName: fname, lastName: lname } = student;

console.log(fname);
console.log(lname);
//console.log(a);		     //output: undefined

// Nested object destructuring
let employee = {
  id: 1,
  names: "ABC",
  image: "abc.jpg",
  children: {
    id: 2,
    names: "B"
  }
};

let {id: emplyeeId, image, children: {id: childrenId}} = employee;

console.log("Nested object destructuring: ");
console.log(emplyeeId);
console.log(childrenId);
console.log(image);

// Destructuring function arguments
let display = (obj) => {
  const { firstName, lastName } = obj;

  console.log("Destructuring function arguments: ");
  console.log(`${firstName} ${lastName}`);
}

let person = {
  firstName: 'John',
  lastName: 'Doe'
};

display(person);

// rest parameter
var cource = {
  name: "Javascript",
  price: 1200,
  image: "image.jpg"
}

let {name, ...rest} = cource;
console.log("Rest parameter");
console.log(name);
console.log(rest);
