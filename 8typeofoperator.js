// typeof operator
// typeof operator tells us about the data type 


// NOTE: We have data types in javascript for example  PRIMITIVE Data Types
//  string "maazi" or "hello-world" 
//  numbers like 2 ,5.8  etc 
//  Booleans 
//  undefined
//  null 
//  bigInt
// symbol 

    // use of typeof operator

    let age =22;
    let myname="Maazi"

    console.log(typeof age);

     console.log(typeof myname); 
    //   u can also write the string value
    //  console.log(typeof "Maazi");


// convert number to string 

                // way 1
age= String(age);
console.log(typeof age)

                // way 2  TRICK
// if you want to convet your data type from number to string then simply add the string with it !
age = 22 + "";
console.log(typeof age);


// convert string to number 

                // way 1
myname= Number(myname);
console.log(typeof myname)

                // way 2TRICK
// from string to number you have to add simply + before the string . 
myname= +"myname";
console.log(typeof myname)