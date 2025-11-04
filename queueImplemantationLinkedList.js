//* Task 1: Implement queue using  linked list

//* Task 2: Implement stack using Linked list

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first ? this.first.value : undefined;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const nodeToRemove = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = nodeToRemove.next;
    this.length--;
    return nodeToRemove.value;
  }
  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }
  print() {
    let currentNode = this.first;
    const array = [];
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array.join("->"), "-> null");
  }
}

const queue = new Queue();

queue.enqueue(50);
queue.enqueue(60);
queue.enqueue(70);
queue.enqueue(80);
queue.enqueue(90);
queue.print();
queue.dequeue();
queue.print();
queue.dequeue();
queue.print();
