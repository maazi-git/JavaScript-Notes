//   Intro to Arrays
// An Array is a reference type, in JavaScript, the refernece types are called the Object, So, we call an array with Object.
// Arrays are the ordered collection of elements or items.
// array is used to store more than one elements in square brackets, which is not possible with var or let.
// we can access any particular elements in the array, with the help of its index number.
// we can store all data types in an array.
let datatypes = [0, "string", null, undefined, false];
console.log(datatypes)



// How to create Arrays
let fruits = ["apple", "orange", "grapes"];
console.log(fruits);



// Arrays indexing.
// so, the index starts form 0
let cars = ["bmw", "ferrari", "mclaren"];
//            0        1          2 
console.log(cars[2]);



// changing elements in array 
let guns = ["Rifle", "Pistol", "Sniper"];
console.log(guns);
guns[1]= 911;
guns[0]= "shotgun";
console.log(guns);


// checking typeof Array 

let boys = ["boy1", "boy2", "boy3"];
console.log(typeof boys[0]), //used to find the typeof the elements in the array.
console.log(typeof boys); // This will show \object , because an array is a reference type, so it is also called object.

// So, how we find that the array is really an array ???
// Array.isArray(boys) this function is used to find that our Array is an Array or not !

console.log(Array.isArray(boys))