//                      Function Expression
// In function expression, we will assign the funcion in the varianle.
// This is also called anonymous functions, but the name of the variable is also used as the name of the function.


//                      declaration
function SingatheSong(){
    console.log("Happy Birthday to you.....");
}
//                      expression
let SingaSong = function(){
    console.log("Happy Birthday to you.....");
}
SingaSong();
// Both are same, we can call it anywhere in the program.

// add two numbers
let twoPlusFour = function(number1, number2){
    return number1+number2
}
let anstwoplusfour = twoPlusFour(2,4);
console.log(anstwoplusfour)


// subtract two numbers
let addTwonumbers = function(number1,number2){
    return number1 - number2;
}
let ANSaddtwonumbers = addTwonumbers(5,5);
console.log(ANSaddtwonumbers)

// multily three numbers
let multiplythreenums = function(num1,num2,num3){
    return num1*num2*num3
}
let ANSmultiplythreenums = multiplythreenums(1,2,3);
console.log(ANSmultiplythreenums)

// isEven 
let isEven = function(number){
    return number % 2===0;
}
console.log(isEven(1));

let isEvenans1 = isEven(22);
console.log(isEvenans1)

let isEvenans2 = isEven(33);
console.log(isEvenans2)


// print first character
let firstCh = function(word){
    return word[0]
}
let firstchANS= firstCh("Malik");
console.log(firstchANS)

// finding target in an array

let finder = function(array, target){
    for(let i = 0; i<array.length; i++){
        if(array[i] === target){
            return i
        }
    }
}
console.log(finder([1,2,3,4,5],3)) // or i can save answer
let finderANS = finder([1,2,3,4,5],3);
console.log(finderANS)