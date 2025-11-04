class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //   adding node in the last of the linked list
  append(value) {
    // if the list is empty
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // if the link list is not empty
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //adding node in the first of the linked list
  prepend(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //   inserting node in the linked list in the three position using index and value --> I) in the start , II) in the end , III) in the middle or any point in the linked list

  insert(index, value) {
    if (index < 0 || index > this.length) {
      console.error("Index out of bound");
      return undefined;
    }
    // if the insert is in the start of the linked list
    if (index === 0) {
      return this.prepend(value);
    }
    // if the insert is in the last of the linked list
    if (index === this.length) {
      this.append(value);
    }
    // if the insert is in the middle of the linked list
    //find the leading node
    const leadingNode = this.#traverseToIndex(index - 1);
    const holdingNode = leadingNode.next;

    const newNode = new Node(value);
    leadingNode.next = newNode;
    newNode.next = holdingNode;
    this.length++;
  }

  //   remove node from the linked list
  remove(index) {
    if (index === 0) {
      this.head = this.head.next;
      if (this.length === 1) {
        this.tail = null;
      }
      this.length--;
      return this;
    }
    const leadingNode = this.#traverseToIndex(index - 1);
    const nodeToRemove = leadingNode.next;

    leadingNode.next = nodeToRemove.next;

    if (leadingNode.next === null) {
      this.tail = leadingNode;
    }
    this.length--;
  }

  //   helper function (private)
  #traverseToIndex(index) {
    let count = 0;
    let currentNode = this.head;
    while (count !== index) {
      if (currentNode == null) return null;
      currentNode = currentNode.next;
      count++;
    }
    console.log("this is current node ->", currentNode);
    return currentNode;
  }

  //   printing value
  print() {
    let currentNode = this.head;
    const arr = [];
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(arr.join("->"), "-> null");
  }
}

const linkedList = new LinkList();
linkedList.append("A");
linkedList.append("B");
linkedList.append("C");
linkedList.append("D").append("E").append("F");
linkedList.print();
linkedList.remove(0);
linkedList.print();

linkedList.prepend(15);
linkedList.prepend(16);
linkedList.print();
linkedList.insert(2, 69);
linkedList.print();
linkedList.insert(0, 100);
linkedList.print();
linkedList.insert(7, 50);
linkedList.remove(9);
linkedList.print();
