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
