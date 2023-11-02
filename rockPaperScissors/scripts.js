let btnR = document.getElementById("rock-el");
let btnP = document.getElementById("paper-el");
let btnS = document.getElementById("scissors-el");
let playerChoice = " ";
let hand = " ";
let playerTxt = document.getElementById("playerOne-el");
let computerTxt = document.getElementById("computer-el");
let finalTxt = document.getElementById("final-el");
btnR.addEventListener("click", function() {
    playerChoice = "rock"
    computerPick();
}) 
btnP.addEventListener("click", function() {
    playerChoice ="paper"
    computerPick();
})
btnS.addEventListener("click", function() {
    playerChoice="scissor"
    computerPick();
})
let hands = ["rock","paper","scissor"];
function computerPick() {
let computerPick = Math.floor(Math.random() *3) ;
hand = hands[computerPick];
loadGame();
}
function loadGame() {
    console.log(hand);
console.log(playerChoice);
playerTxt.textContent = "You pick: "+playerChoice;
computerTxt.textContent = "Computer pick: "+hand
    if(hand === "scissor" && playerChoice === "rock"){
        console.log("You win");
        finalTxt.textContent = "Result: You win"
    }else if (hand === "scissor" && playerChoice ==="paper") {
        console.log("You lose");
        finalTxt.textContent = "Result: Computer win"
    }else if (hand ==="scissor" && playerChoice === "scissor"){
        console.log("Tie");
        finalTxt.textContent = "Result: Tie"
    }
        if(hand === "rock" && playerChoice === "rock"){
            console.log("Tie");
            finalTxt.textContent = "Result: Tie"
        }else if (hand === "rock" && playerChoice ==="paper") {
            console.log("You win");
            finalTxt.textContent = "Result: You win"
        }else if (hand ==="rock" && playerChoice === "scissor"){
            console.log("You lose");
            finalTxt.textContent = "Result: Computer win"
        }
        if(hand === "paper" && playerChoice === "rock"){
            console.log("You lose");
            finalTxt.textContent = "Result: Computer win"
        }else if (hand === "paper" && playerChoice ==="paper") {
            console.log("Tie");
            finalTxt.textContent = "Result: Tie"
        }else if (hand ==="paper" && playerChoice === "scissor"){
            console.log("You win");
            finalTxt.textContent = "Result: You win"
        }
    }
