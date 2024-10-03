//                  Array Destructuring

const myarray = ["value1", "value2", "value3", "value4"];

// let var1 = myarray[0];
// let var2 = myarray[1];
// console.log(myarray);
// console.log(var1)
// console.log(var2) This is ok, but we can destruct  he array.

let [var1, var2] = myarray;
// let [var1, , var2]= myarray; if we have to skip the index, then we have to put the commas like ,  , 
console.log(var1);
let newarray = myarray.slice(2); // this will get the remaining values but we have the shortcut, which is given below.
var1 = "value changed"  //we can change the value of the variable, but not the constant.
console.log(var1);
console.log(var2);
console.log(newarray)



const thisarray = ["car1", "car2", "car3", "car4"]
let [thisvar, thisvar2, ...thisnewarray] = thisarray
// ...thisnewarray will get the remainig values from the current array.
console.log(thisvar)
console.log(thisvar2)
console.log(thisnewarray)