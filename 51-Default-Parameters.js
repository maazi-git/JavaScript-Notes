//          Default Parameters
// Default parameters are used when we don't give the second argument in the function call, if we give both the values in the call, then the default paramerters will not work, and the engine accepts the value in the call, if any value is missing, then the engine use the default parameters.

    // adding default parameter before ES16

function addTwo(a,b){
    if(typeof b === "undefined"){
        b=1;
    }
    return a+b;
}
let ans = addTwo(1);
console.log(ans)

    //  new method

function addtwo(a,b=1){
    return a+b;
}
let ans2 = addtwo(1);
console.log(ans2)