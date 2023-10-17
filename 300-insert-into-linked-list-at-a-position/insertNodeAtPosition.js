/**
 * @class
 */
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * This function adds a given value into a linked list at a given position
 *
 * @param {LinkedList} llist
 * @param {number} value
 * @param {number} position
 * @return {LinkedList}
 */
function insertNodeAtPosition(llist, value, position) {
  // Create a new node with the given value
  const newNode = new LinkedList(value);

  // If the position is 0, the new node will be the first node
  if (position === 0) {
    newNode.next = llist;

    return newNode;
  }

  let current = llist;
  let currentPositon = 0;

  // Travers the list to find the node at the position before the given position
  while (currentPositon < position - 1 && current.next !== null) {
    current = current.next;

    currentPositon++;
  }

  // If the current position is the position before the given position
  // then make the links
  if (currentPositon === position - 1) {
    newNode.next = current.next;
    current.next = newNode;
  }

  return llist;
}

// Test case
// Create a linked list: 1 -> 2 -> 3 -> 4
const head = new LinkedList(1);
head.next = new LinkedList(2);
head.next.next = new LinkedList(3);
head.next.next.next = new LinkedList(4);

// Insert 5 at position 2 (0-based index)
const updatedHead = insertNodeAtPosition(head, 5, 2);

// Print the modified linked list
// Prints 1 -> 2 -> 5 -> 3 -> 4
let current = updatedHead;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}
