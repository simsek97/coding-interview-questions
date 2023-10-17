/**
 * @class
 */
class DoublyLinkedList {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

/**
 *
 * @param {DoublyLinkedList} dllist
 * @param {number} value
 * @returns
 */
function sortedInsert(dllist, value) {
  // Create a new node with the value
  const newNode = new DoublyLinkedList(value);

  // If the list is null then return the new node
  if (dllist === null) {
    return newNode;
  }

  // If the value is less than the value of the list
  // then this should be the first node
  if (value < dllist.value) {
    newNode.next = dllist;
    newNode.prev = null;
    dllist.prev = newNode;

    return newNode;
  }

  // Traverse the list till we find the first node with a value less than the given value
  let current = dllist;
  while (value > current.value && current.next !== null) {
    current = current.next;
  }

  // Now if the current value is greater than or equal to the given value
  // then create the links since the new node is going to be between two existing nodes
  if (current.value >= value) {
    current.prev.next = newNode;
    current.prev = newNode;
    newNode.prev = current.prev;
    newNode.next = current;
  } else {
    // The new node is going to be the last node
    current.next = newNode;
    newNode.prev = current;
  }

  return dllist;
}

// Test case
// Create new nodes
const head = new DoublyLinkedList(1);
const node3 = new DoublyLinkedList(3);
const node5 = new DoublyLinkedList(5);
const node7 = new DoublyLinkedList(7);

// Create the links to make a sorted list like 1 <-> 3 <-> 5 <-> 7
head.next = node3;
node3.prev = head;
node3.next = node5;
node5.prev = node3;
node5.next = node7;
node7.prev = node5;

// Insert 4 into the sorted list
const updatedHead = sortedInsert(head, 4);

// Print the modified doubly-linked list
// Prints 1 < -> 3 < -> 4 < -> 5 < -> 7
let current = updatedHead;
while (current !== null) {
  console.log(current.value);
  current = current.next;
}
