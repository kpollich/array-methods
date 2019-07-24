// Array#map is similar to `.forEach` in that it executes a given callback for every element in
// an array, but `.map` actually returns a value. The return value of `.map` is a new array of all
// the return values returned by the callback.

// Double each number in the array - get back an array of the doubled numbers
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(number => number * 2);

// Or, without shorthand
const doubledNumbers2 = numbers.map(number => {
  return number * 2;
});

console.log(doubledNumbers);
console.log(doubledNumbers2);

// `.map` is great for transforming data into a new structure
const data = [
  { id: 1, is_married: "YES", FIRSTNAME: "John", last: "Doe" },
  { id: 2, is_married: "NO", FIRSTNAME: "Jane", last: "Doe" }
];

const sanitizedData = data.map(record => {
  return {
    id: record.id,
    isMarried: record.is_married === "YES",
    firstName: record.FIRSTNAME,
    lastName: record.last
  };
});

console.log(sanitizedData);

// Let's write our own `.map`!
function myMap(array, callback) {}

const numbersAgain = [4, 5, 6, 7];
const squaredNumbers = myMap(numbersAgain, number => number * number);
console.log(squaredNumbers);
