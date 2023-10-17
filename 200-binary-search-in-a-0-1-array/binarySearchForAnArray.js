/**
 * This functionn finds the index of the first 1 in an array that
 * consists of 0s and 1s and 1s come after 0s
 *
 * @param arr
 */
function binarySearchForAnArray(arr) {
  let result = -1;
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === '1') {
      result = mid;
      high = mid - 1;
    } else low = mid + 1;
  }

  console.log(result);
}

// Test case
// As the index of the first 1 in this array is 5, the function prints 5
binarySearchForAnArray(['0', '0', '0', '0', '0', '1', '1', '1', '1']);
