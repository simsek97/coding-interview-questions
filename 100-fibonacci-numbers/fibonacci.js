/**
 * Calculate and return the Fibonacci number that comes after the parameter n
 *
 * @param {number} n
 * @return number
 */
function fibonacci(n) {
  return n === 0 ? 0 : n === 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
}

// Test case to print the first 21 Fibonacci numbers
let i = -1;
while (i++ < 20) {
  console.log(i, fibonacci(i));
}
