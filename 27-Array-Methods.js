              // Array Push Pop
              
// Array push and pop will add and remove elements form last in the current array. This method is fast then shift of unshift.

// Array push 
// Array push is used to add one more element at the end of the current array.
let fruits = ["apple", "orange", "grapes"];
console.log(fruits);
fruits.push("bannana")
console.log(fruits);

// Array pop 
// Array Pop is used to remove one element form the last in the current array.
let cars = ["corrola", "lexus", "honda"];
console.log(cars)
cars.pop();
console.log(cars)
// When we use the POP method in array, it will remove the last element and return us, So, we can use that element anywher according to our needs.
// console.log(cars.pop()); 
let poppedelement = cars.pop();
console.log("popped car is",poppedelement);



//              Array Shift UnShift

// Array shift unshift will add or remover elements form starting in the current array. This method is slow than arry push or pop.


// Array Unshift   (add one or more elem from start)
let bikes = ["bike1", "bike2", "bike3"];
console.log(bikes);
bikes.unshift("bike0")
console.log(bikes);

// Array Shift      (remove from start and returns)

let bikergroup = ["rider1", "rider2", "rider3"];
console.log(bikergroup);
bikergroup.shift(1);
let removedbiker = bikergroup.shift(1);
console.log(removedbiker, "is removed");