/**
 * @class
 */
class ArrayAsStack {
  constructor() {
    this.top = -1;
    this.myArray = [];
  }

  /**
   * @param {any} x
   */
  pushElement(x) {
    this.top++;
    this.myArray.push(x);
  }

  /**
   * @param {any} x
   * @return {any}
   */
  popElement(x) {
    return this.top;
  }

  /**
   * This function print the elements of the stack
   */
  printElements() {
    for (let i = 0; i <= this.top; i++) {
      console.log(this.myArray[i]);
    }
  }
}

// Test case
// Create an array as stack
const t = new ArrayAsStack();

// Add items in the stack
t.pushElement(4);
t.pushElement(3);
t.pushElement(2);

// Get pop element
const pop = t.popElement();
console.log(pop + '\n');

// Print the stack
t.printElements();
