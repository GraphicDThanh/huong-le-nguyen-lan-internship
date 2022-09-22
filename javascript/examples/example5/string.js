const a = "Flavio";
console.log(a.length);
console.log(''.length);

// Two strings can be joined using the + operator:
const lastName = "Flavio";
const firstName = "Jame";
const fullName = lastName + " " + firstName;
console.log("lastName + firstName = " + fullName);
console.log("Flavio + firstName = " +  "Flavio" + " " + firstName);

// You do so by using the ${...} syntax:
const test = "test ${...}";
const string = `something ${test}`;
console.log(string);
