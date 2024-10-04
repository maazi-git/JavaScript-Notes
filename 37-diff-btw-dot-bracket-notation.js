//          Difference between dot and bracket notation.

const key = "email";
const person = {
    "name":"Maaz",   
    age:19,
    "person hobbies": ["running", "sleeping", "coding"] 
};
// console.log(person.person hobbies) ..We cannot access such type of key with this method. So, we have to use the bracket notation.
console.log(person["person hobbies"]);

//we have to get the value of the const key,and add it in the person object, so
// person["key"] = "maazi5172@gmail.com"  // remove strings
person[key] = "maazi5172@gmail.com";
console.log(person)