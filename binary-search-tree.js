// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here 
// copy paste from previous binary-search-tree.js


// Do not change this
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
    toString() { // helper that can be used to print a simple tree to console for debugging, this is only readable for very short trees
      // [4:[2:[1:-,-],[3:-,-]],[6:[5:-,-],[7:-,-]]] looks like this
      let leftSub = this.left !== null ? this.left.toString() : "-";
      let rightSub = this.right !== null ? this.right.toString() : "-";
      return `[${this.val}:${leftSub},${rightSub}]`;
    }
  }
  
  class BinarySearchTree {
  
    constructor() {
      // Your code here 
      this.root = null;
    }
  
    insert(val, currentNode=this.root) {
      // Your code here 
      let newNode = new TreeNode(val);
      if (!this.root) {
        this.root = newNode;
        return;
      }
  
      if (val < currentNode.val) {
        if (!currentNode.left) {
          currentNode.left = newNode;
        } else {
          this.insert(val, currentNode.left)
        }
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
        } else {
          this.insert(val, currentNode.right)
        }
      }
    }

    search(val) {
      // Your code here 
      // if the tree is empty, return false;
      if (!this.root) return false;
  
      // if 1+ nodes
      let currentNode = this.root;
      while (currentNode) {
        if (currentNode.val === val) return true;
        if (val < currentNode.val) {
          currentNode = currentNode.left;
        } else if (val > currentNode.val) {
          currentNode = currentNode.right;
        }
      }
      return false;
    }
  
    preOrderTraversal(currentNode = this.root) {
      // Your code here 
      if (!currentNode) return;
  
      console.log(currentNode.val);
      this.preOrderTraversal(currentNode.left);
      this.preOrderTraversal(currentNode.right);
  
    }
  
  
    inOrderTraversal(currentNode = this.root) {
      // Your code here 
      if (!currentNode) return;
  
      this.inOrderTraversal(currentNode.left);
      console.log(currentNode.val);
      this.inOrderTraversal(currentNode.right);
    }
  
  
    postOrderTraversal(currentNode = this.root) {
      // Your code here 
      if (!currentNode) return;
  
      this.postOrderTraversal(currentNode.left);
      this.postOrderTraversal(currentNode.right);
      console.log(currentNode.val);
    }
  
      // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      // Your code here 
      // initialize a queue with the root node
      let queue = [this.root];
  
      // while the queue is not empty
      while (queue.length) {
        // print and remove first node in queue
        let el = queue.shift();
        console.log(el.val);
  
        // if the node has a left node
        if (el.left) {
          // push the left node on the back of the queue
          queue.push(el.left);
        }
        // if the node has a right node
        if (el.right) {
          // push the right node on the back of the queue
          queue.push(el.right)
        }
      }
        
      return;
    }
  
    // Depth First Traversal - Iterative
    depthFirstTraversal() {
      // Your code here 
      // initialize a stack with the root node
      let stack = [this.root];
      // while the stack is not empty
      while (stack.length) {
        // print and remove first node in stack
        let el = stack.pop();
        console.log(el.val);
  
        // if the node has a left node
        if (el.left) {
          // push the left node on the back of the stack
          stack.push(el.left)
        }
        // if the node has a right node
        if (el.right) {
          // push the right node on the back of the stack
          stack.push(el.right)
        }
      }
    return; 
   }
  }


  module.exports = { BinarySearchTree, TreeNode };

