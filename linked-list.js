class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  preepend(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  size() {
    console.log(this.length);
    return this.length;
  }

  headPart() {
    console.log(this.head);
    return this.head;
  }

  tailPart() {
    console.log(this.tail);
    return this.tail;
  }

  at(index) {
    let i = 0;
    let current = this.head;
    if (index < 0 || index >= this.length) return undefined;
    if (index == 0) return this.head;
    while (i < index) {
      current = current.next;
      i++;
    }
    console.log(current);
  }
}

const list = new LinkedList();

list.append(1);
list.preepend(2);

console.log(list);
console.log(list.at(0));
