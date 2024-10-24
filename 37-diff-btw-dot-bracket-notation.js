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



//                             ReUNINON

let TOP_G = {
    Name : "Andrew Tate",
    Address : "UAE, Dubai",
    "Car Collection" : ["Buggati Chiron", "Aston Martin", "BMW M5", "Mclaren P5", "Ferrai F18", "Mercedes Maybach"]
}
let BannedCountry = "Banned from";
TOP_G[BannedCountry] = "Banned from Romania and USA"
console.log(TOP_G)

console.log(TOP_G.Name);
console.log(TOP_G.Address);
console.log(TOP_G["Car Collection"]);

    //  iterate a for loop on a Car Collection of TOP_G
for (i=0; i<TOP_G["Car Collection"].length;i++){
    console.log(TOP_G["Car Collection"][i])
}

