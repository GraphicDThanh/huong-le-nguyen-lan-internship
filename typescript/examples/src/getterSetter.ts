class Things {
  size = 0;

  get Size(): number {
    return this.size;
  }

  set Size(value: string | number | boolean) {
    const num = Number(value);
    this.size = num;
  }
}

const thing = new Things();
const checkSize = thing.size;
console.log(checkSize);
thing.Size = 20;
console.log(thing);
