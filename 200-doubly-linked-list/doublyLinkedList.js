/**
 * @class DoublyLinkedList
 */
class DoublyLinkedList {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

/**
 * This method adds a new node for a given doubly linked list
 *
 * @param {DoublyLinkedList} head
 * @param {number} value
 * @return {DoublyLinkedList}
 */
function insertNode(head, value) {
  let node = new DoublyLinkedList(value);

  let current = head;
  while (current.next !== null) {
    current = current.next;
  }

  current.next = node;
  node.prev = current;

  return head;
}

/**
 * This method reverses a given doubly linked list
 *
 * @param {DoublyLinkedList} head
 * @return {DoublyLinkedList}
 */
function reverseList(head) {
  if (head === null) {
    return null;
  }

  if (head.next === null) {
    return head;
  }

  let current = head;
  let prev = null;
  let next = null;
  while (current !== null) {
    next = current.next;

    current.next = prev;
    current.prev = next;

    prev = current;

    current = next;
  }

  return prev;
}

/**
 * This method prints values of all nodes in a given doubly linked list
 *
 * @param {DoublyLinkedList} head
 */
function print(head) {
  let current = head;

  while (current.next !== null) {
    console.log(current.value);
    current = current.next;
  }
  console.log(current.value);
}

// Test case
// Create a doubly linked list with a value of 1
let head = new DoublyLinkedList(1);

// Add nodes
head = insertNode(head, 3);
head = insertNode(head, 5);
head = insertNode(head, 7);

// Print the list
print(head);

// Reverse the list
// const updatedHead = reverseList(head);
// print(updatedHead);
