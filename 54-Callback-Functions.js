//                  Callback Functions
// It is also called high order function.
// It means calling the function inside another funciton
// We can accept a function as an input and call it, inside  a function
function myfunc2(name){
    console.log(`My name is ${name}`)
}

function myfunc1(callback){
    console.log("I am function 1");
    callback("Maazi");
}

myfunc1(myfunc2);


function malik1(callback){
    callback("Maazi")
}

function malik2(name){
    console.log(`My name is ${name}`)
}
malik1(malik2);