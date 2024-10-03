//                  How to iterate objects

const person = {
    "name":"Maaz",   
    age:19,
    "person hobbies": ["running", "sleeping", "coding"] 
}

// we use two methods to iterate objects, 
// for in loop 
// Object.keys 


//                  first method
// for(let keys in person){
// //     console.log(keys);  // for only key names
// //     console.log(person[keys]);  // for key values
// //     console.log(`${keys} : ${person[keys]}`)
        // console.log(keys, " : ", person[keys])
// }


//                  Second Method
// Object.keys(person)
// console.log(Object.keys(person)); 
// // it will give us the array, and we can use this in the for of loop.
// // Array.isArray(Object.keys(person))
// const val = Array.isArray(Object.keys(person));
// console.log(val)


//                  Third Method

// for(let keys of Object.keys(person)){
//     console.log(keys , " : ", person[keys])
// }