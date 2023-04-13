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
 * class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}
 */
// class LinkedList {
//     constructor() {
//       this.head = null;
//       this.length = 0;
//     }
// }

class Queue {
  constructor() {
    this.head = null
    this.length = 0
  }
  getUnderlyingList() {
    // throw new NotImplementedError('Not implemented');
    return this.head
  }
  enqueue(x) {
    // throw new NotImplementedError('Not implemented');
    if (this.length === 0) {
     this.head = new ListNode(x)
    } else {
    let corent = this.head
    while(corent.next){
      corent = corent.next
    }
    corent.next = new ListNode(x)
  }
  this.length++
  }
  dequeue() {
    // throw new NotImplementedError('Not implemented');
    let firstNum = this.head.value
    this.head = this.head.next
    this.length--
    return firstNum
  }
}

module.exports = {
  Queue
};
