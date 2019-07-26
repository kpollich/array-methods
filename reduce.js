// `Array#reduce` executes a callback for each element of an array just like our other methods. However,
// this callback also receives the current value of an "accumulator" and returns the new value of the accumulator.
// The idea with `reduce` is that you loop over an array and return a new, singular value.

// The signature of `reduce` is also a little different. It accepts a second argument for the default value of
// the accumulator.

// e.g. someArray.reduce((acc, element) => {}, defaultValue)

// The common example for `reduce` is returning the sum of an array of numbers. We go from a list of numbers down to
// one single number.
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, number) => acc + number, 0);
console.log(sum);

// Another common pattern is reducing to an arbitrary object that represents some aggregate data from
// the original array
const data = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Joan J Jeffries" }
];

const stats = data.reduce(
  (acc, record) => {
    acc.ids.push(record.id);

    const numJ = record.name
      .split("")
      .filter(letter => letter.toUpperCase() === "J").length;

    acc.numJ = acc.numJ + numJ;

    return acc;
  },
  { ids: [], numJ: 0 }
);

console.log(stats);

// Write your own!
function myReduce(array, callback, defaultValue) {
  let acc = defaultValue;

  for (let i = 0; i < array.length; i++) {
    acc = callback(acc, array[i], i);
  }

  return acc;
}

console.log(myReduce([1, 2, 3, 4], (acc, num) => acc + num, 0));
