// This in method
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,

  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName());

// this alone
let x = this;
console.log(x);

// in function
function myFunction() {
  return this;
}

const myFunc = new myFunction();
console.log(myFunc);
