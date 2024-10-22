'use strict';

// DOM: Document Object Model: Structured representation of HTML documents. Allows JS to access HTML elements and styles to manipulate them

// querySelector selects the first element in the HTML file that has the class of message
// The dot is selecting the class in the HTML file
// The textContent is selecting the text inside the class in the HTML file and changing it to the text in the console.log below it

/*-----------------------------------------------------------------------------
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23; // This is setting the value to the input field
console.log(document.querySelector('.guess').value);
---------------------------------------------------------------------
*/

// Handling Click Events

// Event Listener: A function that performs an action based on a certain event. It waits for a specific event to happen
// The first argument is the event that the function is waiting for and the second argument is the function that will be called when the event happens (callback function)

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'Pick a number';
  }
});
