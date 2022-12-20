export default class Point {
  x: number;

  y: number;

  readonly z: string;

  constructor(x: number, y: number, z: string) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  getTotal(): void {
    console.log(`${this.x} and ${this.y}, ${this.z}`);
  }
}

const pt = new Point(1, 3, '3');
pt.z = '123';
pt.getTotal();
