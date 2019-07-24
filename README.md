# Array Methods in JavaScript

Shift Lunch and Learn 7-26-19

## Overview

- Why do native array methods matter?
- Common array methods and what they do
- Determine which array method to use in which situation
- Practical (sort of) examples in React, etc

## Why do array methods matter?

- _Declarative_ vs _imperative_
  - "Do this thing" vs "execute these steps"
- Typically more succinct, more grok-able syntax

```js
function getResults(arr) {
  const results = [];

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (someValidationFunction(element)) {
      results.push(element);
    }
  }

  return results;
}

// vs

function getResults(arr) {
  return arr.filter(someValidationFunction);
}
```

- Chainable
- Encourage reusability and composability
- Standardized - handle edge cases, usable across environments

## Common Array Methods

- forEach
- map
- filter
- reduce
- some
- every
- find
- includes

Let's look at code!

## When do I use which Array method?

Use [this](https://sdras.github.io/array-explorer/)

tl;dr
|Method|When to Use|
|------|-----------|
|forEach|Run some code for every element, don't care about return value|
|map|Run some code for every element, and track every return value separately|
|filter|Only want part of the array that satisies a condition|
|reduce|Run some code for every element, and "boil it down" to a single value at the end|
|some|Is there at least one element that satisfies this condition?|
|every|Do all elements satify this condition?|
|find|Give me the first element that satisfies this condition|
|inclues|Does this array contain this exact value?|

## Quick React Demo

Note: Extremely contrived and bad

## Questions?

## Additional Reading

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype
- https://sdras.github.io/array-explorer/
- https://syntax.fm/show/043/20-javascript-array-and-object-methods-to-make-you-a-better-developer
