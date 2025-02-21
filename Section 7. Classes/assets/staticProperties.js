// JavaScript Static Properties

// Introduction to the JavaScript static properties;

class Item {
  // static property;
  static count = 0;

  //   constructor;
  constructor(name, quantity) {
    this.name = name;
    this.quantity = quantity;
    this.constructor.count++;
  }

  // static method;
  static getCount() {
    return Item.count;
  }
}

let pen = new Item("Matador", 12);
console.log(Item.getCount()); // 0
