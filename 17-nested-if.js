// Nested If 

    // number guess game 
// winning number 19
// 19 your guess is right 
// 16 too low
// 20 too high 

let winningNumber = 20;
let userGuess = +prompt("Guess a number.")

if(userGuess === winningNumber){
    console.log("Your guess is right")
}else{
    if(userGuess < winningNumber){
        console.log("too low")
    }else{
        console.log("too high!")
    }
}



let CarCategory= "classic";
let yourage= "30";

if(CarCategory=="jdm" && yourage>=22){
    console.log(`you can drive ${CarCategory}.`)
}else{
    if(CarCategory= "classic" && yourage>=22){
        console.log("you can drive the classic")
    }else{
        console.log("This car is not available.")
    }
}
