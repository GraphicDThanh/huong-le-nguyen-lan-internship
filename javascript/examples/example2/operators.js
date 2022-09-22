
const a = 5, b = 10, c = 0;

// The addition operator (+)
const total = a + b;
console.log("a + b = " + total);

// The subtraction operator (-)
const subtraction = a - b;
console.log("a - b = " + subtraction);

// The division operator (/) 
const division = b / a;
const divisionZero = b / c;
console.log("b / a = " + division);
console.log("b / c (c=0) = " + divisionZero);

// The remainder operator (%)
const remainder = b % a;
const remainderZero = b % c;
console.log("b % a = " + remainder);
console.log("b % c (c=0) = " + remainderZero);

// The multiplication operator (*)
const multiplication = a * b;
console.log("a * b = " + multiplication);

// The exponentiation operator (**) (a^n)
const exponentiation = b ** a;
console.log("b ** a = " + exponentiation);

// Precedence
let d = 1 * 2 + 5 / 2 % 2;
console.log(d);
