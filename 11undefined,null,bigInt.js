// Undefined
// jab aap koi variable bana do gay, aur usko koi value nahi do gay to woh undefined hoga!, lekan  hum constant k sath nahi kr saktay esa, ni toh error aa jaye ga, constant ko value dena must hai.
let myname;
console.log(typeof myname);
myname= "Malik";
console.log(typeof myname, myname)


// null
let myvar = null;
console.log(myvar);
console.log(typeof null); 
// in uppercase, typeof null results into the object datatype, because there is a bug in the jacascript, so if u print the typeof null, then the result is always the null, but the console  shows us the object, because of the bug.


// BigInt
// console.log(Number.MAX_SAFE_INTEGER); results the maximun number which we can assign to a variable, 9007199254740991;if we have to print bigger number than this value, then we use bigInt, we can add two bigints but we cannot add a bigint and a simple number.

let myint= BigInt(22); // first method to add bigint
let myint2= 8n; //second method to add bigint
console.log(myint);
console.log(myint2);
console.log(myint+ myint2);
