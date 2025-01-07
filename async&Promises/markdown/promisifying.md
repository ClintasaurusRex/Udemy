```js
const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      resolve(`YOU WIN!!!`);
    } else {
      reject(new Error('YOU LOSE'));
    }
  }, 2000);
});
// lotteryPromise
//   .then(res => {
//     btn.textContent = res;
//     console.log(res);
//   })
//   .catch(err => {
//     btn.textContent = err;
//     console.error(err);
//   });
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('I waited for 1 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 3 seconds');
    return wait(1);
  })
  .then(() => console.log('I waited for 4 seconds'));

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.error(x));
```
