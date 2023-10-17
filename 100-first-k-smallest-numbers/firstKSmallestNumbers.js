/**
 *
 * @param {Array} list
 * @param {number} k
 * @return {Array}
 */
function findKSmallestNumbers(list, k) {
  if (k <= 0) {
    return [];
  }

  // Sort the array in an ascending order
  list.sort((a, b) => a - b);

  // Return the first k elements
  return list.slice(0, k);
}

// Test case
const inputArray = [4, 2, 7, 1, 9, 12];
const k = 3;
const result = findKSmallestNumbers(inputArray, k);

// Prints [1, 2, 4]
console.log(result);
