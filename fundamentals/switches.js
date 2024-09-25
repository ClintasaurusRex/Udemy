/*
 * How switch statements work:
 *
 * The `switch` statement is used to perform different actions based on different conditions.
 * It evaluates an expression and matches the expression's value to a case label.
 * If a match is found, the code associated with that case is executed.
 *
 * Syntax:
 *
 * switch (expression) {
 *   case value1:
 *     // Code to be executed if expression === value1
 *     break;
 *   case value2:
 *     // Code to be executed if expression === value2
 *     break;
 *   ...
 *   default:
 *     // Code to be executed if no case matches
 * }
 *
 * Key Points:
 * 1. The `expression` is evaluated once and compared with the values of each case.
 * 2. If a matching case is found, the code block associated with that case is executed.
 * 3. The `break` statement is used to terminate the switch block. If `break` is omitted, the next case will be executed (fall-through behavior).
 * 4. The `default` case is optional and can be used to execute code if no matching case is found.
 * 5. Multiple cases can share the same code block by omitting the `break` statement between them.
 */

const day = "wednesday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;

  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("White code examples");
    break;
  case "friday":
    console.log("Record vidoes");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day");
}

// Example Two
const grade = "B";

switch (grade) {
  case "A":
    console.log("Excellent");
    break;
  case "B":
    console.log("Good");
    break;
  case "C":
    console.log("Fair");
    break;
  case "D":
    console.log("Poor");
    break;
  case "F":
    console.log("Fail");
    break;
  default:
    console.log("Invalid grade");
}

// Example Three

const trafficLight = "green";

switch (trafficLight) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Get ready");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Invalid traffic light color");
}

// Example Four
const userRole = "admin";

switch (userRole) {
  case "admin":
    console.log("You have full access");
    break;
  case "editor":
    console.log("You can edit content");
    break;
  case "viewer":
    console.log("You can view content");
    break;
  default:
    console.log("Invalid role");
}
//Example 5: Seasons

const season = "summer";

switch (season) {
  case "spring":
    console.log("It's spring! Time for flowers.");
    break;
  case "summer":
    console.log("It's summer! Time for the beach.");
    break;
  case "fall":
    console.log("It's fall! Time for leaves.");
    break;
  case "winter":
    console.log("It's winter! Time for snow.");
    break;
  default:
    console.log("Invalid season");
}
