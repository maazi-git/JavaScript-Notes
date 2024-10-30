//                      Functions-returning-functions
// It is also called high order function.

function myfunc(){
    function hello(){
        return "Hello world"
    }
    return hello;
}
let ans = myfunc();
let ans2 = ans();
console.log(ans2)



// one more
function let1(){
    function let2(){
        // console.log("Hello World")
        return "Hello world"
    }
    return let2;
}
let let3 = let1();
let let4 =let3();
console.log(let4)

// one more 

function me1(){
    function me2(){
        return "Hello world"
    }
    return me2;
}
let means = me1();
let means1 = means();
console.log(means1)


