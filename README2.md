## Exercise 2: Legal?

- Write a function that receives a name and age, and prints a greeting message to the console using the name.

1. Declare a function named `checkAge` using declaration notation (`function <name>(){...}`)
2. The function should take in two-parameters named userName & age
3. The function body should:
   - declare and initialize an aboveSixteen local variable with string value: "Congrats ${userName}, you can drive!",
   - declare and initialize an belowSixteen local variable with string value: "Sorry ${userName}, but you need to wait until you're 16.",
   - an `if/else` statement that determines if the `age` value is below 16,
   - and then `console.log()` the correct message to the console.
4. BONUS: Remember that paramaters are optional, and no `name` or `age` value could be passed in. Correctly account for no parameter being passed in.