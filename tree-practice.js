const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees


function findMinBST (rootNode) {
  // Your code here 
  if (!rootNode) return null;

  let currentNode = rootNode; 
  while (currentNode.left) {
    currentNode = currentNode.left;
  }
  return currentNode.val;


}

function findMaxBST (rootNode) {
  // Your code here 
  if (!rootNode) return null;

  let currentNode = rootNode; 
  while (currentNode.right) {
    currentNode = currentNode.right;
  }
  return currentNode.val;
}

// [NOT working - need debugging] option 1: use recursion
// function findMinBT (rootNode) {
//   // Your code here 
//   if (!rootNode) return null;
//   return findMin(rootNode, rootNode.val);
// }
// function findMin(node, min) {
//   if (!node) return min;
//   if (node.val < min) min = node.val;

//   findMin(node.left, min);
//   findMin(node.right, min);

//   return min;
// }

// option 2: use iteration
function findMinBT (rootNode) {
  // Your code here 
  if (!rootNode) return null;
  
  let min = rootNode.val;
  let queue = [rootNode];
 
  while (queue.length) {
    
    let el = queue.shift();

    if (el.left) {
      queue.push(el.left);
      if (el.left.val < min) min = el.left.val;
      
    }

    if (el.right) {
      queue.push(el.right);
      if (el.right.val < min) min = el.right.val;
      
    }

  }
  return min;

}

function findMaxBT (rootNode) {
  // Your code here 
  if (!rootNode) return null;
  
  let max = rootNode.val;
  let queue = [rootNode];

  while (queue.length) {
    let el = queue.shift();

    if (el.left) {
      queue.push(el.left);
      if (el.left.val > max) max = el.left.val;
    }

    if (el.right) {
      queue.push(el.right);
      if (el.right.val > max) max = el.right.val;
    }

  }

  return max;
}

// option 1: with recursion helper function
function getHeight (rootNode) {
  // Your code here 
  if (!rootNode) return -1;
  
  return helperHeight(rootNode, h=-1)

  
}

function helperHeight(currentNode, h=-1){

  if (!currentNode) return h;
  h++;

  h_left = helperHeight(currentNode.left, h);
  h_right = helperHeight(currentNode.right, h);

  return Math.max(h_left, h_right);
}

function balancedTree (rootNode) {
  // Your code here 
  // empty tree
  if (!rootNode) return true;

  // non empty tree
  return helperBalanced(rootNode.left, h=-1) && helperBalanced(rootNode.right, h=-1) ;
}

function helperBalanced(currentNode, h=-1){

  if (!currentNode) return h;
  h++;

  h_left = helperHeight(currentNode.left, h);
  h_right = helperHeight(currentNode.right, h);

  return Math.abs(h_left - h_right) < 1;
}

function countNodes (rootNode) {
  // Your code here 
  if (!rootNode) return 0;

  let queue = [rootNode];
  let cnt = 1;

  while (queue.length) {
    let el = queue.shift();

    if (el.left) {
      cnt++;
      queue.push(el.left)
    }
    if (el.right) {
      cnt++;
      queue.push(el.right)
    }
  }
  return cnt;
}

function getParentNode (rootNode, target) {
  // Your code here 
  if (target === rootNode.val) return null;

  
  return undefined
}

function inOrderPredecessor (rootNode, target) {
  // Your code here 
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side, 
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}


btRoot = new TreeNode(8);
btRoot.left = new TreeNode(2);
btRoot.left.left = new TreeNode(4);
btRoot.left.right = new TreeNode(5);
btRoot.right = new TreeNode(3);
btRoot.right.left = new TreeNode(6);
btRoot.right.right = new TreeNode(7);

// console.log(findMaxBT(btRoot))//.to.equal(1);
// //console.log(btRoot);
// findMinBT(btRoot);

//console.log([btRoot].shift())
// console.log(getHeight(btRoot.left))//.to.equal(1);
// console.log(getHeight(btRoot))

console.log(balancedTree(btRoot.left))//.to.be.true;


btRootBig = new TreeNode(13);
btRootBig.left = new TreeNode(2);
btRootBig.right = new TreeNode(3);
btRootBig.left.left = new TreeNode(4);
btRootBig.left.right = new TreeNode(5);
btRootBig.right.right = new TreeNode(6);
btRootBig.left.left.left = new TreeNode(7);
btRootBig.left.right.left = new TreeNode(8);
btRootBig.left.right.right = new TreeNode(9);
btRootBig.right.right.right = new TreeNode(10);
btRootBig.left.right.right.left = new TreeNode(11);
btRootBig.right.right.right.right = new TreeNode(12);
btRootBig.right.right.right.right.left = new TreeNode(1);

console.log(balancedTree(btRootBig))


