//      Hoisting

newone();
function newone(){
    console.log("Function declaration")
}
// The function declaration can be used before the funtion, this behavior of function declaration is called hoisting
// but we cannot do this in the case of function expression and in arrrow functions.
