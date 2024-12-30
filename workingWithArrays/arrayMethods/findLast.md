```js
// The new findLast and findLastIndex Methods
// the finndLast method is the opposite of the find method. It returns the last element that satisfies the condition
// The findLastIndex method is the opposite of the findIndex method. It returns the index of the last element that satisfies the condition

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);
const lastWithdrawal = movements.findLast(mov => mov < 0);
console.log(lastWithdrawal); // -130

const latestLargeMovementIndex = movements.findLastIndex(mov => mov > 2000);
console.log(
  `Your lastest large movement was ${
    movements.length - latestLargeMovementIndex
  } movements ago`
); // Your lastest large movement was 7 movements ago
```
