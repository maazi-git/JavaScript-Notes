// for loop in array 

let fruits = ["apple", "mango", "bannana", "peach"]

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}



let fruits2 = [];
for(i = 0 ; i < fruits.length; i++){
    fruits2.push(fruits[i].toUpperCase())
}
console.log(fruits2)