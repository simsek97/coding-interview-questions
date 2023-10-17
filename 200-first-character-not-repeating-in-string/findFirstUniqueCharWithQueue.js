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
  const charQueue = [];

  for (const char of input) {
    // Add the character to the hash table
    charFrequency.set(char, (charFrequency.get(char) || 0) + 1);

    // Add the character to the queue
    charQueue.push(char);

    // If the queue is not empty and the first character has repeated more than once
    // then remove it from the queue
    while (charQueue.length > 0 && charFrequency.get(charQueue[0]) > 1) {
      charQueue.shift();
    }
  }

  // If there is still a character in the queue then return it
  if (charQueue.length > 0) {
    return charQueue[0];
  }

  return null;
}

// Test case
const s = 'teeth';
const r = firstNonRepeatingCharacterWithQueue(s);
console.log(r);
