```js
///////////////////////// PROMISES ///////////////////////////
const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}" >
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
  <h3 class="country__name">${data.name}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
    1
  )} people</p>
    <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
    <p class="country__row"><span>🌆</span>${data.capital}</p>
    <p class="country__row"><span>💰</span>${data.currencies[0].name} </p>
    </div>
    </article>`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// The modern way of doing ajax calls

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${country}`);
// request.send();

// const request = fetch(`https://restcountries.com/v2/name/portugal`);
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       renderCountry(data[0]);
//     });
// };

// Simplified version
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`) // fetchs data
    .then(response => response.json()) // turns data into json
    .then(data => renderCountry(data[0])); // takes data and gives it to the function
};
getCountryData('portugal');

////////////////////////////////////////
// Simplified version
const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.com/v2/name/${country}`) // fetchs data
    .then(response => response.json()) // turns data into json
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      // Country 2
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'));
};
getCountryData('portugal');

///////////////////////////////////////////////////////////////////
// First catch error

// Simplified version
const getCountryData = function (country) {
  // Country 1
  fetch(`https://restcountries.com/v2/name/${country}`) // fetchs data
    .then(response => response.json()) // turns data into json
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];

      // Country 2
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥 `);
      renderError(`Something went wrong 💥💥💥 ${err.message} Try Again.`);
    }) // this will catch any errors in the promise chain
    .finally(() => {
      countriesContainer.style.opacity = 1; // make the data visable
    });
};

btn.addEventListener('click', function () {
  getCountryData('portugal');
});
getCountryData('asdfasdfasdf');
```
