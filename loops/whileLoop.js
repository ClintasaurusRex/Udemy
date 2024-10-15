// While Loop

// While loop is used to execute a block of code multiple times as long as a condition is true.

// Syntax:
// while (condition) {
//   // code block to be executed
// }

// Example:
// let i = 0;

// while (i <= 5) {
//   console.log(i);
//   i++;
// }

// The above code will print numbers from 0 to 5.

// The while loop loops through a block of code as long as a specified condition is true. The condition is evaluated before executing the block of code. The condition is checked again after the block of code has been executed. The loop will continue to run as long as the condition is true. The loop will stop when the condition is false. The condition is usually a comparison between two values. The condition can be any expression that evaluates to true or false.

// let rep = 1;

// while (rep <= 10) {
//   console.log(`Lifting weight repetition ${rep}`);
//   rep++;
// }

// The above code will print "Lifting weight repetition" 10 times.

// The while loop is used when the number of iterations is not known before the loop starts. The while loop is used when the condition is based on a calculation or a result of a function. The while loop is used when the condition is based on user input. The while loop is used when the condition is based on the state of the program. The while loop is used when the condition is based on the result of an asynchronous operation.

let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about to end...");
}

// The above code will keep rolling the dice until the dice rolls a 6. The loop will stop when the dice rolls a 6. The loop will print "You rolled a" followed by the number rolled by the dice. The loop will print "Loop is about to end..." when the dice rolls a 6. The loop will keep rolling the dice until the dice rolls a 6. The loop will stop when the dice rolls a 6. The loop will print "You rolled a" followed by the number rolled by the dice. The loop will print "Loop is about to end..." when the dice rolls a 6.
