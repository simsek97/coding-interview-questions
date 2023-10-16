class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function findMergeNode(headA, headB) {
  let lengthOfFirst = 0;
  let lengthOfSecond = 0;

  // Set first and second list using parameters
  let firstList = headA;
  let secondList = headB;

  // Find the length of the first list
  while (firstList) {
    lengthOfFirst++;
    firstList = firstList.next;
  }

  // Find the length of the second list
  while (secondList) {
    lengthOfSecond++;
    secondList = secondList.next;
  }

  // Reset the lists
  firstList = headA;
  secondList = headB;

  if (lengthOfFirst > lengthOfSecond) {
    // If the first list is longer than the second one
    // then walk through the first list as long as the difference
    // so that the lists will have the same length
    for (let i = 0; i < lengthOfFirst - lengthOfSecond; i++) {
      firstList = firstList.next;
    }
  } else {
    // If the second list is longer than the first one
    // then walk through the second list as long as the difference
    // so that the lists will have the same length
    for (let i = 0; i < lengthOfSecond - lengthOfFirst; i++) {
      secondList = secondList.next;
    }
  }

  // At this point, both lists have the same length
  // so we can walk through them both together
  while (firstList !== null && secondList !== null) {
    // Once we find the point where the first list and the second list is equal
    // then that is the merge point.
    if (firstList === secondList) {
      return firstList;
    }

    firstList = firstList.next;
    secondList = secondList.next;
  }

  // Return null if there is no merge point.
  return null;
}

// Test case
// Create two linked lists that merge at node with data 5
const sharedNode = new ListNode(5);
const headA = new ListNode(1);
const headB = new ListNode(3);

headA.next = new ListNode(2);
headA.next.next = sharedNode;

headB.next = sharedNode;

const mergePoint = findMergeNode(headA, headB);
console.log(`Merge Point Data: ${mergePoint.data}`); // Output should be 5
