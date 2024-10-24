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

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('Pick a number');
    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    score++;
    document.querySelector('.score').textContent = score;

    displayNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Update high score if the current score is greater
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High' : 'Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('YOU LOST THE GAME');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  displayNumber('?');
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

// // When guess is too high
// } else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'Too High';
//     score = score - 1;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'YOU LOST THE GAME';
//     document.querySelector('.score').textContent = 0;
//   }

//   // When guess is too low
// } else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = 'Too Low';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = 'YOU LOST THE GAME';
//     document.querySelector('.score').textContent = 0;
//   }
// }
// });

// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highScore = 0;

// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess, typeof guess);

//   // When there is no input
//   if (!guess) {
//     // document.querySelector('.message').textContent = 'Pick a number';
//     displayMessage('Pick a number');
//     // When player wins
//   } else if (guess === secretNumber) {
//     document.querySelector('.message').textContent = 'Correct Number!';
//     score++;
//     document.querySelector('.score').textContent = score;

//     document.querySelector('.number').textContent = secretNumber;
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';

//     // Update high score if the current score is greater
//     if (score > highScore) {
//       highScore = score;
//       document.querySelector('.highscore').textContent = highScore;
//     }

//     // When guess is wrong
//   } else if (guess !== secretNumber) {
//     if (score > 1) {
//       document.querySelector('.message').textContent =
//         guess > secretNumber ? 'Too High' : 'Too Low';
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       document.querySelector('.message').textContent = 'YOU LOST THE GAME';
//       document.querySelector('.score').textContent = 0;
//     }
//   }
// });
