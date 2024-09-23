
        // While Loop or its example
// So, we have to print numbers from 0 to 9, 

// i++  is increment
// i-- is decrement 
// the coding principle, don't repeat yourself

// let i = 0;
// console.log(i)
// i++;
// console.log(i)
// i++;
// console.log(i)
// i++;
// console.log(i)
// i++;
// console.log(i)


// we dont need to write the same code again and again~
// While loop is used for this purpose.

let num = 0;

while(num<=10){
    console.log(num);
    num++;
}
console.log(`your current value is ${num}`)



                    // while loop example!

    // // formula of NATURAL  Numbers 
    // let num= 100;
    // // (num*(num+1))/2;
    // total = (num*(num+1))/2;
    // console.log(total);

let total = 0;
let i = 0;
let maxNum=100;
while(i<=maxNum){
    total = total + i;
    i++;
}
console.log(total)

// total= total + 1
// total= total + 2
// total= total + 3
// total= total + 4
// total= total + 5
// total= total + 6
// total= total + 7
// total= total + 8
// total= total + 9
// total= total + 10

// So, we take the numbers as i, then i++
// total = total + i   i is 1
// total = 1 + i   i is 2
// total = 3 + i   i is 3
// total = 6 + i   i is 4
// total = 10 + i   i is 5
// total = 15 + i   i is 6
// total = 21 + i   i is 7
// total = 28 + i   i is 8
// total = 36 + i   i is 9
// total = 45 + i   i is 10
// total = 55

