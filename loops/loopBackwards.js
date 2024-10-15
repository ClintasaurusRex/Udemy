// Looping backwards

const clint = ["Clint", "Arneson-Hiles", 2024 - 1992, "developer", ["Michael", "Steven", "Jay"]];

for (let i = clint.length - 1; i >= 0; i--) {
  console.log(i, clint[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}
