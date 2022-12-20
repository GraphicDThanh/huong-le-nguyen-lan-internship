type Points = {
  x: number;
  y: number;
  z: number | string;
};

function printPoint(pt: Points) {
  console.log(`The coordinate's x value is ${pt.x}`);
  console.log(`The coordinate's y value is ${pt.y}`);
  console.log(`The coordinate's y value is ${pt.z}`);
}

printPoint({ x: 12, y: 11, z: 'a' });

type UserInputSanitizedString = string;

function sanitizeInput(str: string): UserInputSanitizedString {
  return str;
}

let userInput = sanitizeInput('1231dsad');
userInput = 'new inputs';
console.log(userInput);
