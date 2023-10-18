/**
 * @class
 */
class ArrayQueue {
  constructor() {
    this.values = [];
    this.rear = -1;
    this.front = -1;
  }

  enQueue(x) {
    this.values.push(x);
    this.rear = x;
    if (this.front === -1) this.front = x;
  }

  deQueue() {
    if (this.values.length > 0) {
      this.values.shift();

      if (this.values.length === 0) {
        this.rear = -1;
        this.front = -1;
      } else {
        this.front = this.values[0];
      }
    }
  }

  printQueue() {
    for (let i = 0; i < this.values.length; i++) {
      console.log(this.values[i]);
    }
    console.log('Front:', this.front);
    console.log('Rear:', this.rear);
  }

  isEmpty() {
    return this.rear === -1 && this.front === -1;
  }
}

const myqueue = new ArrayQueue();

myqueue.enQueue(3);
myqueue.enQueue(5);
myqueue.enQueue(1);
myqueue.printQueue();
myqueue.deQueue();
myqueue.printQueue();
myqueue.enQueue(1);
myqueue.enQueue(7);
myqueue.enQueue(2);
myqueue.deQueue();
myqueue.printQueue();
console.log(myqueue.isEmpty());
