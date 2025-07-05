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


import { Logger } from './logger.js';

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
  const aboveSixteen = `Congrats ${userName}, you can drive!`;
  const belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

  if (!userName || typeof userName !== "string" || !userName.trim()) {
    /* 
     * This check ensures the username is valid from the start.
     * It prevents issues early by validating the input.
     */
    Logger.log("Please enter a valid name.");
    return;
  }

  if (!Number.isInteger(age) || age <= 0) {
    /*
     * This check ensures the age is a positive whole number.
     * Prevents invalid input from being processed.
     */
    Logger.log("Please enter a valid age.");
    return;
  }

  // After validating inputs, log displays appropriate message based on age
  Logger.log(age < 16 ? belowSixteen : aboveSixteen);

  /*
  // Alternative verbose version:
  if (age < 16) {
    Logger.log(belowSixteen);
  } else {
    Logger.log(aboveSixteen);
  }
  */
}

/** 
 * Handles the form submission, grabs user input and
 * passes it cleanly to the age checking logic.
 */
function handleCheckAge(event) {
  event.preventDefault(); // prevents the page from refreshing
  // This function grabs the user input: name and age, then passes both to checkAge() for processing
  const name = document.getElementById("userName").value.trim();
  const age = parseInt(document.getElementById("age").value);

  checkAge(name, age);
}

/** 
 * Essentially, this function connects to the user's action.
 * It avoids errors like "Cannot read property of null"
 * by making sure elements exist before JavaScript interacts with them.
 */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("ageForm"); // Make sure your form has id="ageForm"
  if (form) form.addEventListener("submit", handleCheckAge);
});
