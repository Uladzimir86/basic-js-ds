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

class ListNode {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {
  constructor () {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    if (!this.head) return null;
    const getNodeValue = (node) => {
      if (!node.next) return node;
      return { value: node.value, next: getNodeValue(node.next) };
    }
    return getNodeValue(this.head);
  }

  enqueue(value) {
    if (!this.head) this.head = new ListNode(value);
    else if (!this.tail) {
      this.tail = new ListNode(value);
      this.head.next = this.tail;
    }
    else {
      this.tail.next = new ListNode(value);
      this.tail = this.tail.next;
    }
  }

  dequeue() {
    if (!this.head) return null;
    const headValue = this.head.value;
    this.head = this.head.next;
    if (this.head === this.tail) this.tail = null;
    return headValue;
  }
}
 
module.exports = {
  Queue
};
