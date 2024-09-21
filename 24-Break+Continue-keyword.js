        // Break Keyword.
// when we use break keyword, the loop execution stops and the control jumps outside the loop, and starts executing the program after the loop.

for(let i = 0; i<=10; i++){
    if(i===4){
        break;
    }
console.log(i);
}
console.log("This is printed after jump through break in the loop!")

        // Continue Keyword.
// When we use the continue keyword, the current execution of statement skips and the control jumps to the next statement of the program!

for(let n = 0; n<=10; n++){
    if(n===4){
        continue;
    }
console.log(n);
}

