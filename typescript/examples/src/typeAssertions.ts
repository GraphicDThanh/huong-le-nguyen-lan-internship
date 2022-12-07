interface Student {
  name: string;
  age: number;
}

const student = <Student>{};
student.name = 'John';
student.age = 123;

console.log(student);

function sum(a: number, b: number): number | string {
  const result = a + b;
  return result;
}

let total = sum(12, 11) as number;
total = 'total';
total = 50;
console.log(total);
