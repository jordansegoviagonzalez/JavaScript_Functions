/**
 * Logger class handles all logging in the application.
 * This keeps logging logic centralized,
 * making the code clean to the eye, easier to maintain,
 * and makes the code reusable.
 */
/**
 * Implementing JSDoc to help document what functions do, their inputs, and outputs.
 * This makes code easier to understand for collaboration, maintenance, and auto documentation.
 */

/**
 * Logs message to the console and updates the on-page log box if present.

 * @param {any} message - The message to be logged and displayed.
 */

export class Logger {
  static log(message) {
    if (typeof message !== "string") {
      message = JSON.stringify(message);
    }

    // Dev view (browser console)
    console.log(message);

    // Update the UI log box if it exists
    const logBox = document.getElementById("log");
    if (logBox) {
      // Real time UI feedback
      logBox.textContent += `\n${message}`;

    }
  }
}



