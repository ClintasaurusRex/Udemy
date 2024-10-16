Debugging;

const measureKelvin = function () {
  const measurement = {
    typeof: "temp",
    unit: "celsius",

    // C) FIX THE BUG
    // value: Number(prompt("Degrees celsius:")),
  };

  // console.log(measurement);
  // B) FIND THE BUG
  console.table(measurement);

  // console.log(measurement.value);10

  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY BUG
console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

// A) IDENTIFY BUG
console.log(amplitudeBug);
