/**
 *
 * @param {Array} inventory
 * @param {Array} combination
 * @return {number}
 */
function maxNumberOfBoxes(inventory, combination) {
  // Check if either is empty and retunr 0
  if (inventory.length == 0) return 0;
  if (combination.length == 0) return 0;

  // Create dictionary for both inventory and combination
  // to store the number of items
  const invCount = {};
  const combCount = {};

  // Count the number of items in the invenotry
  for (const item of inventory) {
    invCount[item] = (invCount[item] || 0) + 1;
  }

  // Count the number of items in the combination
  for (const item of combination) {
    combCount[item] = (combCount[item] || 0) + 1;
  }

  let maxBoxes = Infinity;

  // Loop through the combination to determine the max number of packages
  // that can be completed using each item
  for (const item of combination) {
    if (combCount[item] && invCount[item] && combCount[item] < invCount[item]) {
      maxBoxes = Math.min(maxBoxes, Math.floor(invCount[item] / combCount[item]));
    } else {
      maxBoxes = 0;
    }
  }

  return maxBoxes;
}

// Test case 1
const r1 = maxNumberOfBoxes(['A', 'C', 'A', 'D', 'E', 'C', 'A', 'B', 'B', 'C'], ['A', 'B', 'C', 'C']);
console.log(r1);

// Test case 2
const r2 = maxNumberOfBoxes(['A', 'A', 'A'], ['A']);
console.log(r2);
