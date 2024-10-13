"use strict";
// Funtions Calling Other Functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

const foodProcessor = function (apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
};

console.log(foodProcessor(2, 3)); // Juice with 8 apples and 12 oranges.
