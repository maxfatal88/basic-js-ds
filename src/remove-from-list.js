const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */


// function convertArrayToList(arr) {
//   return arr.reverse().reduce((acc, cur) => {
//     if (acc) {
//       const node = new ListNode(cur);
//       node.next = acc;
//       return node;
//     }

//     return new ListNode(cur);
//   }, null);
// }

// const list = convertArrayToList([3, 3, 2]);
// let k = 3
// console.log(list);

function removeKFromList(list, k) {
  // throw new NotImplementedError('Not implemented');
  let corent = list
  let previus = null
  while (corent) {
    if (corent.value === k) {
      if (previus === null) {
        list = list.next
      } else {
        previus.next = corent.next;
      }
    }
    else {
      previus = corent
    }
    corent = corent.next
  }
  return list
}
// console.log(removeKFromList(list, k));
module.exports = {
  removeKFromList
};

