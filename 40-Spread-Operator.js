//                  Spread Operator

// in Arrays 
let array1 = [1,2,3];
let array2 = [4,5,6];

let array3 = [...array1, ...array2,7, 8];
console.log(array3);
let newarray = [..."abc"];
// let newarray = [...12345]; this is wrong, it can't be iterate
console.log(newarray);

// in Objects

const obj1 = {
    key1 : "value1",
    key2 : "value2"
}
const obj2 = {
    key1 : "value of key1",
    key3 : "value3",
    key4 : "value4"
}

// in one object, we can use one key at one time, so if we combine the two objects with spread operator, then the latest added key is used.

const newObj = {...obj1, ...obj2, key5 : "value5"}
console.log(newObj)

const keyval = {..."abc"};
console.log(keyval); //so, it became key value pair, and the elements index number bacame its key, e.x {0 : a}


const thisarray = {...["item1","item2"]}
console.log(thisarray) // { 0 : "item1" }

// this is also used in the problem solving 
let alphabets = {..."abcdefghijklmnopqrstuvwxyz"}
console.log(alphabets); // this will position the alphabets according to the index numbers.




let friend1 = {
    name1 : "Zain",
    age1 : 18
}
console.log(friend1)
let friend2 = {
    name2 : "Shukran",
    age2 : 19
}
console.log(friend2)
let friend3 = {
    name3 : "Ahtisham",
    age3 : 17
}
console.log(friend3);

let myfriends = {...friend1, ...friend2, ...friend3, Note: "These are my best friends!"}
console.log(myfriends)
