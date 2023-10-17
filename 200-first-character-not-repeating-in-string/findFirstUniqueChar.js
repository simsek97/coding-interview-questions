/**
 * This function finds the first unique (non-repeating) character in a given string
 *
 * @param {string} input
 * @return {string}
 */
function firstNonRepeatingCharacterWithQueue(input) {
  if (!input || input.length === 0) {
    return 'Invalid input';
  }

  const charFrequency = new Map();

  for (const char of input) {
    charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
  }

  for (let [key, value] of charFrequency) {
    if (value === 1) {
      return key;
    }
  }
}

// Test case
const s = 'teeth';
const r = firstNonRepeatingCharacterWithQueue(s);
console.log(r);
