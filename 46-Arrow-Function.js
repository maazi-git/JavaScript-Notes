//                  Arrow Function
// Arrow function are important in JavaScript, and it is also used in react.js.
// In arrow function, if we have need only one argrument, then we can remove the parameters braces.

//                  Function expression
let SingtheSong = function(){
    console.log("Happy Birthday to you.....");
}
//                  Arrow Function
let SingaSong = () => {
    console.log("Happy Birthday to you.....");
}
SingaSong();


// add two numbers
let twoPlusFour = (number1, number2) => {
    return number1+number2
}
let anstwoplusfour = twoPlusFour(2,4);
console.log(anstwoplusfour)

// subtract two numbers

let addTwonumbers = (number1,number2) => number1 - number2;
let ANSaddtwonumbers = addTwonumbers(5,5);
console.log(ANSaddtwonumbers)

//divide two numbers
let divide = (num1,num2) => num1 / num2;
console.log(divide(10,2))


// multily three numbers
let multiplythreenums = (num1,num2,num3) => num1*num2*num3;
let ANSmultiplythreenums = multiplythreenums(1,2,3);
console.log(ANSmultiplythreenums)


// isEven 

let isEven = number => number % 2 === 0;
console.log(isEven(1));

let isEvenans1 = isEven(22);
console.log(isEvenans1)

let isEvenans2 = isEven(33);
console.log(isEvenans2)



// print first character

let firstCh = word => word[0]
let firstchANS= firstCh("Malik");
console.log(firstchANS)

// finding target in an array

let finder = (array, target) => {
    for(let i = 0; i<array.length; i++){
        if(array[i] === target){
            return i
        }
    }
}
console.log(finder([1,2,3,4,5],3)) // or i can save answer
let finderANS = finder([1,2,3,4,5],3);
console.log(finderANS)

//                               !1
// First in Function declaration 
            function addthese(num1,num2){
                return num1+num2;
            }
            let add1 = addthese(5,5);
            console.log(add1)

// Second in Function Expression
            let addthese2 = function(num1,num2){
                return num1 + num2
            }
            console.log(addthese2(5,5))

// Third in Arrow Function
            let addthese3 = (num1,num2) => num1+num2;
            console.log(addthese3(10,10))

//                              !2

// First in Function declaration 
                    function equalthis1(val1,val2){
                        return val1 === val2;
                    }
                    let addequalthis1 = equalthis1(10,10);
                    console.log(addequalthis1)

// Second in Function expression
                let equalthis2 = function(val1,val2){
                    return val1 === val2;
                }
                let addequalthis2 = equalthis2(20,10);
                console.log(addequalthis2)

//Third in Arrow Function.
                let equalthis3 = (val1,val2) => val1 === val2;
                console.log(equalthis3(5,5));