class GenericNumber<T> {
  zeroValue: T

  constructor(zeroValue: T) {
    this.zeroValue = zeroValue;
  }

  // eslint-disable-next-line class-methods-use-this
  add(x: T, y: T): T {
    console.log(x);
    console.log(y);
    return x;
  }
}

const myGenericNumber = new GenericNumber<number>(123);
myGenericNumber.add(1,2);

