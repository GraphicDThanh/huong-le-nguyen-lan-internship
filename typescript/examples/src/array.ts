interface Obj {
  name: string;
  age: number;
}

function abc(arrObj: Obj[]) {
  console.log(arrObj);
}

abc([
  { name: '123', age: 10 },
  { name: '123', age: 10 },
]);

const skill: [boolean, string?, number?] = [true];
console.log(skill);
