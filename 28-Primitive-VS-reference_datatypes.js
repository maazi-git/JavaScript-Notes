//          Primitive vs Reference Data Types


//                    Primitive
let num1 = 5;
let num2 = num1;        //refered element
console.log(num1);
console.log(num2);
num1++;
 num2 = num1;         // update needed
console.log(num1);
console.log(num2);

// in primitive data types, the changing in the element does not added in the refered element, it only occurs in it own element, after changing, we have to update the refered element to apply the change it it


//                      Reference

let array1 = ["item1", "item2"];
let array2 = array1;
console.log(array1);
console.log(array2);

array1.push("item3");       
console.log(array1);
console.log(array2);

// In reference datatypes, we does not need any update to show the changing in code of main element.


            // In Detail 

// Primitive
// Primitve datatypes are stored in a stack, A stack is used to store data, In stack every variable or any data has its own space,in the stack all the varibales are stored seperately, so the change in one variable does not occurs in the second varibale.
//  If we let variable whose value is four (let num1=4), so the stack will assign this variable its own space, and when we assign the variabe like num2  (let num2 = num1) is equal to the value of the the first variable num1, which is already stored in the stack, then the stack will give the private space to second varaible num2, 

// then if we change any thing in the first variable num1, then the change in the first variable occurs, but the control does not change the value of second variable, whose value is equal to num1, because it is stored seperately in the stack. We have to update the second variable num2, to confirm the changings in the first variable num1, like....
// (num2 = num1) 



// Reference

//  If we let the variable with an array1, which is reference datatype, it will be stored in the Heap. and there is a pointer in a stack, which will store the address of the array1, which is in heap, When we let the second varabile array2 and assigns it he value of the first variable array1, then it will also store in the Heap, and a new pointer is created in the Stack, which has the same address of the variable 1, because the array2 has the value of array1.
// So, if we change the value of array1, then the changing in the array1, does not change its pointer location in the stack, then if we print the array2, it prints with that changing, because the array2 has the same address as array1.