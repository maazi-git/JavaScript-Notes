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
for(let keys in person){
//     console.log(keys);  // for only key names
//     console.log(person[keys]);  // for key values
    // console.log(`${keys} : ${person[keys]}`) only string
    console.log(keys, " : ", person[keys])
}


//                  Second Method
// Object.keys(person)
// console.log(Object.keys(person)); 
// // it will give us the array, and we can use this in the for of loop.
// // Array.isArray(Object.keys(person))
// const val = Array.isArray(Object.keys(person));
// console.log(val)

// for(let keys of Object.keys(person)){
//     console.log(keys , " : ", person[keys])
// }




let TOP_G = {
    Name : "Andrew Tate",
    Address : "UAE, Dubai",
    "Car Collection" : ["Buggati Chiron", "Aston Martin", "BMW M5", "Mclaren P5", "Ferrai F18", "Mercedes Maybach"]
}

console.log(TOP_G)

//                          for in loop
for (let gs in TOP_G){
    console.log(gs , ":", TOP_G[gs])
}  // gs for keynames , TOP_G[gs] for key values



//                 object.keys method in FOR OF loop
Object.keys(TOP_G)
console.log(Object.keys(TOP_G))

for (let keys of Object.keys(TOP_G)){
    console.log(keys, ":", TOP_G[keys])
}