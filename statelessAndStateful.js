//  Stateless and Stateful
const count = {
  count: 0,
  add(amount) {
    this.count = this.count + amount;
  },
  print() {
    console.log(this.count);
  },
};
count.add(2);
count.add(3);

// count.print();

const createCounter = () => {
  let count = 0;
  return (amount) => {
    count += amount;
    return count;
  };
};

const counter = createCounter();
// console.log(counter(10));
// console.log(counter(10));

class Counter {
  constructor(count) {
    this.count = count;
  }
  add(amount) {
    this.count = this.count + amount;
  }
  print() {
    console.log(this.count);
  }
}

const counter1 = new Counter(0);
counter1.add(2);
counter1.add(3);
counter1.print();
const counter2 = new Counter(10);
counter2.add(10);
counter2.add(20);
counter2.print();
