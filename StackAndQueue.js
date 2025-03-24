// =============== STACK IMPLEMENTATION ===============
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}

// Stack usage example
let stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.pop()); // Output: 20

// =============== QUEUE IMPLEMENTATION ===============
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }
}

// Queue usage example
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue()); // Output: 1
