class Item {
  static count = 0;
  static getCount() {
    return Item.count;
  }
}

console.log(Item.count);
console.log(Item.getCount());

class Items {
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
    this.constructor.count++;
  }

  static count = 0;
  
  static getCount() {
    return Items.count;
  }
}

let pen = new Items("Pen", 5);
let notebook = new Items("notebook", 10);

console.log(Items.getCount()); // 2
