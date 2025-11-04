// Array Implementation

class Queue {
  constructor() {
    this.items = [];
  }
  //   O(1)
  enqueue(value) {
    this.items.push(value);
  }
  //   O(n)
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.shift();
  }
  //   O(1)
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[0];
  }
  //   O(1)
  isEmpty() {
    return this.items.length === 0;
  }
  //   O(n)
  print() {
    console.log("Start -->", this.items.join("-->"), "<--End");
  }
}

const queue = new Queue();
queue.enqueue(50);
queue.enqueue(40);
queue.enqueue(2);
queue.enqueue(5);
console.log(queue.peek());
queue.print();
queue.dequeue();
console.log(queue.peek());
queue.print();

// Queue using array by efficient way not using shift

class Items {
  constructor() {
    this.items = {};
    this.rearIndex = 0;
    this.frontIndex = 0;
  }

  //   adding element
  enqueue(value) {
    this.items[this.rearIndex] = value;
    this.rearIndex++;
  }

  dequeue() {
    if (this.isEmpty()) return undefined;
    const value = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return value;
  }
  //   front element peek()
  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.frontIndex];
  }

  //   rear elements

  rear() {
    if (this.isEmpty()) return undefined;
    return this.items[this.rearIndex - 1];
  }

  // checking is the array is empty
  isEmpty() {
    return this.rearIndex - this.frontIndex === 0;
  }

  //   size of array
  size() {
    if (this.isEmpty()) return undefined;
    return this.rearIndex - this.frontIndex;
  }
  //   clear queue
  clear() {
    this.items = {};
    this.frontIndex = 0;
    this.rearIndex = 0;
  }
  // printing array
  print() {
    console.log(this.items);
  }
}

const optimizedQueue = new Items();

optimizedQueue.enqueue(40);
optimizedQueue.enqueue(13);
optimizedQueue.enqueue(18);
optimizedQueue.enqueue(2);
optimizedQueue.enqueue(10);
optimizedQueue.enqueue(15);
optimizedQueue.print();
optimizedQueue.dequeue();
optimizedQueue.print();
optimizedQueue.dequeue();
optimizedQueue.print();
