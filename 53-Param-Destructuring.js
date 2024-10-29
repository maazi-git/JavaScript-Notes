//                      Paramters Destructuring
// Used in objects and also in REACT.JS


const person = {
    name : "Maaz",
    gender : "Male",
    age : 19,
}

// function printdetails(obj){
//     console.log(person.name)
//     console.log(person.age)
// }

function printdetails({name,gender,age}){
    console.log(name)
    console.log(gender)
    console.log(age)
}

printdetails(person);