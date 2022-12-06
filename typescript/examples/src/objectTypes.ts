// The parameter's type annotation is an object type
function printCoords(pt: { x: number; y: number }) {
  console.log(`The coordinate's x value is ${pt.x}`);
  console.log(`The coordinate's y value is ${pt.y}`);
}

printCoords({ x: 3, y: 7 });

// Optional Properties
function printName(name: { first: string; last?: string }) {
  if (name.last !== undefined) {
    const firstName = `${name.first} ${name.last}`;
    console.log(firstName);
  } else {
    const firstName = `${name.first}`;
    console.log(firstName);
  }
}

printName({ first: 'Bob' });
printName({ first: 'Alice', last: 'Alisson' });
