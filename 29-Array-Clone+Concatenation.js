//                      Array Clone.

let array1 = ["item1", "item2"];
// let array2 = array1, in this condition, the changing in one array also occours in the second array, because an array is a reference datatype.


// cloning 
// let array2 = ["item1", "item2"];  ended 
// let array2 = array1.slice(0);  method 1
// let array2 = [].concat(array1);   method 2

// new way cloning with spread operator
let array2 = [...array1];

array1.push("item3");
console.log(array1)
console.log(array2)
// these are not two arrays, there is only one array, but there pointers are different with same addresses,
console.log(array1===array2);
// this is used to check that the both arrays are same or not 



//                      Array Concatenation.

let array5 = ["item1", "item2"];

// In slice 
// let array6 = array5.slice(0).concat(["item3","item4"]);

// in concat 
// let array6 = [].concat(array5, ["item3","item4"])

// in spread operator 
// let array6 = [...array5, "item3", "item4"]

let newarray = ["item3", "item4"];
let array6 = [...array5, ...newarray]


console.log(array5)
console.log(array6)
