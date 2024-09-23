// if
// else if
// else if
// else if
// else



// let temperature = 25;

// if (temperature > 45){
//     console.log("it's too hot!")
// }else if(temperature > 35){
//     console.log("little bit hot outside")
// }else if(temperature > 25){
//     console.log("summer is coming")
// }else if(temperature > 15){
//     console.log("lovely weather outside")
// }else if(temperature > 5){
//     console.log("it's too cold")
// }else{
//     console.log("I'm freezed")
// }


                // Game Selectors 

// let age = +prompt("Write your age plz")

// if(age >= 18){
//     console.log("You can play PUBG, GTA 5, Forza Horizon!")
// }else if(age > 16){
//     console.log("You can play free fire and Asphalt 8")
// }else if(age > 14){
//     console.log("You can play traffic rider or 8 ball pool!")
// }else if(age > 12){
//     console.log("You can play Temple Run 3 or Shadow Ninja 2!")
// }else if(age > 10){
//     console.log("You can play Subway Surfers or Racing fever")
// }else if(age > 8){
//     console.log("You can play talking tom and bella!")
// }else{
//     console.log("You might watch t.v or youtube!")
// }
// console.log("enjoy your game plz")


            // Day Teller program 
// let day = +prompt("day number please!");

// if(day === 0){
//     console.log("Sunday");
// }else if(day === 1){
//     console.log("Monday")
// }else if(day === 2){
//     console.log("Tuesday")
// }else if(day === 3){
//     console.log("Wednesday")
// }else if(day === 4){
//     console.log("Thursday")
// }
// else if(day === 5){
//     console.log("Friday")
// }else if(day === 6){
//     console.log("Saturday")
// }else{
//     console.log("invalid day")
// }




let CarCategory= prompt("Choose the car category.");
let yourage= +prompt("Write your age");

if(CarCategory=="jdm" && yourage>=20){
    console.log(`you can drive ${CarCategory}, but be carefull!`)
}else if(CarCategory=="Classic" && yourage>=20){
    console.log(`you can drive ${CarCategory}, amazing category!`)
}else if(CarCategory=="Hyper" && yourage>=28){
    console.log(`Be carfull Sir, it will blow your mind.`)
}else if(CarCategory=="SUV" && yourage>=22){
    console.log(`${CarCategory}, the luxurious and comfort, all in one!`)
}else if(CarCategory=="Sports" && yourage>=25){
    console.log(`you can drive ${CarCategory}, but drive slow!`)
}else if(CarCategory=="Sedan" && yourage>=18){
    console.log(`${CarCategory} is the best family car, drive it with your family in long routes!`)
}else{
    console.log("Sorry Sir, your choice is not available, we have amazing cars here, you can choose from them!")
}