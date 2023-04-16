const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor(){
    this.rootNode = null;
  }

  root() {
  return this.rootNode
  }

  add(data) { 
    function addData(node, data) {
    if (!node) {
      let temp = new Node(data)
      return temp
    }
    if (node.data === data) {
      return node
    }
    if (node.data < data) {   
      node.right = addData(node.right , data)
    } else {
      node.left = addData(node.left , data)
    }
    return node
  }
  this.rootNode = addData(this.rootNode, data)
  }

  has(data) {
    function hasData(node , data){
      if(!node){
        return false
      }
      if(node.data === data) {
        return true
      }
      if(node.data < data){
       return hasData(node.right , data)
      } else {
       return hasData(node.left , data)
      }
    }
    return hasData(this.rootNode , data)
  }

  find(data) {
    function hasData(node , data){
      if(!node){
        return null
      }
      if(node.data === data) {
        return node
      }
      if(node.data < data){
       return hasData(node.right , data)
      } else {
       return hasData(node.left , data)
      }
    }
    return hasData(this.rootNode , data)
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    if (!this.rootNode) {
      return false
    }
   let node = this.rootNode
   while(node.left) {
    node = node.left
   }
   return node.data
  }

  max() {
    if (!this.rootNode) {
      return false
    }
   let node = this.rootNode
   console.log(node);
   while(node.right) {
    node = node.right
   }
   return node.data
  }
}

module.exports = {
  BinarySearchTree
};

const tree = new BinarySearchTree();

tree.add(7)
tree.add(5)
tree.add(10)
tree.add(3)

console.log(tree.root());