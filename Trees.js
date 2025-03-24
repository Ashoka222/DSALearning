// =============== BINARY TREE TRAVERSAL IMPLEMENTATION ===============
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

function inorderTraversal(root) {
  if (!root) return;
  inorderTraversal(root.left);
  console.log(root.value);
  inorderTraversal(root.right);
}

// Binary Tree Traversal usage example
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
inorderTraversal(root); // Output: 2 1 3

// =============== BINARY SEARCH TREE IMPLEMENTATION ===============
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(newValue) {
    if (newValue < this.value) {
      if (!this.left) this.left = new BST(newValue);
      else this.left.insert(newValue);
    } else {
      if (!this.right) this.right = new BST(newValue);
      else this.right.insert(newValue);
    }
  }
}

// Binary Search Tree usage example
let bst = new BST(10);
bst.insert(5);
bst.insert(15);
console.log(bst.left.value); // Output: 5
