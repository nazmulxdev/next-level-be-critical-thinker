class MathUnits {
  static square(a) {
    return a * a;
  }
}

// console.log(MathUnits.square(5));

const newVal = new MathUnits();

class Animals {
  speak() {
    console.log("Animals");
  }
}

class Dog extends Animals {
  dog() {
    console.log("Barking Bad.");
  }
}

const d = new Dog();

class Vehicles {
  constructor(name) {
    this.name = name;
  }
}

class Bike extends Vehicles {
  constructor(name, cc) {
    super(name);
    this.cc = cc;
  }
}

const bi = new Bike("R15", 200);

// console.log(bi);

class Account {
  constructor(balance) {
    this._balance = balance;
  }

  get balance() {
    return this._balance;
  }
  set balance(amount) {
    if (amount > 100) {
      this._balance = amount;
    }
  }
}

const acc = new Account(50);
acc.balance = 40;
console.log(acc.balance);
