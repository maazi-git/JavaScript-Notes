//                          Functions 
// This is function deceleartion!
// In simple words, function does the work for us.

function SingaSong(){
    console.log("Happy Birthday to you.....");
    console.log("Wish you the best wishes..");
}
// this a function, but this will not in working now, we only made this according to  our needs, we have to call, invoke, run, the function to do the coresponding work.
//      call    =   invoke  =   run 

SingaSong(); // function called
// we can call the function anywhere in the program.


function twoPlusFour(){
    console.log(2+4);
}
twoPlusFour();

// we can reuturn the function 

function twoPlusTen(){
    return 2+10;
}  
// now, i can print this return value
console.log(twoPlusTen());

// Or, i can save this return value in the variable or const.
const returnedValue = twoPlusTen();
console.log(returnedValue);


// Now, I have to make the re-usable function.


//                    parameters or var
function SumTwoNumbers(number1, number2){
    return number1 + number2;
}
// it means that the function has two variables, number1 or number2.

console.log(SumTwoNumbers(4,5));

//Now, when we call the function, than we can assign the value to the parameters in the parantheses, and then it will work, 
// By using this method, our funtion is re-usable and we can re-use this funtion anywhere in our program.
//When we pass the value to the parameters, then this value is called the arguments.
const returnedValue2 = SumTwoNumbers(5,5);
console.log(returnedValue2)     //re-used.


//                      NaN
const notreturnedValue = SumTwoNumbers();
console.log(notreturnedValue)  
// if i don,t pass any value or argument to the parameters then it will show NaN (Not A Number) , because sum of two undefined values is NaN.
console.log(undefined+undefined) //  = NaN


// Now, i have to make the funtion which sums three values.

function SumThreeValues(value1, value2, value3){
    console.log(value1 + value2 + value3) ;
}
SumThreeValues(1,2,3);

SumThreeValues(1,2); // this shows NaN, because we did not pass the argument to the value3, so, value3 is undefined.



//                  Function examples

                // is even function 
// input: any 1 number
// output: true if even and false if odd

// function isEven(number){
//     if(number %2===0){
//         console.log("It is true")
//     }else{console.log("Your number is wrong!")}
// }
 
// small way 
function isEven(number){
    return number %2===0
}

console.log(isEven(99));


// make function which will give us the first character of the word 
function firstCh(string){
    return string[0]
}
console.log(firstCh("Maazi"))

// Finding a target in an array, and tells the index number of the target, if it is present in an array!

function findTarget(Array, Target){
    for(let i=0; i<Array.length; i++){
        if(Array[i] ===Target){
            return i
        }
    }return -1
}
console.log(findTarget([1,2,3,4,5,6], 4))

//Again
function findcar(cars,target){
    for(let i = 0; i < cars.length; i++){
        if(cars[i] === target){
            return cars[i]
        }
    }console.log("Cannot find your car!")
}
console.log(findcar(["Mercedes","BMW","Audi","Ferrari","Lexus"], "BMW"))