//* Task 2: Implement stack using Linked list

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    let nodeToRemove = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== this.tail) {
        currentNode = currentNode.next;
      }
      currentNode.next = null;
      this.tail = currentNode;
    }
    this.length--;
    return nodeToRemove;
  }

  peek() {
    return this.tail;
  }

  isEmpty() {
    return this.length === 0;
  }
  print() {
    let currentNode = this.head;
    const array = [];
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array.join("->"), "-> null");
  }
}

const stack = new Stack();
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.print();
stack.pop();
stack.print();
stack.push(6);
stack.push(7);
stack.print();
