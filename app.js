console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
console.log("Prints odd numbers from 1 up to the given count");

/**
 * Implementing JSDoc to help document what functions do, their inputs, and outputs.
 * This makes code easier to understand for collaboration, maintenance, and auto documentation.
 * 
 * Prints odd numbers from 1 up to the number that is given.
 * If count is an invalid or negative number, exits without printing.
 * @param {number} count Positive integer upper limit.
 */
function printOdds(count) {
  
  if (!Number.isInteger(count) || count < 1) {
    return;
  }

  for (let number = 1; number <= count; number++) {
    if (number % 2 !== 0) {
      console.log(number);
    }
  }
}

printOdds(100);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

