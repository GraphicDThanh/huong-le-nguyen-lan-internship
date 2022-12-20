let record: number | boolean;
let result: string | string[];

record = 1213;
record = 'A';
record = true;

result = 'success';
result = ['done', 'success', 'finish'];
result = 123;

console.log(result);
console.log(record);

// Working with Union Types
function printId(id: number | string) {
  console.log(id.toUpperCase());
}

// Solution
function printID(id: number | string) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

printID(123);
printID('huong');

function welcomePeople(people: string[] | string) {
  if (Array.isArray(people)) {
    console.log(`Hello, ${people.join(' and ')}`);
  } else {
    console.log(`Welcome traveler ${people}`);
  }
}

welcomePeople('huong');
welcomePeople(['huong', 'le', 'nguyen']);
