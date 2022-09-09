const a = [1, 2, 3];
const b = Array.of("a", "b", "c");
console.log("Arrays a: " + a);
console.log("Arrays b: " + b);

// An array can hold any value, even value of different types:
const c = [1, 'Flavio', ['a', 'b']]
console.log("Arrays c: " + c);

// multi-dimensional arrays
const matrix = [
// 0  1  2
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
console.log(matrix);
console.log("Matrix: " + matrix);
console.log("Matrix 0 in index 0: " + matrix[0][0]);
console.log("Matrix 2 in index 0: " + matrix[2][0]); 
console.log("Length of matrix: " + matrix.length);
matrix.length = 1;
console.log(matrix);

// Add an item to an array
const array = [1, 2, 3, 4, 5];
array.push(10);
console.log("Add an element at the end of an array");
console.log(array);

array.unshift(11);
console.log("Add an element at the beginning of an array");
console.log(array);

// Remove an item from an array
array.pop();
console.log("Remove an item from the end of an array");
console.log(array);


array.shift();
console.log("Remove an item from the beginning of an array");
console.log(array);

// Join two or more arrays
const f = [1, 2];
const e = [3, 4];
const g = f.concat(e);
const gg = [...f, ...e];
console.log("Join two arrays f [1, 2] and e [3, 4]: ");
console.log(g);
console.log("Join two arrays f [1, 2] and e [3, 4] by (...): ");
console.log(gg);

// Find a specific item in the array
const student = ["Huong", "Le", "Nguyen", "Lan"];
console.log(student.find(x => x === "a"));

