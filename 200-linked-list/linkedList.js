/**
 * @class LinkedList
 */
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * This method adds a new node to a given linked list
 *
 * @param {LinkedList} head
 * @param {number} value
 * @return {LinkedList}
 */
function insertNode(head, value) {
  let node = new LinkedList(value);

  let current = head;
  while (current.next !== null) {
    current = current.next;
  }

  current.next = node;

  return head;
}

/**
 * This method deletes a node with a value of n in a given linked list
 *
 * @param {LinkedList} head
 * @param {number} n
 * @return {LinkedList}
 */
function deleteNode(head, n) {
  let current = head;

  if (n == 1) {
    head = current.next;
    delete current;
    return head;
  }

  for (let i = 0; i < n - 2; i++) {
    current = current.next;
  }
  next = current.next;
  current.next = next.next;

  delete next;

  return head;
}

/**
 * This method reverses a linked list
 *
 * @param {LinkedList} head
 * @return {LinkedList}
 */
function reverseList(head) {
  let current = head;
  let prev = null;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;

    current = next;
  }
  head = prev;

  return head;
}

/**
 * This method prints all nodes in a given linked list
 *
 * @param {LinkedList} head
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
// Create a linked list with a value of 1
let head = new LinkedList(1);

// Insert new nodes
head = insertNode(head, 3);
head = insertNode(head, 5);
head = insertNode(head, 7);

// Print the list
print(head);

console.log(' ');
// Delete a node
head = deleteNode(head, 1);

// Print the list
print(head);
console.log(' ');

// Reverse the list
head = reverseList(head);
// Print reversed list
print(head);
