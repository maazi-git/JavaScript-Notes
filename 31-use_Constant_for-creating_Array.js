//           Use constant for creating array 
// Almost, 90% of developers use const for creating an array!, because it is safe.
// if we are making array with a const, then we can cannot change it, but we can use array methods like push, pop, shift, unshift.

const fruits = ["apple", "bannana"];
// fruits = ["not-apple", "not-bannana"];
// cannot change the constant 
fruits.pop();
console.log(fruits)  