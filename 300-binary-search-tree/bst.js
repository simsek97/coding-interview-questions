/**
 * @class BinarySearchTree
 */
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  /**
   * This method adds a new node to the binary search tree
   *
   * @param {BinarySearchTree} root
   * @param {number} value
   */
  insertNode(root, value) {
    const newNode = new BinarySearchTree(value);

    if (newNode.value <= root.value) {
      if (root.left) this.insertNode(root.left, value);
      else root.left = newNode;
    } else if (newNode.value > root.value) {
      if (root.right) this.insertNode(root.right, value);
      else root.right = newNode;
    } else {
      return 'Invalid data';
    }
  }

  /**
   * This method searches the binary search tree for a given number x
   *
   * @param {BinarySearchTree} root
   * @param {number} x
   * @return
   */
  searchTree(root, x) {
    if (!root) return console.log(`${x} is not found!`);
    if (root.value === x) return console.log(`${x} is found!`);
    else if (root.value <= x) this.searchTree(root.right, x);
    else this.searchTree(root.left, x);
  }

  /**
   * This method prints all element in a binary search tree
   *
   * @param {BinarySearchTree} root
   */
  printTree(root) {
    console.log(root.value);
    if (root.left) this.printTree(root.left);
    if (root.right) this.printTree(root.right);
  }
}

// Test use case

// Create a new Binary Search Tree with a value of 9
const bst = new BinarySearchTree(9);

// Add new nodes
bst.insertNode(bst, 10);
bst.insertNode(bst, 5);
bst.insertNode(bst, 15);
bst.insertNode(bst, 3);
bst.insertNode(bst, 7);
bst.insertNode(bst, 12);
bst.insertNode(bst, 18);

// Print the tree
bst.printTree(bst);

// Search for some values
bst.searchTree(bst, 14);
bst.searchTree(bst, 15);
bst.searchTree(bst, 16);
