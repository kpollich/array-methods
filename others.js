// Lightning round: here's a few array methods that don't deserve their own file

// `.some` - return true as long as at least one element satisfies the condition returned by the callback
const hasEvenNumber = [1, 2, 3, 4].some(num => num % 2 === 0);
console.log(hasEvenNumber);

// `.every` - return true as long as ALL elements satisfy the condition returned by the callback
const allEven = [2, 4, 6, 8].every(num => num % 2 === 0);
console.log(allEven);

// `.find` - return the first value that satifsies the condition returned by the callback
const firstEven = [1, 2, 3, 4].find(num => num % 2 === 0);
console.log(firstEven);

// `.includes` - return true if the value is present in the array
const hasTwo = [1, 2, 3, 4].includes(2);
console.log(hasTwo);
