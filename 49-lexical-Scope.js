//                  Lexical Scope

let outer = () => {
    let inner1 = () => {
        console.log("Hello from the inner1")
    }
    let inner2 = (num1,num2) => {
        console.log(num1 + num2);
    }
    let inner3 = (val1,val2) => {
        console.log(val1-val2);
    }
    console.log("Hello from the outer function")
    inner1();
    inner3(6,5);
    inner2(5,5);
}
outer();