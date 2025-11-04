class Stack {
  constructor() {
    this.items = [];
  }
  // O(1)
  push(value) {
    this.items.push(value);
  }
  //   O(1)
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.pop();
  }
  //   O(1)
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }
  //   O(1)
  isEmpty() {
    return this.items.length === 0;
  }
  //   O(n)
  print() {
    console.log(this.items.slice().reverse().join("->"));
  }
}

const stack1 = new Stack();
console.log(stack1.peek());
console.log(stack1.isEmpty());

stack1.push(10);
stack1.push(20);
stack1.push(30);

stack1.print();

console.log(stack1.peek());
console.log(stack1.pop());
