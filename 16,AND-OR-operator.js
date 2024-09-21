// AND &&  or OR Operator 



// AND && operator is used to perform 2 operations combined together, It is true when both the conditions are true, otherwise it will be false
// true true = true
// false true = false
// true false = false
// false false = false

let firstname= "Maaz";
let age= 19;
if (firstname[0] === "M" && age>=18){
    console.log("You can do it")
}else{
    console.log("u cannot do it")
}


                // OR Operator ||
// it is also used as like as AND operator, but in OR operation, if one of the condition is true, and the other is false, then it will be true, it will false only when the both conditions are false, otherwise, it will be true
// true true = true
// false true = true
// true false = true
// false false = false

let lastname= "Haider";
let myage= 19;
if (lastname[0] === "H" || myage>=18){
    console.log("You can do it")
}else{
    console.log("u cannot do it")
}

