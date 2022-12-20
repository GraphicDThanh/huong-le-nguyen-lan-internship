// Optional properties
interface Bicycle {
  color?: string;
  price: number;
  name: string;
}

function informationBicycle(bicycle: Bicycle): Bicycle {
  const bike: Bicycle = bicycle;

  if (bicycle.color) {
    console.log(
      `Information bicycle ${bicycle.color}, ${bicycle.price}, ${bicycle.name}`
    );
  } else {
    console.log(`Information bicycle ${bicycle.price}, ${bicycle.name}`);
  }

  return bike;
}

const bike: Bicycle = {
  color: 'yellow',
  price: 12,
  name: 'fit',
};

const information = informationBicycle(bike);
console.log(information);

// readonly
interface Point {
  readonly x: number;
  readonly y: number;
}

const p1: Point = {
  x: 10,
  y: 12,
};

p1.x = 12;

// function types
interface searchFunc {
  (source: string, substring: string): boolean;
}

const search: searchFunc = (source: string, substring: string): boolean => {
  const result = source.search(substring);
  return result > -1;
};

console.log(search('Le Nguyen Lan', 'Huong'));

// interface array
interface NumList {
  [index: number]: number;
}

const numArr: NumList = [1, 2, 3];
console.log(numArr[0]);
console.log(numArr[2]);

interface StringList {
  [index: string]: string;
}

const param: StringList = {};
param.heart = 'HP';

console.log(param);
