```js
/// A function that keeps running in the background while perfoming the code inside of it then when done returns a promise

// This is the same as the example below but below is better
// fetch(`https://restcountries.com/v2/name/${country}`).then(res =>
//   console.log(res)
// );

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  // Geolocation
  const pos = await getPosition();
  const { latitude: lat, longitude: lng } = pos.coords;

  // Reverse GeoCoding
  const resGeo = await fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
  );
  const dataGeo = await resGeo.json();
  console.log(dataGeo);

  // Country Data

  const res = await fetch(
    `https://restcountries.com/v2/name/${dataGeo.countryName}`
  );
  console.log(res);

  const data = await res.json();
  console.log(data);

  renderCountry(data[0]);
};
whereAmI();
console.log('FIRST');
```
