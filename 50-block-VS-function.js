//    Block Scope Vs Funtion Scope


//    let and cont are block scope
//    Var is funtion scope.


//                       Block Scope
// Blocks in javascript are like as {}

// block 1
{
    let variable1 = "hello from variable1";
    console.log(variable1);
}

// block 2
{
    let variable1 = "hello from variable2";
    console.log(variable1);
}
let variable1 = "hello from variable3";
console.log(variable1); // this is in global scope, main scope.

// all the variables in the blocks are different.
// if let and const are in the block, we can access these only on that block, we cannot use these variables outside the block.


//                          Funtion Scope
// We can acces the var in the block or outside the block, this can be accessed in the global, main function scope.


//                      In real World

if(true){
    let firstname = "Maaz";
    console.log(firstname);
    var lastname = "Haider";
    console.log(lastname);
}
// console.log(firstname) we cannot acces the let or const outside its block.

console.log(lastname)  // we can access the var outside the block.


