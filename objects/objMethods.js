// Object Methods

const clint = {
  firstName: "Clint",
  lastName: "Arneson-Hiles",
  birthYear: 1992,
  job: "developer",
  friends: ["Michael", "Steven", "Jay"],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${
      this.hasDriversLicense ? "a" : "no"
    } driver's license`;
  },
};

console.log(clint.calcAge());

console.log(clint.age);

console.log(clint.getSummary());
