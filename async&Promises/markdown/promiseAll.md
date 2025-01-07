Promise.all Method Notes:

1. Purpose:

- Helps run multiple promises in parallel
- Takes an array of promises as input
- Returns a new promise that contains an array of fulfilled values

2. Key Behaviors:

- Runs all promises simultaneously rather than sequentially
- Returns results in same order as input array
- If one promise rejects, entire Promise.all rejects
- Useful when operations are independent of each other

3. Example from codebase:

```js
Promise.all([
  getJSON(`https://restcountries.com/v2/name/${c1}`),
  getJSON(`https://restcountries.com/v2/name/${c2}`),
  getJSON(`https://restcountries.com/v2/name/${c3}`),
]);

const get3Countries = async function (c1, c2, c3) {
  try {
    // const [data1] = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    // const [data2] = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    // const [data3] = await getJSON(`https://restcountries.com/v2/name/${c3}`);
    // console.log([data1.capital, data2.capital, data3.capital]);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);
    console.log(data.map(d => d[0].capital)); // ['Lisbon', 'Ottawa', 'Dodoma']
  } catch (err) {
    console.error(err);
  }
};
get3Countries('portugal', 'canada', 'tanzania');
```
