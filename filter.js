// `Array#filter` executes a given callback on an array, returning a new array of all
// elements for which the callback returns `true`

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);

// Let's write our own!
function myFilter(array, callback) {}

console.log(myFilter([2, 4, 5, 6], num => num % 2 === 0));
