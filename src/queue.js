const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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
class Queue {

  constructor() {
    this.queues = null;
  }

  getUnderlyingList() {
    return this.queues;
  }

  enqueue(element) {
    if (!this.queues) {
      this.queues = new ListNode(element);
    } else {
      let node = this.queues;

      while (node.next) {
        node = node.next;
      }
      
      node.next = new ListNode(element);
    }
  }

  dequeue() {
    let value = this.queues.value;
    this.queues = this.queues.next;

    return value;
  }
}

module.exports = {
  Queue
};
