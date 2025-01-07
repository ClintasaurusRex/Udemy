```js
const whereAmI = async function () {
  try {
    // Geolocation
    const pos = await getPosition();
    const { latitude: lat, longitude: lng } = pos.coords;

    // Reverse GeoCoding
    const resGeo = await fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
    );
    // if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();

    console.log(dataGeo);

    // Country Data

    const res = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.countryName}`
    );
    // if (!resGeo.ok) throw new Error('Problem getting location Country');
    console.log(res);

    const data = await res.json();
    console.log(data);

    renderCountry(data[0]);
  } catch (err) {
    console.error(` 💥${err}`);
    renderError(`Something went wong 💥 ${err.message}`);
  }
};
whereAmI();

console.log('FIRST');

console.log('1: Will get location');
// const city = whereAmI();
// console.log(city);

// whereAmI()
//   .then(city => console.log(`2: ${city}`))
//   .catch(err => console.error(`2: ${err.message}`))
//   .finally(() => console.log('3: Finished getting location'));

(async function () {
  try {
    const city = await whereAmI();
    console.log(`2: ${city}`);
  } catch (err) {
    console.log('3: Finished getting location');
  }
  console.log('3: Finished getting location');
})();

// try {
//   let y = 1;
//   const x = 2;
//   x = 3;
// } catch (err) {
//   alert(err.message);
// }

// Example 1: Handling JSON parsing errors
try {
  // Attempt to parse invalid JSON string
  const jsonString = '{"name": "John", "age": 30,}'; // Invalid JSON with trailing comma
  const parsedData = JSON.parse(jsonString);
  console.log(parsedData);
} catch (error) {
  console.error('JSON parsing failed:', error.message);
}

// Example 2: Array index bounds checking
try {
  // Attempt to access array elements
  const numbers = [1, 2, 3];
  const value = numbers[10]; // Accessing index out of bounds

  if (value === undefined) {
    throw new Error('Index out of bounds');
  }
  console.log(value);
} catch (error) {
  console.error('Array access error:', error.message);
}

// Example 3: File operations with async/await
async function readUserData() {
  try {
    // Simulate API call to fetch user data
    const response = await fetch('https://api.example.com/users');

    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }

    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Data fetch failed:', error.message);
    // Return default fallback data
    return { users: [] };
  }
}
```
