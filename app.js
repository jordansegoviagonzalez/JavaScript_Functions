console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
console.log("Prints odd numbers from 1 up to the given count");



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
console.log("Driving Age Checker");

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
  // Alternative version:
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
 * Essentially, this function connects to the users action.
 * It avoids errors like "Cannot read property of null"
 * by making sure elements exist before JavaScript interacts with them.
 */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("ageForm"); // Make sure your form has id="ageForm"
  if (form) form.addEventListener("submit", handleCheckAge);
});

console.log("EXERCISE 3:\n==========\n");
console.log("Cartesian Quadrant Finder");

function getQuadrantMessage(x, y) {
  if (x === 0 && y === 0) return `(${x}, ${y}) is at the origin`;
  if (x === 0) return `(${x}, ${y}) is on the y axis`;
  if (y === 0) return `(${x}, ${y}) is on the x axis`;
  if (x > 0 && y > 0) return `(${x}, ${y}) is in Quadrant 1`;
  if (x < 0 && y > 0) return `(${x}, ${y}) is in Quadrant 2`;
  if (x < 0 && y < 0) return `(${x}, ${y}) is in Quadrant 3`;
  if (x > 0 && y < 0) return `(${x}, ${y}) is in Quadrant 4`;
}

//changeable variables for testing
const x = -6;
const y = 2;
console.log(getQuadrantMessage(x, y));

console.log("EXERCISE 4:\n==========\n");
console.log("Triangle Type Checker");

function triangleShape(a, b, c) {
  
  if (a + b <= c || a + c <= b || b + c <= a) {
    return "Invalid triangle";
  }
  if (a === b && b === c) {
    return "Equilateral triangle: All sides lengths equal";
  }
  if (a === b || b === c || a === c) {
    return "Isosceles triangle: Only two side lengths equal";
  }
  return "Scalene triangle : All different side lengths";
}
const a = 3;
const b = 3;
const c = 3;

console.log(triangleShape(a, b, c));

console.log("EXERCISE 5:\n==========\n");
console.log("Data Plan Status");

function displayDataFeedback(planLimit, day, usage) {
  const totalDays = 30;
  const daysUsed = Math.min(day, totalDays);
  const daysRemaining = totalDays - daysUsed;

  const avgDailyUsage = usage / daysUsed;

  let feedback;
  if (planLimit / totalDays < avgDailyUsage) {
    feedback = `You are EXCEEDING your average daily use (${avgDailyUsage.toFixed(2)} GB/day), continuing this high usage,
you'll exceed your data plan by ${(avgDailyUsage * totalDays - planLimit).toFixed(2)} GB.`;
  } else if (planLimit / totalDays > avgDailyUsage) {
    feedback = `You are UNDER your average daily use (${avgDailyUsage.toFixed(2)} GB/day), you can afford to use more data.`;
  } else {
    feedback = `You are at your average daily use (${avgDailyUsage.toFixed(2)} GB/day), keep it up!`;
  }

  if (daysRemaining === 0 && usage < planLimit) {
    feedback += " However, you've run out of days to use your data.";
  }

  console.log(`${daysUsed} days used, ${daysRemaining} days remaining`);
  console.log(`Average daily use: ${avgDailyUsage.toFixed(2)} GB/day`);
  console.log(feedback);

  if (daysRemaining > 0 && usage < planLimit) {
    const remainingData = planLimit - usage;
    const avgDailyUseRemaining = remainingData / daysRemaining;
    console.log(`You can use up to ${avgDailyUseRemaining.toFixed(2)} GB/day of your ${remainingData.toFixed(2)} GB left for the rest of the month.`);
  }
}
//changeable variables for testing

displayDataFeedback(100, 15, 56);

