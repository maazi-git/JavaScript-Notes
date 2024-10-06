//          Intro to Objects
// objects are the reference types
// arrays are good, but not sufficient for real world data
// objects store key value pairs
// objects don't have index.


//          how to create objects
//  We use curly brace for making Objects.
// key value pair is anyting which we use as a key, like name, address etc, and the colon : in the last like name:
//keys are also called properties, keys are written in the form of string in javascript.
const person = {
    "name":"Maaz",   //we can use string or without string
    age:19,
    hobbies: ["running", "sleeping", "coding"] 
    };
 // it is an object, but we can also called it an object literals, we can also add an array in the keys of an object.
console.log(typeof person)
console.log(person)



//          how to acces data from objects
// we can acces data from object by using the object name and then put a "." and then the key name
// person.name

console.log(person.name)
console.log(person.age)
console.log(person["name"]) // method 2
console.log(person.hobbies)
// we can use this key as our simple array, and we can apply all the methods of array on this object.
person.hobbies.push("gaming");
console.log(person.hobbies)


//          how to add key value pairs to objects
person.gender = "male";
// person["gender"] = "male";  second method

console.log(person)

// NOTE: Second method is very useful, which is very useful, u touch that method in next step, file no: 37~