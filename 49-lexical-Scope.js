//                  Lexical Scope



function main(){
    var myvar = "Hi from myvar";

    function inner1(){
        // var myvar = "bye from myvar";
        console.log("hi from inner2", myvar)
    }
    // if i remove the variable from upper function, then when we call the function, the javascript engine check it in the lexical enviornmet, which means that the inner1 function lies in the main function, so, i will print the myvar, which is on the top of the function. If i move that myvar in the function to the outside the function, then the engine will check that the main function lies in the global enviornment and print that variable with the function.

    const inner2 = function(){};
    let inner3 = () => {}

    console.log(myvar);
    inner1();
}

main();