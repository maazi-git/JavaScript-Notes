//          Rest Parameters
// The rest parameters ... are used when, we need to use the remaining parameters in the form of an array.

function printthese(a,b,...c){
    console.log(`A is ${a}`);
    console.log(`B is ${b}`);
    console.log(`C is ${c}`);
    console.log(`C is`, c);
}
printthese("General","Asim","Munir","Army","Cheif","Pakistan");


// add all numbers with rest parameters 
 function adall(...numbers){
    console.log(numbers)
    console.log(Array.isArray(numbers)) 
    let total = 0;
    for(let number of numbers){
        total = total + number;
        
    }console.log(total)
 }
 adall(1,2,3,4,5)


 // one more
 function eddall(...values){
    let total = 0;
    for(let value of values){
        total = total + value;
    }console.log(total)
 }
 eddall(2,2,2,2,2)