// The Array#forEach method accepts a callback function that gets executed for each element of
// the given array. The callback is passed the element and the current index as arguments.

// The callback passed to `forEach` doesn't return anything, and the actual `forEach` call doesn't
// return anything either. Check out the TypeScript hints for this block of and you'll see both the
// `forEach` method and its callback argument are typed to return `void`.

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(element => {
  console.log(`Current element is ${element}`);
});

// Use `forEach` to mutate the original array if necessary
const mutateMe = [{}, {}];

mutateMe.forEach((element, i) => {
  element.index = i;
});

console.log(mutateMe);

// forEach is also useful for updating some outer scope variable that isn't
// directly represented in the given array
let myFavoriteColor = "blue";

[{ color: "green", rank: 2 }, { color: "red", rank: 1 }].forEach(element => {
  if (element.rank === 1) {
    myFavoriteColor = element.color;
  }
});

console.log(myFavoriteColor);

// Let's implement our own forEach method!
function myForEach(array, callback) {}

myForEach(numbers, element => console.log(element * 2));
