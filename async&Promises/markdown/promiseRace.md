```js
// Promise.race: receives and array of promises and returns a promise
// settled as soon as one of the input values is done

(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/italy`),
    getJSON(`https://restcountries.com/v2/name/egypt`),
    getJSON(`https://restcountries.com/v2/name/mexico`),
  ]);
  console.log(res[0]);
})();

const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error('Request took to long'));
    }, sec * 1000);
  });
};

Promise.race([getJSON(`https://restcountries.com/v2/name/mexico`), timeout(5)])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

// Promise.allSettled: Takes in an array of promises and return an array of settled promises
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROIR'),
  Promise.resolve('antoherSuccess'),
]).then(res => console.log(res));

Promise.all([
  Promise.resolve('Success'),
  Promise.reject('ERROIR'),
  Promise.resolve('antoherSuccess'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Promise.any: Takes in an array of multiple promises and return the first fulfilled promise
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROIR'),
  Promise.resolve('antoherSuccess'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
```
