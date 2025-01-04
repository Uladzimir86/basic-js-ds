const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    if (!this.rootNode) return this.rootNode = new Node(data);

    const addData = (node) => {
      if (!node) return new Node(data);
      if (node.data > data) {
        node.left = addData(node.left);
      }
      else if (node.data < data) {
        node.right = addData(node.right);
      }
      return node;
    }

    addData(this.rootNode); 
  }

  has(data) {
    if (!data || !this.rootNode) return false;
    
    const hasData = (node) => {
      if (!node) return false;
      if (data < node.data) return hasData(node.left)
        else if (data > node.data) return hasData(node.right)
      else return true;
    }

    return   hasData(this.rootNode);
  }

  find(data) {
    if (!data || !this.rootNode) return null;
    
    const findData = (node) => {
      if (!node) return null;
      if (data < node.data) return findData(node.left)
        else if (data > node.data) return findData(node.right)
      else return node;
    }

    return   findData(this.rootNode);
  }

  remove(data) {
    if (!data || !this.rootNode) return null;
    
    const findData = (node) => {
      if (!node) return null;
      if (data < node.data) node.left = findData(node.left, node);
        else if (data > node.data) node.right = findData(node.right, node);
      else return removeData(node);
      return node;
    }

    const removeData = (node) => {
      if (!node) return null;
      if (node.right) {
        node.data = node.right.data;
        node.right = removeData(node.right);
      } else if (node.left) {
        node.data = node.left.data;
        node.left = removeData(node.left);
      }
      return node;
    }

    return   findData(this.rootNode);
  }

  min() {
    if (!this.rootNode) return null;

    const findMin = (node) => {
      if (!node.left) return node.data;
      return findMin(node.left); 
    }

    return findMin(this.rootNode);
  }

  max() {
    if (!this.rootNode) return null;

    const findMax = (node) => {
      if (!node.right) return node.data;
      return findMax(node.right);
    }

    return findMax(this.rootNode);
  }
}

const tree = new BinarySearchTree();
console.log(tree.root());
module.exports = {
  BinarySearchTree
};