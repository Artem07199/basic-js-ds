const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}
module.exports = class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
}

  getUnderlyingList(values) {
    values.forEach(value => this.append(value));

    return this;
  }

  enqueue( value ) {
    let node = new Node(value); 

    if (this.length === 0) {
        this.head = node; 
    } else {
        let current = this.head;

        while(current.next) {
            current = current.next;
        }

        current.next = new Node(value);
    }

    this.length++;
  }
  

  dequeue() {
    if (!this.head) {
      return null;
    }
    const deletedHead = this.head;
    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }
    return deletedHead;
  }

}
