type Point = {
  x: number;
  y: number;
};

interface Circle {
  color?: string;
  radius: number;
  diameter?: number;
}

function printCoord(pt: Point) {
  console.log(`The coordinate's x value is ${pt.x}`);
  console.log(`The coordinate's y value is ${pt.y}`);
}

function createCircle(circle: Circle) {
  let newCircle: Circle = {
    color: 'yellow',
    radius: 20,
    diameter: 10,
  };
}

printCoord({ x: 10, y: 11 });
